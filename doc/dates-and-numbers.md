# Dates and numbers

A value read from a message is **kept as written** once it is checked against its data type's form - never reinterpreted, never normalized. Values given in code are converted to HL7's form.

## Dates and times

| Type      | Form                                                      | Example                     |
| --------- | --------------------------------------------------------- | --------------------------- |
| DT        | `YYYY[MM[DD]]`                                            | `19800512`                  |
| DTM, TS   | `YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]`          | `20250301101500.123+0300`   |
| TM        | `HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ]`                        | `101500`                    |

TS is a composite from 2.2 to 2.5.1 - its first component the time, a DTM - and a primitive in 2.1; from 2.6 fields are DTM.

### Reading

```typescript
msg.get('PID-7'); // '19800512' - the text, as written
msg.getDate('PID-7'); // Date
msg.getSegment('EVN')!.field(2).getDate(); // fields, repetitions and components have getDate() too
```

`getDate()` reads the value in its offset; a value with no offset is read as local time - the standard's "sender's local time", taken to be ours. Missing parts are their lowest: `2025` is 2025-01-01 00:00.

Precision and offset are part of the value: `20250102030405.1234-0500` reads back exactly so, and is written back exactly so.

A value not in HL7's form - `1980-05-12`, `2025-03-01T10:00:00Z` - is **kept as written**, never taken as an ISO date: in a message it is a data type error, which `validate()` reports (102) and `strict` parsing refuses.

### Writing

```typescript
msg.set('EVN-2', new Date()); // 20250601120000.123+0300 - local time with its offset
msg.set('PID-7', '19800512'); // an HL7 value, checked, as given
msg.set('OBR-7', '2025-03-01T10:00:00Z'); // an ISO 8601 string given in code: converted
```

A `Date` is written in local time, with milliseconds and its offset. A DT field takes the local date of a `Date`; a TM field its time. An ISO 8601 string given in code is taken as a `Date`; text read from a message never is.

### Helpers

From `hl7v2-dictionary` (re-exported by `hl7v2`):

```typescript
import { formatHL7Date, formatHL7DateTime, formatHL7Time, parseHL7DateTime } from 'hl7v2';

formatHL7DateTime(new Date()); // '20250601120000.123+0300'
formatHL7DateTime(new Date(), { offset: false }); // without the offset
formatHL7Date(new Date()); // '20250601'
formatHL7Time(new Date()); // '120000.123+0300'
parseHL7DateTime('20250102030405-0500').toISOString(); // '2025-01-02T08:04:05.000Z'
```

`toHL7DateTime()`, `toHL7Date()` and `toHL7Time()` are the codecs the dictionary attaches to the types: they check an HL7 value and return it unchanged, and format a `Date`.

## Numbers

| Type | Form                                                                       |
| ---- | -------------------------------------------------------------------------- |
| NM   | an optional sign, digits, an optional decimal point: `12`, `-12.50`, `.5`  |
| SI   | a non-negative integer: `1`                                                |

No exponent (`1e3`), no thousands separator, no decimal comma (`12,5`).

```typescript
msg.get('PV1-47'); // 125.5 - a number
msg.get('OBX-5'); // OBX-5 is VARIES: the text, as written
```

A value in HL7's form is a JavaScript `number` - when a `number` holds it exactly. One with more than fifteen significant digits stays text (`'12345678901234567890'`), so it is never rounded. A value not in HL7's form - `12,5`, `12a` - is kept as written, its text, and `validate()` reports it (102). Use the value as `number | string`.

Written, a `number` is written as JavaScript writes it (`12.5`); text is checked and written as given (`12.50`).

OBX-5 holds a value of the type OBX-2 names: it is kept as text, and `validate()` checks it as that type.

Helpers: `toHL7Number()`, `toHL7SequenceId()` - the codecs of NM and SI.

## Why kept as written

A receiver that rewrites what it reads changes the data: v1 of this library read `12,5` as `12` and `1980-05-12` as a time in its own zone, and wrote them back so. Keeping values as written - and reporting those not in HL7's form - keeps the data what the sender sent.
