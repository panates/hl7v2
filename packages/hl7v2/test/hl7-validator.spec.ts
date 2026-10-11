import { expect } from 'expect';
import { HL7Error, HL7Message } from '../src/index.js';

const MSH = 'MSH|^~\\&|A|B|C|D|20250101||ADT^A01^ADT_A01|1|P|2.5';
const VALID = [MSH, 'EVN||20250101', 'PID|1||123||Doe^John', 'PV1|1|I'];

function validate(segments: string[], options?: object) {
  return HL7Message.parse(segments.join('\r')).validate(options);
}

const summary = (errors: HL7Error[]) =>
  errors.map(
    e =>
      `${e.hl7ErrorCode} ${e.segmentType ?? '-'}` +
      `${e.fieldPosition ? '-' + e.fieldPosition : ''}` +
      `${e.componentPosition ? '.' + e.componentPosition : ''}`,
  );

describe('hl7v2:validate', () => {
  it('should find nothing wrong in a valid message', () => {
    expect(validate(VALID)).toEqual([]);
  });

  describe('fields', () => {
    it('should report a missing required field (101)', () => {
      const errors = validate([MSH, 'EVN||20250101', 'PID|1', 'PV1|1|I']);
      expect(summary(errors)).toEqual(['101 PID-3', '101 PID-5']);
      /* ERL-2: the first PID - its occurrence, from 1 */
      expect(errors[0]).toMatchObject({ segmentSequence: 1, severity: 'E' });
    });

    it('should locate a segment by its occurrence, and repetitions from 1 (ERL)', () => {
      const msg = HL7Message.parse(
        [
          MSH,
          'EVN||20250101',
          'PID|1||123||Doe',
          'NK1|1',
          'NK1',
          'PV1|1|I',
        ].join('\r'),
      );
      const errors = msg.validate();
      expect(summary(errors)).toEqual(['101 NK1-1']);
      expect(errors[0].segmentSequence).toEqual(2);
      const nak = msg.createNak([
        new HL7Error('Bad identifier', {
          hl7ErrorCode: 102,
          segmentType: 'PID',
          segmentSequence: 1,
          fieldPosition: 3,
          repetitionIndex: 1,
        }),
      ]);
      /* ERL-4 counts repetitions from 1: the second is 2 */
      expect(nak.getSegment('ERR')!.toHL7String()).toEqual(
        'ERR||PID^1^3^2|102^Data type error^HL70357^^^^^^Bad identifier|E',
      );
    });

    it("should put the first error's text in MSA-3, an ERR for each", () => {
      const msg = HL7Message.parse(
        [MSH, 'EVN||20250101', 'PID|1', 'PV1|1|I'].join('\r'),
      );
      const nak = msg.createNak(msg.validate());
      expect(nak.get('MSA-3')).toEqual(
        'PID-3 (Patient Identifier List) is required',
      );
      expect(nak.segments.filter(s => s.segmentType === 'ERR').length).toEqual(
        2,
      );
    });

    it('should keep a number not in NM form as written, and report it', () => {
      const pv1 = (charges: string) =>
        HL7Message.parse(
          [
            MSH,
            'EVN||20250101',
            'PID|1||123||Doe',
            `PV1|1|I${'|'.repeat(45)}${charges}`,
          ].join('\r'),
        );
      /* A decimal comma is not twelve */
      const comma = pv1('12,5');
      expect(comma.get('PV1-47')).toEqual('12,5');
      expect(comma.toHL7String()).toContain('|12,5');
      expect(summary(comma.validate())).toEqual(['102 PV1-47']);
      for (const bad of ['12a', '1e3', '0x10']) {
        expect(summary(pv1(bad).validate())).toEqual(['102 PV1-47']);
      }
      expect(pv1('-007.50').get('PV1-47')).toEqual(-7.5);
      /* Beyond what a JavaScript number holds exactly: the text */
      expect(pv1('12345678901234567890').get('PV1-47')).toEqual(
        '12345678901234567890',
      );
      /* SI: a non-negative integer */
      const si = HL7Message.parse(
        [MSH, 'EVN||20250101', 'PID|-1||123||Doe', 'PV1|1|I'].join('\r'),
      );
      expect(summary(si.validate())).toEqual(['102 PID-1']);
    });

    it('should check OBX-5 as the type OBX-2 names', () => {
      const oru = (obx: string) =>
        HL7Message.parse(
          [
            'MSH|^~\\&|A|B|C|D|20250101||ORU^R01^ORU_R01|1|P|2.5',
            'PID|1||1||X',
            'OBR|1|||CBC',
            obx,
          ].join('\r'),
        ).validate();
      expect(summary(oru('OBX|1|NM|X||12,5||||||F'))).toEqual(['102 OBX-5']);
      expect(summary(oru('OBX|1|TM|X||25:61||||||F'))).toEqual(['102 OBX-5']);
      expect(summary(oru('OBX|1|DT|X||2025-01-01||||||F'))).toEqual([
        '102 OBX-5',
      ]);
      expect(summary(oru('OBX|1|TS|X||2025x||||||F'))).toEqual(['102 OBX-5.1']);
      expect(oru('OBX|1|NM|X||-12.50||||||F')).toEqual([]);
      expect(oru('OBX|1|ST|X||any text||||||F')).toEqual([]);
    });

    it('should take a field set to an empty string as missing', () => {
      const msg = HL7Message.parse(VALID.join('\r'));
      msg.header.field(10).setValue('');
      msg.set('PID-3-1', '');
      expect(msg.header.field(10).isEmpty()).toBe(true);
      expect(summary(msg.validate())).toEqual(['101 MSH-10', '101 PID-3']);
    });

    it('should report a missing required component of a present field', () => {
      /* In 2.7 CX.1 (ID Number) and CX.5 (Identifier Type Code) are required */
      const errors = validate([
        MSH.replace('|2.5', '|2.7'),
        'EVN||20250101',
        'PID|1||^^^HOSP||Doe',
        'PV1|1|I',
      ]);
      expect(summary(errors)).toEqual(['101 PID-3.1', '101 PID-3.5']);
    });

    it('should report a value its type cannot read (102)', () => {
      const errors = validate([
        MSH,
        'EVN||20250101',
        'PID|x||123||Doe',
        'PV1|1|I',
      ]);
      expect(summary(errors)).toEqual(['102 PID-1']);
      expect(errors[0].message).toContain('SI');
    });

    it('should report more repetitions than allowed (102)', () => {
      /* PID-1 (Set ID) is not repeatable */
      const errors = validate([
        MSH,
        'EVN||20250101',
        'PID|1~2||123||Doe',
        'PV1|1|I',
      ]);
      expect(summary(errors)).toEqual(['102 PID-1']);
      expect(errors[0].repetitionIndex).toEqual(1);
    });

    it('should report a value longer than the maximum (104)', () => {
      /* MSH-10 (Message Control ID) is at most 20 characters in 2.5 */
      const errors = validate([
        MSH.replace(
          '||ADT^A01^ADT_A01|1|',
          '||ADT^A01^ADT_A01|' + 'X'.repeat(21) + '|',
        ),
        ...VALID.slice(1),
      ]);
      expect(summary(errors)).toEqual(['104 MSH-10']);
    });
  });

  describe('structure', () => {
    it('should report a missing required segment (100)', () => {
      const errors = validate([MSH, 'EVN||20250101', 'PID|1||123||Doe']);
      expect(summary(errors)).toEqual(['100 PV1']);
      expect(errors[0].message).toContain('required PV1 missing');
    });

    it('should report a segment out of place (100)', () => {
      const errors = validate([...VALID, 'OBR|1|||CBC']);
      expect(summary(errors)).toEqual(['100 OBR']);
      expect(errors[0].segmentSequence).toEqual(1);
    });

    it('should let Z segments through', () => {
      expect(validate([...VALID, 'ZPI|1|x'])).toEqual([]);
    });

    it('should not ask for the required segments of an absent group', () => {
      /* ORU_R01's PATIENT group (PID required) is optional itself */
      const errors = validate([
        'MSH|^~\\&|A|B|C|D|20250101||ORU^R01^ORU_R01|1|P|2.5',
        'OBR|1|||CBC',
        'OBX|1|NM|WBC||7.2||||||F',
      ]);
      expect(summary(errors)).toEqual([]);
    });

    it('should accept one alternative of a choice', () => {
      /* ORM_O01: ORC, then one of OBR, RQD, RQ1, RXO, ODS, ODT */
      const errors = validate([
        'MSH|^~\\&|A|B|C|D|20250101||ORM^O01^ORM_O01|1|P|2.5',
        'PID|1||123||Doe',
        'ORC|NW|1',
        'RXO|^Aspirin',
      ]);
      expect(summary(errors).filter(e => e.startsWith('100'))).toEqual([]);
    });
  });

  it('should check only what is asked', () => {
    const segments = [MSH, 'EVN||20250101', 'PID|1'];
    expect(summary(validate(segments, { structure: false }))).toEqual([
      '101 PID-3',
      '101 PID-5',
    ]);
    expect(summary(validate(segments, { fields: false }))).toEqual(['100 PV1']);
  });

  it('should give errors a NAK carries', () => {
    const msg = HL7Message.parse([MSH, 'EVN||20250101', 'PID|1'].join('\r'));
    const nak = msg.createNak(msg.validate());
    expect(nak.segments.filter(s => s.segmentType === 'ERR').length).toEqual(3);
    expect(nak.getSegment('ERR')!.toHL7String()).toEqual(
      'ERR||PID^1^3|101^Required field missing^HL70357^^^^^^PID-3 (Patient Identifier List) is required|E',
    );
  });

  describe('tables', () => {
    const adt = (pid: string) =>
      HL7Message.parse(
        [MSH, 'EVN||20250101', pid, 'PV1|1|I'].join('\r'),
      ).validate({ tables: true });

    it('should report a code not in its HL7 table (103), when asked', () => {
      /* MSH-11.1 is an ID of table 0103 (Processing ID): D, P, T */
      const errors = HL7Message.parse(
        [MSH.replace('|P|2.5', '|X|2.5'), ...VALID.slice(1)].join('\r'),
      ).validate({ tables: true });
      /* MSH-11 is a PT; its first component the ID */
      expect(summary(errors)).toEqual(['103 MSH-11.1']);
      expect(errors[0].message).toContain('table 0103 (Processing ID)');
      /* off by default */
      expect(
        HL7Message.parse(
          [MSH.replace('|P|2.5', '|X|2.5'), ...VALID.slice(1)].join('\r'),
        ).validate(),
      ).toEqual([]);
    });

    it("should leave an IS field's site-defined table alone", () => {
      /* PID-8 (Administrative Sex) is an IS of user-defined table 0001 */
      expect(adt('PID|1||123||Doe|||Z')).toEqual([]);
    });

    it('should take codes a site adds to a table', () => {
      const msg = HL7Message.parse(
        [MSH.replace('|P|2.5', '|X|2.5'), ...VALID.slice(1)].join('\r'),
      );
      const dict = msg.dictionary.extend({
        tables: { 103: { values: { X: 'Experimental' } } },
      });
      (msg as any)._dictionary = dict;
      expect(msg.validate({ tables: true })).toEqual([]);
      expect(dict.tableValue(103, 'X')).toEqual('Experimental');
      /* the shared table is not touched */
      expect(
        HL7Message.parse(MSH).dictionary.tableValue(103, 'X'),
      ).toBeUndefined();
    });
  });
});
