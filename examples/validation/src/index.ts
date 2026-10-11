/*
 * Validation: a message checked against its version's dictionary. Each
 * problem is an HL7Error carrying the HL7
 * error code (table 0357) and where it is - what a NAK sends back.
 *
 *   100 segment sequence error   a required segment missing, one out of place
 *   101 required field missing   a field, or a component of one that is there
 *   102 data type error          a value its type cannot read, too many repetitions
 *   103 table value not found    a code not in its HL7 table (when asked)
 *   104 value too long
 */
import { HL7Error, HL7Message } from 'hl7v2';

const show = (title: string, errors: HL7Error[]) => {
  console.log(`\n-- ${title}: ${errors.length || 'no'} problem(s)`);
  for (const e of errors) {
    const where = [
      e.segmentType,
      e.segmentSequence,
      e.fieldPosition,
      e.componentPosition,
    ]
      .filter(x => x != null)
      .join('/');
    console.log(`  ${e.hl7ErrorCode}  ${where.padEnd(10)} ${e.message}`);
  }
};

const MSH =
  'MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250301101500||ADT^A01^ADT_A01|1|P|2.5';
const parse = (...segments: string[]) =>
  HL7Message.parse([MSH, ...segments].join('\r'));

/* 1. A valid message */
const valid = parse(
  'EVN|A01|20250301101500',
  'PID|1||123456^^^GHH^MR||Yılmaz^Ayşe||19800512|F',
  'PV1|1|I',
);
show('Valid', valid.validate());

/* 2. Fields: required ones, data types, lengths, repetitions */
const fields = parse(
  'EVN|A01|20250301101500',
  /* PID-3 missing; PID-7 not a date; PID-1 (SI) not a number */
  'PID|X||||Yılmaz^Ayşe||1980-05-12',
  /* PV1-2 (Patient Class) is required */
  'PV1|1',
);
show('Fields', fields.validate());

/* 3. Structure: ADT_A01 needs EVN, PID, PV1 in that order */
const structure = parse('PID|1||123456||Yılmaz', 'EVN|A01|20250301101500');
show('Structure', structure.validate());

/*
 * 4. Tables: off by default - the tables are one set for every version, so
 * a code a version added later is unknown to an earlier one. An ID field's
 * code is checked against its HL7 table; an IS field's table is the site's
 * own, and left alone.
 */
const tables = HL7Message.parse(
  [
    MSH.replace('|P|2.5', '|X|2.5'), // MSH-11, table 0103: D, P or T
    'EVN|A01|20250301101500',
    'PID|1||123456||Yılmaz||19800512|Z', // PID-8 is an IS: not checked
    'PV1|1|I',
  ].join('\r'),
);
show('Tables', tables.validate({ tables: true }));

/* Only what is asked: fields only, structure only */
show('Fields only', structure.validate({ structure: false }));

/*
 * 5. The answer: a NAK listing the errors, one ERR each. AE for errors in
 * the message, AR when it cannot be taken at all (codes 200-203).
 */
const nak = fields.createNak(fields.validate());
console.log('\n-- NAK\n' + nak.toHL7String().replace(/\r/g, '\n'));

/*
 * 6. Strict parsing: a value its type cannot read throws while parsing,
 * instead of being kept as text.
 */
try {
  HL7Message.parse(MSH.replace('20250301101500', 'yesterday') + '\rEVN|A01', {
    strict: true,
  });
} catch (e) {
  if (e instanceof HL7Error) {
    console.log(
      `-- Strict: ${e.hl7ErrorCode} at ${e.segmentType}-${e.fieldPosition}`,
    );
  }
}
