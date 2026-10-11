import anyAscii from 'any-ascii';
import iconv from 'iconv-lite';

/**
 * HL7 table 0211 (MSH-18) values mapped to iconv-lite encoding names, as HAPI
 * HL7v2 maps them (`ca.uhn.hl7v2.llp.HL7Charsets`).
 * A value not listed here is tried as an encoding name as-is.
 */
export const HL7_CHARSET_ENCODINGS: Record<string, string> = {
  ASCII: 'ascii',
  '8859/1': 'latin1',
  '8859/2': 'latin2',
  '8859/3': 'ISO-8859-3',
  '8859/4': 'ISO-8859-4',
  '8859/5': 'ISO-8859-5',
  '8859/6': 'ISO-8859-6',
  '8859/7': 'ISO-8859-7',
  '8859/8': 'ISO-8859-8',
  '8859/9': 'latin5',
  '8859/15': 'latin9',
  'ISO IR6': 'ascii',
  'ISO IR14': 'ISO-2022-JP',
  'ISO IR87': 'ISO-2022-JP',
  'ISO IR159': 'ISO-2022-JP-2',
  'GB 18030-2000': 'gb18030',
  'KS X 1001': 'EUC-KR',
  'CNS 11643-1992': 'EUC-TW',
  'BIG-5': 'Big5',
  /* Deprecated in HL7 and ambiguous; HAPI and Apache Camel both read it as UTF-8 */
  UNICODE: 'utf8',
  'UNICODE UTF-8': 'utf8',
  /* With a byte order mark, as Java's UTF-16/UTF-32 write them; a BOM selects the byte order on decode */
  'UNICODE UTF-16': 'utf16',
  'UNICODE UTF-32': 'utf32',
};

/** The HL7 value a message is encoded with when MSH-18 is empty */
export const DEFAULT_HL7_CHARSET = 'UNICODE UTF-8';

const UNICODE_ENCODINGS = new Set([
  'utf8',
  'utf16le',
  'utf16be',
  'utf16',
  'utf32le',
  'utf32be',
  'utf32',
  'ucs2',
  'cesu8',
]);

const BYTE_ORDER_MARKS: [bytes: number[], encoding: string][] = [
  [[0xef, 0xbb, 0xbf], 'utf8'],
  [[0xff, 0xfe, 0x00, 0x00], 'utf32le'],
  [[0x00, 0x00, 0xfe, 0xff], 'utf32be'],
  [[0xff, 0xfe], 'utf16le'],
  [[0xfe, 0xff], 'utf16be'],
];

/**
 * Detects a byte order mark at the start of a message (after an optional
 * MLLP start block), as HAPI's `CharSetUtil` does. A message encoded in
 * UTF-16 or UTF-32 can only be recognized this way: its MSH segment cannot be
 * read before its encoding is known.
 * Returns the encoding and the payload without the start block, the BOM and
 * the MLLP end block, or `undefined` when there is no BOM.
 */
export function detectByteOrderMark(
  input: Buffer,
): { encoding: string; data: Buffer } | undefined {
  const start = input[0] === 0x0b ? 1 : 0;
  for (const [bytes, encoding] of BYTE_ORDER_MARKS) {
    if (bytes.every((b, i) => input[start + i] === b)) {
      let end = input.length;
      /* The MLLP end block (FS CR) is written as single bytes */
      if (input[end - 1] === 0x0d && input[end - 2] === 0x1c) end -= 2;
      else if (input[end - 1] === 0x1c) end -= 1;
      return { encoding, data: input.subarray(start + bytes.length, end) };
    }
  }
}

/**
 * Returns the character set an MSH-18 value names: the first component of
 * its first non-empty repetition. HL7 allows the first repetition to be empty
 * (`~UNICODE UTF-8`), meaning the default single-byte set plus the ones listed after it.
 */
export function charsetFromMSH18(
  value: string | undefined,
  repetitionSeparator = '~',
  componentSeparator = '^',
): string | undefined {
  if (!value) return;
  for (const rep of value.split(repetitionSeparator)) {
    const charset = rep.split(componentSeparator)[0].trim();
    if (charset) return charset;
  }
}

/**
 * Resolves an HL7 character set (MSH-18) to an iconv-lite encoding name.
 * Falls back to utf-8 for an empty or unknown value.
 */
export function resolveHL7Encoding(
  charset?: string,
  defaultCharset = 'utf-8',
): string {
  return findHL7Encoding(charset) ?? findHL7Encoding(defaultCharset) ?? 'utf-8';
}

/**
 * The iconv-lite encoding an MSH-18 value names, or undefined when it names
 * none this library knows - HL7 table 0211 or an encoding name iconv-lite
 * has. ANSI is neither: it means whatever code page the sender's Windows
 * uses; map it yourself when you know it, HL7_CHARSET_ENCODINGS.ANSI = 'windows-1254'.
 */
export function findHL7Encoding(charset?: string): string | undefined {
  if (!charset) return;
  const encoding = HL7_CHARSET_ENCODINGS[charset] || charset;
  return iconv.encodingExists(encoding) ? encoding : undefined;
}

/**
 * Encodes a serialized HL7 string with the given character set.
 * A character the target encoding cannot represent is transliterated to its
 * closest ASCII form (`Ş` -> `S`) instead of becoming `?`. HL7 delimiters a
 * transliteration would produce (`＾` -> `^`) are dropped, so the message
 * structure cannot change.
 */
export function encodeHL7String(
  str: string,
  charset?: string,
  delimiters = '|^~\\&',
  defaultCharset?: string,
): Buffer {
  const encoding = resolveHL7Encoding(charset, defaultCharset);
  const canonical = encoding.toLowerCase().replace(/[^a-z0-9]/g, '');
  /* UTF-16 as Java writes it: big-endian after a BOM (FE FF), as HAPI sends it */
  if (canonical === 'utf16') {
    return Buffer.concat([
      Buffer.from([0xfe, 0xff]),
      iconv.encode(str, 'utf16be'),
    ]);
  }
  if (UNICODE_ENCODINGS.has(canonical)) return iconv.encode(str, encoding);

  const representable = new Map<string, boolean>();
  let out = '';
  for (const ch of str) {
    if (ch.charCodeAt(0) < 0x80) {
      out += ch;
      continue;
    }
    let ok = representable.get(ch);
    if (ok === undefined) {
      ok = iconv.decode(iconv.encode(ch, encoding), encoding) === ch;
      representable.set(ch, ok);
    }
    if (ok) out += ch;
    else {
      for (const c of anyAscii(ch)) {
        if (!delimiters.includes(c) && c !== '\r' && c !== '\n') out += c;
      }
    }
  }
  return iconv.encode(out, encoding);
}
