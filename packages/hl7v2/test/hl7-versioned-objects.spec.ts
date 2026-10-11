import { expect } from 'expect';
import {
  DG1Segment,
  type HL7DataTypeObject,
  HL7Error,
  HL7Field,
  HL7Message,
  HL7Segment,
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

  it("should take only the version's fields in field()", () => {
    const msg = new HL7Message('2.6');
    const dg1 = msg.addSegment('DG1');
    dg1.field(DG1Segment.DiagnosisCodeDG1).setValue('I10');
    dg1.field(3);
    // @ts-expect-error - DG1-2 (Diagnosis Coding Method) is withdrawn in 2.6
    dg1.field(DG1Segment.DiagnosisCodingMethod);
    // @ts-expect-error - by number too
    dg1.field(2);
    // @ts-expect-error - MSH-26 came in 2.9
    new HL7Message('2.5').header.field(26);
    new HL7Message('2.9').header.field(MSHSegment.SecurityClassificationTag);
    expect(msg.get('DG1-3')).toEqual('I10');
  });

  it('should take any field where the version or segment is not typed', () => {
    /* untyped message, a version with no typed objects, a Z segment */
    HL7Message.parse(ADT25).addSegment('DG1').field(2);
    new HL7Message('2.5.2').addSegment('DG1').field(2);
    new HL7Message('2.6').addSegment('ZPI').field(99);
    /* a position known only at run time: the segment untyped */
    const pos: number = 2;
    const seg: HL7Segment = new HL7Message('2.6').addSegment('DG1');
    expect(seg.field(pos).position).toEqual(2);
  });

  it('should assign a typed message where any message is taken', () => {
    const typed = new HL7Message('2.6');
    const messages: HL7Message[] = [
      typed,
      HL7Message.parse(ADT25, { version: '2.5' }),
    ];
    const header: HL7Segment = typed.header;
    expect(messages.length).toEqual(2);
    expect(header.segmentType).toEqual('MSH');
  });

  it("should take only the version's fields in a path", () => {
    const msg = new HL7Message('2.6');
    msg.set('DG1-3-1', 'I10');
    expect(msg.get('DG1-3')).toEqual('I10');
    // @ts-expect-error - "DG1-2 is not a field of DG1 in 2.6"
    msg.set('DG1-2', 'I9');
    // @ts-expect-error - with repetitions, components and groups too
    msg.get('/PATIENT/DG1(1)-2(0)-1-2');
    // @ts-expect-error - MSH-26 came in 2.9
    msg.getDate('MSH-26');
    expect(new HL7Message('2.9').get('MSH-26')).toBeUndefined();
    /* not checked: a path known at run time, an untyped message, a Z segment */
    const path: string = 'DG1-2';
    /* the check is the compiler's: run anyway, the path is read */
    expect(msg.get(path)).toEqual('I9');
    expect(HL7Message.parse(ADT25).get('DG1-2')).toBeUndefined();
    expect(msg.get('ZPI-99')).toBeUndefined();
  });

  it("should take only the components a field's type has in a path", () => {
    const msg = new HL7Message('2.6');
    msg.set('PID-5-1-1', 'Doe').set('PID-5(1)-2', 'Jo');
    msg.set('PID-3(1)-4-2', '1.2.3');
    expect(msg.get('PID-5-1')).toEqual('Doe');
    expect(msg.get('PID-3(1)-4-2')).toEqual('1.2.3');
    // @ts-expect-error - "PID-5: XPN has no component 15 in 2.6"
    msg.get('PID-5-15');
    // @ts-expect-error - "PID-5-1: FN has no component 9 in 2.6"
    msg.get('PID-5-1-9');
    // @ts-expect-error - a primitive's only component is itself
    msg.get('PID-8-2');
    // @ts-expect-error - in groups too
    msg.get('/PATIENT/PID-3-4-9');
    /* OBX-5 is VARIES: any component */
    expect(msg.get('OBX-5-7-3')).toBeUndefined();
    /* MSH-9 became a composite in 2.3 */
    // @ts-expect-error - "MSH-9: ID has no component 3 in 2.1"
    new HL7Message('2.1').get('MSH-9-3');
    expect(new HL7Message('2.5').get('MSH-9-3')).toBeUndefined();
  });

  it("should type a segment's object and its fields' components", () => {
    const msg = new HL7Message('2.6');
    const pid = msg.addSegment('PID');
    pid.assign({
      PatientName: [{ GivenName: 'Ayşe', FamilyName: { Surname: 'Yılmaz' } }],
    });
    // @ts-expect-error - PID has no such field
    expect(() => pid.assign({ NoSuchField: 1 })).toThrow('Unknown field');
    const object = pid.toObject();
    assertType<Equal<typeof object, HL7SegmentObject<'2.6', 'PID'>>>();
    expect(object.PatientName?.[0]?.GivenName).toEqual('Ayşe');

    const name = pid.field(5);
    expect(name.getValue(2)).toEqual('Ayşe');
    name.setValue('Gül', 3);
    // @ts-expect-error - XPN has 14 components in 2.6
    name.getValue(15);
    // @ts-expect-error - in a repetition too
    name.rep(1).comp(15);
    // @ts-expect-error - PID-8 (IS) is a primitive: its only component is 1
    pid.field(8).getValue(2);
    /* OBX-5 is VARIES; an untyped message's fields take any */
    msg.addSegment('OBX').field(5).comp(7);
    HL7Message.parse(ADT25).getSegment('PID')!.field(5).comp(99);
    /* A typed field is still an HL7Field */
    const field: HL7Field = name;
    expect(field.position).toEqual(5);
  });
});
