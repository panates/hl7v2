/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

const isTypedarray = require('is-typedarray');
const {
  FIELD_SEPARATOR,
  COMPONENT_SEPARATOR,
  SUBCOMPONENT_SEPARATOR,
  REPETITION_SEPARATOR,
  ESCAPE_CHARACTER
} = require('./types');
const {format} = require('util');

const TS_PATTERN = /^(19[0-9]{2}|2[0-9]{3})-?(0[1-9]|1[012])-?([123]0|[012][1-9]|31)[T ]?(?:([01][0-9]|2[0-3]):?([0-5][0-9]):?([0-5][0-9])?(?:\.(\d+))?(?:([+-])(?:([0-5][0-9])([0-5][0-9])))?)?$/;
const TM_PATTERN = /^([01][0-9]|2[0-3]):?([0-5][0-9]):?([0-5][0-9])?(?:\.(\d+))?(?:[+-](\d{2,4}))?$/;

function camelCase(str) {
  return str.toLowerCase()
      .replace(/([\W]+.)/g, (x) => x[x.length - 1].toUpperCase());
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + camelCase(str).substr(1);
}

function hl7Unescape(v) {
  const m = v.match(/^\\x([a-f0-9]*)\\$/i);
  if (m)
    return Buffer.from(m[1], 'hex');

  return String(v)
      .replace(/(\\(\w+)\\)/gm, (m) => {
        const s = m.substring(1).substring(0, m.length - 2);
        if (s === 'F')
          return FIELD_SEPARATOR;
        if (s === 'S')
          return COMPONENT_SEPARATOR;
        if (s === 'T')
          return SUBCOMPONENT_SEPARATOR;
        if (s === 'R')
          return REPETITION_SEPARATOR;
        if (s === 'E')
          return ESCAPE_CHARACTER;
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
          } while (i += 2 < buf.length);
          return v;
        }
        return s;
      });
}

function hl7Escape(v) {
  if (v == null)
    return '';
  if (v instanceof Buffer)
    return '\\X' + v.toString('hex') + '\\';
  if (isTypedarray(v) || Array.isArray(v))
    return '\\X' + Buffer.from(v).toString('hex') + '\\';

  // eslint-disable-next-line
  return String(v).replace(/([|^~\\&])|([\x00-\x1F\x80-\x9F]+)/g,
      (x) => {
        switch (x) {
          case FIELD_SEPARATOR:
            return '\\F\\';
          case COMPONENT_SEPARATOR:
            return '\\S\\';
          case SUBCOMPONENT_SEPARATOR:
            return '\\T\\';
          case REPETITION_SEPARATOR:
            return '\\R\\';
          case ESCAPE_CHARACTER:
            return '\\E\\';
          default: {
            let result = '\\X';
            for (let i = 0; i < x.length; i++) {
              result += padZero(x.charCodeAt(i).toString(16));
            }
            return result + '\\';
          }
        }
      });
}

function hl7Encode(v, dataType) {
  switch (dataType) {
    case 'DT':
      /* istanbul ignore else */
      if (v instanceof Date)
        return hl7EncodeDate(v);
      /* istanbul ignore next */
      break;
    case 'DTM':
      /* istanbul ignore else */
      if (v instanceof Date)
        return hl7EncodeDateTime(v);
      /* istanbul ignore next */
      break;
  }
  return hl7Escape(v);
}

function hl7Decode(v, dataType) {
  v = hl7Unescape(v);
  switch (dataType) {
    case 'DT':
    case 'DTM':
      return hl7DecodeDate(v);
    case 'TM':
      return hl7DecodeTime(v);
    case 'NM':
      return parseFloat(v);
  }
  return v;
}

function hl7DecodeDate(str) {
  if (!str) return null;
  const m = str.trim().match(TS_PATTERN);
  if (!m)
    throw new Error('Invalid date string "' + str + '"');
  const s = format('%s-%s-%sT%s:%s:%s.%s', m[1], m[2], m[3],
      m[4] || '00', m[5] || '00', m[6] || '00', m[7] || '000') +
      (m[8] ? (m[8] + (m[9] || '00') + (m[10] || '00')) : 'Z');
  const d = new Date(s);
  if (isNaN(d.getTime()))
    throw new Error('Invalid Date string "' + str + '"');
  return d;
}

function hl7DecodeTime(str) {
  if (!str) return null;
  const m = str.match(TM_PATTERN);
  if (!m)
    throw new Error('Invalid time string "' + str + '"');
  const s = format('0000-01-01T%s:%s:%s.%s', m[1], m[2], m[3] || '00',
      m[4] || '000') + (m[5] ?
      m[5] + (m[6] || '00') + (m[7] || '00') :
      'Z');
  const d = new Date(s);
  if (isNaN(d.getTime()))
    throw new Error('Invalid Time string "' + str + '"');
  return d;
}

function hl7EncodeDate(d) {
  if (!d) return '';
  return String(d.getUTCFullYear()) +
      padZero(d.getUTCMonth() + 1) +
      padZero(d.getUTCDate());
}

function hl7EncodeDateTime(d) {
  if (!d) return '';
  return String(d.getUTCFullYear()) +
      padZero(d.getUTCMonth() + 1) +
      padZero(d.getUTCDate()) +
      padZero(d.getUTCHours()) +
      padZero(d.getUTCMinutes()) +
      padZero(d.getUTCSeconds());
}

function padZero(n) {
  n = String(n);
  return n.length < 2 ? '0' + n : n;
}

module.exports = {
  camelCase,
  capitalizeFirst,
  hl7Unescape,
  hl7Escape,
  hl7Encode,
  hl7Decode,
  hl7DecodeDate,
  hl7DecodeTime,
  hl7EncodeDate,
  hl7EncodeDateTime
};

