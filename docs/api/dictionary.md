# hl7v2-dictionary - API reference

`hl7v2-dictionary` holds the HL7 v2 definitions the `hl7v2` parser, serializer and validator work from: segments, data types, message structures and tables for every version from 2.1 to 2.9 (2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2, 2.9). It also exports the date and number conversions attached to the DT, DTM, TS, TM, NM and SI data types, enums of field and component positions, and TypeScript types for segments and messages as plain objects. This page lists every public export of the package; the [Dictionary guide](../dictionary.md) explains how to use them.

## Contents

- [dictionaries](#dictionaries)
  - [buildDictionary()](#builddictionary)
  - [findNearestHL7Version()](#findnearesthl7version)
- [HL7Dictionary](#hl7dictionary)
  - [Constructor](#constructor)
  - [Properties](#properties)
  - [Methods](#methods)
- [HL7Version](#hl7version)
- [Definitions](#definitions)
  - [HL7SegmentDefinition](#hl7segmentdefinition)
  - [HL7FieldDefinition](#hl7fielddefinition)
  - [HL7DataTypeDefinition](#hl7datatypedefinition)
  - [HL7MessageDefinition](#hl7messagedefinition)
  - [HL7MessageSegmentsDefinition](#hl7messagesegmentsdefinition)
  - [HL7TableDefinition](#hl7tabledefinition)
  - [HL7DatatypeOptional and HL7DatatypeRepetition](#hl7datatypeoptional-and-hl7datatyperepetition)
- [Dates and times](#dates-and-times)
- [Numbers](#numbers)
- [Field enums](#field-enums)
- [Tables](#tables)
- [Generated object types](#generated-object-types)
  - [Object interfaces across versions](#object-interfaces-across-versions)
  - [Types by version](#types-by-version)
  - [Messages by version](#messages-by-version)
- [How the dictionaries are built](#how-the-dictionaries-are-built)

## dictionaries

`const dictionaries: Record<HL7Version, HL7Dictionary>`

Each version's dictionary, keyed by version string (`'2.1'` ... `'2.9'`). A version is built the first time its key is read; the other versions cost nothing until then. The `hl7v2` package reads its definitions from this object, using [findNearestHL7Version()](#findnearesthl7version) to pick the key for a message's version.

- **Every version is complete**, as HL7's own v2 XML schemas define it. A field the version withdrew is absent - the fields after it keep their numbers (2.9's PID has no field 2).
- **A definition identical in several versions is one object**, shared by all of them and frozen: `dictionaries['2.5'].segments.PID === dictionaries['2.5.1'].segments.PID`. Assigning to a frozen definition throws in strict mode code. Change a dictionary through [extend()](#extend), [overwriteSegments()](#overwritesegments), [overwriteTypes()](#overwritetypes) or [overwriteTables()](#overwritetables), which copy what they change.
- **Assigning a key replaces that version's dictionary** for every message parsed afterwards.

To use a different dictionary for some messages only, without changing `dictionaries`, pass a map to `hl7v2`: `HL7Message.parse(text, { dictionaries: { '2.5': site } })` or `new HL7Message(version, { '2.5': site })`. The map replaces the default dictionaries only for the versions it has; a version it lacks falls back to the default one in `dictionaries`.

```typescript
import { dictionaries, HL7Version } from 'hl7v2-dictionary';

const dict = dictionaries[HL7Version.v2_5];
dict.segments.PID.fields[5];
// { type: 'XPN', desc: 'Patient Name', opt: 'R', rep: 'infinite', len: 250, item: 108 }

// A site's own 2.5: every 2.5 message parsed from now on uses it
dictionaries[HL7Version.v2_5] = dict.extend({
  tables: { 1: { values: { X: 'Non-binary' } } },
});
```

### buildDictionary()

`buildDictionary(version: HL7Version): HL7Dictionary`

Builds a new `HL7Dictionary` for a version from the package's generated data. Each call returns a new dictionary object - its `segments`, `types`, `messages` and `tables` records are its own - while the definitions in them are the same frozen, shared objects `dictionaries` uses. Throws `Error('No HL7 dictionary for version <version>')` for a version with no data, such as `'2.0'`.

Use it for a dictionary to change in place without affecting `dictionaries`.

```typescript
import { buildDictionary, HL7Version } from 'hl7v2-dictionary';

const own = buildDictionary(HL7Version.v2_5);
own.overwriteTypes({ ST: { desc: 'String Data Type' } });
// dictionaries['2.5'].types.ST.desc is still 'String Data'
```

### findNearestHL7Version()

`findNearestHL7Version(version: HL7Version): HL7Version`

The newest version in `dictionaries` that is not newer than the given one: a message of version 2.5.2 is read with 2.5.1's definitions. Versions are compared part by part (2.5 < 2.5.1 < 2.10), using each part's leading digits, so a version read from a message may carry trailing debris. A version older than every dictionary gets the oldest (`'2.1'`); one newer than every dictionary gets the newest (`'2.9'`). Versions are taken from the keys of `dictionaries`, so a key added there is a candidate too.

```typescript
import { findNearestHL7Version, HL7Version } from 'hl7v2-dictionary';

findNearestHL7Version('2.5.2' as HL7Version); // '2.5.1'
findNearestHL7Version('2.0' as HL7Version); // '2.1'
findNearestHL7Version('2.10' as HL7Version); // '2.9'
```

## HL7Dictionary

`class HL7Dictionary`

The definitions of one HL7 version. The dictionaries in `dictionaries` and those `buildDictionary()` returns are instances of it.

### Constructor

`new HL7Dictionary(args: { version?: HL7Version; segments?: Record<string, HL7SegmentDefinition>; types?: Record<string, HL7DataTypeDefinition>; messages?: Record<string, HL7MessageDefinition>; tables?: Record<number, HL7TableDefinition> })`

Takes the given records as they are (no copy). `version` defaults to `'2.1'`; every record defaults to an empty object.

### Properties

- `version: HL7Version` - The HL7 version the dictionary represents.
- `segments: Record<string, HL7SegmentDefinition>` - Segment definitions by segment ID (`PID`, `OBX`).
- `types: Record<string, HL7DataTypeDefinition>` - Data type definitions by name (`XPN`, `CWE`, `ST`).
- `messages: Record<string, HL7MessageDefinition>` - Message structure definitions, by structure (`ADT_A01`) and by trigger event (`ADT_A04`). An event is the very definition object of the structure the standard assigns it: `messages.ADT_A04 === messages.ADT_A01`.
- `tables: Record<number, HL7TableDefinition>` - HL7 tables by number (1 is Administrative Sex). One set serves every version.

### Methods

#### .tableValue()

`tableValue(table: number, code: string): string | undefined`

The text of a code in a table; `undefined` when the table or the code is not defined. A user-defined table (an `IS` field's, such as 0010) carries no values the standard gives.

```typescript
dict.tableValue(1, 'F'); // 'Female'
dict.tableValue(8, 'AA'); // 'Original mode: Application Accept - Enhanced mode: ...'
dict.tableValue(10, 'X'); // undefined
```

#### .extend()

`extend(args: { version?: HL7Version; segments?: Record<string, DeeperPartial<HL7SegmentDefinition>>; types?: Record<string, DeeperPartial<HL7DataTypeDefinition>>; messages?: Record<string, HL7MessageDefinition>; tables?: Record<number, DeeperPartial<HL7TableDefinition>> }): HL7Dictionary`

Creates a new dictionary with this one's definitions and the given ones merged over them. The given segments, types and tables are deep-merged over the existing definitions of the same name (or added); the given messages replace or add whole message definitions. Only the definitions named in `args` are copied - every other definition is shared, unchanged, with this dictionary. This dictionary is not modified. `version` defaults to this dictionary's version.

```typescript
const custom = dictionaries[HL7Version.v2_5].extend({
  segments: {
    PID: { fields: { 1: { desc: 'Overridden Description' } } },
    ZPI: {
      desc: 'Custom Segment',
      fields: { 1: { type: 'ST', desc: 'Custom Field', opt: 'R' } },
    },
  },
  tables: { 1: { values: { X: 'Non-binary' } } },
});

custom.segments.PID.fields[1].desc; // 'Overridden Description'
custom.tableValue(1, 'X'); // 'Non-binary'
dictionaries['2.5'].tableValue(1, 'X'); // undefined
```

#### .overwriteSegments()

`overwriteSegments(segmentsDefs: Record<string, DeeperPartial<HL7SegmentDefinition>>): void`

Deep-merges the given definitions over this dictionary's segments, in place. Each named segment is copied first (copy-on-write) and the copy replaces it in this dictionary alone, so a definition shared with other versions is not changed. A segment not defined yet is added.

```typescript
const dict = buildDictionary(HL7Version.v2_5);
dict.overwriteSegments({
  PID: { fields: { 1: { desc: 'New Description' } } },
});
```

#### .overwriteTypes()

`overwriteTypes(typeDefs: Record<string, DeeperPartial<HL7DataTypeDefinition>>): void`

Deep-merges the given definitions over this dictionary's data types, in place, copying each one it changes as `overwriteSegments()` does.

```typescript
dict.overwriteTypes({ ST: { desc: 'String Data Type' } });
```

#### .overwriteTables()

`overwriteTables(tableDefs: Record<number, DeeperPartial<HL7TableDefinition>>): void`

Deep-merges table definitions over this dictionary's, in place - a user-defined table's local codes, or codes a site adds. The tables are shared and frozen like the other definitions; each table changed is copied first.

```typescript
dict.overwriteTables({ 1: { values: { X: 'Non-binary' } } });
dict.tableValue(1, 'X'); // 'Non-binary'
```

`DeeperPartial` comes from the `ts-gems` package: every property at every level is optional.

## HL7Version

```typescript
type HL7Version = `${number}.${number}` | `${number}.${number}.${number}`;
```

A version string. The type takes any two- or three-part version; the namespace of the same name holds a constant for each version with a dictionary:

- `HL7Version.v2_1 = '2.1'`
- `HL7Version.v2_2 = '2.2'`
- `HL7Version.v2_3 = '2.3'`
- `HL7Version.v2_3_1 = '2.3.1'`
- `HL7Version.v2_4 = '2.4'`
- `HL7Version.v2_5 = '2.5'`
- `HL7Version.v2_5_1 = '2.5.1'`
- `HL7Version.v2_6 = '2.6'`
- `HL7Version.v2_7 = '2.7'`
- `HL7Version.v2_7_1 = '2.7.1'`
- `HL7Version.v2_8 = '2.8'`
- `HL7Version.v2_8_1 = '2.8.1'`
- `HL7Version.v2_8_2 = '2.8.2'`
- `HL7Version.v2_9 = '2.9'`

`HL7Version` is a namespace of constants, not a TypeScript `enum`. `HL7Version.v2_1` is typed `HL7Version`; the other constants have their literal types (`'2.5'`).

## Definitions

The interfaces of the definitions a dictionary holds (`types.ts`). Definitions from the generated data are frozen. See the [Dictionary guide](../dictionary.md) and [Message structures](../structure.md).

### HL7SegmentDefinition

- `desc?: string` - Description of the segment (`'Patient Identification'`).
- `fields: Record<string, HL7FieldDefinition>` - Fields by position, `'1'` first. A field the version withdrew is absent.

### HL7FieldDefinition

A field of a segment, or a component of a composite data type.

- `type: string` - Data type name (`'XPN'`, `'ST'`).
- `desc?: string` - Description of the field (`'Patient Name'`).
- `opt?: HL7DatatypeOptional` - Optionality: `'R'` required, `'O'` optional, `'C'` conditional, `'B'` kept for backward compatibility, `'S'`.
- `rep?: HL7DatatypeRepetition` - Repetition: the number of times the field may occur, or `'infinite'`.
- `len?: number` - Maximum length.
- `table?: number` - Number of the HL7 table the field's codes come from.
- `item?: number` - HL7 data element number: PID-5 is item 108.
- `minLen?: number` - Minimum length.
- `confLen?: number` - Conformance length (2.7+): the length a receiver must at least keep. From 2.7 on most string fields have this instead of `len`.
- `truncate?: boolean` - Whether a longer value may be truncated (2.7+): `true` is HL7's `#`, `false` its `=` (never).
- `encode?: (v: any) => string` - Writes a value as HL7 text.
- `decode?: (v: any, read?: boolean) => any` - Reads a value into what the library holds. `read` is `true` for a value from HL7 text, which must be in HL7's own format; `false` (or absent) for one given in code, which may be more (a `Date`, an ISO 8601 date/time).

A field definition carries `encode`/`decode` only where the dictionary attaches them to a component: the first component (Time) of the composite `TS` type, 2.2 to 2.5.1, has the DTM conversions.

### HL7DataTypeDefinition

- `desc?: string` - Description of the data type (`'Extended Person Name'`).
- `fields?: Record<string, HL7FieldDefinition>` - Components by position, for a composite type; absent for a primitive one.
- `encode?: (v: any) => string` - Writes a value of the type as HL7 text.
- `decode?: (v: any, read?: boolean) => any` - Reads a value of the type; `read` as in `HL7FieldDefinition`.

The dictionary attaches these conversions by type name in every version: `DT` ([toHL7Date](#dates-and-times)), `DTM` ([toHL7DateTime](#dates-and-times)), `TM` ([toHL7Time](#dates-and-times)), each as both `decode` and `encode`; 2.1's `TS`, a primitive there, gets DTM's conversions, so its values are checked and kept as written like a DTM's; `NM` ([toHL7Number](#numbers)) and `SI` ([toHL7SequenceId](#numbers)) as `decode` only.

### HL7MessageDefinition

- `desc?: string` - Description of the message (`'Admit/visit notification'`).
- `segments?: Record<string, HL7MessageSegmentsDefinition>` - The message structure: segments and groups keyed by name, ordered by `idx`.

### HL7MessageSegmentsDefinition

A segment or a group in a message structure.

- `idx: number` - Position among its siblings, from 0.
- `desc?: string` - Description.
- `min?: number` - Minimum occurrences; absent is 0 (optional).
- `max?: number` - Maximum occurrences; absent is unbounded (repeating).
- `segment?: string` - The segment type, when the key is not it: a segment repeated among its siblings is keyed with a number (the second `PID` of ADT_A17 is `PID2`, with `segment: 'PID'`).
- `choice?: boolean` - A choice: the message carries one of the items in `segments` (an alternative is a segment or a group). ORM_O01's OBR, RQD, RQ1, RXO, ODS, ODT is one. `HL7Message.buildStructureTree()` in `hl7v2` matches the one present.
- `aliases?: string[]` - For a group, the names the same group has in other versions of the message. Each version keeps its standard names; `HL7MessageNode.getNode()` in `hl7v2` finds a group by either.
- `segments?: Record<string, HL7MessageSegmentsDefinition>` - A group's own structure; absent for a segment.

```typescript
dictionaries['2.5'].messages.ADT_A01.segments!.PROCEDURE;
// { idx: 15, desc: 'Procedure', segments: {
//     PR1: { idx: 0, min: 1, max: 1, desc: 'Procedures' },
//     ROL: { idx: 1, desc: 'Role' } } }
```

### HL7TableDefinition

An HL7 table: the values a coded field takes (table 0001: F, M, ...).

- `desc?: string` - Description of the table (`'Administrative Sex'`).
- `values: Record<string, string>` - Each code and its text.

### HL7DatatypeOptional and HL7DatatypeRepetition

```typescript
type HL7DatatypeOptional = 'R' | 'O' | 'S' | 'C' | 'B';
type HL7DatatypeRepetition = number | 'infinite';
```

## Dates and times

`hl7-date.util.ts`. HL7 writes DT as `YYYY[MM[DD]]`, DTM/TS as `YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]` and TM as `HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ]`. A value read from a message is kept as written - its precision and its offset are part of it - once checked. A `Date` is written in local time with its offset (`20250102060405.678+0300`); without an offset the standard reads a time as the sender's local time. Invalid values, including a part out of range (month 13, hour 24), throw a `TypeError` naming the kind of value: `Value "20251302" is not a valid HL7 date` from `toHL7Date()`, `...HL7 time` from `toHL7Time()`, `...HL7 date/time` from `toHL7DateTime()` and `parseHL7DateTime()`. See [Dates and numbers](../dates-and-numbers.md).

The `to*` functions are the `decode`/`encode` conversions of the DTM (and 2.1's primitive TS), DT and TM types. Their `read` argument is `true` for a value read from HL7 text, which must be in HL7's form; `false` or absent for a value given in code, which may also be a `Date` or an ISO 8601 string.

- `toHL7DateTime(value: Date | string, read?: boolean): string` - DTM / TS. An HL7 value is checked and returned as written. A `Date`, or (when not `read`) a string starting `YYYY-MM` read as ISO 8601, is formatted with `formatHL7DateTime()`.
- `toHL7Date(value: Date | string, read?: boolean): string` - DT. As `toHL7DateTime()`; a `Date` or ISO 8601 string is formatted with `formatHL7Date()` (its local date).
- `toHL7Time(value: Date | string, read?: boolean): string` - TM. An HL7 value is checked and returned as written. A `Date`'s time is formatted with `formatHL7Time()`. When not `read`, a time written with colons (`06:04:05`) is accepted and returned without them; ISO 8601 date/time strings are not accepted.
- `formatHL7DateTime(date: Date, options?: { offset?: boolean }): string` - A `Date` as a DTM in local time: `20250102060405.678+0300`. Milliseconds are written only when not 0. `offset: false` leaves the offset out.
- `formatHL7Date(date: Date): string` - A `Date` as a DT, its local date: `20250102`.
- `formatHL7Time(date: Date, options?: { offset?: boolean }): string` - A `Date`'s time as a TM in local time: `060405.678+0300`. `offset: false` leaves the offset out.
- `parseHL7DateTime(value: string): Date` - An HL7 DT, DTM or TS value as a `Date`, read in its offset, or as local time without one. Missing parts are their lowest: `'2025'` is 2025-01-01 00:00 local time.

```typescript
import {
  formatHL7DateTime,
  parseHL7DateTime,
  toHL7DateTime,
  toHL7Time,
} from 'hl7v2-dictionary';

// In a +03:00 time zone
const date = new Date(2025, 0, 2, 6, 4, 5, 678);
formatHL7DateTime(date); // '20250102060405.678+0300'
formatHL7DateTime(date, { offset: false }); // '20250102060405.678'

parseHL7DateTime('20250102030405-0500').toISOString(); // '2025-01-02T08:04:05.000Z'

toHL7DateTime('202501020304', true); // '202501020304' - kept as written
toHL7DateTime('2025-01-02T03:04:05Z'); // '20250102060405+0300'
toHL7DateTime('2025-01-02T03:04:05Z', true); // throws TypeError: not HL7's form
toHL7Time('06:04:05'); // '060405'
```

## Numbers

`hl7-number.util.ts`. NM is an optional sign, digits and an optional decimal point - `12.5`, `-3`, `.5` - with no exponent, no thousands separator and no decimal comma; SI is a non-negative integer. A value is read in that form only: `'12,5'` is not twelve. Both functions are the `decode` conversions of their types and throw a `TypeError` for anything else. See [Dates and numbers](../dates-and-numbers.md).

- `toHL7Number(value: unknown): number | string` - NM. A finite number is returned as it is; text in NM's form (trimmed) is returned as a number when a JavaScript number holds it exactly (15 significant digits or fewer), otherwise as the text, unrounded.
- `toHL7SequenceId(value: unknown): number | string` - SI. A non-negative integer number is returned as it is; text of digits is returned as `toHL7Number()` returns it.

```typescript
import { toHL7Number, toHL7SequenceId } from 'hl7v2-dictionary';

toHL7Number('12.5'); // 12.5
toHL7Number('.5'); // 0.5
toHL7Number('12345678901234567890'); // '12345678901234567890'
toHL7Number('1e3'); // throws TypeError
toHL7SequenceId('42'); // 42
toHL7SequenceId(-1); // throws TypeError
```

## Field enums

Generated by `support/build-field-enums.mts` (`src/segment-fields`, `src/type-fields`). There is one TypeScript `enum` per segment and one per composite data type, covering every version together: HL7 never reuses a field number, so one enum serves all versions. Each member is a field's or component's position, named from its description in PascalCase (`"Mother's Maiden Name"` is `MotherSMaidenName`; a segment suffix such as `" - PID"` is dropped).

- Segments: `<SegmentID>Segment` - `PIDSegment`, `MSHSegment`, `OBXSegment`, ... (200 enums).
- Data types: `<TYPE>Type` - `XPNType`, `CXType`, `CWEType`, ...; a name with characters other than letters, digits and `_` has them replaced by `_` (`CM_PAT_IDType`) (141 enums).

An enum holds the members of every version: a member that exists keeps its name, and a field a newer version adds is named from the newest version that has it. A member is therefore not necessarily a field of every version - `DG1Segment.DiagnosisCodingMethod` (2) is not a field of 2.6's DG1. In `hl7v2`, the [version-specific types](#types-by-version) make the compiler report such a use on a typed message.

```typescript
import { dictionaries, PIDSegment, XPNType } from 'hl7v2-dictionary';

PIDSegment.PatientName; // 5
PIDSegment.DateTimeOfBirth; // 7
XPNType.GivenName; // 2

dictionaries['2.5'].segments.PID.fields[PIDSegment.DateTimeOfBirth].type; // 'TS'
```

The same names key the object interfaces below.

## Tables

`src/tables` exports one type:

- `AcknowledgmentCode` - `'AA' | 'AE' | 'AR' | 'CA' | 'CE' | 'CR'`, the codes of table 0008 (MSA-1). A type only, not an enum.

The table values themselves are in each dictionary's [tables](#properties), read with [tableValue()](#tablevalue).

```typescript
import type { AcknowledgmentCode } from 'hl7v2-dictionary';

const code: AcknowledgmentCode = 'AE';
dictionaries['2.5'].tableValue(8, code);
// 'Original mode: Application Error - Enhanced mode: Application acknowledgment: Error'
```

## Generated object types

Type-only exports, generated by `support/build-field-enums.mts`; nothing of them is in the JavaScript bundle. They describe segments, data types and messages as the plain objects `hl7v2` reads and writes (`HL7Segment.toObject()`, `assign()`, `HL7Message.toObject()`), keyed by the [field enums'](#field-enums) member names. Every property is optional and may be `null`; a primitive is a `string`, an NM or SI value `number | string`, a composite type an object, and a repeating field an array. See [Objects](../objects.md) and [TypeScript](../typescript.md).

### Object interfaces across versions

`segment-objects.ts`: one interface per segment and per composite type, the union of what every version makes it.

- `<SegmentID>Object` - a segment as an object: `PIDObject`, `MSHObject`, `OBXObject`, ...
- `<TYPE>Object` - a composite data type as a field's value: `XPNObject`, `CXObject`, `TSObject`, ...
- `<TYPE>Components` - a composite data type as a component's value: `XPNComponents`, `TSComponents`, ... A component that is itself composite (a sub-component) takes a string.
- `HL7SegmentObjects` - every `<SegmentID>Object` by segment ID: `HL7SegmentObjects['PID']` is `PIDObject`.
- `HL7VariesValue` - a field of a type that takes anything (`VARIES`: OBX-5, QPD-3, MFE-4 ...): text when it holds one value; with components, an object keyed by the names of the data type it holds (an OBX-5's by OBX-2's type) or by position, a component with sub-components an object the same way.

A field's type is the union of its types across versions: MSH-7 is a TS (an object) up to 2.5.1 and a DTM (a string) from 2.6, so `TSObject | string`; a field any version lets repeat is an array.

```typescript
import type { PIDObject } from 'hl7v2-dictionary';

const pid: PIDObject = {
  SetID: 1,
  PatientName: [{ FamilyName: 'Doe', GivenName: 'John' }],
  DateTimeOfBirth: '19800101',
};
```

### Types by version

`versioned-objects.ts`: each version's segments and data types exactly as that version defines them. A shape the same in several versions is one interface the versions share.

- `HL7VersionTypes` - each version's composite data types as objects, by version then type name.
- `HL7VersionSegments` - each version's segments as objects, by version then segment ID. Only the versions and segments the dictionaries define.
- `HL7TypedVersion` - `keyof HL7VersionSegments`: the versions with version-specific types (`'2.1'` ... `'2.9'`).
- `HL7SegmentObject<V extends HL7TypedVersion, S extends keyof HL7VersionSegments[V]>` - a segment of a version as an object: `HL7SegmentObject<'2.5', 'PID'>`.
- `HL7DataTypeObject<V extends HL7TypedVersion, T extends keyof HL7VersionTypes[V]>` - a composite data type of a version as an object: `HL7DataTypeObject<'2.5', 'XPN'>`.
- `HL7VersionSegmentObjects` - the segments of `HL7VersionSegments`, as `HL7Segment.toObject()` and `assign()` take them, plus index signatures: any other segment ID, or any other version, is `Record<string, any>`.
- `HL7VersionSegmentFields` - the field positions each version's segments have, as a union of numbers: `HL7VersionSegmentFields['2.6']['DG1']` does not include 2. Any other segment or version is `number`. Used by `HL7Segment.field()`.
- `HL7SegmentField<V extends keyof HL7VersionSegmentFields, S extends string>` - the field positions segment `S` has in version `V`: `HL7SegmentField<'2.6', 'DG1'>`.
- `HL7VersionFieldComponents` - the component positions of each version's segment fields: `HL7VersionFieldComponents['2.6']['PID'][5]` is 1 to 14, XPN's. A primitive's only component is 1; a field of a type that takes anything (VARIES), and anything not defined here, takes any number. Used by `HL7Field.comp()`.
- `HL7VersionPathTypes` - each version's segment field types and data type component types, for checking paths (`HL7CheckedPath` in `hl7v2`): `segments.PID[5]` is PID-5's type name (`'XPN'`), `types.XPN[1]` the type of its first component; a primitive's only component is itself. Other versions have empty `types` and `segments`.

```typescript
import type {
  HL7DataTypeObject,
  HL7SegmentField,
  HL7SegmentObject,
} from 'hl7v2-dictionary';

// In 2.5, XPN-1 is an FN and PID-7 a TS
const name: HL7DataTypeObject<'2.5', 'XPN'> = {
  FamilyName: { Surname: 'Doe' },
  GivenName: 'John',
};
const pid25: HL7SegmentObject<'2.5', 'PID'> = {
  PatientName: [name],
  DateTimeOfBirth: { Time: '19800101' },
};

// From 2.6 on, PID-7 is a DTM
const pid27: HL7SegmentObject<'2.7', 'PID'> = { DateTimeOfBirth: '19800101' };

const field: HL7SegmentField<'2.6', 'DG1'> = 3;
// @ts-expect-error - DG1-2 is not a field of 2.6's DG1
const withdrawn: HL7SegmentField<'2.6', 'DG1'> = 2;
```

### Messages by version

`versioned-messages.ts`:

- `HL7VersionMessages` - each version's messages as objects (`HL7Message.toObject()`), by version, then by structure and by trigger event (`ADT_A04` is ADT_A01's shape). Segments are keyed by ID and groups by name, arrays where they repeat; the segments are the version's `HL7VersionSegments` objects. Any other structure, or any other version, is `Record<string, any>`.

```typescript
import type { HL7VersionMessages } from 'hl7v2-dictionary';

type ORU = HL7VersionMessages['2.5']['ORU_R01'];

const oru: ORU = {
  MSH: {},
  PATIENT_RESULT: [
    {
      PATIENT: { PID: { SetID: 1 } },
      ORDER_OBSERVATION: [
        { OBR: {}, OBSERVATION: [{ OBX: { ValueType: 'NM' } }] },
      ],
    },
  ],
};
```

## How the dictionaries are built

- **Every version is defined as HL7's own v2 XML schemas define it.** A field the version withdrew is absent - the fields after it keep their numbers - and a choice of segments (ORM_O01's OBR, RQD, RQ1, RXO, ODS, ODT) is one group marked `choice: true`, holding its alternatives.
- **A trigger event is its message structure.** ADT_A04 and ADT_A08 are the very definition of ADT_A01, the structure the standard assigns them.
- **A version is built the first time it is used**; the others cost nothing until then.
- **A definition identical in several versions is one object**, shared by all of them and frozen. Change a dictionary through `extend()`, `overwriteSegments()`, `overwriteTypes()` or `overwriteTables()`, which copy what they change - a definition cannot be modified in place.

The data (`data/hl7-data.js`, layout in `data/hl7-data.d.ts`) is generated by `support/build-dictionary.mts`, which writes definitions identical across versions once and refers to them by index. Its sources are:

- **the HL7 v2 XML schemas** - "HL7 Version 2.x Messaging Schemas" (2.6 to 2.9) and "Version 2 v2.xml XML Schemas for HL7 Version 2.5 and earlier" (used up to 2.5.1) from [HL7's V2 product suite](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185). They are licensed by HL7 and not in the repository: download them (an HL7 account is needed) into `support/hl7-schemas/`;
- **an event map**, for which structure a trigger event uses - the schemas do not say;
- **the [`hl7-dictionary`](https://www.npmjs.com/package/hl7-dictionary) package**, for what the schemas leave out: descriptions of segments, data types, messages and groups, field lengths before 2.6, the C and B optionalities, the tables of data type components, a few definitions the early schemas name without defining, and the HL7 tables (one set for every version).

Two more scripts read the built package (`pnpm build` first):

- `support/compare-dictionary.mts` reports where the dictionaries differ from the schemas - field types, required, repetition, length and table of segments; component types and tables of data types; segment order, required and repeating of message structures. Group names are not compared.
- `support/build-field-enums.mts` generates the [field enums](#field-enums) (`src/segment-fields`, `src/type-fields`) and the [object types](#generated-object-types) (`src/segment-objects.ts`, `src/versioned-objects.ts`, `src/versioned-messages.ts`). An existing enum member keeps its name; only what is missing is added.

```bash
$ node support/build-dictionary.mts               # regenerate data/hl7-data.js
$ pnpm build
$ node support/compare-dictionary.mts [report.md] # where the dictionaries differ from the schemas
$ node support/build-field-enums.mts              # regenerate field enums and object types
```

With the schemas in place, the tests compare every version with them, field by field; without them those checks are skipped.
