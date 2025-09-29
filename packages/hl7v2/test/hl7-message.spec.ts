import { expect } from 'expect';
import {
  HL7Message,
  HL7MessageNode,
  HL7Segment,
  HL7Version,
} from '../src/index.js';

describe('hl7v2:HL7Message', () => {
  const sampleMessage1 =
    `MSH|^~\\&|LCS|LCA|LIS|TEST9999|20250823000600.0000+0300||ORU^R01|3629|P|2.2
PID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924000000|M|||^^^^00000-0000|||||||86427531^^^03|SSN# HERE
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|1|8642753100012^LIS|20809880170^LCS|008342^UPPER RESPIRATORY CULTURE^L|||19980727175800||||||SS#634748641 CH14885 SRC:THROA SRC:PENI|19980727000000||||||20809880170||19980730041800||BN|F
OBX|1|ST|008342^UPPER RESPIRATORY CULTURE^L||FINALREPORT|||||N|F|||199807291605|BN
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|2|8642753100012^LIS|20809880170^LCS|997602^.^L|||199807271758||||G|||19980727||||||20809880170||19980730041800|||F|997602|||008342
OBX|2|CE|997231^RESULT 1^L||M415|||||N|F|||199807291605|BN
NTE|1|L|MORAXELLA (BRANHAMELLA) CATARRHALIS
NTE|2|L|HEAVY GROWTH
NTE|3|L|BETA LACTAMASE POSITIVE
OBX|3|CE|997232^RESULT 2^L||MR105|||||N|F|||199807291605|BN
NTE|1|L|ROUTINE RESPIRATORY FLORA
`.replace(/\n|\r\n/g, '\r');

  it('should create HL7Message with given version', () => {
    let msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual(HL7Version.v2_7_1);
    expect(msg.version).toEqual(HL7Version.v2_7_1);
    expect(msg.header.field(12).getValue()).toEqual('2.7.1');

    msg = new HL7Message(HL7Version.v2_5_1);
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual(HL7Version.v2_5_1);
    expect(msg.dictionary.version).toEqual(HL7Version.v2_5_1);
    expect(msg.header.field(12).getValue()).toEqual('2.5.1');
  });

  it('should create HL7Message with given nearest version when given version not found', () => {
    const msg = new HL7Message('2.9');
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual('2.9');
    expect(msg.header.field(12).getValue()).toEqual('2.9');
    expect(msg.dictionary.version).toEqual(HL7Version.v2_8);
  });

  it('should add segment', () => {
    const msg = new HL7Message(HL7Version.v2_8);
    msg.addSegment('PID');
    expect(msg.segments.length).toEqual(2);
    expect(msg.segments[0].segmentType).toEqual('MSH');
    expect(msg.segments[1].segmentType).toEqual('PID');
  });

  it('should get segment by segment type and index', () => {
    const msg = new HL7Message(HL7Version.v2_8);
    msg.addSegment('PID');
    const obr1 = msg.addSegment('OBR');
    const obr2 = msg.addSegment('OBR');
    expect(msg.getSegment('OBR')).toBe(obr1);
    expect(msg.getSegment('OBR', 0)).toBe(obr1);
    expect(msg.getSegment('OBR', 1)).toBe(obr2);
  });

  it('should convert to HL7 string', () => {
    const msg = new HL7Message();
    msg.header.field(7).setValue(new Date('2025-03-12T14:32:22'));
    const controlId = msg.header.field(10).getValue();
    expect(msg.toHL7String()).toEqual(
      `MSH|^~\\&|||||20250312143222|||${controlId}||2.7.1||||||UTF-8\r`,
    );
  });

  it('should convert to HL7 string', () => {
    const msg = HL7Message.parse(sampleMessage1);
    const tree = msg.buildStructureTree();
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(HL7MessageNode);
    expect(tree.name).toEqual('ORU_R01');
    expect(tree.items.length).toEqual(2);
    expect(tree.items[0]).toBeInstanceOf(HL7Segment);
    expect((tree.items[0] as HL7Segment).segmentType).toEqual('MSH');
    expect(tree.items[1]).toBeInstanceOf(HL7MessageNode);
    expect((tree.items[1] as HL7MessageNode).name).toEqual('PATIENT_RESULT');
  });
});
