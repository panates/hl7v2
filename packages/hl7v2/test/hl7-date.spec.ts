import { expect } from 'expect';
import {
  formatHL7Date,
  formatHL7DateTime,
  formatHL7Time,
  HL7Message,
  parseHL7DateTime,
  toHL7Date,
  toHL7DateTime,
  toHL7Time,
} from '../src/index.js';

/** The local time zone offset of a Date, as HL7 writes it: +0300 */
const offsetOf = (d: Date) => {
  const m = -d.getTimezoneOffset();
  const a = Math.abs(m);
  return (
    (m < 0 ? '-' : '+') +
    String(Math.floor(a / 60)).padStart(2, '0') +
    String(a % 60).padStart(2, '0')
  );
};

describe('hl7v2:dates', () => {
  describe('reading', () => {
    it('should keep a value as written', () => {
      for (const v of [
        '2025',
        '202501',
        '20250102',
        '202501020304',
        '20250102030405',
        '20250102030405.1234',
        '20250102030405+0300',
        /* a negative offset used to lose its sign */
        '20250102030405.1234-0500',
      ]) {
        expect(toHL7DateTime(v)).toEqual(v);
      }
      expect(toHL7Date('20250102')).toEqual('20250102');
      expect(toHL7Time('0304')).toEqual('0304');
      expect(toHL7Time('030405.12-0500')).toEqual('030405.12-0500');
    });

    it('should refuse what is not an HL7 date or time', () => {
      for (const v of ['garbage', '20251301', '20250132', '2025010224', '1']) {
        expect(() => toHL7DateTime(v)).toThrow();
      }
      expect(() => toHL7Date('2025010203')).toThrow();
      expect(() => toHL7Time('25')).toThrow();
    });

    it('should read a value as a Date, in its offset', () => {
      expect(parseHL7DateTime('20250102030405+0300').toISOString()).toEqual(
        '2025-01-02T00:04:05.000Z',
      );
      expect(
        parseHL7DateTime('20250102030405.1234-0500').toISOString(),
      ).toEqual('2025-01-02T08:04:05.123Z');
      /* without an offset: local time; missing parts are their lowest */
      expect(parseHL7DateTime('20250102')).toEqual(new Date(2025, 0, 2));
      expect(parseHL7DateTime('2025')).toEqual(new Date(2025, 0, 1));
    });

    it('should give a Date from a message', () => {
      const msg = HL7Message.parse(
        'MSH|^~\\&|||||20250102030405+0300||ADT^A01|1|P|2.5\r' +
          'PID|1||123||Doe||19700215',
      );
      expect(msg.header.field(7).getDate()!.toISOString()).toEqual(
        '2025-01-02T00:04:05.000Z',
      );
      expect(msg.getDate('PID-7')).toEqual(new Date(1970, 1, 15));
      expect(msg.getDate('PID-29')).toBeUndefined();
    });
  });

  describe('writing', () => {
    it('should write a Date in local time with its offset', () => {
      const d = new Date(2025, 0, 2, 6, 4, 5, 678);
      expect(formatHL7DateTime(d)).toEqual('20250102060405.678' + offsetOf(d));
      expect(toHL7DateTime(d)).toEqual('20250102060405.678' + offsetOf(d));
      expect(formatHL7DateTime(d, { offset: false })).toEqual(
        '20250102060405.678',
      );
      expect(formatHL7Date(d)).toEqual('20250102');
      expect(formatHL7Time(d)).toEqual('060405.678' + offsetOf(d));
    });

    it('should keep the time of midnight', () => {
      /* it used to be cut to the date: 20250102 */
      const midnight = new Date(2025, 0, 2);
      expect(toHL7DateTime(midnight)).toEqual(
        '20250102000000' + offsetOf(midnight),
      );
    });

    it('should round-trip a Date through a message', () => {
      const d = new Date('2025-06-15T12:30:45.250Z');
      const msg = new HL7Message('2.5');
      msg.header.field(7).setValue(d);
      const read = HL7Message.parse(msg.toHL7String());
      expect(read.header.field(7).getDate()).toEqual(d);
    });

    it('should keep a date read from HL7 text as written, never reinterpreted', () => {
      const text =
        'MSH|^~\\&|A|B|C|D|20250101||ADT^A01|1|P|2.5\rPID|1||1||X||1980-05-12';
      /* Not HL7's format: kept as text, not turned into a local date/time */
      const msg = HL7Message.parse(text);
      expect(msg.get('PID-7')).toEqual('1980-05-12');
      expect(
        msg.validate({ structure: false }).map(e => e.hl7ErrorCode),
      ).toEqual([102]);
      expect(() => HL7Message.parse(text, { strict: true })).toThrow(
        'not a valid HL7 date/time',
      );
      /* Given in code, an ISO 8601 date/time is still taken */
      msg.set('PID-7', '1980-05-12T10:30:00Z');
      expect(msg.getDate('PID-7')!.toISOString()).toEqual(
        '1980-05-12T10:30:00.000Z',
      );
    });

    it('should take an ISO 8601 string', () => {
      const iso = '2025-01-02T03:04:05Z';
      expect(parseHL7DateTime(toHL7DateTime(iso)).toISOString()).toEqual(
        '2025-01-02T03:04:05.000Z',
      );
      expect(toHL7Date('2025-01-02')).toMatch(/^2025010[12]$/);
    });
  });
});
