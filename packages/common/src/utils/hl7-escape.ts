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

  // eslint-disable-next-line
  return String(value).replace(/([|^~\\&])|([\x00-\x1F\x80-\x9F]+)/g, x => {
    switch (x) {
      case fieldSeparator:
        return '\\F\\';
      case componentSeparator:
        return '\\S\\';
      case subComponentSeparator:
        return '\\T\\';
      case repetitionSeparator:
        return '\\R\\';
      case escapeCharacter:
        return '\\E\\';
      default: {
        let result = '\\X';
        for (let i = 0; i < x.length; i++) {
          result += toHex(x.charCodeAt(i));
        }
        return result + '\\';
      }
    }
  });
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
  const m = value.match(/^\\x([a-f0-9]*)\\$/i);
  if (m) return Buffer.from(m[1], 'hex');

  return String(value).replace(/(\\(\w+)\\)/gm, item => {
    const s = item.substring(1).substring(0, item.length - 2);
    if (s === 'F') return fieldSeparator;
    if (s === 'S') return componentSeparator;
    if (s === 'T') return subComponentSeparator;
    if (s === 'R') return repetitionSeparator;
    if (s === 'E') return escapeCharacter;
    const c = s.charAt(0).toUpperCase();
    if (c === 'C' || c === 'X') {
      const buf = Buffer.from(s.substring(1), 'hex');
      return buf.toString();
    }
    if (s.charAt(0).toUpperCase() === 'M') {
      const buf = Buffer.from(s.substring(1), 'hex');
      let i = 0;
      let v = '';
      do {
        v += String.fromCharCode(buf.readUInt16BE(i));
      } while ((i += 2) < buf.length);
      return v;
    }
    return s;
  });
}
