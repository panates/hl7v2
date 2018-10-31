/* eslint-disable */
const assert = require('assert');
const {HL7Message} = require('../');
const {VT, FS, CR} = require('../lib/types');

const sampleMessage1 = `MSH|^~\\&|LCS|LCA|LIS|TEST9999|19980731153200||ORU^R01|3629|P|2.2
PID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924000000|M|||^^^^00000-0000|||||||86427531^^^03|SSN# HERE
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|1|8642753100012^LIS|20809880170^LCS|008342^UPPER RESPIRATORY CULTURE^L|||19980727175800||||||SS#634748641 CH14885 SRC:THROA SRC:PENI|19980727000000||||||20809880170||19980730041800||BN|F
OBX|1|ST|008342^UPPER RESPIRATORY CULTURE^L||FINALREPORT|||||N|F|||19980729160500|BN
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|2|8642753100012^LIS|20809880170^LCS|997602^.^L|||19980727175800||||G|||19980727000000||||||20809880170||19980730041800|||F|997602|||008342
OBX|2|CE|997231^RESULT 1^L||M415|||||N|F|||19980729160500|BN
NTE|1|L|MORAXELLA (BRANHAMELLA) CATARRHALIS
NTE|2|L|HEAVY GROWTH
NTE|3|L|BETA LACTAMASE POSITIVE
OBX|3|CE|997232^RESULT 2^L||MR105|||||N|F|||19980729160500|BN
NTE|1|L|ROUTINE RESPIRATORY FLORA
`;

