# Dictionary

`hl7v2-dictionary` holds the definitions of HL7 v2.1 to v2.9: every segment and its fields, every data type and its components, every message structure, and HL7's tables. `hl7v2` reads and checks messages by them.

## Versions

2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2 and 2.9.

```typescript
import { dictionaries, findNearestHL7Version, HL7Version } from 'hl7v2-dictionary';

const dict = dictionaries['2.5']; // or dictionaries[HL7Version.v2_5]
findNearestHL7Version('2.5.2'); // '2.5.1' - the newest version not newer
```

A message is read by the dictionary of its MSH-12, or of the nearest version below it. A version is built the first time it is used; the others cost nothing until then.

## Definitions

```typescript
dict.segments.PID.fields[5];
// { type: 'XPN', desc: 'Patient Name', opt: 'R', rep: 'infinite', len: 250, table: 200, item: 108 }

dict.types.XPN.fields[1]; // { type: 'FN', desc: 'Family Name', opt: 'O', rep: 1, ... }
dict.messages.ORU_R01.segments.PATIENT_RESULT; // a group: { idx, min, segments: {...}, aliases }
dict.tables[1].values; // { F: 'Female', M: 'Male', ... }
```

A field, or component, says:

| Property    | Meaning                                                              |
| ----------- | -------------------------------------------------------------------- |
| `type`      | its data type                                                        |
| `desc`      | its name in the standard                                             |
| `opt`       | optionality: `R` required, `O` optional, `C` conditional, `B` backward compatible, `X` not used |
| `rep`       | how often it may repeat: a number, or `'infinite'`                   |
| `len`       | maximum length (from 2.7 most string fields have `confLen` instead) |
| `minLen`, `confLen` | minimum and conformance length (2.6+, 2.7+)                  |
| `truncate`  | whether a longer value may be truncated (2.7+: `#` true, `=` false)  |
| `table`     | its HL7 table                                                        |
| `item`      | the HL7 data element number                                          |

The definitions are what HL7 defines for the version: a field the version withdrew is absent (its successors keep their numbers); a data type is the version's own - 2.6's MSH-7 is a DTM, 2.5's a TS. Message structures are described in [Message structures](structure.md).

## Field enums

Positions have names: an enum per segment and per data type, for every version together - HL7 never reuses a field number.

```typescript
import { MSHSegment, PIDSegment, XPNType } from 'hl7v2-dictionary'; // or from 'hl7v2'

PIDSegment.PatientName; // 5
XPNType.GivenName; // 2
msg.getSegment('PID')!.field(PIDSegment.PatientName).getValue(XPNType.GivenName);
```

A member keeps its name across versions; a field a later version added has the name that version gives it (`MSHSegment.SecurityClassificationTag`, MSH-26, 2.9). The same names key the [objects](objects.md).

## Tables

HL7's tables - the values a coded field takes - by number. One set for every version.

```typescript
dict.tableValue(1, 'F'); // 'Female'
dict.tables[8].values; // AA, AE, AR, CA, CE, CR
```

`validate({ tables: true })` checks `ID` fields' codes against them. A user-defined table - an `IS` field's, such as 0001 in some versions - is the site's own: add its codes to a copy of the dictionary.

## Extending a dictionary

Definitions are shared between versions and frozen. Change them through `extend()`, which returns a new dictionary copying only what it changes, or `overwrite*()`, which change a dictionary's own copies:

```typescript
import { dictionaries } from 'hl7v2-dictionary';
import { HL7Message } from 'hl7v2';

const site = dictionaries['2.5'].extend({
  segments: {
    /* a Z segment of the site */
    ZPI: {
      desc: 'Patient extra',
      fields: {
        1: { type: 'ST', desc: 'Nickname', opt: 'O' },
        2: { type: 'CWE', desc: 'Language', opt: 'O', rep: 'infinite' },
      },
    },
    /* a field made required */
    PID: { fields: { 7: { opt: 'R' } } },
  },
  tables: { 1: { values: { X: 'Non-binary' } } },
});

const msg = HL7Message.parse(text, { dictionaries: { '2.5': site } });
msg.getSegment('ZPI')!.field(2).getValue(1); // read by the site's definition
```

`extend()` merges segments and types given over the current ones and adds messages; `overwriteSegments()`, `overwriteTypes()`, `overwriteTables()` do the same in place on a dictionary's own copies.

## Value codecs

A data type or field may carry `decode` and `encode` functions: how a value is read and written. The dictionary attaches them to DT, DTM, TM, TS (its time), NM and SI - see [Dates and numbers](dates-and-numbers.md). A codec of your own, set through `extend()`:

```typescript
dictionaries['2.5'].extend({
  types: {
    ST: {
      decode: (value, read) => value.trim(), // read: true for a value from HL7 text
    },
  },
});
```

`decode(value, read)` gets `read: true` for a value from a message, which must be in HL7's own form, and `false` for one given in code. Throwing refuses the value: kept as written, a data type error for `validate()`, an error with `strict` parsing.

## How the dictionaries are built

The data (`data/hl7-data.js`) is generated by `support/build-dictionary.mts` from:

- **HL7's v2 XML schemas** - every segment, field, data type and message structure as HL7 defines it. They are licensed by HL7 and not in the repository: download them from [HL7's V2 product suite](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) into `support/hl7-schemas/`.
- **an event map** - which structure a trigger event uses; the schemas do not say.
- **the [`hl7-dictionary`](https://www.npmjs.com/package/hl7-dictionary) package** - what the schemas leave out: descriptions, lengths before 2.6, the C and B optionalities, a few definitions the early schemas name without defining, and the tables.

Where a schema contradicts the standard, it is corrected and the correction documented (2.5.1's `RSP_K21` repeats its `QUERY_RESPONSE`, as 2.5's does).

```bash
node support/build-dictionary.mts      # regenerate data/hl7-data.js
node support/compare-dictionary.mts    # report where the dictionaries differ from the schemas
node support/build-field-enums.mts     # regenerate the field enums and the object types
```

With the schemas in place, the tests compare every version with them, field by field; without them those checks are skipped.

## Generated object types

`support/build-field-enums.mts` also writes the TypeScript types of [Objects](objects.md) and [TypeScript](typescript.md): the interfaces uniting every version (`PIDObject` ...), and for each version its segments, data types, message structures, field positions and components (`HL7VersionSegments`, `HL7VersionMessages` ...) - one interface per distinct shape, shared by the versions defining it the same. Types only: the bundle does not grow.

## Reference

[hl7v2-dictionary API](api/dictionary.md).
