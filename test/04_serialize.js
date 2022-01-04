/* eslint-disable */
const assert = require('assert');
const {HL7Message} = require('../');

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
`.replace(/\n|\r\n/g, '\r');

describe('Serialize message', function() {

  it('should serialize number', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ARQ');
    seg.OccurrenceNumber.value = 1234;
    assert.strictEqual(seg.toHL7(), 'ARQ|||1234');
  });

  it('should serialize date', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('AL1');
    seg.IdentificationDate.value = new Date(2001, 0, 12, 15, 30);
    assert.strictEqual(seg.toHL7(), 'AL1||||||20010112');
  });

  it('should serialize date/time', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ABS');
    seg.DateTimeOfAttestation.value = new Date('2001-01-12T15:30:00Z');
    assert.strictEqual(seg.toHL7(), 'ABS||||20010112153000');
  });

  it('should escape non chars', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ADD');
    seg[1].value = '|^~\\&abc\x09\x10d';
    assert.strictEqual(seg.toHL7(), 'ADD|\\F\\\\S\\\\R\\\\E\\\\T\\abc\\X0910\\d');
  });

  it('should escape buffer', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ADD');
    seg[1].value = Buffer.from([9, 10, 32]);
    assert.strictEqual(seg.toHL7(), 'ADD|\\X090a20\\');
  });

  it('should escape array', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ADD');
    seg[1].value = [9, 10, 32];
    assert.strictEqual(seg.toHL7(), 'ADD|\\X090a20\\');
  });

  it('should escape TypedArray', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('ADD');
    seg[1].value = new Uint8Array([9, 10, 32]);
    assert.strictEqual(seg.toHL7(), 'ADD|\\X090a20\\');
  });

  it('should serialize repetitions', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('PID');
    seg[1].add().value = '1';
    seg[1].add().value = '2';
    seg[1].add().value = '';
    seg[1].add().value = null;
    assert.strictEqual(seg.toHL7(), 'PID|1~2~~');
  });

  it('should serialize components', function() {
    const msg = new HL7Message({version: '2.5'});
    const seg = msg.add('MSH');
    seg.MessageType.value = '1';
    seg.MessageType[0].TriggerEvent.setValue('');
    assert.strictEqual(seg.toHL7(), 'MSH|^~\\&|||||||1^|||2.5');
  });

  it('should serialize complete message', function() {
    const msg = HL7Message.parse(sampleMessage1);
    const s = msg.toHL7();
    assert.strictEqual(s, sampleMessage1);
  });

});
