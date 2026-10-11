import { readFileSync } from 'node:fs';
import { expect } from 'expect';
import { HL7Error, hl7Escape, HL7Message, hl7UnEscape } from '../src/index.js';

/*
 * The library against HAPI HL7v2: hapi/cases.json run through HAPI gave
 * hapi/expected.json (support/hapi-oracle, `npm run hapi:expected`); the
 * same cases run here must give the same.
 *
 * Where the library differs on purpose, it is listed: SYSTEMATIC for what
 * holds in every case, DIFFERENCES for single values. A listed difference
 * that is gone fails too - take it off the list.
 */

const dir = new URL('./hapi/', import.meta.url);
const cases = JSON.parse(readFileSync(new URL('cases.json', dir), 'utf8'));
const hapi = JSON.parse(readFileSync(new URL('expected.json', dir), 'utf8'));

/** Values the library gives on purpose otherwise, by "kind/case/item" */
const DIFFERENCES: Record<string, string> = {
  'read/escapes in values/NTE(1)-3':
    'hexadecimal data is read as the standard has it; HAPI reads only its own \\X000d\\',
  'read/escapes in values/NTE(5)-3':
    'an escape character without its pair is kept; HAPI drops it',
  'read/escapes in values/encoded': 'the two above, written back',
  'read/null and empty values/PID-3':
    'HL7 null ("") is given as null; HAPI gives the two quotes',
  'read/null and empty values/PID-5': 'HL7 null, as above',
  'read/null and empty values/PID-5-1': 'HL7 null, as above',
  'read/null and empty values/PID-13': 'HL7 null, as above',
  'read/segments split by LF':
    'segments split by LF are read; HAPI takes CR only',
  'read/oru 2.5.1: groups and segment repetitions/OBX(1)-5':
    'without groups SEG(n) is the n-th of the message; HAPI fails',
  'read/oru 2.5.1: groups and segment repetitions/OBX(2)-5': 'as above',
  'read/oru 2.5.1: groups and segment repetitions/OBR(1)-4-2': 'as above',
  'read/oru 2.3: RESPONSE group/OBX(2)-5': 'as above',
  'read/oru 2.5.1: groups and segment repetitions/NTE-3':
    "without groups a segment is the message's first of its type; HAPI's /. looks only in the first place the structure has one",
  'escape/delimiters and text/a\\b':
    'an escape character without its pair is kept; HAPI drops it',
  'escape/delimiters and text/end\\': 'as above',
  'escape/delimiters and text/\\X41\\':
    'hexadecimal data is read; a value all of it is binary (a Buffer)',
  'escape/hex escapes/a\\X0D\\b': 'hexadecimal data is read, as above',
  'escape/hex escapes/a\\X0A\\b': 'as above',
  'escape/hex escapes/a\\X000a\\b': 'as above',
  'escape/hex escapes/a\\X0D0A\\b': 'as above',
  'escape/hex escapes/\\X0d\\': 'as above',
};

/**
 * Differences in every acknowledgment, made the same before comparing:
 * - MSH-18: the library names the character set it writes the answer in;
 *   HAPI leaves it empty.
 * - MSA-3: the library puts the first error's text there (kept for the
 *   receivers reading it, though 2.5 deprecates it); HAPI none from 2.5, the
 *   code's description before.
 * - ERR-1 (before 2.5), ELD-2: the library gives the segment's sequence, as
 *   the standard has it; HAPI leaves it empty.
 * - The error's text: HAPI adds the location to it (" at PID(1)-3(0)").
 */
const SYSTEMATIC = {
  fields: (f: Record<string, any>) => ({ ...f, 'MSH-18': undefined }),
  segments: (segments: string[]) =>
    segments.map(s =>
      s
        .replace(/^(MSA\|[^|]*\|[^|]*)\|.*$/, '$1')
        .replace(/^(ERR\|[^^|]*\^)\d*(\^)/, '$1$2')
        .replace(/ at (PID|unknown location)[^|^&]*/, ''),
    ),
};

const text = (c: any) => c.message.join('\r');
const str = (v: any) =>
  v == null || v === '' ? null : Buffer.isBuffer(v) ? v : String(v);

