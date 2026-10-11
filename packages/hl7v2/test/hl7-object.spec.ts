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
});
