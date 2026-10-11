# Migrating from v1 to v2

This guide covers the move from **1.x** (last: 1.9.0) to **2.0.0** of the three packages, which are released together:

- `hl7v2` - messages: parsing, writing, validation, typed access
- `hl7v2-net` - MLLP server and client
- `hl7v2-dictionary` - the HL7 v2 definitions

Version 2 brings the library in line with the HL7 v2 standard, and with what other HL7 systems send and expect: each behaviour below was checked against the standard and tested case by case. Many of the changes are fixes: v1 sent or read something a standard receiver would not.

**No public export was removed or renamed.** Most code keeps compiling and running. What changes is what goes over the wire, what is read from it, and - in TypeScript - what the compiler now checks for a message whose version it knows.

## Contents

- [Before you upgrade](#before-you-upgrade)
- [Checklist](#checklist)
- [Reading messages](#reading-messages)
- [Writing messages](#writing-messages)
- [Acknowledgments and errors](#acknowledgments-and-errors)
- [The dictionary](#the-dictionary)
- [hl7v2-net](#hl7v2-net)
- [TypeScript](#typescript)
- [New in v2](#new-in-v2)

## Before you upgrade

- **Node.js 20** or later.
- For TypeScript projects only: the type declarations need TypeScript 5.4 or later (`NoInfer` is used). JavaScript projects are not affected.
- Upgrade the three packages together, to the same version:

```bash
npm install hl7v2@^2 hl7v2-net@^2 hl7v2-dictionary@^2
```

## Checklist

Go through these if your code does what the left column says.

| If your code...                                                                                   | See                                                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| reads date/time values (DT, DTM, TS, TM), or relies on them being normalized                      | [Dates are kept as written](#dates-are-kept-as-written)                 |
| reads NM or SI values (numbers, set IDs)                                                          | [Numbers are read in HL7's form only](#numbers-are-read-in-hl7s-form-only) |
| compares written messages byte by byte, or sends to other HL7 systems                              | [Escaping](#escaping), [Line breaks](#line-breaks-in-values)            |
| sends messages in a character set other than UTF-8, or reads `MSH-18`                             | [Character sets](#character-sets)                                       |
| parses NAKs, or reads `ERR` / `HL7Error` locations                                                | [Acknowledgments and errors](#acknowledgments-and-errors)               |
| reads definitions from the dictionary, or changes them                                            | [The dictionary](#the-dictionary)                                       |
| sends messages with `MSH-15` / `MSH-16` valued                                                    | [Enhanced acknowledgment mode](#enhanced-acknowledgment-mode)           |
| receives messages with `MSH-15` valued, and stores them in its handlers                          | [Enhanced acknowledgment mode](#enhanced-acknowledgment-mode)           |
| answers requests from a handler with a message of its own                                         | [Answering from a handler](#answering-from-a-handler)                   |
| creates messages with `new HL7Message('2.5')`, or parses with `{ version }`, in TypeScript        | [TypeScript](#typescript)                                               |

## Reading messages

### Dates are kept as written

**v1** passed DT, DTM, TS and TM values through date coercion, which changed them: a negative offset lost its sign (`...1234-0500` became `...12340500`), precision was altered (`2025` became `20250101`, seconds were dropped), and a value in another form - `1980-05-12` - was taken as an ISO date in local time and rewritten (`19800512030000+0300`).

**v2** keeps a value read from HL7 text exactly as written, once it is checked against HL7's format. A value not in HL7's form (`1980-05-12`) is kept as written - never reinterpreted - and `validate()` reports it (102); with `strict` parsing it throws.

To work with dates, ask for a `Date`:

```typescript
msg.getDate('PID-7'); // Date, read in its offset - local time when it has none
field.getDate(); // on fields, repetitions and components too
```

New helpers: `parseHL7DateTime()`, `formatHL7DateTime()`, `formatHL7Date()`, `formatHL7Time()`.

A `Date` given in code is still converted, and so is an ISO 8601 string given in code (`setValue('2025-03-01T10:00:00Z')`) - only text read from a message is never reinterpreted.

### Numbers are read in HL7's form only

**v1** read NM and SI values as JavaScript reads numbers: `12,5` became `12`, `12a` became `12`, `1e3` became `1000`, `0x10` became `0`. The value changed, was written back changed, and passed validation.

**v2** takes a number in HL7's form only - an optional sign, digits and an optional decimal point (`-12.50`, `.5`); SI a non-negative integer. Anything else is kept as written and reported by `validate()` (102). A number a JavaScript `number` cannot hold exactly (`12345678901234567890`) stays a string.

**What to do:** a numeric value is `number | string` - check its type before arithmetic.

### OBX-5 is checked as OBX-2 says

OBX-5 (`VARIES`) is now validated as the data type OBX-2 names: `OBX|1|NM|...|12,5` is a data type error. Its value is still kept as written.

### An empty string is empty

`setValue('')` wrote nothing but left the field counted as present, so a required field cleared that way passed `validate()`. It is now empty.

### MSH-1 and MSH-2

`get('MSH-2')` gave nothing in v1: the encoding characters were split as data. They are kept as written, and set on a new message; `getSegmentObject('MSH')` now includes `FieldSeparator` and `EncodingCharacters`. The 2.7 truncation character (`MSH|^~\&#|`) is kept; v1 dropped it.

### Escaping

Escape sequences are read as the standard defines them:

| Sequence                                   | v1                                             | v2                                                      |
| ------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- |
| `\H\`, `\N\`, `\Zxx\`                       | stripped to their letters (`\H\bold\N\` -> `HboldN`) | kept as written - instructions for the receiver |
| `\.br\`, `\.sp\` ...                           | kept                                           | kept                                                    |
| `\Cxxyy\`, `\Mxxyyzz\`                     | decoded as character codes (`abc\C2842\def` -> `abc(Bdef`) | kept as written - character set switches        |
| `\Xdddd\` within text                      | the bytes, read as UTF-8 whatever the message's character set | the bytes, in the message's character set |
| `\X000d\` (a common form of a carriage return) | a NUL and a carriage return                    | a carriage return                                       |
| a value that is `\Xdddd\` as a whole       | binary data (a `Buffer`)                       | binary data (a `Buffer`), as before                     |

Escaping on writing uses the message's own delimiters: v1 looked for the default ones whatever `MSH-1`/`MSH-2` declared, so a message with custom delimiters had its own left unescaped.

### Character sets

- **`MSH-18` is honoured** when writing (`toBuffer()`, and on the network). v1 checked the raw value against iconv, so `8859/9` and every other HL7 name silently fell back to UTF-8.
- What the character set cannot hold is **transliterated** - `Şahin` goes out as `Sahin` in ASCII - instead of becoming `?`.
- `MSH-18` is read from its **first non-empty repetition** (`~UNICODE UTF-8` was read as empty, and the socket then overwrote it).
- `UNICODE` (deprecated in table 0211) is **UTF-8**, as other HL7 systems read it.
- `UNICODE UTF-16` is written **big-endian after `FE FF`**, as Java writes it; a received UTF-16/UTF-32 message is recognized by its byte order mark.
- A new message's `MSH-18` is `UNICODE UTF-8`, the table 0211 value (v1 wrote `UTF-8`, which is not one).
- A value the library does not know (`ANSI`) is read and written with `defaultCharset` (UTF-8 unless given), and a `warning` event is emitted. Map it when you know what it means:

```typescript
import { HL7_CHARSET_ENCODINGS } from 'hl7v2';

HL7_CHARSET_ENCODINGS['ANSI'] = 'windows-1254';
```

### Segments ending in LF

A message with no CR at all may end its segments in LF. With CR present, an LF is data.

## Writing messages

### Dates written with their offset

A `Date` is written in local time with milliseconds and its offset - `20250601120000.123+0300`. v1 wrote no offset, and a `Date` at midnight as a date alone.

### Line breaks in values

| Character in a value     | v1                       | v2                                                               |
| ------------------------ | ------------------------ | ---------------------------------------------------------------- |
| CR                       | `\X0D\` (`\X0D0A\` for CR LF) | `\X000d\` - the form HL7 systems commonly read as a carriage return |
| LF, tab                  | `\X0A\`, `\X09\`         | as they are                                                      |
| other control characters | `\Xhh\`                  | `\Xhh\` (a raw VT or FS would end an MLLP frame)                 |

Many receivers read v1's `\X0D\` as those five characters, not as a line break.

### A new message

`new HL7Message()` fills `MSH-11` with `P` (it is required), `MSH-18` with `UNICODE UTF-8`, and `MSH-1`/`MSH-2`.

### `set()` places a new segment where the structure has it

v1 appended a segment `set()` created at the end - an `NK1` set on an `ADT_A01` came after `PV1`, out of place. v2 inserts it where the message structure puts it, and creates a group's next repetition through a path:

```typescript
msg.set('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBSERVATION(1)/OBX-5', '140');
```

A path skipping a repetition, or one the structure cannot place, is refused.

## Acknowledgments and errors

### `createAck()` / `createNak()`

The response header is filled from the message it answers: sending and receiving application and facility swapped (v1 left them empty or wrong), processing ID and character set kept, the request's delimiters used, and - from 2.5 - `MSH-9-3` set to `ACK`.

### NAKs

| | v1 | v2 |
| --- | --- | --- |
| `ERR` layout | 2.5's in every version - a 2.3 receiver read no error | each version's: from 2.5 `ERR-2`/`-3`/`-4`; in 2.3/2.4 `ERR-1` as an ELD; in 2.1/2.2 the code |
| `ERR-3` (2.5+) | the code: `101` | the full CWE: `101^Required field missing^HL70357^^^^^^<text>` |
| `ERR-1` (2.2-2.4) | empty - 2.5's layout was written instead | the location and code as an ELD, the error's text as the code's alternate text: `PID^1^3^101&Required field missing&HL70357&&<text>` |
| acknowledgment code | always `AE` | `AR` for HL7 errors 200-203 (unsupported type, event, processing ID, version), or when an `HL7Error`'s `ackCode` says so |
| `MSA-3` | the last error's text | the first error's text; every error still has its `ERR` |

### Error locations

`HL7Error.segmentSequence` is now the segment's **occurrence among the message's segments of its type, from 1** - what `ERL-2` holds. In v1 it was the segment's index in the message, from 0 (the first PID was `2`, now `1`). `repetitionIndex` still counts from 0; it is written to `ERL-4` from 1, as the standard has it. A missing segment carries no sequence.

**What to do:** if you build `HL7Error`s yourself with a location, give `segmentSequence` from 1. `HL7Segment.sequence` gives a segment's occurrence.

## The dictionary

### Generated from HL7's own schemas

The dictionaries are generated from HL7's v2 XML schemas (2.1 to 2.9), completed from the previous source where the schemas leave something out. They now say what the standard says:

- a definition a version does not have is absent - `dictionaries['2.7'].types.CE` is `undefined`, a withdrawn field is gone and the fields after it keep their numbers;
- types follow the version: 2.6's `MSH-7` is a `DTM`, not a `TS`; 2.5's `ADT_A04` has an `SFT`;
- new versions: 2.8 with its own definitions (it served 2.7.1's), 2.8.1, 2.8.2 and 2.9;
- a trigger event is its structure's definition (`ADT_A04` is `ADT_A01`);
- new field attributes: `item`, `minLen`, `confLen`, `truncate`; HL7 tables (`dictionary.tables`, `tableValue()`).

**What to do:** code reading definitions by name should not assume one that the version does not define.

### Definitions are frozen

Definitions identical in several versions are one shared, frozen object. Change them through `extend()` or `overwrite*()`, which copy what they change - not in place. `extend()` merges the messages it is given instead of replacing the whole set.

### Group names

Each version keeps the standard's group names (2.3's `ORU_R01` group is `RESPONSE` again); a group lists the names other versions give it as `aliases`, and `getNode()`, `get()`/`set()` paths and routing find it by any of them. Segments repeated in one group are keyed with a number (`ROL`, `ROL2`), with `segment` naming the type. A choice is held as one item with `choice: true`.

### 2.5.1's `RSP_K21`

`QUERY_RESPONSE` repeats in 2.5.1's `RSP_K21` (and so in `RSP_K22`), as in 2.5: a find candidates response - IHE PDQ's `RSP^K22^RSP_K21` - held one patient in v1, the next ones out of place.

### Custom codecs

A data type's or field's `decode` is called with a second argument, `read`: `true` for a value from HL7 text, which must be in HL7's own form; `false` for one given in code. A codec that takes a second argument of its own - a validator from valgen, for one - must be wrapped:

```typescript
decode: (value, read) => myDecoder(value),
```

The dictionary no longer depends on valgen.

## hl7v2-net

### Acknowledgments are not answered

An `ACK` - or any response to a request this side sent - is no longer routed to the handlers or acknowledged. In v1 two endpoints acknowledged each other's `ACK` forever.

### `sendMessageWaitAck()`

- Resolves with the first message whose `MSA-2` is the request's control ID, whatever its type - an application response (`ADR^A19` for `QRY^A19`) included. v1 waited for an `ACK` only.
- Rejects when the connection closes, and after `responseTimeout` - which v1 never applied. `connectTimeout` and `keepAlive` are applied too.

### Enhanced acknowledgment mode

`MSH-15` and `MSH-16` are honoured (v1 sent one application `ACK` whatever they said):

- `MSH-15` (`AL`, `NE`, `ER`, `SU`) asks for an accept acknowledgment on receipt - `CA`, or `CE`/`CR` for a message that is not accepted.
- `MSH-16` decides the application acknowledgment; empty, it is sent.

**What to do:** a request with `MSH-15` valued now gets a `CA` first, and `sendMessageWaitAck()` resolves with it by default. To wait for the application one:

```typescript
await client.sendMessageWaitAck(msg, { acknowledgment: 'application' });
```

**Receiving, when your handlers store the message:** by default the `CA` goes out on receipt, before the handlers run. A sender asking for `MSH-15` = `AL` and `MSH-16` = `NE` - as some patient monitors do - then gets `CA` even when a handler fails, and does not send the message again: it is lost. v1 answered such a sender with the handler's `AA`/`AE`. To keep that guarantee, send the accept acknowledgment after the handlers:

```typescript
HL7Server.createServer(undefined, { acceptAcknowledgment: 'processed' });
Hl7Client.createClient({ host, port, acceptAcknowledgment: 'processed' });
```

`CA` then follows when the handlers succeed, `CE` when one throws, calls `res.failed()` or times out. See [Accepting after processing](network.md#accepting-after-processing).

### Answering from a handler

`HL7Response.finished` now means *this* request is answered - by `res.message`, or by any message whose `MSA-2` is the request's control ID. v1 counted any message the socket sent, so of two concurrent requests one went unanswered.

A handler answering with a message of its own sends it with `req.send()`. It still works with `socket.sendMessage()` for a message that came alone, but a message that came in a batch must be answered in the reply batch, which only `req.send()` does:

```typescript
server.use('QRY^A19', (req, res) => {
  req.send(buildAdr(req.message));
});
```

### Batches

A block holding a batch (`BHS ... BTS`, or `FHS ... FTS`) is now taken as one: each message is processed as if it came alone, and the batch is answered with a batch of acknowledgments (`batchAcknowledgment`: `'all'`, `'errors'` or `'none'`). v1 tried to read such a block as one message. See `sendBatch()` / `sendBatchWaitAck()` and the [mllp-batch example](../examples/mllp-batch).

### Other fixes

- **TLS works**: the server read the encrypted socket, so no message ever arrived over TLS in v1; a TLS client is ready after the handshake, so `connect()` rejects a server it does not trust.
- A frame over `maxBufferSize` closes the connection with an error; v1 left it open and deaf.
- Handler priorities are sorted as numbers (v1: `10` ran before `2`).
- The response-timeout NAK is not sent after a handler has answered.
- Received messages can be validated (`validate: true`): one that fails is answered with a NAK listing its errors and not routed.

## TypeScript

v2 types a message by its version when the compiler knows it. The type parameters have defaults, so code that does not name a version compiles as before.

### When a message is typed

A message is typed when its version is a literal:

```typescript
new HL7Message('2.5'); // HL7Message<'2.5'>
HL7Message.parse(text, { version: '2.5' }); // HL7Message<'2.5'>; throws if MSH-12 differs
HL7Message.parse(text).asVersion('2.5'); // checked, then typed
HL7Message.parse(text); // untyped, as in v1
```

For a typed message the compiler checks:

- `getSegmentObject()`, `toObject()` and `assign()` - the version's own interfaces;
- `field()` - only the fields the version defines for the segment;
- `comp()`, `getValue()`, `setValue()` - only the components the field's data type has;
- `get()`, `getDate()`, `set()` - the path's segment, field, component and sub-component.

### What may stop compiling

Code that creates a message with a literal version - `new HL7Message('2.5')` - and then:

- uses a field the version does not define (`DG1-2` in 2.6, `MSH-26` before 2.9);
- passes a position held in a `number` variable to `field()`;
- passes a component beyond the field's type (`pid.field(8).getValue(2)` - PID-8 is a primitive);
- assigns an object with a misspelt name, where v1 failed only at run time.

A typed message, segment or field is still assignable to the untyped one (`HL7Message`, `HL7Segment`, `HL7Field`), so it can be passed wherever those are taken. For a position known only at run time, use the segment untyped:

```typescript
const seg: HL7Segment = msg.getSegment('DG1')!;
seg.field(position);
```

A path in a `string` variable is not checked.

### Type changes

- `HL7Message<V>`, `HL7Segment<P, O, C>`, `HL7Field<K>` and `HL7Repetition<K>` take type parameters, all defaulted.
- `segment.assign()` and `msg.assign()` take the object type from the version (`NoInfer`); `assign<T>()` with an explicit type still works.
- In the interfaces uniting every version (`PIDObject`, `XPNObject` ...), a sub-component is `string` unless some version makes it a number (NM, SI) - v1 typed every sub-component `number | string`.

## New in v2

Not breaking - listed so you know they are there:

- **Paths**: `get()`, `set()`, `getDate()` by path (`PID-5-1`, `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX-5`).
- **Validation**: `validate()` - structure, required fields, data types, lengths, tables (`tables: true`).
- **Typed objects**: segments (`getSegmentObject()`) and whole messages (`toObject<'ORU_R01'>()`), by version.
- **Batch files**: `HL7BatchFile`, `HL7Batch`.
- **Routing**: `server.use('ADT^A01', handler)`, by type, event, structure or a function; `onError()`.
- **Batches over MLLP**: `sendBatch()`, `sendBatchWaitAck()`, `batchAcknowledgment`.
- **Character sets**: `toBuffer()`, `charset`, `defaultCharset`, `warning` events.
- **Examples**: fourteen runnable examples in [examples](../examples), checked in CI.
