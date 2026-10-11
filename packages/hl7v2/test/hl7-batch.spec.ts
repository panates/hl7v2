import { expect } from 'expect';
import iconv from 'iconv-lite';
import {
  BHSSegment,
  BTSSegment,
  FTSSegment,
  HL7Batch,
  HL7BatchFile,
  HL7Error,
  HL7Message,
  MSHSegment,
} from '../src/index.js';

const msg = (id: string, name = 'Doe') =>
  `MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A08|${id}|P|2.5\rPID|1||${id}||${name}`;

const FILE = [
  'FHS|^~\\&|LAB|HOSP|EHR|HOSP|20250101||file1',
  'BHS|^~\\&|LAB|HOSP|EHR|HOSP|20250101||batch1',
  msg('M1'),
  msg('M2'),
  'BTS|2',
  'BHS|^~\\&|LAB|HOSP|EHR|HOSP|20250101||batch2',
  msg('M3'),
  'BTS|1',
  'FTS|2',
].join('\r');

/* BTS-1 is an ST in the standard, FTS-1 an NM: one count reads back as text, the other as a number */
describe('hl7v2:batch', () => {
  describe('parse()', () => {
    it('should read a file of batches', () => {
      const file = HL7BatchFile.parse(FILE);
      expect(file.header!.segmentType).toEqual('FHS');
      expect(file.header!.field(9).getValue()).toEqual('file1');
      expect(file.batches.length).toEqual(2);
      expect(file.batches[0].header!.field(9).getValue()).toEqual('batch1');
      expect(file.batches[0].messages.map(m => m.controlId)).toEqual([
        'M1',
        'M2',
      ]);
      expect(
        file.batches[1].trailer!.field(BTSSegment.BatchMessageCount).getValue(),
      ).toEqual('1');
      expect(file.trailer!.field(FTSSegment.FileBatchCount).getValue()).toEqual(
        2,
      );
      expect(file.messages.map(m => m.get('PID-3'))).toEqual([
        'M1',
        'M2',
        'M3',
      ]);
    });

    it('should read a batch without a file, and bare messages', () => {
      const batch = HL7BatchFile.parse(
        ['BHS|^~\\&|LAB', msg('M1'), msg('M2'), 'BTS|2'].join('\r'),
      );
      expect(batch.header).toBeUndefined();
      expect(batch.batches.length).toEqual(1);
      expect(batch.messages.length).toEqual(2);
      /* messages one after another, segments split by LF */
      const bare = HL7BatchFile.parse(
        [msg('M1'), msg('M2'), msg('M3')].join('\r').replace(/\r/g, '\n'),
      );
      expect(bare.batches.length).toEqual(1);
      expect(bare.batches[0].header).toBeUndefined();
      expect(bare.messages.map(m => m.controlId)).toEqual(['M1', 'M2', 'M3']);
    });

    it('should read the delimiters the header declares', () => {
      const file = HL7BatchFile.parse(
        'FHS#$*@%#LAB$X\rMSH#$*@%#######ADT$A08#M1#P#2.5\rPID#1##A|B\rFTS#0',
      );
      expect(file.header!.field(3).getValue(2)).toEqual('X');
      expect(file.messages[0].get('PID-3')).toEqual('A|B');
    });

    it('should decode a Buffer in the first message character set', () => {
      const text = FILE.replace(
        'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A08|M1|P|2.5',
        'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A08|M1|P|2.5||||||8859/9',
      ).replace('PID|1||M1||Doe', 'PID|1||M1||Şahin');
      const file = HL7BatchFile.parse(iconv.encode(text, 'latin5'));
      expect(file.messages[0].get('PID-5')).toEqual('Şahin');
    });

    it('should read a batch carried in an MLLP frame', () => {
      const file = HL7BatchFile.parse('\x0b' + FILE + '\x1c\r');
      expect(file.messages.length).toEqual(3);
    });

    it('should refuse a segment outside a message', () => {
      expect(() => HL7BatchFile.parse('BHS|^~\\&\rPID|1\rBTS|0')).toThrow(
        HL7Error,
      );
    });
  });

  describe('writing', () => {
    it('should write what it read', () => {
      expect(HL7BatchFile.parse(FILE).toHL7String()).toEqual(FILE + '\r');
    });

    it('should count messages and batches itself', () => {
      const file = HL7BatchFile.create();
      const batch = HL7Batch.create();
      for (const id of ['A', 'B', 'C']) {
        const m = new HL7Message('2.5');
        m.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08');
        m.set('PID-3', id);
        batch.messages.push(m);
      }
      file.batches.push(batch, HL7Batch.create());
      const read = HL7BatchFile.parse(file.toHL7String());
      expect(read.batches.map(b => b.messages.length)).toEqual([3, 0]);
      expect(
        read.batches[0].trailer!.field(BTSSegment.BatchMessageCount).getValue(),
      ).toEqual('3');
      expect(read.trailer!.field(FTSSegment.FileBatchCount).getValue()).toEqual(
        2,
      );
      expect(
        read.batches[0]
          .header!.field(BHSSegment.BatchCreationDateTime)
          .getDate(),
      ).toBeInstanceOf(Date);
    });

    it('should encode in the first message character set', () => {
      const file = HL7BatchFile.parse(
        FILE.replace(
          '|P|2.5\rPID|1||M1||Doe',
          '|P|2.5||||||8859/9\rPID|1||M1||Şahin',
        ),
      );
      const buf = file.toBuffer();
      expect(iconv.decode(buf, 'latin5')).toContain('Şahin');
    });
  });
});
