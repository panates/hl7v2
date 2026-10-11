import { expect } from 'expect';
import { HL7Message, parseHL7Path } from '../src/index.js';

const ORU = [
  'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ORU^R01^ORU_R01|1|P|2.5',
  'PID|1||123^^^HOSP^MR~456^^^STATE^SS||Doe^John^Q||19700101|M',
  'OBR|1||ORD1|CBC^Blood count',
  'OBX|1|NM|WBC||7.2|10*3/uL|||||F',
  'OBX|2|NM|RBC||4.5|10*6/uL|||||F',
  'OBR|2||ORD2|BMP^Basic metabolic panel',
  'OBX|1|NM|NA||140|mmol/L|||||F',
].join('\r');

describe('hl7v2:path', () => {
  const msg = () => HL7Message.parse(ORU);

  describe('get()', () => {
    it('should read fields, components and repetitions', () => {
      const m = msg();
      expect(m.get('PID-5-1')).toEqual('Doe');
      expect(m.get('PID-5-2')).toEqual('John');
      /* a field: its first component, as Terser reads it */
      expect(m.get('PID-5')).toEqual('Doe');
      expect(m.get('PID-3(1)-1')).toEqual('456');
      expect(m.get('PID-3(1)-4')).toEqual('STATE');
      expect(m.get('MSH-9-2')).toEqual('R01');
    });

    it('should count segment occurrences from 0, in the whole message', () => {
      const m = msg();
      expect(m.get('OBX-3')).toEqual('WBC');
      expect(m.get('OBX(1)-3')).toEqual('RBC');
      expect(m.get('OBX(2)-3')).toEqual('NA');
      expect(m.get('OBX(3)-3')).toBeUndefined();
    });

    it('should go through the structure groups', () => {
      const m = msg();
      const second = '/PATIENT_RESULT/ORDER_OBSERVATION(1)';
      expect(m.get(`${second}/OBR-4-2`)).toEqual('Basic metabolic panel');
      expect(m.get(`${second}/OBSERVATION/OBX-3`)).toEqual('NA');
      expect(
        m.get('/PATIENT_RESULT/ORDER_OBSERVATION(0)/OBSERVATION(1)/OBX-5'),
      ).toEqual('4.5');
      /* a group is found by its name in any version */
      expect(m.get('/RESPONSE/ORDER_OBSERVATION(1)/OBR-3')).toEqual('ORD2');
      expect(
        m.get('/PATIENT_RESULT/ORDER_OBSERVATION(5)/OBR-3'),
      ).toBeUndefined();
    });

    it('should read a sub-component', () => {
      const m = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5\rPID|1||123^^^HOSP&1.2.3&ISO',
      );
      expect(m.get('PID-3-4-2')).toEqual('1.2.3');
    });
  });

  describe('set()', () => {
    it('should set values and keep the rest', () => {
      const m = msg();
      m.set('PID-5-2', 'Jane').set('PID-3(1)-1', '789');
      expect(m.getSegment('PID')!.field(5).toHL7String()).toEqual('Doe^Jane^Q');
      expect(m.getSegment('PID')!.field(3).toHL7String()).toEqual(
        '123^^^HOSP^MR~789^^^STATE^SS',
      );
      m.set('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBSERVATION/OBX-5', 141);
      expect(m.get('OBX(2)-5')).toEqual(141);
    });

    it('should add the next occurrence of a segment', () => {
      const m = new HL7Message();
      m.set('PID-5-1', 'Doe').set('NTE-3', 'first').set('NTE(1)-3', 'second');
      expect(m.segments.map(s => s.segmentType)).toEqual([
        'MSH',
        'PID',
        'NTE',
        'NTE',
      ]);
      expect(() => m.set('NTE(5)-3', 'x')).toThrow('No segment');
      expect(() => m.set('/PATIENT/PID-5', 'x')).toThrow('No segment');
    });
  });

  it('should refuse a malformed path', () => {
    for (const path of ['', 'PID-', 'PID-x', 'PID-0', 'pid-5', 'PID-5-1-1-1']) {
      expect(() => parseHL7Path(path)).toThrow('Invalid HL7 path');
    }
    expect(parseHL7Path('/A(1)/B/OBX(2)-5(1)-3-2')).toEqual({
      groups: [
        { name: 'A', index: 1 },
        { name: 'B', index: 0 },
      ],
      segment: 'OBX',
      segmentIndex: 2,
      field: 5,
      repetition: 1,
      component: 3,
      subComponent: 2,
    });
  });
});
