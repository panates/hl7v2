import { expect } from 'expect';
import iconv from 'iconv-lite';
import {
  charsetFromMSH18,
  detectByteOrderMark,
  encodeHL7String,
  findHL7Encoding,
  HL7_CHARSET_ENCODINGS,
  HL7Message,
  MSHSegment,
  PIDSegment,
  resolveHL7Encoding,
} from '../src/index.js';

const TURKISH_NAME = 'Şahin^Gül';
const VT_BYTE = Buffer.from([0x0b]);
const FS_CR_BYTES = Buffer.from([0x1c, 0x0d]);

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
    /* As HAPI and Apache Camel read the deprecated, ambiguous value */
    expect(resolveHL7Encoding('UNICODE')).toEqual('utf8');
    expect(resolveHL7Encoding('UNICODE UTF-16')).toEqual('utf16');
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
    for (const charset of [
      '8859/9',
      '~UNICODE UTF-8',
      'UNICODE UTF-8',
      'UNICODE',
      'UNICODE UTF-16',
      'UNICODE UTF-32',
    ]) {
      const buf = messageWithName(charset).toBuffer();
      /* Bare, and inside an MLLP frame as HL7Socket receives it */
      for (const input of [buf, Buffer.concat([VT_BYTE, buf, FS_CR_BYTES])]) {
        const msg = HL7Message.parse(input);
        expect(
          msg.getSegment('PID')!.field(PIDSegment.PatientName).toHL7String(),
        ).toEqual(TURKISH_NAME);
      }
    }
  });

  it('Should write a byte order mark for UTF-16 and UTF-32', () => {
    /* UTF-16 big-endian after FE FF, as Java and HAPI write it */
    const buf = messageWithName('UNICODE UTF-16').toBuffer();
    expect(buf.subarray(0, 4).toString('hex')).toEqual('feff004d');
  });

  it('Should decode by byte order mark before reading MSH-18', () => {
    const text =
      'MSH|^~\\&|||||||ADT^A08|1||2.5||||||UNICODE UTF-16\rPID|||||Şahin^Gül';
    const be = Buffer.concat([
      Buffer.from([0xfe, 0xff]),
      iconv.encode(text, 'utf16be'),
    ]);
    let msg = HL7Message.parse(be);
    expect(msg.getSegment('PID')!.field(5).toHL7String()).toEqual(TURKISH_NAME);
    /* A UTF-8 BOM is skipped */
    const utf8 = Buffer.concat([
      Buffer.from([0xef, 0xbb, 0xbf]),
      Buffer.from(text.replace('UNICODE UTF-16', 'UNICODE UTF-8')),
    ]);
    msg = HL7Message.parse(utf8);
    expect(msg.getSegment('PID')!.field(5).toHL7String()).toEqual(TURKISH_NAME);
  });

  it('Should detect byte order marks inside an MLLP frame', () => {
    const framed = Buffer.from([0x0b, 0xff, 0xfe, 0x4d, 0x00, 0x1c, 0x0d]);
    expect(detectByteOrderMark(framed)).toEqual({
      encoding: 'utf16le',
      data: Buffer.from([0x4d, 0x00]),
    });
    expect(detectByteOrderMark(Buffer.from('MSH|'))).toBeUndefined();
  });

  it('Should tell a known character set from an unknown one', () => {
    expect(findHL7Encoding('8859/9')).toEqual('latin5');
    expect(findHL7Encoding('windows-1254')).toEqual('windows-1254');
    /* not an HL7 value, and not one code page: it is the sender's Windows' */
    expect(findHL7Encoding('ANSI')).toBeUndefined();
    expect(findHL7Encoding(undefined)).toBeUndefined();
  });

  it('Should use the given default for an unknown character set', () => {
    const latin5 = iconv.encode(
      'MSH|^~\\&|||||||ADT^A01|1|P|2.5||||||ANSI\rPID|||||Şahin^Gül',
      'latin5',
    );
    /* UTF-8 by default: the latin5 bytes do not decode */
    expect(
      HL7Message.parse(latin5).getSegment('PID')!.field(5).toHL7String(),
    ).not.toEqual(TURKISH_NAME);
    const msg = HL7Message.parse(latin5, { defaultCharset: '8859/9' });
    expect(msg.getSegment('PID')!.field(5).toHL7String()).toEqual(TURKISH_NAME);
    expect(
      iconv.decode(msg.toBuffer({ defaultCharset: 'windows-1254' }), 'win1254'),
    ).toContain(TURKISH_NAME);
  });

  it('Should take a mapping added for a non-standard value', () => {
    HL7_CHARSET_ENCODINGS.ANSI = 'windows-1254';
    try {
      expect(findHL7Encoding('ANSI')).toEqual('windows-1254');
      const buf = messageWithName('ANSI').toBuffer();
      expect(iconv.decode(buf, 'win1254')).toContain(TURKISH_NAME);
    } finally {
      delete HL7_CHARSET_ENCODINGS.ANSI;
    }
  });
});
