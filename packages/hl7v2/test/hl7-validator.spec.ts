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
      expect(errors[0]).toMatchObject({ segmentSequence: 2, severity: 'E' });
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
      expect(errors[0].segmentSequence).toEqual(4);
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
    expect(nak.getSegment('ERR')!.toHL7String()).toEqual('ERR||PID^2^3|101|E');
  });
});