describe('Parse HL7 message', function() {

  it('should parse HL7 strings', function() {
    const msg = HL7Message.parse('MSH|^~\\&|A');
    assert(msg.MSH);
    assert.equal(msg.MSH.SendingApplication.value, 'A');
  });

  it('should parse sub components', function() {
    const msg = HL7Message.parse('MSH|^~\\&|A^B^C^D');
    assert.equal(msg.MSH.SendingApplication.value, 'A');
    assert.equal(msg.MSH.SendingApplication[0].value, 'A');
    assert.equal(msg.MSH.SendingApplication[0][1].value, 'A');
    assert.equal(msg.MSH.SendingApplication[0][2].value, 'B');
    assert.equal(msg.MSH.SendingApplication[0][3].value, 'C');
    assert.equal(msg.MSH.SendingApplication[0][4].value, 'D');
  });

  it('should parse number fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532|||||2.2|1234');
    assert(msg.MSH);
    assert.equal(msg.MSH.SequenceNumber.value, 1234);
  });

  it('should parse Date Time fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532|||||2.2');
    assert(msg.MSH);
    assert.deepEqual(msg.MSH.DateTimeOfMessage.value, new Date(1998, 6, 31, 15, 32, 0));
  });

  it('should parse Date fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.5\r' +
        'AL1|1|||||20151231');
    const seg = msg.getSegment('AL1');
    assert.deepEqual(seg.IdentificationDate.value, new Date(2015, 11, 31));
  });

  it('should parse Time fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.5\r' +
        'TQ1||||134523');
    const seg = msg.getSegment('TQ1');
    assert.deepEqual(seg.ExplicitTime.value, new Date(0, 0, 0, 13, 45, 23));
  });

  it('should parse escaped characters', function() {
    const msg = HL7Message.parse('MSH|^~\\&|\\F\\\\S\\\\R\\\\E\\\\T\\abcd\\U\\|\\c65\\\\M015f\\\\M0000\\||||||||2.2|1234');
    assert(msg.MSH);
    assert.equal(msg.MSH.SendingApplication.value, '|^~\\&abcdU');
    assert.equal(msg.MSH.SendingFacility.value,
        'e' + String.fromCharCode(0x15f) + String.fromCharCode(0));

  });

  it('should parse hex field', function() {
    const msg = HL7Message.parse('MSH|^~\\&|\\x01020304\\');
    assert(msg.MSH);
    assert(msg.MSH.SendingApplication.value instanceof Buffer);
    assert.deepEqual(msg.MSH.SendingApplication.value, Buffer.from('01020304', 'hex'));
  });

  it('should parse repeated values', function() {
    const msg = HL7Message.parse('MSH|^~\\&|A~B~C');
    assert.equal(msg.MSH.SendingApplication.value, 'A');
    assert.equal(msg.MSH.SendingApplication[0].value, 'A');
    assert.equal(msg.MSH.SendingApplication[1].value, 'B');
    assert.equal(msg.MSH.SendingApplication[2].value, 'C');
  });

  it('should get segments', function() {
    const msg = HL7Message.parse(sampleMessage1);
    assert.equal(msg.segments[0].type, 'MSH');
    assert.equal(msg.segments[1].type, 'PID');
    assert.equal(msg.segments[2].type, 'ORC');
    assert.equal(msg.segments[3].type, 'OBR');
    assert.equal(msg.segments[4].type, 'OBX');
    assert.equal(msg.segments[5].type, 'ORC');
    assert.equal(msg.segments[5].index, 5);
    assert.equal(msg.getSegment('OBR', 1)[1].value, 2);
  });

  it('should init v2.1 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.1');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'ContinuationPointer');
  });

  it('should init v2.2 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.2');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'CountryCode');
  });

  it('should init v2.3 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.3');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'PrincipalLanguageOfMessage');
  });

  it('should init v2.3.1 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.3.1');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'AlternateCharacterSetHandlingScheme');
  });

  it('should init v2.4 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.4');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'ConformanceStatementId');
  });

  it('should init v2.5 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.5');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'MessageProfileIdentifier');
  });

  it('should init v2.5.1 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.5.1');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'MessageProfileIdentifier');
  });

  it('should init v2.6 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.6');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'ReceivingNetworkAddress');
  });

  it('should init v2.7 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.7');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'ReceivingNetworkAddress');
  });

  it('should init v2.7.1 fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.7.1');
    assert(msg.MSH);
    assert.equal(msg.MSH.fields[msg.MSH.fields.length - 1].name,
        'ReceivingNetworkAddress');
  });

  it('should parse VT-msg-FS', function() {
    let msg = HL7Message.parse(VT + 'MSH|^~\\&||||||||||2.7.1' + FS);
    assert(msg.MSH);
    msg = HL7Message.parse(VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
    assert(msg.MSH);
  });

  it('should parse from Buffer', function() {
    let buf = Buffer.from(VT + 'MSH|^~\\\\&||||||||||2.5||||||UTF-8' + FS + CR);
    let msg = HL7Message.parse(buf);
    assert(msg.MSH);
    assert.equal(msg.MSH.CharacterSet.value, 'UTF-8');
    buf = Buffer.from(VT + 'MSH|^~\\\\&||||||||||2.5||||||UTF-8|' + FS);
    msg = HL7Message.parse(buf);
    assert(msg.MSH);
    assert.equal(msg.MSH.CharacterSet.value, 'UTF-8');
  });

  it('should message start with MSH segment', function() {
    try {
      HL7Message.parse('PID|');
    } catch (e) {
      if (e.message.includes('Message must start with'))
        return;
      throw  e;
    }
  });

  it('should not parse unknown segments', function() {
    try {
      HL7Message.parse('MSH|^~\\&||||||||||2.7.1\r' +
          'PDD|');
    } catch (e) {
      if (e.message.includes('Unknown HL7 segment'))
        return;
      throw  e;
    }
  });

  it('should provide line# and segment type on parse error', function() {
    try {
      HL7Message.parse('MSH|^~\\&||||||||||2.5\r' +
          'PDD|');
    } catch (e) {
      assert.equal(e.line, 2);
      assert.equal(e.segmentId, 'PDD');
    }
  });

  it('should provide sequence on parse error', function() {
    try {
      HL7Message.parse('MSH|^~\\&||||||||||2.5\r' +
          'PID|1||||||ABCD');
    } catch (e) {
      assert.equal(e.line, 2);
      assert.equal(e.segmentId, 'PID');
      assert.equal(e.sequence, 1);
      assert.equal(e.fieldPosition, 8);
      assert.equal(e.repetition, 1);
      assert.equal(e.component, 1);
    }
  });

  it('should add fields if values exceeds dictionary fields', function() {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.1||||||1234');
    assert(msg.MSH);
    assert.equal(msg.MSH.CustomField18.value, 1234);
  });

});