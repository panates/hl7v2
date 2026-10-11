# TypeScript

The packages ship their types. Beyond the usual, the compiler can know a message's **version**, and then checks the message against that version's definitions: its segments' fields, its fields' components, its paths and its objects. TypeScript 5.4 or later.

## A typed message

A message is typed when its version is a literal the compiler sees:

```typescript
const a = new HL7Message('2.5'); // HL7Message<'2.5'>
const b = HL7Message.parse(text, { version: '2.5' }); // HL7Message<'2.5'>
const c = HL7Message.parse(text).asVersion('2.5'); // checked, then HL7Message<'2.5'>
const d = HL7Message.parse(text); // HL7Message - untyped
```

- `parse(text, { version })` throws an `HL7Error` (203, unsupported version) when MSH-12 is another version.
- `asVersion(v)` does the same check on a message already read; `hasVersion(v)` the check alone.
- A version is matched as messages are read: a 2.5.2 message is a 2.5.1 one.

Every version has its types: 2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2, 2.9.

## What is checked

**Objects** - the version's own interfaces, not the union of every version:

```typescript
const pid = b.getSegmentObject('PID')!; // HL7SegmentObject<'2.5', 'PID'>
pid.PatientName?.[0]?.GivenName; // an XPN, as 2.5 defines it
pid.PatientNickname; // compile error: PID has no such field
b.getSegment('PID')!.assign({ PatientNme: [] }); // compile error: misspelt
b.toObject<'ADT_A01'>().PV1?.PatientClass;
```

**Fields** - only those the version defines for the segment:

```typescript
const dg1 = new HL7Message('2.6').addSegment('DG1');
dg1.field(DG1Segment.DiagnosisCodeDG1); // fine
dg1.field(DG1Segment.DiagnosisCodingMethod); // compile error: DG1-2 is withdrawn in 2.6
dg1.field(2); // the same, by number
```

**Components** - only those the field's data type has in the version:

```typescript
const pid = new HL7Message('2.6').addSegment('PID');
pid.field(5).getValue(14); // XPN-14: fine
pid.field(5).getValue(15); // compile error: XPN has 14 components in 2.6
pid.field(5).rep(1).comp(15); // the same through a repetition
pid.field(8).getValue(2); // compile error: PID-8 (IS) is a primitive - its only component is 1
```

**Paths** - segment, field, component and sub-component:

```typescript
msg26.get('DG1-2'); // "DG1-2 is not a field of DG1 in 2.6"
msg26.set('/PATIENT/DG1(1)-2-1', 'x'); // the same, through groups and repetitions
msg26.get('PID-5-15'); // "PID-5: XPN has no component 15 in 2.6"
```

The compiler's message names the problem: `Argument of type '"DG1-2"' is not assignable to parameter of type '"DG1-2 is not a field of DG1 in 2.6"'`.

## What is not checked

The checks apply where both the version and the segment are known. Any number, path or object is taken:

- for a message read without a version (`HL7Message.parse(text)`);
- for a version without generated types;
- for a Z segment, or a segment the version does not define;
- for a field of a type that takes anything (OBX-5's `VARIES`);
- for a path held in a `string`, and for group names in paths.

## Opting out

A position or path known only at run time - from configuration, say - is not a literal. Use the segment, or the message, untyped:

```typescript
const seg: HL7Segment = msg.getSegment('DG1')!; // takes any position
seg.field(position);

const path: string = config.path; // a string is not checked
msg.get(path);

const any: HL7Message = msg; // takes any field or path
```

A typed message, segment or field is assignable to the untyped one - `HL7Message`, `HL7Segment`, `HL7Field` - so it can be passed wherever those are taken, and kept in a list with others.

## The types

| Type                                    | What                                                              |
| --------------------------------------- | ----------------------------------------------------------------- |
| `HL7Message<V>`                         | a message of version `V`; `V` defaults to any version             |
| `HL7Segment<P, O, C>`                   | `P` the field positions `field()` takes, `O` the object `toObject()`/`assign()` take, `C` each field's component positions |
| `HL7MessageSegment<V, S>`               | segment `S` of a message of version `V`, as `getSegment('S')` gives it |
| `HL7Field<K>`, `HL7Repetition<K>`       | `K` the component positions `comp()`, `getValue()`, `setValue()` take |
| `HL7SegmentObject<V, S>`                | segment `S` as version `V` defines it                             |
| `HL7DataTypeObject<V, T>`               | composite data type `T` as version `V` defines it                 |
| `HL7MessageObject<V, K>`                | message structure or trigger event `K` as version `V` defines it  |
| `HL7SegmentField<V, S>`                 | the field positions segment `S` has in version `V`                |
| `HL7CheckedPath<V, P>`                  | path `P` checked against version `V`                              |

All type parameters have defaults, under which everything is taken - code that names no version compiles as it would without these types.

## Cost

The version types are generated (see [Dictionary](dictionary.md#generated-object-types)): one interface per distinct shape, shared by the versions that define it the same. They are declarations only - the JavaScript bundle does not grow - and type-checking a project using them takes well under a second more.
