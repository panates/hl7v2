# [📖 DOCUMENTATION](https://github.com/panates/hl7v2/blob/main/doc/README.md)

---

# hl7v2-dictionary

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

The definitions of **HL7 v2.1 to v2.9**, generated from HL7's own v2 XML schemas: every segment and its fields, every data type and its components, every message structure and its groups, and HL7's tables - with named positions for every field, and TypeScript types for every version.

[`hl7v2`](https://www.npmjs.com/package/hl7v2) reads, writes and validates messages by them.

> **Upgrading from 1.x?** Version 2 changes how values are read and written and adds type checks for typed messages - see [Migrating from v1 to v2](https://github.com/panates/hl7v2/blob/main/doc/migration-v1-to-v2.md).

## Installation

```bash
npm install hl7v2-dictionary
```

Node.js 20 or later; ES modules, TypeScript types included.

## Usage

```typescript
import { dictionaries, PIDSegment, XPNType } from 'hl7v2-dictionary';

const dict = dictionaries['2.5'];

dict.segments.PID.fields[PIDSegment.PatientName];
// { type: 'XPN', desc: 'Patient Name', opt: 'R', rep: 'infinite', len: 250, table: 200, item: 108 }

dict.types.XPN.fields[XPNType.GivenName]; // { type: 'ST', desc: 'Given Name', ... }
dict.messages.ORU_R01.segments.PATIENT_RESULT; // a group of the structure
dict.tableValue(1, 'F'); // 'Female'
```

### A site's own definitions

```typescript
const site = dictionaries['2.5'].extend({
  segments: { ZPI: { fields: { 1: { type: 'ST', desc: 'Nickname', opt: 'O' } } } },
  tables: { 1: { values: { X: 'Non-binary' } } },
});
// HL7Message.parse(text, { dictionaries: { '2.5': site } })
```

## What it holds

- **14 versions**: 2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2, 2.9 - each as HL7 defines it: a field the version withdrew is absent, a data type is the version's own.
- **Message structures** with their groups, choices and repeating segments; a trigger event is its structure's definition (`ADT_A04` is `ADT_A01`); a group lists the names other versions give it.
- **Field attributes**: data type, optionality, repetition, lengths (maximum, minimum, conformance), truncation, table, HL7 element number.
- **HL7's tables** and their values.
- **Field enums** - `PIDSegment.PatientName`, `XPNType.GivenName` - for every segment and data type of every version.
- **TypeScript types** for every version's segments, data types and message structures - types only.
- **Value codecs** for dates, times and numbers - checking HL7's forms, keeping values as written.

Built the first time a version is used; definitions shared between versions and frozen, changed through `extend()`.

## Documentation

- [Dictionary](https://github.com/panates/hl7v2/blob/main/doc/dictionary.md) - versions, definitions, enums, tables, extending, how it is built
- [Dates and numbers](https://github.com/panates/hl7v2/blob/main/doc/dates-and-numbers.md)
- [Message structures](https://github.com/panates/hl7v2/blob/main/doc/structure.md)
- [TypeScript](https://github.com/panates/hl7v2/blob/main/doc/typescript.md)
- [API reference](https://github.com/panates/hl7v2/blob/main/doc/api/dictionary.md)

## Node Compatibility

- node >= 20.x

## License

Available under the [BSD 3-Clause](LICENSE) license. The HL7 v2 XML schemas the data is generated from are licensed by HL7 and are not part of this package's source.

[npm-image]: https://img.shields.io/npm/v/hl7v2-dictionary.svg
[npm-url]: https://npmjs.org/package/hl7v2-dictionary
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg
[coveralls-url]: https://coveralls.io/github/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2-dictionary.svg
[downloads-url]: https://npmjs.org/package/hl7v2-dictionary
