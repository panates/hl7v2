import { expect } from 'expect';
import { HL7Message, type HL7MessageObject } from '../src/index.js';

const ORU = [
  'MSH|^~\\&|LIS|GHH|EHR|GHH|20250302083000||ORU^R01^ORU_R01|LAB1|P|2.5.1',
  'PID|1||123^^^GHH^MR||Yılmaz^Ayşe',
  'PV1|1|I',
  'OBR|1|ORD1||CBC',
  'OBX|1|NM|WBC||7.2||||||F',
  'OBX|2|NM|HGB||11.1||||||F',
  'NTE|1||Recheck',
  'OBR|2|ORD2||BMP',
  'OBX|1|NM|GLU||132||||||F',
].join('\r');

describe('hl7v2:message objects', () => {
  it('should give a message shaped as its structure', () => {
    const o = HL7Message.parse(ORU, { version: '2.5.1' }).toObject<'ORU_R01'>();
    expect(Object.keys(o)).toEqual(['MSH', 'PATIENT_RESULT']);
    const result = o.PATIENT_RESULT![0];
    expect(result.PATIENT?.PID?.PatientName?.[0]?.GivenName).toEqual('Ayşe');
    expect(result.PATIENT?.VISIT?.PV1?.PatientClass).toEqual('I');
    const orders = result.ORDER_OBSERVATION!;
    expect(
      orders.map(order => order.OBR?.PlacerOrderNumber?.EntityIdentifier),
    ).toEqual(['ORD1', 'ORD2']);
    const observations = orders[0].OBSERVATION!;
    expect(observations.map(x => x.OBX?.ObservationValue)).toEqual([
      ['7.2'],
      ['11.1'],
    ]);
    /* An NTE after an OBX is that observation's */
    expect(observations[1].NTE?.[0]?.Comment).toEqual(['Recheck']);
    // @ts-expect-error - ORU_R01's PATIENT_RESULT has no such group
    expect(result.NO_SUCH_GROUP).toBeUndefined();
  });

  it('should build a message from an object, in the structure order', () => {
    const msg = new HL7Message('2.5.1');
    msg.set('MSH-9', 'ORU').set('MSH-9-2', 'R01').set('MSH-9-3', 'ORU_R01');
    /* Given out of order: written as the structure has it */
    msg.assign<'ORU_R01'>({
      PATIENT_RESULT: [
        {
          ORDER_OBSERVATION: [
            {
              OBSERVATION: [
                { OBX: { SetID: 1, ValueType: 'NM', ObservationValue: ['5'] } },
              ],
              OBR: { SetID: 1 },
            },
          ],
          PATIENT: { PID: { SetID: 1, PatientName: [{ GivenName: 'Ayşe' }] } },
        },
      ],
    });
    expect(msg.segments.map(s => s.segmentType)).toEqual([
      'MSH',
      'PID',
      'OBR',
      'OBX',
    ]);
    expect(
      msg.get('/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION/OBX-5'),
    ).toEqual('5');
  });

  it('should round-trip a message through its object', () => {
    const msg = HL7Message.parse(ORU);
    const copy = HL7Message.parse(ORU.split('\r')[0]);
    copy.assign(msg.toObject());
    expect(copy.toHL7String()).toEqual(msg.toHL7String());
  });

  it('should keep what the structure has no place for, by segment ID', () => {
    const msg = HL7Message.parse(
      [
        'MSH|^~\\&|A|B|C|D|20250101||ADT^A01^ADT_A01|1|P|2.5',
        'EVN|A01',
        'PID|1||1||X',
        'PV1|1|I',
        'ZPI|a|b',
        'ZPI|c',
      ].join('\r'),
    );
    const o = msg.toObject();
    expect(o.ZPI).toEqual([{ 1: 'a', 2: 'b' }, { 1: 'c' }]);
    const copy = HL7Message.parse(msg.header.toHL7String());
    copy.assign(o);
    expect(copy.toHL7String()).toEqual(msg.toHL7String());
  });

  it('should give a message of an unknown structure as its segments', () => {
    const o = HL7Message.parse(
      'MSH|^~\\&|A|B|C|D|20250101||ZZZ^Z01|1|P|2.5\rPID|1||1\rPID|2||2',
    ).toObject();
    expect(o.PID.map((p: any) => p.SetID)).toEqual([1, 2]);
  });

  it('should type by version and structure', () => {
    type ORU251 = HL7MessageObject<'2.5.1', 'ORU_R01'>;
    const o = {} as ORU251;
    expect(o.PATIENT_RESULT).toBeUndefined();
    /* A structure or version not typed: any object */
    const any = {} as HL7MessageObject<'2.5.1', 'NO_SUCH'>;
    expect(any.whatever).toBeUndefined();
    const untyped = HL7Message.parse(ORU).toObject<'ORU_R01'>();
    expect(untyped.PATIENT_RESULT).toBeDefined();
  });
});
