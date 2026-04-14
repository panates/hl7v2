# hl7v2-dictionary

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## About

HL7 v2.x dictionary for Node.js. This package provides version-specific definitions for segments, data types, and messages, supporting versions from 2.1 to 2.8. It is used by the `hl7v2` parser and serializer to understand message structures.

## Installation

```bash
$ npm install hl7v2-dictionary --save
```

## Usage Example

### Accessing a Dictionary

```typescript
import { dictionaries, HL7Version } from 'hl7v2-dictionary';

const dict25 = dictionaries[HL7Version.v2_5];

console.log('Version:', dict25.version);
console.log('PID Segment definition:', dict25.segments['PID']);
```

### Extending a Dictionary

```typescript
import { dictionaries, HL7Version } from 'hl7v2-dictionary';

const customDict = dictionaries[HL7Version.v2_5].extend({
  version: '2.5-custom' as any,
  segments: {
    Z01: {
      desc: 'Custom Segment',
      fields: {
        1: { type: 'ST', desc: 'Custom Field 1', opt: 'R' }
      }
    }
  }
});

console.log('Custom Segment:', customDict.segments['Z01']);
```

## API

### HL7Dictionary

The `HL7Dictionary` class holds definitions for a specific HL7 version.

#### Properties

- `version: HL7Version` - The HL7 version this dictionary represents.
- `segments: Record<string, HL7SegmentDefinition>` - Segment definitions.
- `types: Record<string, HL7DataTypeDefinition>` - Data type definitions.
- `messages: Record<string, HL7MessageDefinition>` - Message structure definitions.

#### Methods

##### .extend()
Creates a new dictionary by extending the current one with new or overridden definitions.
`extend(args: { version?: HL7Version; segments?: Record<string, DeeperPartial<HL7SegmentDefinition>>; types?: Record<string, DeeperPartial<HL7DataTypeDefinition>>; messages?: Record<string, HL7MessageDefinition>; }): HL7Dictionary`

example
```typescript
const extendedDict = dict.extend({
  segments: {
    PID: {
      fields: {
        1: { desc: 'Overridden Description' }
      }
    }
  }
});
```

##### .overwriteSegments()
Merges new segment definitions into the current dictionary.
`overwriteSegments(segmentsDefs: Record<string, DeeperPartial<HL7SegmentDefinition>>): void`

example
```typescript
dict.overwriteSegments({
  PID: {
    fields: {
      1: { desc: 'New Description' }
    }
  }
});
```

##### .overwriteTypes()
Merges new data type definitions into the current dictionary.
`overwriteTypes(typeDefs: Record<string, DeeperPartial<HL7DataTypeDefinition>>): void`

example
```typescript
dict.overwriteTypes({
  ST: {
    desc: 'String Data Type'
  }
});
```

### Utility Functions

##### .findNearestHL7Version()
Finds the nearest available HL7 version in the dictionary for a given version string.
`findNearestHL7Version(version: HL7Version): HL7Version`

example
```typescript
import { findNearestHL7Version, HL7Version } from 'hl7v2-dictionary';

const nearest = findNearestHL7Version('2.5.2' as any);
// Returns HL7Version.v2_5
```

##### .toHL7Date()
Formats a Date or string into an HL7 date string (YYYYMMDD).
`toHL7Date(value: Date | string): string`

example
```typescript
import { toHL7Date } from 'hl7v2-dictionary';

const dateStr = toHL7Date(new Date('2023-10-27'));
// Returns "20231027"
```

##### .toHL7DateTime()
Formats a Date or string into an HL7 date-time string (YYYYMMDDHHMMSS).
`toHL7DateTime(value: Date | string): string`

example
```typescript
import { toHL7DateTime } from 'hl7v2-dictionary';

const dateTimeStr = toHL7DateTime(new Date('2023-10-27T10:30:00'));
// Returns "20231027103000"
```

##### .toHL7Time()
Formats a Date or string into an HL7 time string (HHMMSS).
`toHL7Time(value: Date | string): string`

example
```typescript
import { toHL7Time } from 'hl7v2-dictionary';

const timeStr = toHL7Time(new Date('2023-10-27T10:30:00'));
// Returns "103000"
```

### Interfaces

#### HL7SegmentDefinition
- `desc?: string` - Description of the segment.
- `fields: Record<string, HL7FieldDefinition>` - Map of field index to field definition.

#### HL7FieldDefinition
- `type: string` - The data type of the field.
- `desc?: string` - Description of the field.
- `opt?: HL7DatatypeOptional` - Optionality ('R', 'O', 'S', 'C', 'B').
- `rep?: HL7DatatypeRepetition` - Repetition (number or 'infinite').
- `len?: number` - Maximum length.
- `table?: number` - Associated table number.

#### HL7DataTypeDefinition
- `desc?: string` - Description of the data type.
- `fields?: Record<string, HL7FieldDefinition>` - Components of the data type (if complex).

#### HL7MessageDefinition
- `desc?: string` - Description of the message.
- `segments?: Record<string, HL7MessageSegmentsDefinition>` - Message structure definition.

### Enums

#### HL7Version
- `v2_1 = '2.1'`
- `v2_2 = '2.2'`
- `v2_3 = '2.3'`
- `v2_3_1 = '2.3.1'`
- `v2_4 = '2.4'`
- `v2_5 = '2.5'`
- `v2_5_1 = '2.5.1'`
- `v2_6 = '2.6'`
- `v2_7 = '2.7'`
- `v2_7_1 = '2.7.1'`
- `v2_8 = '2.8'`

## Node Compatibility

- node >= 20.x

## License

HL7v2 is available under [MIT](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2-dictionary.svg
[npm-url]: https://npmjs.org/package/hl7v2-dictionary
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/master.svg
[coveralls-url]: https://coveralls.io/github/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2-dictionary.svg
[downloads-url]: https://npmjs.org/package/hl7v2-dictionary
