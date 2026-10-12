import { expect } from 'expect';
import {
  HL7Message,
  type MSHObject,
  type PIDObject,
  type XPNObject,
} from '../src/index.js';

const ADT = [
  'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A01^ADT_A01|1|P|2.5',
  'PID|1||123^^^HOSP&1.2.3&ISO^MR~456^^^STATE^SS||Doe^John^Q||19700101|M',
  'ZPI|a|b',
].join('\r');

describe('hl7v2:objects', () => {
  it('should give a segment as an object keyed by field names', () => {
    const pid = HL7Message.parse(ADT).getSegmentObject('PID')!;
    expect(pid).toEqual({
      SetID: 1,
      PatientIdentifierList: [
        {
          IDNumber: '123',
          AssigningAuthority: {
            NamespaceID: 'HOSP',
            UniversalID: '1.2.3',
            UniversalIDType: 'ISO',
          },
          IdentifierTypeCode: 'MR',
        },
        {
          IDNumber: '456',
          AssigningAuthority: { NamespaceID: 'STATE' },
          IdentifierTypeCode: 'SS',
        },
      ],
      PatientName: [
        {
          FamilyName: { Surname: 'Doe' },
          GivenName: 'John',
          SecondAndFurtherGivenNamesOrInitialsThereof: 'Q',
        },
      ],
      DateTimeOfBirth: { Time: '19700101' },
      AdministrativeSex: 'M',
    });
    /* typed: the compiler knows PID's fields */
    const name = pid.PatientName?.[0] as XPNObject;
    expect(name.GivenName).toEqual('John');
    // @ts-expect-error - PID has no such field; checked by `tsc` on the tests
    expect(pid.NoSuchField).toBeUndefined();
  });

  it('should key fields no enum names by their number', () => {
    expect(HL7Message.parse(ADT).getSegment('ZPI')!.toObject()).toEqual({
      '1': 'a',
      '2': 'b',
    });
  });

  it('should set fields from an object', () => {
    const msg = HL7Message.parse(ADT);
    const pid = msg.getSegment('PID')!;
    pid.assign<PIDObject>({
      PatientName: [{ FamilyName: { Surname: 'Roe' }, GivenName: 'Jane' }],
      AdministrativeSex: 'F',
    });
    expect(pid.toHL7String()).toEqual(
      'PID|1||123^^^HOSP&1.2.3&ISO^MR~456^^^STATE^SS||Roe^Jane||19700101|F',
    );
  });

  it('should round-trip a segment through its object', () => {
    const msg = HL7Message.parse(ADT);
    const copy = new HL7Message('2.5');
    const pid = copy
      .addSegment('PID')
      .assign(msg.getSegment('PID')!.toObject());
    expect(pid.toHL7String()).toEqual(msg.getSegment('PID')!.toHL7String());
  });

  it('should write null as HL7 null and clear on undefined', () => {
    const pid = HL7Message.parse(ADT).getSegment('PID')!;
    pid.assign({ AdministrativeSex: null, SetID: undefined });
    expect(pid.toHL7String()).toMatch(/^PID\|\|\|123.*\|""$/);
    expect(pid.toObject().AdministrativeSex).toBeNull();
  });

  it('should skip MSH-1 and MSH-2, and refuse an unknown name', () => {
    const msg = HL7Message.parse(ADT);
    msg.header.assign<MSHObject>({ SendingApplication: 'APP' } as MSHObject);
    expect(msg.header.toHL7String()).toMatch(/^MSH\|\^~\\&\|APP\|HOSP/);
    expect(() => msg.header.assign({ NoSuchField: 'x' })).toThrow(
      'Unknown field or component "NoSuchField"',
    );
  });

  describe('VARIES fields', () => {
    const QBP = [
      'MSH|^~\\&|AiViewVS||||20230711182226||QBP^Q22^QBP_Q22|f3|T|2.7',
      'QPD|PatientInfo_Query|20230711182226|@PID.3.1^{2232}',
    ].join('\r');
    const ORU = [
      'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ORU^R01^ORU_R01|1|P|2.5',
      'OBX|1|CWE|1^a||A^Alpha^L~B^Beta^L||||||F',
      'OBX|2|NM|2^b||7.5||||||F',
      'OBX|3|ST|3^c||5 mg \\S\\ 2||||||F',
      'OBX|4|XXX|4^d||x^y&z||||||F',
    ].join('\r');

    it('should give components by position when the type is not known', () => {
      const qpd = HL7Message.parse(QBP).getSegment('QPD')!;
      expect(qpd.toObject().UserParameters).toEqual({
        1: '@PID.3.1',
        2: '{2232}',
      });
      const out = new HL7Message('2.7');
      out.addSegment('QPD').assign(qpd.toObject());
      expect(out.getSegment('QPD')!.toHL7String()).toEqual(
        'QPD|PatientInfo_Query|20230711182226|@PID.3.1^{2232}',
      );
    });

    it("should name an OBX-5's components by OBX-2's type", () => {
      const [cwe, nm, st, unknown] = HL7Message.parse(ORU)
        .segments.filter(s => s.segmentType === 'OBX')
        .map(s => s.toObject());
      expect(cwe.ObservationValue).toEqual([
        { Identifier: 'A', Text: 'Alpha', NameOfCodingSystem: 'L' },
        { Identifier: 'B', Text: 'Beta', NameOfCodingSystem: 'L' },
      ]);
      /* One value: text, unescaped */
      expect(nm.ObservationValue).toEqual(['7.5']);
      expect(st.ObservationValue).toEqual(['5 mg ^ 2']);
      /* A type the version does not define: by position */
      expect(unknown.ObservationValue).toEqual([
        { 1: 'x', 2: { 1: 'y', 2: 'z' } },
      ]);
    });

    it('should round-trip VARIES fields through objects', () => {
      const msg = HL7Message.parse(ORU);
      for (const obx of msg.segments.filter(s => s.segmentType === 'OBX')) {
        const copy = new HL7Message('2.5').addSegment('OBX');
        copy.assign(obx.toObject());
        expect(copy.toHL7String()).toEqual(obx.toHL7String());
      }
    });

    it('should read OBX-2 before OBX-5, whatever the order given', () => {
      const obx = new HL7Message('2.5').addSegment('OBX');
      obx.assign({
        ObservationValue: [{ Identifier: 'A', Text: 'Alpha' }],
        ValueType: 'CWE',
      });
      expect(obx.toHL7String()).toEqual('OBX||CWE|||A^Alpha');
    });
  });
});
