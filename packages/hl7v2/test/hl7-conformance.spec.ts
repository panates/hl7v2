import { expect } from 'expect';
import {
  HL7Error,
  hl7Escape,
  HL7Message,
  HL7MessageNode,
  hl7UnEscape,
  MSASegment,
  MSHSegment,
} from '../src/index.js';

/** Behaviour checked against the HL7 v2 standard and HAPI HL7v2 */
describe('hl7v2:conformance', () => {
  describe('segment terminators', () => {
    it('Should split on LF when the message has no CR', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5||||||UNICODE UTF-8\nPID|1||123\nPV1|1',
      );
      expect(msg.segments.map(s => s.segmentType)).toEqual([
        'MSH',
        'PID',
        'PV1',
      ]);
      expect(msg.charset).toEqual('UNICODE UTF-8');
    });

    it('Should split on CRLF', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&||||||ADT^A01|1||2.5\r\nPID|1||123\r\n',
      );
      expect(msg.segments.map(s => s.segmentType)).toEqual(['MSH', 'PID']);
      expect(msg.getSegment('PID')!.field(3).getValue()).toEqual('123');
    });

    it('Should not read MSH-18 from the next segment', () => {
      /* MSH has 12 fields; with LF terminators the header must stop at LF */
      const msg = HL7Message.parse(
        'MSH|^~\\&||||||ADT^A01|1||2.5\nPID|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|8859/9',
      );
      expect(msg.charset).toBeUndefined();
    });
  });

  describe('custom delimiters', () => {
    /* MSH-2 order: component $, repetition *, escape @, sub-component % */
    const custom = 'MSH#$*@%#######ADT$A01#1#P#2.5\rPID#1##A|B$C%D';

    it('Should parse with the delimiters MSH declares', () => {
      const msg = HL7Message.parse(custom);
      const pid3 = msg.getSegment('PID')!.field(3);
      /* "|" is data here - "#" separates fields */
      expect(pid3.getValue(1)).toEqual('A|B');
      expect(pid3.getValue(2)).toEqual('C');
      expect(pid3.comp(2).getValue(2)).toEqual('D');
    });

    it('Should round-trip without escaping characters that are not delimiters', () => {
      const msg = HL7Message.parse(custom);
      expect(msg.getSegment('PID')!.toHL7String()).toEqual('PID#1##A|B$C%D');
    });

    it('Should escape the message own delimiters', () => {
      const msg = HL7Message.parse(custom);
      expect(hl7Escape('a#b$c*d%e@f|g', msg)).toEqual(
        'a@F@b@S@c@R@d@T@e@E@f|g',
      );
      expect(hl7UnEscape('a@F@b@S@c@R@d@T@e@E@f', msg)).toEqual('a#b$c*d%e@f');
    });
  });

  describe('sub-components of a primitive component', () => {
    it('Should be kept and serialized back unchanged', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5\rPID|1||123^C&D&&E^^^MR',
      );
      const pid = msg.getSegment('PID')!;
      expect(pid.toHL7String()).toEqual('PID|1||123^C&D&&E^^^MR');
      expect(pid.field(3).comp(2).getValue(1)).toEqual('C');
      expect(pid.field(3).comp(2).getValue(2)).toEqual('D');
      expect(pid.field(3).comp(2).getValue(4)).toEqual('E');
    });

    it('Should keep them with an empty first sub-component', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5\rPID|1||123^&D',
      );
      expect(msg.getSegment('PID')!.toHL7String()).toEqual('PID|1||123^&D');
    });

    it('Should serialize a sub-component set on a primitive component', () => {
      const msg = new HL7Message();
      const pid = msg.addSegment('PID');
      pid.field(3).comp(2).setValue('C');
      pid.field(3).comp(2).setValue('D&E', 2);
      expect(pid.field(3).toHL7String()).toEqual('^C&D\\T\\E');
      /* setting the value replaces the whole component */
      pid.field(3).comp(2).setValue('X');
      expect(pid.field(3).toHL7String()).toEqual('^X');
    });
  });

  describe('escape sequences (standard, as HAPI reads and writes them)', () => {
    it('Should keep character set switches as written', () => {
      /* ISO 2022: \M2442\ switches to JIS X 0208, \C2842\ back to ASCII */
      for (const text of ['abc\\C2842\\def', 'X\\M2442\\Y\\C2842\\Z']) {
        expect(hl7UnEscape(text)).toEqual(text);
        expect(hl7Escape(text)).toEqual(text);
      }
    });

    it('Should read hexadecimal data in the message character set', () => {
      const utf8 = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5||||||UNICODE UTF-8',
      );
      /* "ş" is C5 9F in UTF-8, FE in ISO 8859-9 */
      expect(hl7UnEscape('a\\XC59F\\b', utf8)).toEqual('aşb');
      const latin5 = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A01|1|P|2.5||||||8859/9',
      );
      expect(hl7UnEscape('a\\XFE\\b', latin5)).toEqual('aşb');
    });

    it("Should read HAPI's carriage return", () => {
      expect(hl7UnEscape('line 1\\X000d\\line 2')).toEqual('line 1\rline 2');
    });

    it('Should write control characters as HAPI writes them', () => {
      /* raw, a VT or FS would end the MLLP frame: hexadecimal data */
      expect(hl7Escape('a\x0bb\x1cc\x7fe')).toEqual(
        'a\\X0B\\b\\X1C\\c\\X7F\\e',
      );
      /* a CR in HAPI's form, the only hexadecimal data HAPI reads; LF and tab raw */
      expect(hl7Escape('a\rb\nc\td')).toEqual('a\\X000d\\b\nc\td');
      expect(hl7UnEscape(hl7Escape('a\r\nb'))).toEqual('a\r\nb');
    });

    it('Should pass hexadecimal data in a value through when writing', () => {
      expect(hl7Escape('a\\X0D\\b')).toEqual('a\\X0D\\b');
    });
  });

  describe('truncation character (v2.7)', () => {
    it('Should keep the fifth encoding character of MSH-2', () => {
      const input = 'MSH|^~\\&#|APP|||||ADT^A01|1|P|2.7\rPID|1||12#3';
      const msg = HL7Message.parse(input);
      expect(msg.truncationCharacter).toEqual('#');
      expect(msg.toHL7String()).toEqual(input + '\r');
      expect(msg.createAck().header.toHL7String()).toMatch(/^MSH\|\^~\\&#\|/);
    });
  });

  describe('escape sequences', () => {
    it('Should keep highlighting and formatting sequences', () => {
      for (const text of [
        'a\\H\\bold\\N\\b',
        'line 1\\.br\\line 2',
        'x\\.sp2\\y',
        'local \\Zabc\\ seq',
      ]) {
        expect(hl7UnEscape(text)).toEqual(text);
        /* and write them back unchanged */
        expect(hl7Escape(text)).toEqual(text);
      }
    });

    it('Should round-trip formatted text through a message', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&||||||ORU^R01|1||2.5\rNTE|1||first\\.br\\\\H\\second\\N\\',
      );
      expect(msg.getSegment('NTE')!.toHL7String()).toEqual(
        'NTE|1||first\\.br\\\\H\\second\\N\\',
      );
    });

    it('Should decode hex data inside text as character codes', () => {
      expect(hl7UnEscape('a\\X0D\\b')).toEqual('a\rb');
      expect(hl7UnEscape(hl7Escape('a\r\nb\x85c') as string)).toEqual(
        'a\r\nb\x85c',
      );
    });

    it('Should still read unknown sequences as their content', () => {
      expect(hl7UnEscape('a\\U\\b')).toEqual('aUb');
    });
  });

  describe('getSegmentFromLast()', () => {
    const msg = HL7Message.parse(
      'MSH|^~\\&||||||ORU^R01|1||2.5\rOBX|1\rOBX|2\rOBX|3',
    );

    it('Should count from the last segment', () => {
      const value = (i: number) =>
        msg.getSegmentFromLast('OBX', i)?.field(1).toHL7String();
      expect(value(0)).toEqual('3');
      expect(value(1)).toEqual('2');
      expect(value(2)).toEqual('1');
      expect(value(3)).toBeUndefined();
    });

    it('Should search before a given segment', () => {
      const last = msg.getSegmentFromLast('OBX')!;
      expect(
        msg.getSegmentFromLast('OBX', last)?.field(1).toHL7String(),
      ).toEqual('2');
    });
  });

  describe('buildStructureTree() across versions', () => {
    const oru = (version: string) =>
      HL7Message.parse(
        `MSH|^~\\&|||||||ORU^R01|1|P|${version}\r` + 'PID|1\rOBR|1\rOBX|1',
      ).buildStructureTree();

    it('Should find a group by the name another version gives it', () => {
      /* 2.3 calls it RESPONSE, 2.3.1 and later PATIENT_RESULT */
      for (const version of ['2.3', '2.5', '2.7.1']) {
        const tree = oru(version);
        const byNew = tree.getNode('PATIENT_RESULT');
        const byOld = tree.getNode('RESPONSE');
        expect([version, byNew]).toEqual([version, byOld]);
        expect(byNew).toBeInstanceOf(HL7MessageNode);
      }
      expect(oru('2.3').getNode('PATIENT_RESULT')!.name).toEqual('RESPONSE');
      expect(oru('2.5').getNode('RESPONSE')!.name).toEqual('PATIENT_RESULT');
    });

    it('Should prefer a node carrying the name itself over an alias', () => {
      const parent = new HL7MessageNode('X');
      const aliased = new HL7MessageNode('ORDER', ['OBSERVATION']);
      const named = new HL7MessageNode('OBSERVATION');
      parent.items.push(aliased, named);
      expect(parent.getNode('OBSERVATION')).toBe(named);
      expect(parent.getNode('ORDER')).toBe(aliased);
      expect(aliased.is('OBSERVATION')).toBe(true);
    });

    it('Should place a repeated segment at its own position in a group', () => {
      /* ADR_A19's QUERY_RESPONSE has ROL after PD1 and again after PV2 */
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||||ADR^A19^ADR_A19|1|P|2.5\rMSA|AA|Q1\rQRD|20250101|R|I|Q1\r' +
          'PID|1||123\rPD1|\rROL|1|AD|AT\rNK1|1\rPV1|1|I\rROL|2|AD|AT',
      );
      const tree = msg.buildStructureTree();
      expect(
        tree.items.map(i => (i as any).name ?? (i as any).segmentType),
      ).toEqual(['MSH', 'MSA', 'QRD', 'QUERY_RESPONSE']);
      const response = tree.getNode('QUERY_RESPONSE')!;
      expect(response.items.map(i => (i as any).segmentType)).toEqual([
        'PID',
        'PD1',
        'ROL',
        'NK1',
        'PV1',
        'ROL',
      ]);
    });

    it('Should use the structure MSH-9.3 names', () => {
      /* An A04 is structured as an ADT_A01 */
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||||ADT^A04^ADT_A01|1|P|2.5\rEVN|A04\rPID|1\rPV1|1|O',
      );
      expect(msg.buildStructureTree().name).toEqual('ADT_A01');
    });
  });

  describe('buildStructureTree()', () => {
    it('Should list segments flat for an unknown message structure', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&||||||ZZZ^Z01|1||2.5\rPID|1\rZZ1|1',
      );
      const tree = msg.buildStructureTree();
      expect(tree).toBeInstanceOf(HL7MessageNode);
      expect(tree.items.length).toEqual(3);
    });
  });

  describe('createAck() / createNak()', () => {
    const request = HL7Message.parse(
      'MSH|^~\\&|SAPP^1.2.3^ISO|SFAC|RAPP|RFAC|20250101||ADT^A01^ADT_A01|CID1|T|2.5||||||8859/9',
    );

    for (const [name, create] of [
      ['createAck', () => request.createAck()],
      ['createNak', () => request.createNak(['failed'])],
    ] as const) {
      it(`${name} should address the response back to the sender`, () => {
        const msh = create().header;
        expect(msh.field(MSHSegment.SendingApplication).toHL7String()).toEqual(
          'RAPP',
        );
        expect(msh.field(MSHSegment.SendingFacility).toHL7String()).toEqual(
          'RFAC',
        );
        expect(
          msh.field(MSHSegment.ReceivingApplication).toHL7String(),
        ).toEqual('SAPP^1.2.3^ISO');
        expect(msh.field(MSHSegment.ReceivingFacility).toHL7String()).toEqual(
          'SFAC',
        );
      });

      it(`${name} should keep processing ID, version and character set`, () => {
        const response = create();
        const msh = response.header;
        expect(msh.field(MSHSegment.ProcessingID).toHL7String()).toEqual('T');
        expect(msh.field(MSHSegment.VersionID).toHL7String()).toEqual('2.5');
        expect(response.charset).toEqual('8859/9');
        /* MSH-9-3, the structure: ACK from 2.5, as HAPI writes it */
        expect(msh.field(MSHSegment.MessageType).toHL7String()).toEqual(
          'ACK^A01^ACK',
        );
        expect(
          response
            .getSegment('MSA')!
            .field(MSASegment.MessageControlID)
            .toHL7String(),
        ).toEqual('CID1');
      });
    }

    it('Should give a response its own control ID', () => {
      expect(request.createAck().controlId).not.toEqual(request.controlId);
    });
  });

  describe('HL7MessageNode navigation', () => {
    const msg = HL7Message.parse(
      'MSH|^~\\&|||||||ORU^R01^ORU_R01|1|P|2.5\r' +
        'PID|1\rOBR|1\rOBX|1\rOBX|2\rOBR|2\rOBX|3',
    );
    const tree = msg.buildStructureTree();
    const result = tree.getNode('PATIENT_RESULT')!;
    const orders = () =>
      [0, 1].map(i => result.getNode('ORDER_OBSERVATION', i)!);

    it('Should find nodes by name and index, from either end', () => {
      expect(result).toBeInstanceOf(HL7MessageNode);
      const [first, second] = orders();
      expect(first.getSegment('OBR')!.field(1).toHL7String()).toEqual('1');
      expect(second.getSegment('OBR')!.field(1).toHL7String()).toEqual('2');
      expect(result.getNodeFromLast('ORDER_OBSERVATION')).toBe(second);
      expect(result.getNodeFromLast('ORDER_OBSERVATION', 1)).toBe(first);
      expect(result.getNode('ORDER_OBSERVATION', first)).toBe(second);
      expect(result.getNodeFromLast('ORDER_OBSERVATION', second)).toBe(first);
      expect(result.getNode('NO_SUCH_GROUP')).toBeUndefined();
    });

    it('Should find segments by type and index, from either end', () => {
      const [first] = orders();
      const observations = first.getNode('OBSERVATION', 0)!.getSegment('OBX')!;
      expect(observations.field(1).toHL7String()).toEqual('1');
      const obxNodes = [0, 1].map(i => first.getNode('OBSERVATION', i)!);
      expect(obxNodes[1].getSegment('OBX')!.field(1).toHL7String()).toEqual(
        '2',
      );
      expect(tree.getSegment('MSH')).toBe(msg.header);
      expect(tree.getSegmentFromLast('MSH')).toBe(msg.header);
      expect(tree.getSegment('MSH', 1)).toBeUndefined();
      expect(tree.getSegment('MSH', msg.header)).toBeUndefined();
      expect(tree.getSegmentFromLast('MSH', msg.header)).toBeUndefined();
    });
  });

  describe('strict parsing', () => {
    /* BLG-1 is a CCD in 2.5: CCD.2 is a TS, whose first sub-component is a DTM */
    const input = 'MSH|^~\\&|||||||ADT^A01|1|P|2.5\rBLG|D^NOTADATE&Y';

    it('Should locate a sub-component holding the wrong data type', () => {
      let error: any;
      try {
        HL7Message.parse(input, { strict: true });
      } catch (e) {
        error = e;
      }
      expect(error).toBeInstanceOf(HL7Error);
      expect(error.hl7ErrorCode).toEqual(102);
      expect(error.segmentType).toEqual('BLG');
      expect(error.fieldPosition).toEqual(1);
      expect(error.componentPosition).toEqual(2);
      expect(error.subComponentPosition).toEqual(1);
      expect(error.line).toEqual(2);
    });

    it('Should keep the raw value when not strict', () => {
      const msg = HL7Message.parse(input);
      const ccd2 = msg.getSegment('BLG')!.field(1).comp(2);
      expect(ccd2.getValue(1)).toEqual('NOTADATE');
      expect(msg.getSegment('BLG')!.toHL7String()).toEqual('BLG|D^NOTADATE&Y');
    });
  });

  describe('negative acknowledgments', () => {
    const request = (version: string) =>
      HL7Message.parse(`MSH|^~\\&|A|B|C|D|||ADT^A01|CID|P|${version}`);
    const located = new HL7Error('Required field missing', {
      hl7ErrorCode: 101,
      segmentType: 'PID',
      segmentSequence: 1,
      fieldPosition: 5,
    });

    it('Should lay ERR out as 2.5 and later define it', () => {
      const err = request('2.5').createNak([located]).getSegment('ERR')!;
      /* ERR-3 a CWE of table 0357, the text its original text, as HAPI writes it */
      expect(err.toHL7String()).toEqual(
        'ERR||PID^1^5|101^Required field missing^HL70357^^^^^^Required field missing|E',
      );
    });

    it('Should put everything in ERR-1 before 2.5', () => {
      for (const version of ['2.3', '2.4']) {
        const err = request(version).createNak([located]).getSegment('ERR')!;
        expect([version, err.toHL7String()]).toEqual([
          version,
          'ERR|PID^1^5^101&Required field missing&HL70357&&Required field missing',
        ]);
      }
      /* 2.1 and 2.2: ERR-1 is the code alone */
      const err21 = request('2.1').createNak([located]).getSegment('ERR')!;
      expect(err21.toHL7String()).toEqual('ERR|101');
    });

    it('Should reject (AR) what cannot be taken at all', () => {
      const ack = (errors: (Error | string)[]) =>
        request('2.5')
          .createNak(errors)
          .getSegment('MSA')!
          .field(MSASegment.AcknowledgmentCode)
          .toHL7String();
      expect(
        ack([new HL7Error('No such version', { hl7ErrorCode: 203 })]),
      ).toEqual('AR');
      expect(ack([new HL7Error('Busy', { ackCode: 'AR' })])).toEqual('AR');
      expect(ack([located])).toEqual('AE');
      expect(ack(['plain failure'])).toEqual('AE');
    });
  });
});
