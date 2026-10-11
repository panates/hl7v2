# [📖 DOCUMENTATION](https://github.com/panates/hl7v2/blob/main/doc/README.md)

---

# hl7v2

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

HL7 v2 messages for Node.js: parse them, build them, read and write their values, validate them, answer them - for every version from 2.1 to 2.9, as the HL7 v2 standard defines them.

For the network - an MLLP server and client - see [`hl7v2-net`](https://www.npmjs.com/package/hl7v2-net).

> **Upgrading from 1.x?** Version 2 changes how values are read and written and adds type checks for typed messages - see [Migrating from v1 to v2](https://github.com/panates/hl7v2/blob/main/doc/migration-v1-to-v2.md).

## Installation

```bash
npm install hl7v2 hl7v2-dictionary
```

`hl7v2-dictionary` holds the definitions messages are read by. Node.js 20 or later; ES modules, TypeScript types included.

## Usage

### Reading a message

```typescript
import { HL7Message } from 'hl7v2';

const msg = HL7Message.parse(
  'MSH|^~\\&|REGADT|HOSP|EHR|HOSP|20250301101500||ADT^A01^ADT_A01|MSG1|P|2.5\r' +
    'PID|1||123456^^^HOSP^MR||Yılmaz^Ayşe||19800512|F',
);

msg.messageType; // 'ADT^A01'
msg.get('PID-5-1'); // 'Yılmaz' - by path
msg.get('PID-3(0)-4'); // 'HOSP'
msg.getDate('PID-7'); // a Date
msg.getSegmentObject('PID')?.PatientName?.[0]?.GivenName; // 'Ayşe'
```

### Building a message

```typescript
import { HL7Message, MSHSegment } from 'hl7v2';

const msg = new HL7Message('2.5');
msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');
msg.set('EVN-2', new Date()).set('PID-3-1', '123456').set('PID-5-1', 'Yılmaz');

msg.toHL7String(); // the text
msg.toBuffer(); // the bytes, in the character set MSH-18 names
```

### Validating and answering

```typescript
const errors = msg.validate(); // required fields, data types, lengths, structure
const answer = errors.length ? msg.createNak(errors) : msg.createAck();
```

### A whole message as an object

```typescript
const oru = HL7Message.parse(text, { version: '2.5.1' }).toObject<'ORU_R01'>();
for (const result of oru.PATIENT_RESULT ?? [])
  for (const order of result.ORDER_OBSERVATION ?? [])
    for (const { OBX } of order.OBSERVATION ?? [])
      console.log(OBX?.ObservationIdentifier?.Text, OBX?.ObservationValue);
```

## Features

- **Every version, 2.1 to 2.9**, read by its own definitions: segments, fields, data types, message structures and groups.
- **Paths** - `get()`, `set()`, `getDate()` by path, through the structure's groups: `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX-5`. `set()` places a new segment where the structure has it.
- **Objects** - segments and whole messages as plain objects keyed by names, and back.
- **Types by version** - give the version, and the compiler checks fields, components, paths and objects against it.
- **Validation** - structure, required fields, data types, lengths, tables; errors with HL7 error codes and locations.
- **Acknowledgments** - ACKs and NAKs with each version's ERR layout.
- **Character sets** - MSH-18 honoured both ways, UTF-16/UTF-32 by byte order mark, transliteration of what a set cannot hold.
- **Escaping** - escape sequences read and written as the standard defines them.
- **Values as written** - dates, times and numbers checked against HL7's forms, never reinterpreted.
- **Batch files** - FHS/BHS ... BTS/FTS, read and written.

## Documentation

- [Getting started](https://github.com/panates/hl7v2/blob/main/doc/getting-started.md)
- [Messages](https://github.com/panates/hl7v2/blob/main/doc/messages.md) - the model, parsing, building, values
- [Paths](https://github.com/panates/hl7v2/blob/main/doc/paths.md)
- [Objects](https://github.com/panates/hl7v2/blob/main/doc/objects.md)
- [TypeScript](https://github.com/panates/hl7v2/blob/main/doc/typescript.md) - types by version
- [Message structures](https://github.com/panates/hl7v2/blob/main/doc/structure.md)
- [Validation](https://github.com/panates/hl7v2/blob/main/doc/validation.md)
- [Acknowledgments](https://github.com/panates/hl7v2/blob/main/doc/acknowledgments.md)
- [Character sets and escaping](https://github.com/panates/hl7v2/blob/main/doc/encoding.md)
- [Dates and numbers](https://github.com/panates/hl7v2/blob/main/doc/dates-and-numbers.md)
- [Batches](https://github.com/panates/hl7v2/blob/main/doc/batches.md)
- [API reference](https://github.com/panates/hl7v2/blob/main/doc/api/hl7v2.md)
- [Migrating from v1 to v2](https://github.com/panates/hl7v2/blob/main/doc/migration-v1-to-v2.md)
- [Examples](https://github.com/panates/hl7v2/tree/main/examples)

## Node Compatibility

- node >= 20.x

## License

Available under the [BSD 3-Clause](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2.svg
[npm-url]: https://npmjs.org/package/hl7v2
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg
[coveralls-url]: https://coveralls.io/r/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2.svg
[downloads-url]: https://npmjs.org/package/hl7v2