/** Compares, or - for a listed difference - checks it is still one */
function compare(key: string, ours: any, theirs: any) {
  if (key in DIFFERENCES) {
    expect({
      key,
      same: JSON.stringify(ours) === JSON.stringify(theirs),
    }).toEqual({
      key,
      same: false,
    });
    return;
  }
  expect({ key, value: ours }).toEqual({ key, value: theirs });
}

const ACK_FIELDS = Object.keys(Object.values<any>(hapi.ack)[0].fields);
const fieldsOf = (ack: HL7Message) =>
  Object.fromEntries(ACK_FIELDS.map(f => [f, str(ack.get(f))]));
const bodyOf = (ack: HL7Message) =>
  ack.toHL7String().split('\r').filter(Boolean).slice(1);

describe('hl7v2:hapi', () => {
  it('should be run against what HAPI 2.6.0 gave', () => {
    expect(hapi.hapi).toEqual('2.6.0');
  });

  describe('read', () => {
    for (const c of cases.read) {
      it(c.name, () => {
        const h = hapi.read[c.name];
        const key = `read/${c.name}`;
        if (h.error) {
          compare(key, 'read', h.error);
          HL7Message.parse(text(c));
          return;
        }
        const msg = HL7Message.parse(text(c));
        for (const path of c.paths) {
          let value: any;
          try {
            value = str(msg.get(path));
          } catch (e: any) {
            value = `!error: ${e.message}`;
          }
          const theirs = h.values[path];
          compare(
            `${key}/${path}`,
            theirs?.startsWith?.('!error') && String(value).startsWith('!error')
              ? theirs
              : value,
            theirs,
          );
        }
        compare(
          `${key}/encoded`,
          msg.toHL7String().replace(/\r$/, ''),
          h.encoded.replace(/\r$/, ''),
        );
      });
    }
  });

  describe('write', () => {
    for (const c of cases.write) {
      it(c.name, () => {
        const msg = HL7Message.parse(text(c));
        for (const [path, value] of c.set) msg.set(path, value);
        compare(
          `write/${c.name}`,
          msg.toHL7String().replace(/\r$/, ''),
          hapi.write[c.name].encoded.replace(/\r$/, ''),
        );
      });
    }
  });

  describe('escape', () => {
    const msg = new HL7Message('2.5');
    for (const c of cases.escape) {
      it(c.name, () => {
        const h = hapi.escape[c.name];
        c.values.forEach((value: string, i: number) => {
          const key = `escape/${c.name}/${value}`;
          expect({ key, escaped: hl7Escape(value, msg) }).toEqual({
            key,
            escaped: h.escaped[i],
          });
          compare(key, hl7UnEscape(value, msg), h.unescaped[i]);
        });
      });
    }
  });

  describe('ack', () => {
    for (const c of cases.ack) {
      it(c.name, () => {
        const h = hapi.ack[c.name];
        const ack = HL7Message.parse(text(c)).createAck();
        compare(
          `ack/${c.name}/fields`,
          SYSTEMATIC.fields(fieldsOf(ack)),
          SYSTEMATIC.fields(h.fields),
        );
        compare(
          `ack/${c.name}/segments`,
          SYSTEMATIC.segments(bodyOf(ack)),
          SYSTEMATIC.segments(h.segments),
        );
      });
    }
  });

  describe('nak', () => {
    for (const c of cases.nak) {
      it(c.name, () => {
        const h = hapi.nak[c.name];
        const e = c.error;
        const error = new HL7Error(e.text, {
          hl7ErrorCode: e.code,
          ackCode: e.ackCode,
          segmentType: e.segment,
          segmentSequence: e.segmentRepetition,
          fieldPosition: e.field,
          /* HAPI's repetitions count from 1, repetitionIndex from 0 */
          repetitionIndex:
            e.fieldRepetition != null ? e.fieldRepetition - 1 : undefined,
          componentPosition: e.component,
          subComponentPosition: e.subcomponent,
        });
        const nak = HL7Message.parse(text(c)).createNak([error]);
        compare(
          `nak/${c.name}/fields`,
          SYSTEMATIC.fields(fieldsOf(nak)),
          SYSTEMATIC.fields(h.fields),
        );
        compare(
          `nak/${c.name}/segments`,
          SYSTEMATIC.segments(bodyOf(nak)),
          SYSTEMATIC.segments(h.segments),
        );
      });
    }
  });
});
