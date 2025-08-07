import { expect } from 'expect';
import {
  ABSSegment,
  AL1Segment,
  ARQSegment,
  CM_MSGType,
  HL7Message,
  HL7Version,
  MSHSegment,
} from '../src/index.js';

const sampleMessage1 =
  `MSH|^~\\&|LCS|LCA|LIS|TEST9999|199807311532||ORU^R01|3629|P|2.2
PID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924|M|||^^^^00000-0000|||||||86427531^^^03|SSN# HERE
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727|||HAVILAND
OBR|1|8642753100012^LIS|20809880170^LCS|008342^UPPER RESPIRATORY CULTURE^L|||199807271758||||||SS#634748641 CH14885 SRC:THROA SRC:PENI|19980727||||||20809880170||199807300418||BN|F
OBX|1|ST|008342^UPPER RESPIRATORY CULTURE^L||FINALREPORT|||||N|F|||199807291605|BN
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727|||HAVILAND
OBR|2|8642753100012^LIS|20809880170^LCS|997602^.^L|||199807271758||||G|||19980727||||||20809880170||199807300418|||F|997602|||008342
OBX|2|CE|997231^RESULT 1^L||M415|||||N|F|||199807291605|BN
NTE|1|L|MORAXELLA (BRANHAMELLA) CATARRHALIS
NTE|2|L|HEAVY GROWTH
NTE|3|L|BETA LACTAMASE POSITIVE
OBX|3|CE|997232^RESULT 2^L||MR105|||||N|F|||199807291605|BN
NTE|1|L|ROUTINE RESPIRATORY FLORA
`.replace(/\n|\r\n/g, '\r');

describe('hl7v2:serialize', () => {
  it('should serialize number', function () {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ARQ');
    seg.field(ARQSegment.OccurrenceNumber).setValue(1234);
    expect(seg.toHL7String()).toStrictEqual('ARQ|||1234');
  });

  it('should serialize date', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('AL1');
    seg
      .field(AL1Segment.IdentificationDate)
      .setValue(new Date('2001-01-12T15:30:00'));
    expect(seg.toHL7String()).toStrictEqual('AL1||||||20010112');
  });

  it('should serialize date/time', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ABS');
    seg
      .field(ABSSegment.DateTimeOfAttestation)
      .setValue(new Date('2001-01-12T15:30:00'));
    expect(seg.toHL7String()).toStrictEqual('ABS||||200101121530');
  });

  it('should escape non chars', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ADD');
    seg.field(1).setValue('|^~\\&abc\x09\x10d');
    expect(seg.toHL7String()).toStrictEqual(
      'ADD|\\F\\\\S\\\\R\\\\E\\\\T\\abc\\X0910\\d',
    );
  });

  it('should escape buffer', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ADD');
    seg.field(1).setValue(Buffer.from([9, 10, 32]));
    expect(seg.toHL7String()).toStrictEqual('ADD|\\X090a20\\');
  });

  it('should escape array', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ADD');
    seg.field(1).setValue([9, 10, 32]);
    expect(seg.toHL7String()).toStrictEqual('ADD|\\X090a20\\');
  });

  it('should escape TypedArray', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('ADD');
    seg.field(1).setValue(new Uint8Array([9, 10, 32]));
    expect(seg.toHL7String()).toStrictEqual('ADD|\\X090a20\\');
  });

  it('should serialize repetitions', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.addSegment('PID');
    seg.field(2).setValue('1');
    seg.field(2).add().setValue('2');
    seg.field(2).add().setValue('');
    seg.field(2).add().setValue(null);
    expect(seg.toHL7String()).toStrictEqual('PID||1~2~~""');
  });

  it('should serialize components', () => {
    const msg = new HL7Message(HL7Version.v2_5);
    const seg = msg.header;
    seg.field(MSHSegment.DateTimeOfMessage).setValue(undefined);
    seg.field(MSHSegment.MessageType).setValue('1');
    seg
      .field(MSHSegment.MessageType)
      .component(CM_MSGType.TriggerEvent)
      .setValue('2');
    const controlId = msg.header.field(10).getValue();
    expect(seg.toHL7String()).toStrictEqual(
      `MSH|^~\\&|||||||1^2|${controlId}||2.5||||||UTF-8`,
    );
  });

  it('should serialize complete message', () => {
    const msg = HL7Message.parse(sampleMessage1);
    const s = msg.toHL7String();
    expect(s).toEqual(sampleMessage1);
  });
});
