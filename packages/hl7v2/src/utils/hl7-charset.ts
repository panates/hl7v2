import anyAscii from 'any-ascii';
import iconv from 'iconv-lite';

/**
 * HL7 table 0211 (MSH-18) values mapped to iconv-lite encoding names.
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
  UNICODE: 'utf16-le',
  'UNICODE UTF-8': 'utf8',
  'UNICODE UTF-16': 'utf16-le',
  // UTF-32 is not supported by iconv-lite
};

/** The HL7 value a message is encoded with when MSH-18 is empty */
export const DEFAULT_HL7_CHARSET = 'UNICODE UTF-8';

const UNICODE_ENCODINGS = new Set([
  'utf8',
  'utf16le',
  'utf16be',
  'utf16',
  'ucs2',
  'cesu8',
]);

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
export function resolveHL7Encoding(charset?: string): string {
  if (!charset) return 'utf-8';
  const encoding = HL7_CHARSET_ENCODINGS[charset] || charset;
  return iconv.encodingExists(encoding) ? encoding : 'utf-8';
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
): Buffer {
  const encoding = resolveHL7Encoding(charset);
  const canonical = encoding.toLowerCase().replace(/[^a-z0-9]/g, '');
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
