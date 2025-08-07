import { expect } from 'expect';
import iconv from 'iconv-lite';
import {
  AL1Segment,
  CR,
  dictionaries,
  FS,
  HL7Error,
  HL7Message,
  HL7Version,
  MSHSegment,
  TQ1Segment,
  VT,
} from '../src/index.js';

const sampleMessage1 =
  `MSH|^~\\&|LCS|LCA|LIS|TEST9999|19980731153200||ORU^R01|3629|P|2.2
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

const lfMarker = '\xff';

const sampleMessageWithLF =
  `MSH|^~\\&|LCS|LCA|LIS|TEST9999|19980731153200||ORU^R01|3629|P|2.2
PID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924000000|M|||^^^^00000-0000|||555-666${lfMarker}x||||86427531^^^03|SSN# HERE
`
    .replace(/\n|\r\n/g, '\r')
    .replace(lfMarker, '\n');

describe('hl7v2:parse', () => {
  it('should parse HL7 strings', () => {
    const msg = HL7Message.parse(
      'MSH|^~\\&|LCS|LCA|LIS|TEST9999|19980731153200||ORU^R01|3629|P|2.2||||||UTF-8',
    );
    expect(msg).toBeDefined();
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual(HL7Version.v2_2);
    expect(msg.header.field(MSHSegment.SendingApplication).getValue()).toEqual(
      'LCS',
    );
    expect(msg.header.field(MSHSegment.SendingFacility).getValue()).toEqual(
      'LCA',
    );
    expect(
      msg.header.field(MSHSegment.ReceivingApplication).getValue(),
    ).toEqual('LIS');
    expect(msg.header.field(MSHSegment.ReceivingFacility).getValue()).toEqual(
      'TEST9999',
    );
    expect(msg.header.field(MSHSegment.MessageControlID).getValue()).toEqual(
      '3629',
    );
    expect(msg.header.field(MSHSegment.ProcessingID).getValue()).toEqual('P');
    expect(msg.header.field(MSHSegment.VersionID).getValue()).toEqual('2.2');
    expect(msg.header.field(MSHSegment.CharacterSet).getValue()).toEqual(
      'UTF-8',
    );
  });

  it('should parse sub components', () => {
    const msg = HL7Message.parse('MSH|^~\\&|A^B^C^D');
    expect(
      msg.header.field(MSHSegment.SendingApplication).component(1).getValue(),
    ).toEqual('A');
    expect(
      msg.header.field(MSHSegment.SendingApplication).component(2).getValue(),
    ).toEqual('B');
  });

  it('should parse null fields', () => {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532|||||2.2|""');
    expect(
      msg.header.field(MSHSegment.SequenceNumber).getValue(),
    ).toStrictEqual(null);
  });

  it('should parse number fields', () => {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532|||||2.2|1234');
    expect(
      msg.header.field(MSHSegment.SequenceNumber).getValue(),
    ).toStrictEqual(1234);
  });

  it('should parse Date Time fields', () => {
    const msg = HL7Message.parse('MSH|^~\\&|||||19980731153200|||||2.5');
    expect(
      msg.header.field(MSHSegment.DateTimeOfMessage).getValue(),
    ).toStrictEqual('199807311532');
  });

  it('should parse Date Time fields with milliseconds', () => {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532.123|||||2.2');
    expect(
      msg.header.field(MSHSegment.DateTimeOfMessage).getValue(),
    ).toStrictEqual('19980731153200.123');
  });

  it('should parse Date Time fields with timezone', () => {
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532.123+0500|||||2.2');
    expect(
      msg.header.field(MSHSegment.DateTimeOfMessage).getValue(),
    ).toStrictEqual('19980731153200.123+0500');
  });

  it('should parse Date fields', () => {
    const msg = HL7Message.parse(
      'MSH|^~\\&||||||||||2.5\r' + 'AL1|1|||||20151231',
    );
    const seg = msg.getSegment('AL1')!;
    expect(seg?.field(AL1Segment.IdentificationDate).getValue()).toEqual(
      '20151231',
    );
  });

  it('should parse Time fields', () => {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.5\r' + 'TQ1||||134523');
    const seg = msg.getSegment('TQ1');
    expect(seg?.field(TQ1Segment.ExplicitTime).getValue()).toEqual('134523');
  });

  it('should parse escaped characters', () => {
    const msg = HL7Message.parse(
      'MSH|^~\\&|\\F\\\\S\\\\R\\\\E\\\\T\\abcd\\U\\|\\c65\\\\M015f\\\\M0000\\||||||||2.2|1234',
    );
    expect(msg.header.field(MSHSegment.SendingApplication).getValue()).toEqual(
      '|^~\\&abcdU',
    );
    expect(
      msg.header.field(MSHSegment.SendingFacility).getValue(),
    ).toStrictEqual('e' + String.fromCharCode(0x15f) + String.fromCharCode(0));
  });

  it('should parse hex field', () => {
    const msg = HL7Message.parse('MSH|^~\\&|\\x01020304\\');
    expect(
      msg.header.field(MSHSegment.SendingApplication).getValue(),
    ).toBeInstanceOf(Buffer);
    expect(
      msg.header.field(MSHSegment.SendingApplication).getValue(),
    ).toStrictEqual(Buffer.from('01020304', 'hex'));
  });

  it('should parse repeated values', () => {
    const msg = HL7Message.parse('MSH|^~\\&|A~B~C');
    expect(
      msg.header.field(MSHSegment.SendingApplication).rep(0).getValue(),
    ).toStrictEqual('A');
    expect(
      msg.header.field(MSHSegment.SendingApplication).rep(1).getValue(),
    ).toStrictEqual('B');
    expect(
      msg.header.field(MSHSegment.SendingApplication).rep(2).getValue(),
    ).toStrictEqual('C');
  });

  it('should parse segments', () => {
    const msg = HL7Message.parse(sampleMessage1);
    expect(msg.segments[0].segmentType).toStrictEqual('MSH');
    expect(msg.segments[1].segmentType).toStrictEqual('PID');
    expect(msg.segments[2].segmentType).toStrictEqual('ORC');
    expect(msg.segments[3].segmentType).toStrictEqual('OBR');
    expect(msg.segments[4].segmentType).toStrictEqual('OBX');
    expect(msg.segments[5].segmentType).toStrictEqual('ORC');
  });

  it('should get segment with LF character in it', () => {
    const msg = HL7Message.parse(sampleMessageWithLF);
    expect(msg.segments[0].segmentType).toStrictEqual('MSH');
    expect(msg.segments[1].segmentType).toStrictEqual('PID');
    expect(msg.segments[1].field(14).getValue()).toStrictEqual('555-666\nx');
  });

  it('should parse VT-msg-FS', () => {
    let msg = HL7Message.parse(VT + 'MSH|^~\\&||||||||||2.7.1' + FS);
    expect(msg.header).toBeDefined();
    msg = HL7Message.parse(VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
    expect(msg.header).toBeDefined();
  });

  it('should parse from Buffer', () => {
    let buf = Buffer.from(VT + 'MSH|^~\\\\&||||||||||2.5||||||UTF-8' + FS + CR);
    let msg = HL7Message.parse(buf);
    expect(msg.header).toBeDefined();
    expect(msg.header.field(MSHSegment.CharacterSet).getValue()).toStrictEqual(
      'UTF-8',
    );
    buf = Buffer.from(
      VT + 'MSH|^~\\\\&||||||||||2.5||||||UTF-8^MULTIBYTE|' + FS,
    );
    msg = HL7Message.parse(buf);
    expect(msg.header).toBeDefined();
    expect(msg.header.field(MSHSegment.CharacterSet).getValue()).toStrictEqual(
      'UTF-8',
    );
  });

  it('should parse from ISO 8859-1 encoded Buffer given encoding', () => {
    const encoding = 'iso-8859-1';
    const buf = iconv.encode(
      VT +
        'MSH|^~\\\\&|APP|Scandinavian facility åäöÅÄÖæøÆØ||||||||2.5||||||iso-8859-1|||' +
        FS +
        CR,
      encoding,
    );
    const msg = HL7Message.parse(buf);
    expect(msg.header).toBeDefined();
    expect(msg.header.field(MSHSegment.CharacterSet).getValue()).toStrictEqual(
      'iso-8859-1',
    );
    expect(
      msg.header.field(MSHSegment.SendingFacility).getValue(),
    ).toStrictEqual('Scandinavian facility åäöÅÄÖæøÆØ');
  });

  it('should check if message starts with MSH segment', () => {
    expect(() => HL7Message.parse('PID|')).toThrow('Message must start with');
  });

  it('should parse unknown segments', () => {
    const msg = HL7Message.parse('MSH|^~\\&||||||||||2.7.1\r' + 'PDD|123');
    const pdd = msg.getSegment('PDD');
    expect(pdd).toBeDefined();
    expect(pdd?.segmentType).toStrictEqual('PDD');
    expect(pdd?.field(1).getValue()).toStrictEqual('123');
  });

  it('should throw HL7ParseError', () => {
    let error: HL7Error;
    try {
      HL7Message.parse('MSH|^~\\&|||||X99807311532|||||2.2|1234');
    } catch (e: any) {
      error = e;
    }
    expect(error!).toBeDefined();
    expect(error!).toBeInstanceOf(HL7Error);
    expect(error!.segmentType).toEqual('MSH');
    expect(error!.segmentSequence).toEqual(0);
    expect(error!.fieldPosition).toEqual(MSHSegment.DateTimeOfMessage);
    expect(error!.componentPosition).toEqual(1);
    expect(error!.repetitionIndex).toEqual(0);
  });

  it('should parse custom segments', () => {
    const dictPatch: any = {
      segments: {
        ZDS: {
          desc: '',
          fields: {
            '1': {
              type: 'RP',
              desc: 'Study Instance UID',
              opt: 'R',
              rep: 1,
            },
            '2': {
              type: 'ST',
              desc: 'pointer',
              opt: 'R',
              rep: 1,
            },
          },
        },
      },
      types: {
        RP: {
          desc: 'Reference Pointer',
          fields: {
            '1': {
              type: 'ST',
              desc: 'pointer',
              opt: 'O',
              rep: 1,
              decode: (val: string) => parseInt(val, 10),
            },
          },
        },
      },
    };
    const ownDictionaries = {
      ...dictionaries,
    };
    ownDictionaries['2.2'] = dictionaries['2.2'].extend(dictPatch);
    const messageString =
      sampleMessage1 + '\rZDS|12345|1.2.345.67.8.9.12341234123412.345\r';
    const msg = HL7Message.parse(messageString, ownDictionaries);
    const zds = msg.getSegment('ZDS')!;
    expect(zds.segmentType).toStrictEqual('ZDS');
    expect(zds.field(1).getValue()).toStrictEqual(12345);
    expect(zds.field(2).getValue()).toStrictEqual(
      '1.2.345.67.8.9.12341234123412.345',
    );
  });
});
