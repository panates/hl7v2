# hl7v2 - API reference

This page lists every public export of the `hl7v2` package: the message model (`HL7Message`, `HL7Segment`, `HL7Field`, `HL7Repetition`, `Hl7Component`, `Hl7SubComponent`), the structure tree (`HL7MessageNode`), errors (`HL7Error`), batches (`HL7Batch`, `HL7BatchFile`), the functions behind paths, objects, validation, escaping and character sets, the constants, and the exported types. Signatures, defaults and behaviour are those of the source in `packages/hl7v2/src`. The package also re-exports everything from `hl7v2-dictionary`; the dictionary items this page refers to are listed in [Re-exported from hl7v2-dictionary](#re-exported-from-hl7v2-dictionary). For explanations and longer examples, see the guide pages linked from each section.

## Contents

- [HL7Message](#hl7message)
- [HL7Segment](#hl7segment)
- [HL7Field](#hl7field)
- [HL7Repetition](#hl7repetition)
- [Hl7Component](#hl7component)
- [Hl7SubComponent](#hl7subcomponent)
- [HL7MessageNode](#hl7messagenode)
- [HL7Error](#hl7error)
- [HL7Batch](#hl7batch)
- [HL7BatchFile](#hl7batchfile)
- [Functions](#functions)
  - [Paths](#paths): `parseHL7Path`, `findPathSegment`, `getPathValue`, `setPathValue`
  - [Objects](#objects): `segmentToObject`, `assignSegment`
  - [Validation](#validation): `validateMessage`
  - [Escaping](#escaping): `hl7Escape`, `hl7UnEscape`
  - [Character sets](#character-sets): `charsetFromMSH18`, `findHL7Encoding`, `resolveHL7Encoding`, `encodeHL7String`, `detectByteOrderMark`
  - [Segments](#segments): `isHeaderSegment`
- [Constants](#constants)
- [Types](#types)
- [Re-exported from hl7v2-dictionary](#re-exported-from-hl7v2-dictionary)

---

## HL7Message

`class HL7Message<V extends HL7Version = HL7Version>`

An HL7 v2 message: an ordered list of segments, the delimiters it is written with, and the dictionary of its version. `V` is the message's version when the compiler knows it - `new HL7Message('2.5')`, `HL7Message.parse(text, { version: '2.5' })`, `msg.asVersion('2.5')` - and types segments, segment objects, message objects and paths by that version's definitions. Without it (`HL7Version`), any field, component and path is accepted, and objects are typed as the union of every version. See [Messages](../messages.md) and [TypeScript](../typescript.md).

### Constructor

`new HL7Message<V>(version?: V, dictionaries?: Record<string, HL7Dictionary>)`

Creates a message with only an MSH segment. `version` defaults to `'2.7.1'`; `dictionaries` maps versions to dictionaries; a version it does not have takes the default dictionary of `hl7v2-dictionary`, so the dictionaries given replace the defaults for their versions only. The message is read with the dictionary of its version, or of the nearest version below it (`findNearestHL7Version()`: 2.5.2 is read as 2.5.1). The MSH is filled as `clear()` fills it.

```typescript
import { HL7Message } from 'hl7v2';

const msg = new HL7Message('2.5');
msg.toHL7String();
// "MSH|^~\&|||||20250102060405.123+0300|||a37f27c6|P|2.5||||||UNICODE UTF-8\r"
```

### Properties

- `fieldSeparator: string` - Field separator, MSH-1. Default `|`.
- `componentSeparator: string` - Component separator, first character of MSH-2. Default `^`.
- `repetitionSeparator: string` - Repetition separator, second character of MSH-2. Default `~`.
- `escapeCharacter: string` - Escape character, third character of MSH-2. Default `\`.
- `subComponentSeparator: string` - Sub-component separator, fourth character of MSH-2. Default `&`.
- `truncationCharacter: string | undefined` - The fifth encoding character of v2.7 and later (`#`), when the parsed MSH-2 declares one. Written back after the other four.
- `version: HL7Version` (read-only) - The version the message was created or parsed with: MSH-12 of a parsed message.
- `dictionary: HL7Dictionary` (read-only) - The dictionary the message is read with: that of `version`, or of the nearest version below it.
- `segments: HL7Segment[]` (read-only) - All segments, in order. The array itself can be changed.
- `header: HL7MessageSegment<V, 'MSH'>` (read-only) - The MSH segment.
- `messageType: string` (read-only) - MSH-9.1 and MSH-9.2 joined with `^`: `'ORU^R01'`. MSH-9.3 is not included. An empty string when there is no MSH-9 field.
- `controlId: string` (read-only) - MSH-10 as HL7 text.
- `charset: string | undefined` (read-only) - The character set the message is encoded with: the first component of the first non-empty repetition of MSH-18. A new message of 2.3 or later has `UNICODE UTF-8` (`DEFAULT_HL7_CHARSET`); one of 2.1 or 2.2, which have no MSH-18, and a parsed message without MSH-18 has `undefined`. See [Character sets and escaping](../encoding.md).
- `structureName: string | undefined` (read-only) - The name of the message structure the message follows: the one MSH-9.3 names when the dictionary has it (`ADT^A04^ADT_A01` is an `ADT_A01`); otherwise MSH-9.1 and MSH-9.2 joined with `_` (`ADT_A04`) when the dictionary has that name. `undefined` when the dictionary has neither. See [Message structures](../structure.md).
- `static readonly encodingMapping: Record<string, string>` - Deprecated. The same object as `HL7_CHARSET_ENCODINGS`.

### Methods

#### .parse() (static)

`static parse<W extends HL7Version = HL7Version>(input: string | Buffer, options?: HL7MessageParseOptions & { version?: W }): HL7Message<W>`

Parses a message from a string or a `Buffer`. A `Buffer` is decoded with the character set MSH-18 names, or with the encoding of a byte order mark; an MLLP start block (VT) is skipped and the data is cut at an end block (FS). Segments end at CR; a message with no CR at all is split at LF. A CR LF pair is read as one CR.

With `options.version`, the message must be of that version as `hasVersion()` decides it; otherwise an `HL7Error` with `hl7ErrorCode` 203 is thrown. The result is then typed by that version.

Throws an `HL7Error` with code 100 and `line` 1 when the input does not start with MSH. With `options.strict`, a value its data type cannot read throws an `HL7Error` with code 102 and its location; without it the value is kept as text (and `validate()` reports it). An error thrown while parsing carries `line`, the 1-based line number of the segment.

```typescript
const msg = HL7Message.parse(text, { version: '2.5' }); // HL7Message<'2.5'>
const any = HL7Message.parse(buffer, { defaultCharset: '8859/9' });
```

#### .parse()

`parse(input: string | Buffer, options?: HL7MessageParseOptions): void`

Parses into this message: clears it, sets the delimiters and the version from the input's MSH, and reads the segments. The version check of the static `parse()` is not done here.

#### .parseRaw() (static)

`static parseRaw(input: string | Buffer, defaultCharset?: string): { header: string; fieldSeparator: string; componentSeparator: string; repetitionSeparator: string; escapeCharacter: string; subComponentSeparator: string; truncationCharacter?: string; encoding: string; version: HL7Version; messageType: string; data: string }`

Reads a message's MSH line and decodes the input without parsing segments. `header` is the MSH line, `encoding` the iconv-lite encoding used (from a byte order mark, MSH-18, or `defaultCharset`, UTF-8 unless given), `version` MSH-12, `messageType` MSH-9 as text, and `data` the decoded text without MLLP framing. Throws an `HL7Error` (100) when the input does not start with MSH.

#### .asVersion()

`asVersion<W extends HL7Version>(version: W): HL7Message<W>`

Returns the same message typed as of `version`. Throws an `HL7Error` with `hl7ErrorCode` 203 when `hasVersion(version)` is false.

```typescript
const msg = HL7Message.parse(text).asVersion('2.5');
msg.getSegmentObject('PID')?.PatientName; // typed by 2.5's PID
```

#### .hasVersion()

`hasVersion(version: HL7Version): boolean`

Whether the message is read with the given version's definitions: true when `findNearestHL7Version()` gives the same dictionary version for both. A `2.5.2` message has version `2.5.1`; a `2.5` message does not.

#### .clear()

`clear(version?: HL7Version): void`

Removes every segment and resets the delimiters to their defaults. With `version`, the message changes to that version and dictionary. Then adds an MSH with MSH-1 and MSH-2 (the delimiters), MSH-7 (the current date and time), MSH-10 (a random 8-character ID), MSH-11 (`P`), MSH-12 (`version`) and, from 2.3 (when the version's MSH defines it), MSH-18 (`UNICODE UTF-8`) set.

#### .addSegment()

`addSegment<S extends string>(segmentType: S, index?: number): HL7MessageSegment<V, S>`

Creates a segment of the given type and adds it at `index` in `segments`, or at the end when `index` is not given or not less than the segment count. The segment's definition comes from the message's dictionary; an unknown type (a Z segment) gets no field definitions and its fields are read as `ST`.

```typescript
const pid = msg.addSegment('PID');
pid.field(PIDSegment.PatientName).setValue('DOE', 1);
```

#### .getSegment()

`getSegment<S extends string>(segmentType: S, indexOrAfter?: number | HL7Segment): HL7MessageSegment<V, S> | undefined`

Returns a segment of the given type: the first one; with a number, the one at that index among segments of the type (from 0); with a segment, the next one of the type after it. `undefined` when there is none.

```typescript
const firstObx = msg.getSegment('OBX');
const secondObx = msg.getSegment('OBX', 1);
const nextObx = msg.getSegment('OBX', firstObx);
```

#### .getSegmentFromLast()

`getSegmentFromLast<S extends string>(segmentType: S, indexOrAfter?: number | HL7Segment): HL7MessageSegment<V, S> | undefined`

As `getSegment()`, searching from the last segment backwards: an index counts from the last one, and a segment given returns the one before it.

#### .get()

`get<P extends string>(path: HL7CheckedPath<V, P>): any`

Returns the value at a path: `'PID-5-1'`, `'OBX(2)-5'`, `'PID-3(1)-1'`, `'/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX(0)-5'`. A path ending at a segment or field gives its first component's value, one ending at a component its first sub-component's. `undefined` when the segment, field or repetition is not there. Throws when the path is not valid. For a message of a known version, a path naming a field, component or sub-component that version does not define is a compile error. See [Paths](../paths.md) and [`parseHL7Path()`](#parsehl7path).

```typescript
msg.get('PID-5-1'); // 'DOE'
msg.get('PID-3(1)-1'); // ID of PID-3's second repetition
msg.get('OBX(1)-5'); // value of the second OBX
msg.get('/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION(1)/OBX-5');
```

#### .getDate()

`getDate<P extends string>(path: HL7CheckedPath<V, P>): Date | undefined`

The value at a path as a `Date`: a `Date` value as it is, a DT, DTM or TS string parsed with `parseHL7DateTime()` (in its offset, or as local time without one). `undefined` when empty. Throws a `TypeError` when the value is not a valid HL7 date/time. See [Dates and numbers](../dates-and-numbers.md).

```typescript
msg.getDate('PID-7'); // date of birth
msg.getDate('MSH-7');
```

#### .set()

`set<P extends string>(path: HL7CheckedPath<V, P>, value: any): this`

Sets the value at a path (see `get()`). The path must name a field; otherwise an `Error` is thrown. A segment the message does not have is added where the message structure puts it: a missing NK1 goes before PV1 in an ADT_A01, and a path through groups can add a group's next repetition, such as `/ORDER_OBSERVATION/OBSERVATION(2)/OBX` after the last observation of that order. Only the next occurrence can be added: a path that skips one (`OBX(3)` when there are two) is refused with an `Error`, as is a segment that, once added, would not be where the path says. A segment the structure does not have (a Z segment, or a message whose structure is unknown) is added after the last segment of the node the path reaches - at the end of the message for a path without groups. Returns the message, for chaining.

```typescript
msg.set('PID-5-2', 'JANE').set('NTE-3', 'note');
msg.set('/PATIENT_RESULT/ORDER_OBSERVATION/OBSERVATION(2)/OBX-5', '99');
```

#### .getSegmentObject()

`getSegmentObject<K extends keyof HL7SegmentObjects>(segmentType: K, index?: number): HL7MessageSegmentObject<V, K> | undefined`

The segment `getSegment(segmentType, index)` returns, as a plain object (see `HL7Segment.toObject()`). `undefined` when there is none. Typed by the segment ID, and for a message of a known version by that version's definitions. See [Objects](../objects.md).

```typescript
const pid = msg.getSegmentObject('PID');
pid?.PatientName?.[0]?.FamilyName?.Surname;
```

#### .toObject()

`toObject<K extends string = string>(): HL7MessageObject<V, K>`

The message as a plain object, shaped as its structure is: segments by their IDs, groups by their names, arrays where the structure lets them repeat. Each segment is its `toObject()`. A Z segment is in the object of the group it is in (see `buildStructureTree()`), by its ID, as an array; unless the structure has an `anyZSegment` or `anyHL7Segment` placeholder, which then takes it. Other segments the structure has no place for are kept at the top level by their IDs, as arrays. A message whose structure the dictionary does not know is its segments by their IDs, MSH as an object and every other segment as an array. `K` is the structure or message type (`'ORU_R01'`, `'ADT_A04'`); for a message of a known version the result is typed by that structure in that version. See [Objects](../objects.md).

```typescript
const oru = HL7Message.parse(text, { version: '2.5' }).toObject<'ORU_R01'>();
for (const result of oru.PATIENT_RESULT ?? []) {
  for (const order of result.ORDER_OBSERVATION ?? []) {
    for (const { OBX } of order.OBSERVATION ?? []) {
      console.log(OBX?.ObservationIdentifier?.Text, OBX?.ObservationValue);
    }
  }
}
```

#### .assign()

`assign<K extends string = string>(object: NoInfer<HL7MessageObject<V, K>>): this`

Sets the message from an object shaped as `toObject()` gives it. MSH is assigned with `HL7Segment.assign()` (fields not given are kept); every other segment is removed and the object's segments are added in the order the structure has them. The structure is the one the message's MSH-9 names after `MSH` is assigned. In a group's object, a Z segment key (`Z` and two letters or digits) the group's definition does not have is written after that group's own segments, where `toObject()` puts it. A top-level key the structure has no place for and that looks like a segment ID (three characters, `[A-Z][A-Z0-9]{2}`) is added at the end as segments of that type. Returns the message.

```typescript
const msg = new HL7Message('2.5');
msg.assign<'ADT_A01'>({
  MSH: { MessageType: { MessageCode: 'ADT', TriggerEvent: 'A01', MessageStructure: 'ADT_A01' } },
  EVN: { RecordedDateTime: { Time: '20250102' } },
  PID: { SetID: 1, PatientName: [{ FamilyName: { Surname: 'DOE' }, GivenName: 'JOHN' }] },
  PV1: { PatientClass: 'I' },
});
```

#### .validate()

`validate(options?: HL7ValidateOptions): HL7Error[]`

Checks the message against its version's dictionary and returns the problems as `HL7Error`s carrying the HL7 error code (table 0357), severity `E` and the location, ready for `createNak()`. An empty array means none were found. It calls [`validateMessage()`](#validatemessage). See [Validation](../validation.md).

- `100` segment sequence error: a required segment or group missing, or a segment the structure has no place for. Z segments are let through: the structure is matched around them, as `buildStructureTree()` matches it.
- `101` required field missing: a field, or a component of a field that is there, the version marks required.
- `102` data type error: a value its type cannot read, or more repetitions than the field allows.
- `103` table value not found, only with `tables: true`: a code of an `ID` field that its HL7 table does not have. `IS` fields, whose tables are the site's own, are not checked.
- `104` value too long: a repetition longer than the field's maximum length.

The structure is matched in order and greedily, without backtracking, as `buildStructureTree()` matches it. MSH-1 and MSH-2 are not checked. OBX-5 is checked as the data type OBX-2 names.

```typescript
const errors = msg.validate();
if (errors.length) reply = msg.createNak(errors);
```

#### .buildStructureTree()

`buildStructureTree(): HL7MessageNode`

Builds the message's structure tree from the dictionary: a root node named after the structure (`structureName`, or MSH-9.1 and MSH-9.2 joined with `_`), holding segments and group nodes in order. Segments are matched in order and greedily, without backtracking; a group repeats while it matches; a choice takes one of its alternatives each time it occurs; the placeholders `anyHL7Segment` and `anyZSegment` match any segment and any Z segment. Z segments are matched around: they are left out of the match, then each is put back after the segment before it, in that segment's group (a Z segment first in the message goes at the end of the root). A structure with an `anyZSegment` or `anyHL7Segment` placeholder matches Z segments in place instead. Other segments left over are appended to the root. When the dictionary has no definition for the structure, the root is named `MESSAGE` and holds every segment. See [Message structures](../structure.md).

```typescript
const tree = msg.buildStructureTree();
const obx = tree.getNode('PATIENT_RESULT')?.getNode('ORDER_OBSERVATION')
  ?.getNode('OBSERVATION', 1)?.getSegment('OBX');
```

#### .createAck()

`createAck(ackCode?: AcknowledgmentCode, textMessage?: string): HL7Message`

Creates an acknowledgment of this message: MSH and MSA. `ackCode` defaults to `'AA'`. MSA-1 is `ackCode`, MSA-2 this message's MSH-10, MSA-3 `textMessage` when given. The header is filled from this message: sending and receiving application and facility swapped; the delimiters, MSH-11 (processing ID) and the version kept; MSH-18 copied when this message has a character set (otherwise, from 2.3, the ACK's own `UNICODE UTF-8` is kept); MSH-9 is `ACK`, the trigger event of this message, and from 2.5 the structure `ACK`; MSH-10 a new ID. The returned message is untyped (`HL7Message`). See [Acknowledgments](../acknowledgments.md).

```typescript
const ack = msg.createAck(); // MSA|AA|<control ID>
const ae = msg.createAck('AE', 'Patient not found');
```

#### .createNak()

`createNak(errors: (Error | string)[], kind?: 'application' | 'accept'): HL7Message`

Creates a negative acknowledgment with the same header as `createAck()`, an MSA, and one ERR segment per error (added with `addError()`). With `kind` `'application'` (the default) MSA-1 is `AR` (reject) when an error says the message cannot be taken at all, otherwise `AE`. With `'accept'`, for an enhanced-mode accept acknowledgment, it is `CR` or `CE`. An error rejects the message when it is an `HL7Error` with `ackCode: 'AR'`, or one without `ackCode` whose `hl7ErrorCode` is 200-203 (unsupported message type, event, processing ID or version). MSA-3 is the first error's text. See [Acknowledgments](../acknowledgments.md).

```typescript
const nak = msg.createNak([
  new HL7Error('Patient ID missing', { hl7ErrorCode: 101, segmentType: 'PID', fieldPosition: 3 }),
]);
// MSA|AE|MSG0001|Patient ID missing
// ERR||PID^^3|101^Required field missing^HL70357^^^^^^Patient ID missing|E
```

#### .addError()

`addError(error: Error | string): void`

Adds an ERR segment for the error, laid out as the message's version defines ERR, and adds an MSA when the message has none. MSA-3 is set to the error's text when it is empty. The code is the error's `hl7ErrorCode`, or 207 (application internal error).

- From 2.5 (ERR-3 defined): ERR-2 the location from the `HL7Error` (segment ID, segment sequence, field position, repetition counted from 1, component, sub-component); ERR-3 the code, its table 0357 text, `HL70357`, and the error's text as original text (ERR-3.9); ERR-4 the severity (default `E`); ERR-5 `appErrorCode`, or the error's `code` property. When `NODE_ENV` starts with `dev`, ERR-7 (diagnostic information) holds the stack.
- Before 2.5, when ERR-1 is an ELD composite (2.2 to 2.4): ERR-1 holds the segment ID, sequence, field position, and the coded error (code, table text or the error's text, `HL70357`, and the error's text as alternate text).
- When ERR-1 is a primitive ID (2.1): ERR-1 holds the code alone.

#### .toHL7String()

`toHL7String(options?: HL7MessageSerializeOptions): string`

Serializes the message: segments joined with CR, with a CR after the last. Empty segments are left out. See [`HL7MessageSerializeOptions`](#hl7messageserializeoptions).

#### .toBuffer()

`toBuffer(options?: HL7MessageEncodeOptions): Buffer`

Serializes the message and encodes it with the character set in MSH-18 (`ASCII`, `8859/1`, `8859/9`, `UNICODE UTF-8` ...), with [`encodeHL7String()`](#encodehl7string). A character the character set cannot represent is transliterated to its closest ASCII form (`Şahin` becomes `Sahin` in `ASCII`) instead of becoming `?`. A character set this library does not know is encoded with `options.defaultCharset`, UTF-8 unless given. `UNICODE UTF-16` is written big-endian after a byte order mark. See [Character sets and escaping](../encoding.md).

```typescript
msg.header.field(MSHSegment.CharacterSet).setValue('ASCII');
const buf = msg.toBuffer();
```

---

## HL7Segment

`class HL7Segment<P extends number = number, O extends object = Record<string, any>, C extends { [field: number]: number } = { [field: number]: number }>`

A segment of a message. `P` is the field positions `field()` takes, `O` the object `toObject()` gives and `assign()` takes, `C` the component positions of each field. They are any number and any object, or, for a segment of a message whose version the compiler knows (`HL7MessageSegment<V, S>`), what that version defines: `getSegment('DG1')` of a 2.6 message does not take DG1-2, withdrawn in 2.6. Segments are created with `HL7Message.addSegment()` or by parsing.

### Constructor

`new HL7Segment(message: HL7Message<any>, segmentType: string)`

Creates a segment for the message, with the definition its dictionary has for `segmentType` (none for an unknown type). The segment is not added to the message's `segments`.

### Properties

- `message: HL7Message<any>` - The message the segment belongs to.
- `segmentType: string` - The segment ID: `'PID'`, `'ZPI'`.
- `definition: HL7SegmentDefinition` (read-only) - The segment's definition in the message's dictionary; `{ fields: {} }` for an unknown segment.
- `fields: HL7Field[]` (read-only) - The fields created so far, by position minus one. Positions not reached are empty slots.
- `index: number` (read-only) - The segment's index in `message.segments`; -1 when it is not there.
- `sequence: number` (read-only) - The segment's occurrence among the message's segments of its type, from 1 - ERL-2's segment sequence. A segment not in the message yet counts as the next one.

### Methods

#### .field()

`field<F extends P>(fieldPos: F): HL7Field<C[F] & number>`

Returns the field at a position, from 1, creating it when needed. The field takes its definition from the segment's; a position the segment does not define is read as `ST`. Throws an `Error` for a position below 1.

```typescript
const name = pid.field(PIDSegment.PatientName);
name.getValue(1); // family name
```

#### .defineField()

`defineField(position: number, def: HL7FieldDefinition): HL7Field`

Replaces the field at a position with a new, empty one of the given definition (type `ST` when `def.type` is empty). Throws for a position below 1. Use it to read a Z segment's field as a data type other than `ST`.

#### .toObject()

`toObject<T extends object = O>(): T`

The segment as a plain object keyed by the field enum's member names (`PIDSegment.PatientName` gives `PatientName`). A composite value is an object keyed by its data type's enum (`XPNType.FamilyName` gives `FamilyName`); a composite component is an object keyed by its sub-components. A field the version lets repeat is an array. Empty values are left out; HL7's null (`""`) is `null`. A position no enum names (a Z segment's field) is keyed by its number. Uses [`segmentToObject()`](#segmenttoobject). See [Objects](../objects.md).

```typescript
const pid = msg.getSegment('PID')!.toObject();
pid.PatientName?.[0]?.GivenName;
```

#### .assign()

`assign<T extends object = O>(object: NoInfer<T>): this`

Sets fields from an object shaped as `toObject()` makes it. A field given is replaced; a field not given is kept; `null` writes HL7's null (`""`); `undefined` clears the field. Keys are enum member names or field numbers; an unknown key throws an `Error`. MSH-1 and MSH-2 are skipped. Uses [`assignSegment()`](#assignsegment). Returns the segment.

```typescript
msg.getSegment('PID')!.assign({
  PatientName: [{ FamilyName: { Surname: 'ROE' }, GivenName: 'ANN' }],
  AdministrativeSex: 'F',
});
```

#### .clear()

`clear(): void`

Removes every field.

#### .toHL7String()

`toHL7String(options?: Hl7SegmentSerializeOptions): string`

Serializes the segment: the segment ID and its fields joined with the field separator, without trailing empty fields. For MSH, FHS and BHS the encoding characters (and the truncation character, when set) are written after the segment ID, as MSH-2.

#### .parse() (static)

`static parse(message: HL7Message<any>, input: string, options?: Hl7SegmentParseOptions): HL7Segment`

Parses one segment line with the message's delimiters. The segment is not added to the message. For MSH, FHS and BHS, field 1 is the field separator and field 2 the encoding characters, kept as text.

---

## HL7Field

`class HL7Field<K extends number = number>`

A field of a segment: one or more repetitions. `K` is the component positions `comp()`, `getValue()`, `setValue()` and `getDate()` take: any number, or for a field of a message whose version the compiler knows, those of the field's data type in that version (a primitive's only position is 1). Methods without a repetition argument act on the first repetition.

### Constructor

`new HL7Field(segment: HL7Segment, position: number, def: HL7FieldDefinition)`

Throws an `Error` when the message's dictionary has no data type `def.type`. Fields are normally created by `HL7Segment.field()`.

### Properties

- `segment: HL7Segment` (read-only) - The segment the field belongs to.
- `position: number` (read-only) - The field's position in the segment, from 1.
- `message: HL7Message` (read-only) - The segment's message.
- `definition: HL7FieldDefinition` (read-only) - The field's definition: data type, optionality, repetitions, length, table.
- `typeDef: HL7DataTypeDefinition` (read-only) - The definition of the field's data type.
- `isPrimitive: boolean` (read-only) - Whether the data type has no components.
- `repetitions: HL7Repetition<K>[]` (read-only) - The repetitions.

### Methods

#### .repetition()

`repetition(repetitionIndex?: number): HL7Repetition<K>`

Returns the repetition at an index, from 0 (default 0), adding empty repetitions up to it when needed.

```typescript
pid.field(PIDSegment.PatientIdentifierList).repetition(1).setValue('67890', 1);
```

#### .rep()

`rep(repetitionIndex?: number): HL7Repetition<K>`

Alias of `repetition()`.

#### .add()

`add(): HL7Repetition<K>`

Adds an empty repetition at the end and returns it.

#### .component()

`component(position: K): Hl7Component`

Returns a component of the first repetition, from 1, creating both when needed.

#### .comp()

`comp(position: K): Hl7Component`

Alias of `component()`.

#### .subComponent()

`subComponent(componentPos: K, subComponentPos: number): Hl7SubComponent`

Returns a sub-component of a component of the first repetition (see `Hl7Component.subcomp()`: a primitive component has only sub-component 1, its value).

#### .subcomp()

`subcomp(componentPos: K, subComponentPos: number): Hl7SubComponent`

Alias of `subComponent()`.

#### .getValue()

`getValue(component?: K, subComponent?: number): any`

The value of a component (default 1), or of one of its sub-components, in the first repetition. `undefined` when there is none. Values are decoded by their data type: an `NM` or `SI` value is a number, a date/time is kept as its HL7 text. See [Dates and numbers](../dates-and-numbers.md).

```typescript
const name = pid.field(PIDSegment.PatientName);
name.getValue(); // family name: component 1, its first sub-component
name.getValue(1, 1); // the same
name.getValue(2); // given name
```

#### .getDate()

`getDate(component?: K, subComponent?: number): Date | undefined`

The value of a component (default 1) or sub-component of the first repetition as a `Date`, for a DT, DTM or TS value: read in its offset, or as local time without one. `undefined` when empty. Throws a `TypeError` for a value that is not a valid HL7 date/time.

#### .setValue()

`setValue(value: any, component?: K, subComponent?: number): any`

Sets the value of a component (default 1), or of one of its sub-components, in the first repetition, creating them when needed. The value is a value, not HL7 text: delimiters in it are escaped when written (`setValue('DOE^JOHN')` writes `DOE\S\JOHN`). `null` writes HL7's null (`""`); a `Date` is written in the data type's format. Returns the first repetition.

```typescript
const name = pid.field(PIDSegment.PatientName);
name.setValue('DOE', 1);
name.setValue('JOHN', 2);
```

#### .clear()

`clear(): void`

Removes every repetition.

#### .isEmpty()

`isEmpty(): boolean`

Whether every repetition is empty.

#### .fromHL7String()

`fromHL7String(value: string, options?: Hl7FieldParseOptions): void`

Replaces the field's content with HL7 text, split at the message's repetition separator.

#### .toHL7String()

`toHL7String(options?: Hl7FieldSerializeOptions): string`

Serializes the field: repetitions joined with the repetition separator, without trailing empty ones. When `options.serializeField` is given, its result is returned instead.

---

## HL7Repetition

`class HL7Repetition<K extends number = number>`

One repetition of a field. `K` is the field's component positions (see `HL7Field`).

### Constructor

`new HL7Repetition(field: HL7Field<any>)`

Repetitions are normally created by `HL7Field.repetition()` and `HL7Field.add()`.

### Properties

- `field: HL7Field<any>` (read-only) - The field the repetition belongs to.
- `message: HL7Message` (read-only) - The field's message.
- `segment: HL7Segment` (read-only) - The field's segment.
- `components: Hl7Component[] | undefined` (read-only) - The components created so far, by position minus one.
- `index: number` (read-only) - The repetition's index in the field, from 0.

### Methods

#### .component()

`component(position?: K): Hl7Component`

Returns the component at a position, from 1 (default 1), creating it when needed. A position the data type does not define is read as `ST`, except position 1 of a primitive field, which takes the field's own definition. Throws an `Error` for a position below 1.

#### .comp()

`comp(position: K): Hl7Component`

Alias of `component()`.

#### .subComponent()

`subComponent(componentPos: K, subComponentPos: number): Hl7SubComponent`

Returns a sub-component of a component (see `Hl7Component.subcomp()`).

#### .subcomp()

`subcomp(componentPos: K, subComponentPos: number): Hl7SubComponent`

Alias of `subComponent()`.

#### .getValue()

`getValue(component?: K, subComponent?: number): any`

The value of a component (default 1), or of one of its sub-components. `undefined` when there is none.

```typescript
const ids = pid.field(PIDSegment.PatientIdentifierList);
ids.rep(1).getValue(1); // ID number of the second identifier
```

#### .getDate()

`getDate(component?: K, subComponent?: number): Date | undefined`

As `getValue()`, read as a `Date` (see `HL7Field.getDate()`).

#### .setValue()

`setValue(value: any, component?: K, subComponent?: number): this`

Sets the value of a component (default 1) or of one of its sub-components. Returns the repetition.

```typescript
pid.field(PIDSegment.PatientIdentifierList).rep(1).setValue('67890', 1).setValue('PI', 5);
```

#### .clear()

`clear(): void`

Removes every component.

#### .isEmpty()

`isEmpty(): boolean`

Whether every component is empty.

#### .fromHL7String()

`fromHL7String(value: string, options?: HL7RepetitionParseOptions): void`

Replaces the repetition's content with HL7 text, split at the component separator.

#### .toHL7String()

`toHL7String(options?: HL7RepetitionSerializeOptions): string`

Serializes the repetition: components joined with the component separator, without trailing empty ones.

---

## Hl7Component

`class Hl7Component`

A component of a field repetition. A component of a primitive data type holds one value; a component of a composite data type holds sub-components. For a field of a primitive type, the field's single value is its component 1.

### Constructor

`new Hl7Component(repetition: HL7Repetition, position: number, def: HL7FieldDefinition)`

Throws an `Error` when the dictionary has no data type `def.type`. Components are normally created by `HL7Repetition.component()`.

### Properties

- `repetition: HL7Repetition` (read-only) - The repetition the component belongs to.
- `position: number` (read-only) - The component's position, from 1.
- `field: HL7Field` (read-only) - The repetition's field.
- `segment: HL7Segment` (read-only) - The field's segment.
- `message: HL7Message` (read-only) - The field's message.
- `definition: HL7FieldDefinition` (read-only) - The component's definition, from the field's data type.
- `typeDef: HL7DataTypeDefinition` (read-only) - The definition of the component's data type.
- `isPrimitive: boolean` (read-only) - Whether the component's data type has no components.
- `subComponents: Hl7SubComponent[] | undefined` (read-only) - The sub-components created so far.

### Methods

#### .subcomp()

`subcomp(position: number): Hl7SubComponent`

Returns the sub-component at a position, from 1. For a composite component it is created when needed; a position below 1 throws an `Error`. A primitive component (of a primitive field or of a composite one) holds its value as sub-component 1: `subcomp(1)` returns it, and any other position throws an `Error` - read and write further sub-components with `getValue(n)` and `setValue(value, n)`.

#### .getValue()

`getValue(subComponent?: number): any`

The value of the component, or of a sub-component (default 1). For a primitive component, sub-component 1 is the value itself; a further sub-component is one received after it (kept as HL7 text so the message serializes back unchanged), returned unescaped.

#### .getDate()

`getDate(subComponent?: number): Date | undefined`

As `getValue()`, read as a `Date` (see `HL7Field.getDate()`).

#### .setValue()

`setValue(value: any, subComponent?: number): this`

Sets the value of the component, or of a sub-component (default 1). For a primitive component, setting sub-component 1 drops any further sub-components it has. Returns the component.

```typescript
pid.field(PIDSegment.PatientName).comp(1).setValue('DOE', 1); // XPN.1 FN.1 surname
```

#### .clear()

`clear(): void`

Removes the component's value (and any further sub-components of a primitive component) or its sub-components.

#### .isEmpty()

`isEmpty(): boolean`

Whether the component has no value.

#### .fromHL7String()

`fromHL7String(value: string, options?: Hl7ComponentParseOptions): void`

Replaces the component's content with HL7 text: unescaped and decoded by its data type. With `options.strict`, a value the type cannot read throws an `HL7Error` with code 102 and its location (segment, sequence, field, component, repetition); otherwise the text is kept as it is.

#### .toHL7String()

`toHL7String(options?: Hl7ComponentSerializeOptions): string`

Serializes the component: the value encoded by its data type and escaped, or its sub-components joined with the sub-component separator. `null` is written as `""`. When `options.serializeComponent` is given, its result is returned instead.

---

## Hl7SubComponent

`class Hl7SubComponent`

A sub-component of a composite component: the smallest unit of a message.

### Constructor

`new Hl7SubComponent(component: Hl7Component, position: number, def: HL7FieldDefinition)`

Sub-components are normally created by `Hl7Component.subcomp()`.

### Properties

- `component: Hl7Component` (read-only) - The component the sub-component belongs to.
- `position: number` (read-only) - The sub-component's position, from 1.
- `field: HL7Field` (read-only) - The component's field.
- `segment: HL7Segment` (read-only) - The field's segment.
- `message: HL7Message` (read-only) - The field's message.
- `definition: HL7FieldDefinition` (read-only) - The sub-component's definition.
- `typeDef: HL7DataTypeDefinition` (read-only) - The definition of its data type.
- `value: any` - The value. Setting it decodes it by the data type (a value other than `null` and `undefined`); `null` is HL7's null.

### Methods

#### .isEmpty()

`isEmpty(): boolean`

Whether there is no value: none set, or an empty string.

#### .fromHL7String()

`fromHL7String(value: string, options?: Hl7SubComponentParseOptions): void`

Replaces the value with HL7 text, unescaped and decoded by the data type. With `options.strict`, a value the type cannot read throws an `HL7Error` with code 102 and its location; otherwise the text is kept.

#### .toHL7String()

`toHL7String(options?: Hl7SubComponentSerializeOptions): string`

Serializes the value, encoded by its data type and escaped; `null` as `""`. When `options.serializeSubComponent` is given, its result is returned instead.

---

## HL7MessageNode

`class HL7MessageNode`

A node of a message's structure tree, as `HL7Message.buildStructureTree()` builds it: the root (the structure) or a group, holding segments and groups in order. See [Message structures](../structure.md).

### Constructor

`new HL7MessageNode(name: string, aliases?: string[])`

### Properties

- `name: string` - The structure or group name in the message's version.
- `aliases: string[]` - The names the same group has in other versions of the message: ORU_R01's `PATIENT_RESULT` is `RESPONSE` in 2.3.
- `items: (HL7Segment | HL7MessageNode)[]` - The segments and groups the node holds, in order.

### Methods

#### .is()

`is(name: string): boolean`

Whether the node is the group of the given name: its own name or one of its aliases.

#### .getSegment()

`getSegment(segmentType: string, indexOrAfter?: number | HL7Segment): HL7Segment | undefined`

Returns a segment of the given type among the node's direct items: the first; with a number, the one at that index among them (from 0); with a segment, the next one after it.

#### .getSegmentFromLast()

`getSegmentFromLast(segmentType: string, indexOrAfter?: number | HL7Segment): HL7Segment | undefined`

As `getSegment()`, searching from the last item backwards.

#### .getNode()

`getNode(nodeName: string, indexOrAfter?: number | HL7MessageNode): HL7MessageNode | undefined`

Returns a child group by name, or by a name it has in another version, so one lookup works across versions. A node carrying the name itself is preferred to one known by it as an alias. With a number, the group at that index among the matching ones (from 0); with a node, the next matching one after it.

```typescript
// Finds the group in a 2.3 message (RESPONSE) and in a 2.5 one (PATIENT_RESULT)
const result = msg.buildStructureTree().getNode('PATIENT_RESULT');
```

#### .getNodeFromLast()

`getNodeFromLast(nodeName: string, indexOrAfter?: number | HL7MessageNode): HL7MessageNode | undefined`

As `getNode()`, searching from the last item backwards.

---

## HL7Error

`class HL7Error extends Error`

An error with an HL7 error code (table 0357) and a location in the message. Thrown by parsing and returned by validation; `createNak()` and `addError()` write it to MSA and ERR. See [Acknowledgments](../acknowledgments.md).

### Constructor

`new HL7Error(message: string, args?: HL7Error.ErrorArgs)`

Sets the properties `args` gives. `HL7Error.ErrorArgs` has the same optional properties as the list below. `ackCode`, `severity` and `appErrorCode` are set only when truthy; `hl7ErrorCode` and the position properties whenever they are not `null` or `undefined`, so code 0 is kept.

```typescript
const error = new HL7Error('Unknown patient', {
  hl7ErrorCode: 204,
  appErrorCode: 'P01',
  segmentType: 'PID',
  fieldPosition: 3,
});
```

### Properties

- `hl7ErrorCode?: number` - HL7 error code, table 0357 (see `HL7_ERROR_CODES`).
- `ackCode?: 'AE' | 'AR'` - The acknowledgment code a NAK for this error carries, overriding the choice `createNak()` makes from the code.
- `severity?: 'E' | 'W' | 'I'` - Error, warning or information. Default `'E'`. Written to ERR-4.
- `appErrorCode?: string` - Application error code, written to ERR-5.
- `line?: number` - The 1-based line of the input where parsing failed.
- `segmentType?: string` - The segment ID where the error is.
- `segmentSequence?: number` - The segment's occurrence among the message's segments of its type, from 1 (ERL-2).
- `fieldPosition?: number` - The field position, from 1.
- `componentPosition?: number` - The component position, from 1.
- `subComponentPosition?: number` - The sub-component position, from 1.
- `repetitionIndex?: number` - The field repetition, from 0. Written to ERL-4 counting from 1.

---

## HL7Batch

`class HL7Batch`

A batch (HL7 batch protocol): its BHS and BTS, and the messages between them. See [Batches](../batches.md).

### Properties

- `header?: HL7Segment` - The BHS segment.
- `trailer?: HL7Segment` - The BTS segment.
- `messages: HL7Message[]` - The messages, in order.

### Methods

#### .create() (static)

`static create(version?: string): HL7Batch`

A batch with a BHS, BHS-7 (batch creation date/time) set to now, and a BTS. `version` (default `'2.5'`) is the version the header and trailer are read with.

#### .toHL7String()

`toHL7String(): string`

The batch as HL7 text: BHS, the messages, BTS, joined with CR, with no CR after the last. BTS-1 is set to the number of messages. When there is a header but no trailer, a BTS is written; when there is neither, only the messages.

---

## HL7BatchFile

`class HL7BatchFile`

A batch file: its FHS and FTS, and the batches between them - `[FHS] { [BHS] { MSH ... } [BTS] } [FTS]`. A file with no FHS, no BHS, or neither (bare messages one after another) is read too. The whole file is one character set: its byte order mark's, or the first message's MSH-18. See [Batches](../batches.md).

### Properties

- `header?: HL7Segment` - The FHS segment.
- `trailer?: HL7Segment` - The FTS segment.
- `batches: HL7Batch[]` - The batches, in order.
- `messages: HL7Message[]` (read-only) - Every message of every batch, in order.

### Methods

#### .parse() (static)

`static parse(input: string | Buffer, options?: HL7MessageParseOptions): HL7BatchFile`

Reads a batch file, a single batch, or bare messages. A `Buffer` is decoded with its byte order mark, or with the character set the first message's MSH-18 names (`options.defaultCharset` when unknown). MLLP framing characters are removed. Lines may end with CR, CR LF, or (with no CR in the input) LF. Messages outside a BHS/BTS pair are put in a batch with no header. Each message is parsed with `HL7Message.parse(text, options)`. The FHS, BHS, BTS and FTS segments are read in the first message's version. Throws an `HL7Error` with code 100 and `line` for an FHS after the start, a BTS without a batch, or a segment outside a message.

```typescript
const file = HL7BatchFile.parse(fs.readFileSync('results.hl7'));
for (const message of file.messages) store(message);
```

#### .create() (static)

`static create(version?: string): HL7BatchFile`

A file with an FHS, FHS-7 (file creation date/time) set to now, and an FTS. `version` defaults to `'2.5'`.

```typescript
const file = HL7BatchFile.create();
const batch = HL7Batch.create();
batch.messages.push(message1, message2);
file.batches.push(batch);
fs.writeFileSync('out.hl7', file.toBuffer());
```

#### .toHL7String()

`toHL7String(): string`

The file as HL7 text: FHS, the batches, FTS, joined with CR, ending with a CR. FTS-1 is set to the number of batches. When there is a header but no trailer, an FTS is written.

#### .toBuffer()

`toBuffer(options?: { defaultCharset?: string }): Buffer`

`toHL7String()` encoded with the first message's character set, as `HL7Message.toBuffer()` encodes (see [`encodeHL7String()`](#encodehl7string)). A character set this library does not know is encoded with `options.defaultCharset`, UTF-8 unless given.

---

## Functions

### Paths

See [Paths](../paths.md).

#### parseHL7Path()

`parseHL7Path(path: string): HL7Path`

Parses a path into an [`HL7Path`](#hl7path). Numbers in parentheses (group, segment and field repetitions) count from 0; field, component and sub-component numbers from 1. A path with groups starts with `/`; a leading `.` after it is ignored (`/.PID-5`). The segment ID must be three characters, an uppercase letter followed by uppercase letters or digits. Throws an `Error` (`Invalid HL7 path "..."`) for anything else.

```typescript
parseHL7Path('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX(2)-5(1)-3-2');
// { groups: [{ name: 'PATIENT_RESULT', index: 0 }, { name: 'ORDER_OBSERVATION', index: 1 }],
//   segment: 'OBX', segmentIndex: 2, field: 5, repetition: 1, component: 3, subComponent: 2 }
```

#### findPathSegment()

`findPathSegment(message: HL7Message<any>, path: HL7Path): HL7Segment | undefined`

The segment a parsed path names. Without groups, `message.getSegment(path.segment, path.segmentIndex)`; with groups, the segment found through `buildStructureTree()` and `HL7MessageNode.getNode()`. `undefined` when there is none.

#### getPathValue()

`getPathValue(message: HL7Message<any>, pathText: string): any`

The value at a path; what `HL7Message.get()` returns, without the compile-time path check.

#### setPathValue()

`setPathValue(message: HL7Message<any>, pathText: string, value: any): void`

Sets the value at a path; what `HL7Message.set()` does, without the compile-time path check.

### Objects

See [Objects](../objects.md).

#### segmentToObject()

`segmentToObject(segment: HL7Segment): Record<string, any>`

The segment as a plain object; what `HL7Segment.toObject()` returns, untyped.

#### assignSegment()

`assignSegment(segment: HL7Segment, object: Record<string, any>): void`

Sets a segment's fields from an object; what `HL7Segment.assign()` does, untyped. Throws an `Error` (`Unknown field or component "..."`) for a key that is neither an enum member name nor a positive integer.

### Validation

#### validateMessage()

`validateMessage(message: HL7Message<any>, options?: HL7ValidateOptions): HL7Error[]`

What `HL7Message.validate()` does. Fields are checked first (unless `options.fields` is `false`), then the structure (unless `options.structure` is `false`). The structure is checked only when the dictionary has the message's `structureName`. See [Validation](../validation.md).

### Escaping

See [Character sets and escaping](../encoding.md).

#### hl7Escape()

`hl7Escape(value: string | null, message?: HL7Message): string`

Escapes a value for HL7 text with the message's delimiters (the defaults without a message): the field, component, sub-component and repetition separators and the escape character become `\F\`, `\S\`, `\T\`, `\R\` and `\E\`. `null` gives `""` (HL7's null) and `undefined` an empty string. A `Buffer`, typed array or array of bytes gives hexadecimal data (`\X...\`). Control characters are written so: a CR as `\X000d\`, a LF or tab as it is, any other as hexadecimal data of its bytes in the message's character set (`\X0B\`), so a VT or FS cannot end an MLLP frame. Highlighting (`\H\`, `\N\`), formatting (`\.br\`), character set switches (`\Cxxyy\`, `\Mxxyyzz\`), locally defined (`\Zxx\`) and hexadecimal (`\Xdd\`) sequences already in the value pass through unchanged.

```typescript
hl7Escape('DOE^JOHN'); // 'DOE\S\JOHN'
```

#### hl7UnEscape()

`hl7UnEscape(value: string, message?: HL7Message): string | Buffer | null`

Unescapes HL7 text: `\F\ \S\ \T\ \R\ \E\` become the message's delimiters, `\X000d\` a CR, and other hexadecimal data the characters its bytes encode in the message's character set (UTF-8 for a UTF-16 or UTF-32 message). A value that is hexadecimal data as a whole is returned as a `Buffer`; `""` gives `null`. Highlighting, formatting, character set switch and locally defined sequences are kept as written; any other sequence gives its content.

```typescript
hl7UnEscape('DOE\\S\\JOHN'); // 'DOE^JOHN'
hl7UnEscape('""'); // null
```

### Character sets

See [Character sets and escaping](../encoding.md).

#### charsetFromMSH18()

`charsetFromMSH18(value: string | undefined, repetitionSeparator?: string, componentSeparator?: string): string | undefined`

The character set an MSH-18 value names: the first component of its first non-empty repetition, trimmed. HL7 allows the first repetition to be empty (`~UNICODE UTF-8`). The separators default to `~` and `^`. `undefined` for an empty value.

```typescript
charsetFromMSH18('~UNICODE UTF-8'); // 'UNICODE UTF-8'
```

#### findHL7Encoding()

`findHL7Encoding(charset?: string): string | undefined`

The iconv-lite encoding an MSH-18 value names, through `HL7_CHARSET_ENCODINGS` or as an iconv-lite encoding name itself; `undefined` when it names none. `ANSI` names none: it means whatever code page the sender's Windows uses. Map it when you know it.

```typescript
HL7_CHARSET_ENCODINGS.ANSI = 'windows-1254';
findHL7Encoding('ANSI'); // 'windows-1254'
```

#### resolveHL7Encoding()

`resolveHL7Encoding(charset?: string, defaultCharset?: string): string`

As `findHL7Encoding(charset)`, falling back to `findHL7Encoding(defaultCharset)` and then to `'utf-8'`. `defaultCharset` defaults to `'utf-8'`.

```typescript
resolveHL7Encoding('8859/9'); // 'latin5'
resolveHL7Encoding('ANSI'); // 'utf-8', unless ANSI is mapped
```

#### encodeHL7String()

`encodeHL7String(str: string, charset?: string, delimiters?: string, defaultCharset?: string): Buffer`

Encodes HL7 text with a character set (resolved with `resolveHL7Encoding(charset, defaultCharset)`). A character the encoding cannot represent is transliterated to its closest ASCII form (`Ş` becomes `S`) instead of becoming `?`; delimiters, CR and LF a transliteration would produce are dropped, so the structure cannot change. `delimiters` defaults to `'|^~\\&'`. UTF-16 is written big-endian after a byte order mark (`FE FF`), as Java writes it; other Unicode encodings are encoded as they are.

```typescript
encodeHL7String('Şahin', 'ASCII').toString(); // 'Sahin'
```

#### detectByteOrderMark()

`detectByteOrderMark(input: Buffer): { encoding: string; data: Buffer } | undefined`

Detects a byte order mark at the start of a buffer, after an optional MLLP start block: UTF-8, UTF-16 LE/BE, UTF-32 LE/BE. Returns the iconv-lite encoding and the payload without the start block, the byte order mark and the MLLP end block; `undefined` when there is no byte order mark. A message in UTF-16 or UTF-32 can only be recognized this way.

### Segments

#### isHeaderSegment()

`isHeaderSegment(segmentType: string): boolean`

Whether the segment's first two fields are the delimiters themselves, written after the segment ID: true for `MSH`, `FHS` and `BHS`.

---

## Constants

- `FIELD_SEPARATOR = '|'`
- `COMPONENT_SEPARATOR = '^'`
- `REPETITION_SEPARATOR = '~'`
- `ESCAPE_CHARACTER = '\\'` - a single backslash.
- `SUBCOMPONENT_SEPARATOR = '&'`
- `CR = '\x0D'` - segment terminator.
- `LF = '\x0A'`
- `VT = '\x0B'` - MLLP start block.
- `FS = '\x1C'` - MLLP end block (followed by CR).
- `HL7_ERROR_CODES: Record<number, string>` - HL7 table 0357, message error condition codes, with their texts: `0` Message accepted, `100` Segment sequence error, `101` Required field missing, `102` Data type error, `103` Table value not found, `104` Value too long, `200` Unsupported message type, `201` Unsupported event code, `202` Unsupported processing id, `203` Unsupported version id, `204` Unknown key identifier, `205` Duplicate key identifier, `206` Application record locked, `207` Application internal error.
- `HL7_CHARSET_ENCODINGS: Record<string, string>` - HL7 table 0211 (MSH-18) values mapped to iconv-lite encoding names: `ASCII`, `8859/1` to `8859/9`, `8859/15`, `ISO IR6`, `ISO IR14`, `ISO IR87`, `ISO IR159`, `GB 18030-2000`, `KS X 1001`, `CNS 11643-1992`, `BIG-5`, `UNICODE` (UTF-8), `UNICODE UTF-8`, `UNICODE UTF-16`, `UNICODE UTF-32`. A value not listed is tried as an encoding name. The object can be changed to add mappings.
- `DEFAULT_HL7_CHARSET = 'UNICODE UTF-8'` - The MSH-18 a new message gets.

---

## Types

### HL7MessageParseOptions

```typescript
interface HL7MessageParseOptions extends Hl7SegmentParseOptions {
  dictionaries?: Record<string, HL7Dictionary>;
  defaultCharset?: string;
}
```

- `strict?: boolean` - Throw an `HL7Error` (102) for a value its data type cannot read, instead of keeping it as text. Default `false`.
- `dictionaries` - Dictionaries to read the message with, by version (used by the static `parse()`). They replace the defaults of `hl7v2-dictionary` for their versions only; a version the map does not have takes the default dictionary.
- `defaultCharset` - The character set a `Buffer` is decoded with when MSH-18 is empty or names one this library does not know: an HL7 table 0211 value or an iconv-lite encoding name. Default UTF-8.

`HL7Message.parse()` also takes `version?: W` (see [`.parse()`](#parse-static)).

### HL7MessageSerializeOptions

`interface HL7MessageSerializeOptions extends Hl7SegmentSerializeOptions {}`

Hooks that replace the serialized text of a part. Each receives the part, the text it serializes to, and the options, and returns the text to write.

- `serializeField?: (field: HL7Field, serializedString: string, options?: Hl7FieldSerializeOptions) => string`
- `serializeComponent?: (component: Hl7Component, serializedString: string, options?: Hl7ComponentSerializeOptions) => string`
- `serializeSubComponent?: (subComponent: Hl7SubComponent, serializedString: string, options?: Hl7SubComponentSerializeOptions) => string` - called for sub-components of composite components.
- `serializeSegment?: (segment: HL7Segment, serializedString: string, options?: Hl7FieldSerializeOptions) => string` - called by `HL7Segment.toHL7String()` with the segment's text.

```typescript
/* Mask patient names */
msg.toHL7String({
  serializeField: (field, text) =>
    field.segment.segmentType === 'PID' && field.position === 5 ? 'XXX' : text,
});
```

### HL7MessageEncodeOptions

```typescript
interface HL7MessageEncodeOptions extends HL7MessageSerializeOptions {
  defaultCharset?: string;
}
```

Options of `HL7Message.toBuffer()`. `defaultCharset` is the character set used when MSH-18 names one this library does not know; default UTF-8.

### Part options

The options each level passes down; each extends the next one.

- `Hl7SegmentParseOptions`, `Hl7FieldParseOptions`, `HL7RepetitionParseOptions`, `Hl7ComponentParseOptions`, `Hl7SubComponentParseOptions` - `{ strict?: boolean }`.
- `Hl7SegmentSerializeOptions` (`serializeSegment`), `Hl7FieldSerializeOptions` (`serializeField`), `HL7RepetitionSerializeOptions`, `Hl7ComponentSerializeOptions` (`serializeComponent`), `Hl7SubComponentSerializeOptions` (`serializeSubComponent`).

### HL7ValidateOptions

```typescript
interface HL7ValidateOptions {
  structure?: boolean; // default true
  fields?: boolean; // default true
  tables?: boolean; // default false
}
```

- `structure` - Check the order of segments and groups, and that the required ones are there, against the message structure.
- `fields` - Check fields and components: required ones present, repetitions, data types and maximum lengths.
- `tables` - Check coded values of `ID` fields against their HL7 table. Off by default: the tables are one set for every version, so a code a version added later is unknown to an earlier one.

### HL7Path

```typescript
interface HL7Path {
  groups: { name: string; index: number }[];
  segment: string;
  segmentIndex: number;
  field?: number;
  repetition: number;
  component?: number;
  subComponent?: number;
}
```

A parsed path (`parseHL7Path()`). `groups` are the path's groups with their repetition indexes (from 0); `segmentIndex` and `repetition` count from 0 (default 0); `field`, `component` and `subComponent` from 1, `undefined` when the path does not reach them.

| Path                                             | Meaning                                      |
| ------------------------------------------------ | -------------------------------------------- |
| `PID-5-1`                                        | the first PID, field 5, component 1          |
| `OBX(2)-5`                                       | the third OBX of the message, field 5        |
| `PID-3(1)-1`                                     | PID-3's second repetition, component 1       |
| `PID-5-1-2`                                      | component 1, sub-component 2                 |
| `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX(0)-5`  | through the message structure's groups       |

### HL7CheckedPath

`type HL7CheckedPath<V extends HL7Version, P extends string>`

The path type `get()`, `getDate()` and `set()` take. For a message of a known version and a literal path, it is `P` itself when the field is one the version defines for the segment and the component and sub-component are ones the field's data type has; otherwise a string literal saying what is wrong, which the compiler reports: `"DG1-2 is not a field of DG1 in 2.6"`, `"PID-5: XPN has no component 99 in 2.6"`. A field of a type the version does not define (OBX-5's `VARIES`) takes any component. A path held in a `string`, a path of an untyped message, and a Z segment's path are taken as they are. See [TypeScript](../typescript.md).

### HL7MessageSegment

`type HL7MessageSegment<V extends HL7Version, S extends string> = HL7Segment<HL7SegmentField<V, S> & number, HL7VersionSegmentObjects[V][S], HL7VersionFieldComponents[V][S]>`

The segment type `addSegment()`, `getSegment()`, `getSegmentFromLast()` and `header` return: for a message of a known version, `field()` takes only the fields the version defines for `S`, components are checked against their data types, and `toObject()` / `assign()` use the version's segment object; otherwise any number and any object.

```typescript
const dg1 = new HL7Message('2.6').addSegment('DG1');
dg1.field(DG1Segment.DiagnosisCodeDG1); // fine
// dg1.field(2); compile error: DG1-2 is withdrawn in 2.6
```

### HL7MessageSegmentObject

`type HL7MessageSegmentObject<V extends HL7Version, K extends keyof HL7SegmentObjects>`

A segment as an object for a message of version `V` (the result of `getSegmentObject()`): the version's own interface when `V` is a typed version (`HL7TypedVersion`, 2.1 to 2.9), otherwise the interface uniting every version (`HL7SegmentObjects[K]`, such as `PIDObject`). `never` when the version has no such segment.

### HL7MessageObject

`type HL7MessageObject<V extends HL7Version, K extends string> = HL7VersionMessages[V][K]`

A message as an object (`toObject()`, `assign()`): the interface of structure or message type `K` in version `V` (`HL7MessageObject<'2.5', 'ORU_R01'>`); any object for a version or structure not typed.

### HL7Error.ErrorArgs

The constructor arguments of `HL7Error`: `hl7ErrorCode`, `ackCode`, `severity`, `appErrorCode`, `line`, `segmentType`, `segmentSequence`, `fieldPosition`, `componentPosition`, `subComponentPosition`, `repetitionIndex`, all optional, as the properties of the same names.

---

## Re-exported from hl7v2-dictionary

`hl7v2` re-exports every export of `hl7v2-dictionary`, so they can be imported from either package. Those this page refers to:

- `HL7Version` - A version string type (`'2.5'`, `'2.5.1'`), and a namespace of constants `HL7Version.v2_1` to `HL7Version.v2_9`.
- `HL7Dictionary`, `dictionaries` - The dictionary class and the dictionaries of every version, by version.
- `findNearestHL7Version(version: HL7Version): HL7Version` - The newest version with a dictionary not newer than the one given: 2.5.2 gives 2.5.1. Older than every dictionary gives the oldest.
- `parseHL7DateTime(value: string): Date`, `toHL7DateTime()`, `toHL7Date()`, `toHL7Time()`, `formatHL7DateTime()`, `formatHL7Date()`, `formatHL7Time()`, `toHL7Number()`, `toHL7SequenceId()` - Date and number conversions used by the data types. See [Dates and numbers](../dates-and-numbers.md).
- Segment field enums (`MSHSegment`, `PIDSegment`, `OBXSegment`, `DG1Segment` ...) and data type component enums (`XPNType`, `ERLType` ...) - Positions by name; their member names are the keys of segment objects.
- `AcknowledgmentCode` - `'AA' | 'AE' | 'AR' | 'CA' | 'CE' | 'CR'`.
- Definition types: `HL7SegmentDefinition`, `HL7FieldDefinition`, `HL7DataTypeDefinition`, `HL7TableDefinition`, `HL7MessageDefinition`, `HL7MessageSegmentsDefinition`.
- Object types (types only): segment and data type interfaces (`PIDObject`, `XPNObject` ...), `HL7SegmentObjects`, `HL7SegmentObject<V, S>`, `HL7DataTypeObject<V, T>`, `HL7TypedVersion`, `HL7SegmentField<V, S>`, `HL7VersionSegments`, `HL7VersionTypes`, `HL7VersionMessages`, `HL7VersionSegmentObjects`, `HL7VersionFieldComponents`, `HL7VersionPathTypes`.
