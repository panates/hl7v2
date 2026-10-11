/*
 * HL7 date and time values (DT, DTM, TS, TM):
 *
 *   DT   YYYY[MM[DD]]
 *   DTM  YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]
 *   TM   HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ]
 *
 * A value read from a message is kept as written - its precision and its
 * time zone offset are part of it - and only checked. A Date is written in
 * local time with its offset (20250102060405.678+0300), as HAPI HL7v2 writes
 * it; without an offset the standard reads a time as the sender's local time.
 */

const DT = /^(\d{4})(?:(\d{2})(?:(\d{2}))?)?$/;
const DTM =
  /^(\d{4})(?:(\d{2})(?:(\d{2})(?:(\d{2})(?:(\d{2})(?:(\d{2})(?:\.(\d{1,4}))?)?)?)?)?)?([+-]\d{4})?$/;
const TM = /^(\d{2})(?:(\d{2})(?:(\d{2})(?:\.(\d{1,4}))?)?)?([+-]\d{4})?$/;

const pad = (n: number, width = 2) => String(n).padStart(width, '0');

function offsetOf(date: Date): string {
  const minutes = -date.getTimezoneOffset();
  const sign = minutes < 0 ? '-' : '+';
  const abs = Math.abs(minutes);
  return sign + pad(Math.floor(abs / 60)) + pad(abs % 60);
}

function checkParts(
  value: string,
  month?: string,
  day?: string,
  hour?: string,
  minute?: string,
  second?: string,
  offset?: string,
) {
  const bad =
    (month && (+month < 1 || +month > 12)) ||
    (day && (+day < 1 || +day > 31)) ||
    (hour && +hour > 23) ||
    (minute && +minute > 59) ||
    (second && +second > 59) ||
    (offset && (+offset.substring(1, 3) > 14 || +offset.substring(3) > 59));
  if (bad) throw new TypeError(`Value "${value}" is not a valid HL7 date/time`);
}

/** A Date, or an ISO 8601 string (2025-01-02T03:04:05Z), as a Date; undefined for an HL7 value */
/* A Date, or an ISO 8601 string given in code; HL7 text read is never one */
function asDate(value: Date | string, read?: boolean): Date | undefined {
  if (value instanceof Date) {
    if (isNaN(value.getTime())) throw new TypeError('Invalid Date');
    return value;
  }
  if (!read && /^\d{4}-\d{2}/.test(String(value).trim())) {
    const d = new Date(String(value).trim());
    if (isNaN(d.getTime())) {
      throw new TypeError(`Value "${value}" is not a valid date`);
    }
    return d;
  }
}

/* ------------------------------------------------------------- writing */

/** A Date as an HL7 DTM, local time with its offset: 20250102060405.678+0300 */
export function formatHL7DateTime(
  date: Date,
  options?: { offset?: boolean },
): string {
  const ms = date.getMilliseconds();
  return (
    pad(date.getFullYear(), 4) +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds()) +
    (ms ? '.' + pad(ms, 3) : '') +
    (options?.offset === false ? '' : offsetOf(date))
  );
}

/** A Date as an HL7 DT, its local date: 20250102 */
export function formatHL7Date(date: Date): string {
  return (
    pad(date.getFullYear(), 4) + pad(date.getMonth() + 1) + pad(date.getDate())
  );
}

/** A Date's time as an HL7 TM, local time with its offset: 060405.678+0300 */
export function formatHL7Time(
  date: Date,
  options?: { offset?: boolean },
): string {
  const ms = date.getMilliseconds();
  return (
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds()) +
    (ms ? '.' + pad(ms, 3) : '') +
    (options?.offset === false ? '' : offsetOf(date))
  );
}

/* ------------------------------------------------------------- reading */

/**
 * An HL7 DT, DTM or TS value as a Date. Without an offset the value is read
 * as local time - the standard's "sender's local time", assumed to be ours.
 * Missing parts are their lowest: "2025" is 2025-01-01 00:00.
 */
export function parseHL7DateTime(value: string): Date {
  const m = DTM.exec(value.trim());
  if (!m) throw new TypeError(`Value "${value}" is not a valid HL7 date/time`);
  const [, y, mo = '01', d = '01', h = '00', mi = '00', s = '00', frac, tz] = m;
  checkParts(value, mo, d, h, mi, s, tz);
  const ms = frac ? Math.round(Number('0.' + frac) * 1000) : 0;
  if (!tz) return new Date(+y, +mo - 1, +d, +h, +mi, +s, ms);
  const offset =
    (tz[0] === '-' ? -1 : 1) * (+tz.substring(1, 3) * 60 + +tz.substring(3));
  return new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s, ms) - offset * 60000);
}

/* -------------------------------------------- codecs of the dictionary */

/** DTM / TS: a value read is kept as written once checked; a Date is formatted */
export function toHL7DateTime(value: Date | string, read?: boolean): string {
  const date = asDate(value, read);
  if (date) return formatHL7DateTime(date);
  const v = String(value).trim();
  const m = DTM.exec(v);
  if (!m) throw new TypeError(`Value "${value}" is not a valid HL7 date/time`);
  checkParts(v, m[2], m[3], m[4], m[5], m[6], m[8]);
  return v;
}

/** DT: a value read is kept as written once checked; a Date is formatted */
export function toHL7Date(value: Date | string, read?: boolean): string {
  const date = asDate(value, read);
  if (date) return formatHL7Date(date);
  const v = String(value).trim();
  const m = DT.exec(v);
  if (!m) throw new TypeError(`Value "${value}" is not a valid HL7 date`);
  checkParts(v, m[2], m[3]);
  return v;
}

/** TM: a value read is kept as written once checked; a Date's time is formatted */
export function toHL7Time(value: Date | string, read?: boolean): string {
  if (value instanceof Date) return formatHL7Time(value);
  const v = String(value).trim();
  /* 06:04:05 written with colons, given in code; HL7 text read has none */
  const compact = !read && /^\d{2}:\d{2}/.test(v) ? v.replace(/:/g, '') : v;
  const m = TM.exec(compact);
  if (!m) throw new TypeError(`Value "${value}" is not a valid HL7 time`);
  checkParts(compact, undefined, undefined, m[1], m[2], m[3], m[5]);
  return compact;
}
