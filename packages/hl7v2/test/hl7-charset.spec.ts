import { expect } from 'expect';
import iconv from 'iconv-lite';
import {
  charsetFromMSH18,
  encodeHL7String,
  HL7Message,
  MSHSegment,
  PIDSegment,
  resolveHL7Encoding,
} from '../src/index.js';

const TURKISH_NAME = 'Şahin^Gül';

function messageWithName(charset: string): HL7Message {
  const msg = new HL7Message();
  msg.header.field(MSHSegment.CharacterSet).fromHL7String(charset);
  msg
    .addSegment('PID')
    .field(PIDSegment.PatientName)
    .fromHL7String(TURKISH_NAME);
  return msg;
}

describe('hl7v2:charset', () => {
  it('Should take the first non-empty repetition of MSH-18', () => {
    expect(charsetFromMSH18('~UNICODE UTF-8')).toEqual('UNICODE UTF-8');
    expect(charsetFromMSH18('8859/9~UNICODE UTF-8')).toEqual('8859/9');
    expect(charsetFromMSH18('UNICODE UTF-8^MULTIBYTE')).toEqual(
      'UNICODE UTF-8',
    );
    expect(charsetFromMSH18('~')).toBeUndefined();
    expect(charsetFromMSH18(undefined)).toBeUndefined();
  });

  it('Should resolve HL7 character sets to encodings', () => {
    expect(resolveHL7Encoding('UNICODE UTF-8')).toEqual('utf8');
    expect(resolveHL7Encoding('8859/9')).toEqual('latin5');
    expect(resolveHL7Encoding('ASCII')).toEqual('ascii');
    expect(resolveHL7Encoding('iso-8859-1')).toEqual('iso-8859-1');
    expect(resolveHL7Encoding('NO SUCH SET')).toEqual('utf-8');
    expect(resolveHL7Encoding(undefined)).toEqual('utf-8');
  });

  it('Should default MSH-18 to an HL7 table 0211 value', () => {
    const msg = new HL7Message();
    expect(msg.header.field(MSHSegment.CharacterSet).getValue()).toEqual(
      'UNICODE UTF-8',
    );
    expect(msg.createAck().charset).toEqual('UNICODE UTF-8');
  });

  it('Should read charset from a repetition after an empty one', () => {
    const msg = messageWithName('~UNICODE UTF-8');
    expect(msg.charset).toEqual('UNICODE UTF-8');
  });

  it('Should transliterate characters ASCII cannot hold', () => {
    const buf = messageWithName('ASCII').toBuffer();
    expect(buf.toString('ascii')).toContain('PID|||||Sahin^Gul');
  });

  it('Should keep characters the single-byte set can hold', () => {
    /* ISO 8859-1 holds "ü" but not "Ş" */
    let buf = messageWithName('8859/1').toBuffer();
    expect(iconv.decode(buf, 'latin1')).toContain('PID|||||Sahin^Gül');
    /* ISO 8859-9 holds both */
    buf = messageWithName('8859/9').toBuffer();
    expect(iconv.decode(buf, 'latin5')).toContain('PID|||||Şahin^Gül');
  });

  it('Should encode UTF-8 without transliteration', () => {
    const buf = messageWithName('~UNICODE UTF-8').toBuffer();
    expect(buf.toString('utf8')).toContain('PID|||||Şahin^Gül');
    expect(buf.toString('utf8')).toContain('||||||~UNICODE UTF-8');
  });

  it('Should never produce HL7 delimiters while transliterating', () => {
    /* any-ascii maps these to "|", "^", "&" and "~" */
    const buf = encodeHL7String('A∣B＾C＆D～E', 'ASCII');
    expect(buf.toString('ascii')).toEqual('ABCDE');
  });

  it('Should round-trip a message through its own charset', () => {
    for (const charset of ['8859/9', '~UNICODE UTF-8', 'UNICODE UTF-8']) {
      const msg = HL7Message.parse(messageWithName(charset).toBuffer());
      expect(
        msg.getSegment('PID')!.field(PIDSegment.PatientName).toHL7String(),
      ).toEqual(TURKISH_NAME);
    }
  });
});
