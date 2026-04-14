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
- `subComponentSeparator: string`: Character used to separate sub-components (default `&`).

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

##### .createAck()

Creates an ACK message for the current message.
`createAck(ackCode?: string, textMessage?: string): HL7Message`
example

```typescript
const ack = message.createAck('AA', 'Message accepted');
```

##### .createNak()

Creates a NAK message for the current message.
`createNak(errors: HL7Error[]): HL7Message`
example

```typescript
const error = new HL7Error('Invalid field value', { hl7ErrorCode: 102 });
const nak = message.createNak([error]);
```

---

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

Used for representing the hierarchical structure of a message (groups and segments).

#### Methods

##### .getSegment()

Searches for a segment within this node.
`getSegment(segmentType: string, indexOrAfter?: number | HL7Segment): HL7Segment | undefined`
example

```typescript
const seg = node.getSegment('PID');
```

##### .getNode()

Searches for a child node by name.
`getNode(nodeName: string, indexOrAfter?: number | HL7MessageNode): HL7MessageNode | undefined`
example

```typescript
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

Escapes a string for use in an HL7 message.
`hl7Escape(value: string, message?: HL7Message): string`
example

```typescript
const escaped = hl7Escape('DOE^JOHN'); // "DOE\S\JOHN"
```

#### Methods

##### .hl7UnEscape()

Unescapes an HL7 string.
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

[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/master.svg

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
