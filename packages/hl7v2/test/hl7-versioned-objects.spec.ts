import { expect } from 'expect';
import {
  type HL7DataTypeObject,
  HL7Error,
  HL7Message,
  type HL7SegmentObject,
  MSHSegment,
} from '../src/index.js';

/** Compile-time check: true only when A and B are the same type */
type Equal<A, B> =
  (<X>() => X extends A ? 1 : 2) extends <X>() => X extends B ? 1 : 2
    ? true
    : false;
const assertType = <T extends true>() => undefined as unknown as T;

const ADT25 = [
  'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A01^ADT_A01|1|P|2.5',
  'PID|1||123||Doe^John||19700101|M',
].join('\r');

describe('hl7v2:versioned objects', () => {
  it("should type a message's segments by its version", () => {
    const msg = HL7Message.parse(ADT25, { version: '2.5' });
    const pid = msg.getSegmentObject('PID')!;
    /* 2.5's PID-5 is an XPN - no union with 2.1's PN */
    assertType<
      Equal<
        NonNullable<typeof pid.PatientName>,
        HL7DataTypeObject<'2.5', 'XPN'>[]
      >
    >();
    expect(pid.PatientName?.[0]?.GivenName).toEqual('John');
    /* 2.5's MSH-7 is a TS (an object); 2.6 made it a DTM (a string) */
    const msh = msg.getSegmentObject('MSH')!;
    assertType<
      Equal<
        NonNullable<typeof msh.DateTimeOfMessage>,
        HL7DataTypeObject<'2.5', 'TS'>
      >
    >();
    expect(msh.DateTimeOfMessage).toEqual({ Time: '20250101' });
  });

  it('should leave out what a version withdrew and add what it brought', () => {
    type DG1v26 = HL7SegmentObject<'2.6', 'DG1'>;
    type MSHv25 = HL7SegmentObject<'2.5', 'MSH'>;
    type MSHv29 = HL7SegmentObject<'2.9', 'MSH'>;
    const dg1 = {} as DG1v26;
    // @ts-expect-error - DG1-2 (Diagnosis Coding Method) is withdrawn in 2.6
    expect(dg1.DiagnosisCodingMethod).toBeUndefined();
    const msh29 = {} as MSHv29;
    expect(msh29.SecurityClassificationTag).toBeUndefined();
    const msh25 = {} as MSHv25;
    // @ts-expect-error - MSH-26 came in 2.9
    expect(msh25.SecurityClassificationTag).toBeUndefined();
  });

  it('should type by the version a new message is made in', () => {
    const msg = new HL7Message('2.7');
    msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A01');
    msg.set('PID-5-1', 'Doe');
    const pid = msg.getSegmentObject('PID')!;
    assertType<Equal<typeof pid, HL7SegmentObject<'2.7', 'PID'>>>();
    expect(pid.PatientName?.[0]?.FamilyName).toEqual({ Surname: 'Doe' });
  });

  it('should refuse a message of another version', () => {
    expect(() => HL7Message.parse(ADT25, { version: '2.7' })).toThrow(HL7Error);
    /* 2.5.2 is read with 2.5.1's definitions, so it is a 2.5.1 message */
    const msg = HL7Message.parse(ADT25.replace('|2.5', '|2.5.2'), {
      version: '2.5.1',
    });
    expect(msg.version).toEqual('2.5.2');
  });

  it('should type an untyped message with asVersion()', () => {
    const msg = HL7Message.parse(ADT25);
    /* untyped: the union of every version */
    expect(msg.getSegmentObject('PID')!.PatientName).toBeDefined();
    expect(msg.hasVersion('2.5')).toBe(true);
    expect(msg.hasVersion('2.7')).toBe(false);
    const pid = msg.asVersion('2.5').getSegmentObject('PID')!;
    assertType<Equal<typeof pid, HL7SegmentObject<'2.5', 'PID'>>>();
    expect(pid.SetID).toEqual(1);
    expect(() => msg.asVersion('2.7')).toThrow(HL7Error);
  });
});
