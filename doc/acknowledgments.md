# Acknowledgments

A receiver answers a message with an acknowledgment: an `ACK` whose MSA segment carries the code and the control ID of the message it answers, and - when something is wrong - an ERR segment for each problem.

| MSA-1 | Mode        | Meaning                                                              |
| ----- | ----------- | -------------------------------------------------------------------- |
| `AA`  | application | accepted and processed                                               |
| `AE`  | application | an error in the message, or in processing it                        |
| `AR`  | application | rejected: the message cannot be taken at all (type, event, processing ID, version) |
| `CA`  | accept      | received and accepted for processing (enhanced mode)                 |
| `CE`  | accept      | received with an error; not processed                                |
| `CR`  | accept      | rejected on receipt                                                  |

## createAck()

```typescript
const ack = msg.createAck(); // AA
msg.createAck('AA', 'Admitted'); // with MSA-3
msg.createAck('CA'); // an accept acknowledgment
```

The header is filled from the message it answers:

- MSH-3/4 (sending application and facility) are the message's MSH-5/6, and MSH-5/6 its MSH-3/4;
- MSH-9 is `ACK`, the message's trigger event, and - from 2.5 - the structure `ACK`: `ACK^A01^ACK`;
- MSH-10 is a control ID of its own; MSH-11 and MSH-12 are the message's, and MSH-18 too - `UNICODE UTF-8` when the message has none (2.3 and later);
- the delimiters are the message's own.

MSA-2 is the message's control ID (MSH-10).

## createNak()

```typescript
const errors = msg.validate();
const nak = msg.createNak(errors);
```

```
MSH|^~\&|EHR|HOSP|LAB|HOSP|20250601120000.123+0300||ACK^A01^ACK|...|P|2.5
MSA|AE|MSG1|PID-3 (Patient Identifier List) is required
ERR||PID^1^3|101^Required field missing^HL70357^^^^^^PID-3 (Patient Identifier List) is required|E
```

- **MSA-1** is `AR` when an error says the message cannot be taken at all - HL7 errors 200 to 203 (unsupported message type, event, processing ID, version) - or an `HL7Error`'s `ackCode` says so; otherwise `AE`.
- **MSA-3** is the first error's text.
- **One ERR per error**, laid out as the message's version defines ERR (below).
- `createNak(errors, 'accept')` makes an accept acknowledgment: `CE`, or `CR`.

Errors may be `HL7Error`s, any `Error` (taken as 207, application internal error, its `code` as the application error code) or strings.

### ERR by version

| Version      | Layout                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------ |
| 2.5 and later | ERR-2 the location (ERL: segment, sequence, field, repetition, component, sub-component), ERR-3 the code as a CWE of table 0357 - `101^Required field missing^HL70357`, the error's text as its original text (CWE-9) - and ERR-4 the severity |
| 2.2 to 2.4   | ERR-1 an ELD: `PID^1^3^101&Required field missing&HL70357&&<text>` - segment, sequence, field, and the code with its text |
| 2.1          | ERR-1 the code alone                                                                       |

A receiver of 2.3 reads ERR-1; one of 2.5 ERR-2 to ERR-4. A NAK written in another version's layout - as v1 of this library wrote 2.5's to everyone - reads as no error at all.

## HL7Error

The error that carries an HL7 error code and where it happened:

```typescript
import { HL7Error } from 'hl7v2';

throw new HL7Error('Patient record locked', { hl7ErrorCode: 207 });

new HL7Error('PID-3 is required', {
  hl7ErrorCode: 101,
  segmentType: 'PID',
  segmentSequence: 1, // the first PID
  fieldPosition: 3,
  repetitionIndex: 0, // from 0; written to ERL-4 from 1
  componentPosition: 1,
});

new HL7Error('Unsupported event', { hl7ErrorCode: 201 }); // a NAK with it is AR
new HL7Error('Not here', { hl7ErrorCode: 207, ackCode: 'AR' }); // AR explicitly
```

| Property                | Meaning                                                                   |
| ----------------------- | ------------------------------------------------------------------------- |
| `hl7ErrorCode`          | the code from table 0357 (`HL7_ERROR_CODES` has their texts)              |
| `ackCode`               | `AE` or `AR`, deciding a NAK's MSA-1 explicitly                           |
| `severity`              | `E` (default), `W` or `I`                                                 |
| `appErrorCode`          | an application error code, ERR-5                                          |
| `segmentType`           | the segment                                                               |
| `segmentSequence`       | the segment's occurrence among the message's segments of its type, **from 1** - ERL-2 |
| `fieldPosition`, `componentPosition`, `subComponentPosition` | positions, from 1               |
| `repetitionIndex`       | the field's repetition, **from 0** (written to ERL-4 from 1)              |
| `line`                  | for a parse error, the line of the message                                |

`HL7Segment.sequence` gives a segment's occurrence, for building a location.

### Error codes (table 0357)

| Code | Text                         | | Code | Text                          |
| ---- | ---------------------------- |-| ---- | ----------------------------- |
| 0    | Message accepted             | | 200  | Unsupported message type      |
| 100  | Segment sequence error       | | 201  | Unsupported event code        |
| 101  | Required field missing       | | 202  | Unsupported processing ID     |
| 102  | Data type error              | | 203  | Unsupported version ID        |
| 103  | Table value not found        | | 204  | Unknown key identifier        |
| 104  | Value too long               | | 205  | Duplicate key identifier      |
|      |                              | | 206  | Application record locked     |
|      |                              | | 207  | Application internal error    |

## On the network

`hl7v2-net` answers every message it receives with one of these: `AA` when the handlers succeed, a NAK when one throws (from its error) or when validation fails, `AR` for errors 200-203. In enhanced acknowledgment mode (MSH-15, MSH-16) it sends the accept and application acknowledgments the message asks for. The accept acknowledgment goes on receipt, or - with `acceptAcknowledgment: 'processed'`, for handlers that store the message - once the handlers have succeeded. A handler can answer itself with `req.send()`. See [Network](network.md#acknowledgments).
