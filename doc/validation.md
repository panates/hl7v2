# Validation

`validate()` checks a message against the dictionary of its version and returns what it finds - `HL7Error`s carrying the HL7 error code (table 0357) and where the problem is, ready for a NAK. An empty list means nothing is wrong.

```typescript
const errors = msg.validate();
for (const e of errors) {
  console.log(e.hl7ErrorCode, `${e.segmentType}-${e.fieldPosition}`, e.message);
}
// 101 PID-3 PID-3 (Patient Identifier List) is required
```

## What is checked

| Code | Meaning                  | Reported for                                                                                  |
| ---- | ------------------------ | --------------------------------------------------------------------------------------------- |
| 100  | Segment sequence error   | a required segment or group missing; a segment the structure has no place for (Z segments are let through) |
| 101  | Required field missing   | a required field; a required component of a field that is there                               |
| 102  | Data type error          | a value its data type cannot read (a date not in HL7's form, `12,5` in an NM field, a negative set ID); more repetitions than the field allows |
| 103  | Table value not found    | with `tables: true`: a code of an `ID` field - an HL7 table - its table does not have         |
| 104  | Value too long           | longer than the field's maximum length                                                        |

- **OBX-5** (`VARIES`) is checked as the data type OBX-2 names: `OBX|1|NM|...|12a` is a data type error; a composite type's primitive components are checked each.
- An absent **optional group**'s required segments are not asked for; a **choice** takes one alternative.
- The structure is matched as [`buildStructureTree()`](structure.md) matches it: in order, greedily.

## Options

```typescript
msg.validate({ structure: false }); // fields only
msg.validate({ fields: false }); // structure only
msg.validate({ tables: true }); // codes against HL7's tables too
```

`tables` is off by default: the tables are one set for every version, so a code a later version added is unknown to an earlier one. `IS` fields - whose tables are the site's own - are never checked against them.

## Each error

| Property            | Value                                                             |
| ------------------- | ----------------------------------------------------------------- |
| `hl7ErrorCode`      | the code, from table 0357                                         |
| `message`           | what is wrong                                                     |
| `severity`          | `E`                                                               |
| `segmentType`       | the segment, `PID`                                                |
| `segmentSequence`   | the segment's occurrence among the message's segments of its type, from 1 |
| `fieldPosition`, `componentPosition`, `repetitionIndex` | where in the segment - the repetition from 0 |

## Answering with the errors

```typescript
const errors = msg.validate();
const answer = errors.length ? msg.createNak(errors) : msg.createAck();
```

The NAK has one ERR per error, laid out as the message's version defines ERR. See [Acknowledgments](acknowledgments.md).

On the network, `validate: true` (server or client option) does this for every message received: one that fails is answered with that NAK and not passed to the handlers. See [Network](network.md#validation).

## Strict parsing

Validation reads a message parsed leniently - a value that does not fit its type is kept as written. To refuse such a message as it is read:

```typescript
HL7Message.parse(text, { strict: true }); // throws an HL7Error (102) at the first bad value
```
