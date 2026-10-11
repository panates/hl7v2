# HL7v2

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## About

HL7 v2.x parser, serializer and validator for Node.js.

## Installation

```bash
$ npm install hl7v2 --save
```

## Usage Example

```typescript
import { HL7Message } from 'hl7v2';

const hl7String = 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|202305101000||ADT^A01|123|P|2.5\r' +
  'PID|||PATIENT_ID||DOE^JOHN';

const message = HL7Message.parse(hl7String);

// Access segments
const pid = message.getSegment('PID');
console.log(pid.field(5).getValue()); // { familyName: 'DOE', givenName: 'JOHN' }

// Create new message
const msg = new HL7Message('2.5');
const msh = msg.header;
msh.field(3).setValue('MY_APP');
msg.addSegment('PID').field(5).setValue({ familyName: 'SMITH', givenName: 'JANE' });

console.log(msg.toHL7String());
```

## API Reference

### HL7Message

The root object representing an HL7 message.

#### Properties

- `version: string`: HL7 version (e.g., '2.5').
- `segments: HL7Segment[]`: Array of all segments in the message.
- `header: HL7Segment`: The MSH segment of the message.
- `fieldSeparator: string`: Character used to separate fields (default `|`).
- `componentSeparator: string`: Character used to separate components (default `^`).
- `repetitionSeparator: string`: Character used to separate repetitions (default `~`).
- `escapeCharacter: string`: Character used for escaping (default `\`).
- `truncationCharacter: string | undefined`: The fifth encoding character of v2.7 and later (`#`), when MSH-2 declares one.
- `subComponentSeparator: string`: Character used to separate sub-components (default `&`).
- `charset: string | undefined`: The character set the message is encoded with: the first non-empty repetition of MSH-18. A new message gets `UNICODE UTF-8`.

#### Methods

##### .parse()

Parses an HL7 string into an `HL7Message` object.
`static parse(input: string, options?: HL7MessageParseOptions): HL7Message`
example

```typescript
const message = HL7Message.parse('MSH|^~\\&|SENDING_APP|...');
```

##### .addSegment()

Adds a new segment to the message.
`addSegment(segmentType: string, index?: number): HL7Segment`
example

```typescript
const pid = message.addSegment('PID');
```

##### .getSegment()

Finds a segment by type.
`getSegment(segmentType: string, indexOrAfter?: number | HL7Segment): HL7Segment | undefined`
example

```typescript
const msh = message.getSegment('MSH');
const firstObx = message.getSegment('OBX');
const secondObx = message.getSegment('OBX', 1); // Get second OBX
const nextObx = message.getSegment('OBX', firstObx); // Get OBX after firstObx
```

##### .toHL7String()

Serializes the message back to an HL7 string.
`toHL7String(options?: HL7MessageSerializeOptions): string`
example

```typescript
const hl7 = message.toHL7String();
```

##### .toBuffer()

Serializes the message and encodes it with the character set in MSH-18 (`ASCII`, `8859/1`, `8859/9`, `UNICODE UTF-8`, ...).
A character the character set cannot represent is transliterated to its closest ASCII form (`Şahin Gül` -> `Sahin Gul` in `ASCII`) instead of becoming `?`.
Character sets are mapped as HAPI HL7v2 maps them: the deprecated `UNICODE` is read as UTF-8, and `UNICODE UTF-16`/`UNICODE UTF-32` are written with a byte order mark, which is also how a received UTF-16/UTF-32 message is recognized.
A character set the library does not know - HL7 table 0211 or an iconv-lite encoding name - is encoded with `options.defaultCharset`, UTF-8 unless given; `HL7Message.parse()` takes the same option. `ANSI` is such a value: it is not in the standard, and means whatever code page the sender's Windows uses. When you know which, map it:

```typescript
import { HL7_CHARSET_ENCODINGS } from 'hl7v2';

HL7_CHARSET_ENCODINGS['ANSI'] = 'windows-1254';
```
`toBuffer(options?: HL7MessageSerializeOptions): Buffer`
example

```typescript
message.header.field(MSHSegment.CharacterSet).setValue('ASCII');
const buf = message.toBuffer();
```

##### .get() / .set()

Reads and writes a value by path, written as HAPI HL7v2's Terser writes it. Numbers in parentheses (group, segment and field repetitions) count from 0; field, component and sub-component numbers from 1. Without groups, a segment is searched in the whole message; a path with groups starts with `/`, and a group is found by its name in any version.
`get(path: string): any` - `set(path: string, value: any): this`
example

```typescript
message.get('PID-5-1'); // family name of the first PID
message.get('PID-3(1)-1'); // ID of PID-3's second repetition
message.get('OBX(2)-5'); // value of the third OBX
message.get('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBSERVATION/OBX-5');
message.set('PID-5-2', 'Jane').set('NTE-3', 'note'); // NTE is added if missing
```

Ending at a field it reads the first component, at a component the first sub-component, as Terser does. `set()` adds a missing segment at the end of the message when the path has no groups and names its next occurrence.

##### .validate()

Checks the message against its version's dictionary, as HAPI HL7v2's validation does, and returns the problems as `HL7Error`s carrying the HL7 error code (table 0357) and the location - ready for a NAK. An empty list means none.
`validate(options?: { structure?: boolean; fields?: boolean; tables?: boolean }): HL7Error[]`

- `100` segment sequence error: a required segment or group missing, or a segment the structure has no place for. Z segments are let through.
- `101` required field missing: a field, or a component of a field that is there, the version marks required.
- `102` data type error: a value its type cannot read, or more repetitions than the field allows.
- `104` value too long: longer than the field's maximum length.
- `103` table value not found, with `tables: true`: a code of an `ID` field (an HL7 table) its table does not have. Off by default, as the tables are one set for every version; `IS` fields, whose tables are the site's own, are not checked.

The structure is matched in order and greedily, without backtracking, as `buildStructureTree()` matches it.
example

```typescript
const errors = message.validate();
if (errors.length) socket.sendMessage(message.createNak(errors));
```

##### .createAck()

Creates an ACK message for the current message.
`createAck(ackCode?: string, textMessage?: string): HL7Message`
example

```typescript
const ack = message.createAck('AA', 'Message accepted');
```

##### .createNak()

Creates a NAK message for the current message, with one ERR segment per error, laid out as the message's version defines ERR (ERR-2/3/4 from 2.5, ERR-1 before it). MSA-1 is `AR` (reject) when an error is HL7 code 200-203 (unsupported message type, event, processing ID or version) or an `HL7Error` with `ackCode: 'AR'`, otherwise `AE`.
`createNak(errors: (Error | string)[]): HL7Message`
example

```typescript
const error = new HL7Error('Invalid field value', { hl7ErrorCode: 102 });
const nak = message.createNak([error]);
```

---

### Typed objects

A segment as a plain object keyed by field names - the field enums' members (`PIDSegment.PatientName` is `PatientName`) - with an interface per segment and data type (`PIDObject`, `XPNObject` ...) generated from every version: a field whose type a version changed is the union of its shapes (MSH-7 is `TSObject | string`), and a field any version lets repeat is an array. Empty values are left out; HL7's null (`""`) is `null`. The interfaces are types only.

- `segment.toObject<T>()`, `message.getSegmentObject('PID', index?)` - typed by the segment ID.
- `segment.assign(object)` - sets the fields given; `null` writes HL7's null, `undefined` clears a field.

```typescript
const pid = message.getSegmentObject('PID'); // PIDObject | undefined
const name = pid?.PatientName?.[0]; // PNObject | XPNObject (2.1's PN, later XPN)

message.getSegment('PID')!.assign<PIDObject>({
  PatientName: [{ FamilyName: { Surname: 'Doe' }, GivenName: 'John' }],
  AdministrativeSex: 'M',
});
```

### HL7BatchFile / HL7Batch

Batches of messages (HL7 batch protocol), in a file or one stream: `[FHS] { [BHS] { MSH ... } [BTS] } [FTS]`. A file with no FHS, no BHS, or neither - bare messages one after another - is read too. The whole is one character set: its BOM's, or the first message's MSH-18.

- `HL7BatchFile.parse(input: string | Buffer, options?: HL7MessageParseOptions): HL7BatchFile` - `header` (FHS), `trailer` (FTS), `batches`, and `messages`, every message of every batch.
- `HL7Batch` - `header` (BHS), `trailer` (BTS), `messages`.
- `HL7BatchFile.create(version?)`, `HL7Batch.create(version?)` - new ones, with headers dated now.
- `toHL7String()`, `toBuffer()` - BTS-1 and FTS-1 are set to the message and batch counts.

```typescript
const file = HL7BatchFile.parse(fs.readFileSync('results.hl7'));
for (const message of file.messages) store(message);

const out = HL7BatchFile.create();
const batch = HL7Batch.create();
batch.messages.push(message1, message2);
out.batches.push(batch);
fs.writeFileSync('out.hl7', out.toBuffer());
```

### HL7Segment

Represents a single segment (e.g., PID, MSH) within an HL7 message.

#### Properties

- `segmentType: string`: The 3-character segment type (e.g., 'PID').
- `fields: HL7Field[]`: Array of fields in the segment.
- `message: HL7Message`: Reference to the parent message.

#### Methods

##### .field()

Returns the field at the specified position (1-indexed).
`field(position: number): HL7Field`
example

```typescript
const patientName = pid.field(5);
```

##### .toHL7String()

Serializes the segment to an HL7 string.
`toHL7String(options?: Hl7SegmentSerializeOptions): string`
example

```typescript
const hl7 = pid.toHL7String();
```

---

### HL7Field

Represents a field within a segment. Fields can contain one or more repetitions.

#### Properties

- `position: number`: The position of the field within the segment (1-indexed).
- `repetitions: HL7Repetition[]`: Array of repetitions for this field.
- `segment: HL7Segment`: Reference to the parent segment.

#### Methods

##### .repetition()

Returns the repetition at the specified index (0-indexed).
`repetition(index?: number): HL7Repetition`
example

```typescript
const firstRep = field.repetition(0);
```

##### .rep()

Alias for `repetition()`.
`rep(index?: number): HL7Repetition`
example

```typescript
const firstRep = field.rep(0);
```

##### .component()

Shortcut to access a component in the first repetition.
`component(position: number): Hl7Component`
example

```typescript
const comp1 = field.component(1);
```

##### .comp()

Alias for `component()`.
`comp(position: number): Hl7Component`
example

```typescript
const comp1 = field.comp(1);
```

##### .getValue()

Gets the value of the field.
`getValue(component?: number, subComponent?: number): any`
example

```typescript
const value = field.getValue();
const compValue = field.getValue(1);
const subCompValue = field.getValue(1, 1);
```

##### .setValue()

Sets the value of the field.
`setValue(value: any, component?: number, subComponent?: number): void`
example

```typescript
field.setValue('DOE^JOHN');
field.setValue('DOE', 1);
field.setValue('JOHN', 1, 1);
```

##### .toHL7String()

Serializes the field to an HL7 string.
`toHL7String(options?: Hl7FieldSerializeOptions): string`
example

```typescript
const hl7 = field.toHL7String();
```

---

### HL7Repetition

Represents a single repetition of a field.

#### Properties

- `components: Hl7Component[]`: Array of components in this repetition.
- `field: HL7Field`: Reference to the parent field.

#### Methods

##### .component()

Returns the component at the specified position (1-indexed).
`component(position: number): Hl7Component`
example

```typescript
const comp = repetition.component(1);
```

##### .comp()

Alias for `component()`.
`comp(position: number): Hl7Component`
example

```typescript
const comp = repetition.comp(1);
```

##### .getValue()

Gets the value.
`getValue(component?: number, subComponent?: number): any`
example

```typescript
const value = repetition.getValue();
const subValue = repetition.getValue(1, 1);
```

##### .setValue()

Sets the value.
`setValue(value: any, component?: number, subComponent?: number): this`
example

```typescript
repetition.setValue('DOE', 1);
```

---

### Hl7Component

Represents a component within a field repetition.

#### Properties

- `position: number`: Position within the repetition (1-indexed).
- `subComponents: Hl7SubComponent[]`: Array of sub-components.

#### Methods

##### .subComponent()

Returns the sub-component at the specified position (1-indexed).
`subComponent(position: number): Hl7SubComponent`
example

```typescript
const sub = component.subComponent(1);
```

##### .subcomp()

Alias for `subComponent()`.
`subcomp(position: number): Hl7SubComponent`
example

```typescript
const sub = component.subcomp(1);
```

##### .getValue()

Gets the value.
`getValue(subComponent?: number): any`
example

```typescript
const value = component.getValue();
const subValue = component.getValue(1);
```

##### .setValue()

Sets the value.
`setValue(value: any, subComponent?: number): this`
example

```typescript
component.setValue('JOHN', 1);
```

---

### Hl7SubComponent

The smallest unit of data in an HL7 message.

#### Properties

- `position: number`: Position within the component (1-indexed).
- `value: any`: The actual data value.

---

### HL7MessageNode

Used for representing the hierarchical structure of a message (groups and segments), as `HL7Message.buildStructureTree()` builds it from the dictionary - for the structure MSH-9.3 names when the dictionary has it (`ADT^A04^ADT_A01` is an `ADT_A01`), otherwise for MSH-9's type and trigger event.

#### Properties

- `name: string`: The group's name in the message's version.
- `aliases: string[]`: The names the same group has in other versions of the message - ORU_R01's `PATIENT_RESULT` is `RESPONSE` in 2.3, ADT_A40's `PATIENT` is `PATIENT_ID` in 2.4-2.5.1.
- `items: (HL7Segment | HL7MessageNode)[]`: The segments and groups it holds, in order.

#### Methods

##### .is()

Whether the node is the group of the given name - its own, or one of its aliases.
`is(name: string): boolean`

##### .getSegment()

Searches for a segment within this node.
`getSegment(segmentType: string, indexOrAfter?: number | HL7Segment): HL7Segment | undefined`
example

```typescript
const seg = node.getSegment('PID');
```

##### .getNode()

Searches for a child node by name, or by a name the group has in another version: one lookup works across versions. A node carrying the name itself is preferred to one known by it as an alias.
`getNode(nodeName: string, indexOrAfter?: number | HL7MessageNode): HL7MessageNode | undefined`
example

```typescript
// Finds the group in a 2.3 message (RESPONSE) and in a 2.5 one (PATIENT_RESULT)
const childNode = node.getNode('PATIENT_RESULT');
```

---

### HL7Error

Custom error class for HL7-related errors.

#### Properties

- `hl7ErrorCode?: number`: HL7 standard error code.
- `severity?: 'E' | 'W' | 'I'`: Error severity (Error, Warning, Information).
- `segmentType?: string`: Segment where the error occurred.
- `fieldPosition?: number`: Field position where the error occurred.

---

##### .hl7Escape()

Escapes a string for use in an HL7 message, with the message's own delimiters.
Control characters are written as hexadecimal data (`\X0D\`), so a CR, VT or FS in a value cannot end a segment or an MLLP frame.
Highlighting (`\H\`, `\N\`), formatting (`\.br\`), character set switches (`\Cxxyy\`, `\Mxxyyzz\`), locally defined (`\Zxx\`) and hexadecimal (`\Xdd\`) sequences already in the value pass through unchanged, as HAPI HL7v2 writes them.
`hl7Escape(value: string, message?: HL7Message): string`
example

```typescript
const escaped = hl7Escape('DOE^JOHN'); // "DOE\S\JOHN"
```

#### Methods

##### .hl7UnEscape()

Unescapes an HL7 string, as HAPI HL7v2 reads one: `\F\ \S\ \T\ \R\ \E\` become the message's delimiters, and hexadecimal data (`\Xdd\`) the characters its bytes encode in the message's character set (HAPI's `\X000d\` reads as a CR).
Highlighting, formatting, character set switch and locally defined sequences are instructions to the receiver and are kept as written; a value that is hexadecimal data as a whole is returned as a `Buffer`.
`hl7UnEscape(value: string, message?: HL7Message): string | Buffer | null`
example

```typescript
const unescaped = hl7UnEscape('DOE\\S\\JOHN'); // "DOE^JOHN"
```

---

## Node Compatibility

- node >= 20.x

### License

HL7v2 is available under [MIT](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2.svg

[npm-url]: https://npmjs.org/package/hl7v2

[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg

[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml

[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg

[coveralls-url]: https://coveralls.io/r/panates/hl7v2

[downloads-image]: https://img.shields.io/npm/dm/hl7v2.svg

[downloads-url]: https://npmjs.org/package/hl7v2

[gitter-image]: https://badges.gitter.im/panates/hl7v2.svg

[gitter-url]: https://gitter.im/panates/hl7v2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

[dependencies-image]: https://david-dm.org/panates/hl7v2/status.svg

[dependencies-url]: https://david-dm.org/panates/hl7v2

[devdependencies-image]: https://david-dm.org/panates/hl7v2/dev-status.svg

[devdependencies-url]: https://david-dm.org/panates/hl7v2?type=dev

[quality-image]: http://npm.packagequality.com/shield/hl7v2.png

[quality-url]: http://packagequality.com/#?package=hl7v2
