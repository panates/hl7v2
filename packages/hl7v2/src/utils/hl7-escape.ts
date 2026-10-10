import isTypedArray from 'is-typedarray';
import {
  COMPONENT_SEPARATOR,
  ESCAPE_CHARACTER,
  FIELD_SEPARATOR,
  REPETITION_SEPARATOR,
  SUBCOMPONENT_SEPARATOR,
} from '../constants.js';
import type { HL7Message } from '../hl7-message.js';

export function hl7Escape(value: string | null, message?: HL7Message): string {
  if (value === null) return '""';
  if (value == null) return '';
  const fieldSeparator = message?.fieldSeparator || FIELD_SEPARATOR;
  const componentSeparator = message?.componentSeparator || COMPONENT_SEPARATOR;
  const subComponentSeparator =
    message?.subComponentSeparator || SUBCOMPONENT_SEPARATOR;
  const repetitionSeparator =
    message?.repetitionSeparator || REPETITION_SEPARATOR;
  const escapeCharacter = message?.escapeCharacter || ESCAPE_CHARACTER;

  if (Buffer.isBuffer(value)) return '\\X' + value.toString('hex') + '\\';
  if (isTypedArray(value) || Array.isArray(value))
    return '\\X' + Buffer.from(value).toString('hex') + '\\';

  const delimiters: Record<string, string> = {
    [fieldSeparator]: 'F',
    [componentSeparator]: 'S',
    [subComponentSeparator]: 'T',
    [repetitionSeparator]: 'R',
    [escapeCharacter]: 'E',
  };
  const e = escapeCharacter;
  /**
   * An escape sequence hl7UnEscape keeps (see there) passes through, so it
   * reaches the receiver as the sender wrote it. Otherwise the message's own
   * delimiters are escaped - a character that is not one of them is data.
   */
  const pattern = new RegExp(
    `(${preservedSequence(e)})|([${Object.keys(delimiters).map(escapeRegExp).join('')}])|([\\x00-\\x1F\\x80-\\x9F]+)`,
    'g',
  );
  return String(value).replace(pattern, (x, preserved, delimiter) => {
    if (preserved) return preserved;
    if (delimiter) return e + delimiters[delimiter] + e;
    let result = e + 'X';
    for (let i = 0; i < x.length; i++) {
      result += toHex(x.charCodeAt(i));
    }
    return result + e;
  });
}

/**
 * Escape sequences that are instructions to the receiver rather than data:
 * highlighting (\H\, \N\), formatting (\.br\, \.sp2\ ...) and locally
 * defined ones (\Zxxx\). \Cxxyy\ and \Mxxyyzz\ are not among them: this
 * library has always decoded them as character codes (see hl7UnEscape).
 */
function preservedSequence(escapeCharacter: string): string {
  const e = escapeRegExp(escapeCharacter);
  return `${e}(?:H|N|\\.[^${e}\\r\\n]+|Z[^${e}\\r\\n]*)${e}`;
}

function escapeRegExp(s: string): string {
  return s.replace(/[\\^$.*+?()[\]{}|-]/g, '\\$&');
}

function toHex(num: number): string {
  const hex = num.toString(16).toUpperCase();
  return hex.length % 2 === 0 ? hex : '0' + hex;
}

export function hl7UnEscape(value: string, message?: HL7Message) {
  if (value === '""') return null;
  const fieldSeparator = message?.fieldSeparator || FIELD_SEPARATOR;
  const componentSeparator = message?.componentSeparator || COMPONENT_SEPARATOR;
  const subComponentSeparator =
    message?.subComponentSeparator || SUBCOMPONENT_SEPARATOR;
  const repetitionSeparator =
    message?.repetitionSeparator || REPETITION_SEPARATOR;
  const escapeCharacter = message?.escapeCharacter || ESCAPE_CHARACTER;
  const e = escapeRegExp(escapeCharacter);
  const m = value.match(new RegExp(`^${e}x([a-f0-9]*)${e}$`, 'i'));
  if (m) return Buffer.from(m[1], 'hex');

  const preserved = new RegExp(`^${preservedSequence(escapeCharacter)}$`);
  return String(value).replace(
    new RegExp(`${e}([^${e}\\r\\n]*)${e}`, 'g'),
    (item, s: string) => {
      if (s === 'F') return fieldSeparator;
      if (s === 'S') return componentSeparator;
      if (s === 'T') return subComponentSeparator;
      if (s === 'R') return repetitionSeparator;
      if (s === 'E') return escapeCharacter;
      if (/^X([0-9a-f]{2})+$/i.test(s)) {
        /** Each byte is a character code, the inverse of hl7Escape */
        return Buffer.from(s.substring(1), 'hex').toString('latin1');
      }
      /**
       * Not what the standard means by them (ISO 2022 character set switches),
       * but what this library has always read: \\Cxx\\ a single-byte and
       * \\Mxxxx\\ a double-byte character code
       */
      const c = s.charAt(0).toUpperCase();
      if (c === 'C' && /^[0-9a-f]+$/i.test(s.substring(1))) {
        return Buffer.from(s.substring(1), 'hex').toString();
      }
      if (c === 'M' && /^([0-9a-f]{4})+$/i.test(s.substring(1))) {
        const buf = Buffer.from(s.substring(1), 'hex');
        let v = '';
        for (let i = 0; i < buf.length; i += 2) {
          v += String.fromCharCode(buf.readUInt16BE(i));
        }
        return v;
      }
      /** Instructions to the receiver (see preservedSequence) are kept, as HAPI keeps them */
      if (preserved.test(item)) return item;
      /** Any other sequence gives its content */
      return s;
    },
  );
}
