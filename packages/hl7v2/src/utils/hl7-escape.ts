import iconv from 'iconv-lite';
import isTypedArray from 'is-typedarray';
import {
  COMPONENT_SEPARATOR,
  ESCAPE_CHARACTER,
  FIELD_SEPARATOR,
  REPETITION_SEPARATOR,
  SUBCOMPONENT_SEPARATOR,
} from '../constants.js';
import type { HL7Message } from '../hl7-message.js';
import { resolveHL7Encoding } from './hl7-charset.js';

/*
 * Escape sequences (HL7 v2 chapter 2, "Use of escape sequences in text
 * fields"), handled as HAPI HL7v2's DefaultEscaping handles them:
 *
 * - \F\ \S\ \T\ \R\ \E\ stand for the message's own delimiters.
 * - \Xdddd\ is hexadecimal data: the bytes, in the message's character set.
 *   HAPI's own form for a carriage return, \X000d\, is read as one.
 * - \H\ \N\ (highlighting), \.xx\ (formatting), \Cxxyy\ \Mxxyyzz\ (character
 *   set switches) and \Zxx\ (locally defined) are instructions to the
 *   receiver, not data: they are kept as they are, and written back unchanged.
 * - Any other sequence gives its content, as HAPI drops the escape characters.
 */

interface Delimiters {
  field: string;
  component: string;
  subComponent: string;
  repetition: string;
  escape: string;
}

function delimitersOf(message?: HL7Message): Delimiters {
  return {
    field: message?.fieldSeparator || FIELD_SEPARATOR,
    component: message?.componentSeparator || COMPONENT_SEPARATOR,
    subComponent: message?.subComponentSeparator || SUBCOMPONENT_SEPARATOR,
    repetition: message?.repetitionSeparator || REPETITION_SEPARATOR,
    escape: message?.escapeCharacter || ESCAPE_CHARACTER,
  };
}

/**
 * The encoding \Xdddd\ bytes are read and written in: the message's own, when
 * it is ASCII-compatible. In UTF-16/UTF-32 a byte is not a character, so UTF-8 is used.
 */
function hexEncodingOf(message?: HL7Message): string {
  const encoding = resolveHL7Encoding(message?.charset);
  return /^(utf-?(16|32)|ucs-?2)/i.test(encoding) ? 'utf8' : encoding;
}

export function hl7Escape(value: string | null, message?: HL7Message): string {
  if (value === null) return '""';
  if (value == null) return '';

  if (Buffer.isBuffer(value)) return '\\X' + value.toString('hex') + '\\';
  if (isTypedArray(value) || Array.isArray(value))
    return '\\X' + Buffer.from(value).toString('hex') + '\\';

  const d = delimitersOf(message);
  const codes: Record<string, string> = {
    [d.field]: 'F',
    [d.component]: 'S',
    [d.subComponent]: 'T',
    [d.repetition]: 'R',
    [d.escape]: 'E',
  };
  const e = d.escape;
  const pattern = new RegExp(
    `(${preservedSequence(e, true)})|([${Object.keys(codes).map(escapeRegExp).join('')}])|([\\x00-\\x1F\\x7F-\\x9F]+)`,
    'g',
  );
  return String(value).replace(pattern, (x, preserved, delimiter) => {
    /** An instruction to the receiver passes through, as written */
    if (preserved) return preserved;
    if (delimiter) return e + codes[delimiter] + e;
    /**
     * Control characters go as hexadecimal data: raw, a VT or FS would end the
     * MLLP frame and a CR the segment
     */
    return (
      e +
      'X' +
      iconv.encode(x, hexEncodingOf(message)).toString('hex').toUpperCase() +
      e
    );
  });
}

export function hl7UnEscape(value: string, message?: HL7Message) {
  if (value === '""') return null;
  const d = delimitersOf(message);
  const e = escapeRegExp(d.escape);
  /** A value that is hexadecimal data as a whole is binary data (ED, ...) */
  const m = value.match(new RegExp(`^${e}x([a-f0-9]*)${e}$`, 'i'));
  if (m) return Buffer.from(m[1], 'hex');

  const preserved = new RegExp(`^${preservedSequence(d.escape)}$`);
  return String(value).replace(
    new RegExp(`${e}([^${e}\\r\\n]*)${e}`, 'g'),
    (item, s: string) => {
      if (s === 'F') return d.field;
      if (s === 'S') return d.component;
      if (s === 'T') return d.subComponent;
      if (s === 'R') return d.repetition;
      if (s === 'E') return d.escape;
      if (/^X000d$/i.test(s)) return '\r';
      if (/^X([0-9a-f]{2})+$/i.test(s)) {
        return iconv.decode(
          Buffer.from(s.substring(1), 'hex'),
          hexEncodingOf(message),
        );
      }
      if (preserved.test(item)) return item;
      return s;
    },
  );
}

/**
 * Escape sequences kept as they are: \H\, \N\, and \.xx\, \Cxx\, \Mxx\,
 * \Zxx\ up to the next escape character - the same set HAPI leaves alone.
 * \Xdddd\ is not among them on reading, since it is data; written, a value
 * that already holds one passes through like the others.
 */
function preservedSequence(escapeCharacter: string, withHex = false): string {
  const e = escapeRegExp(escapeCharacter);
  const leads = withHex ? '.CMXZ' : '.CMZ';
  return `${e}(?:H|N|[${escapeRegExp(leads)}][^${e}\\r\\n]*)${e}`;
}

function escapeRegExp(s: string): string {
  return s.replace(/[\\^$.*+?()[\]{}|-]/g, '\\$&');
}
