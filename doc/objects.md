# Objects

A segment, or a whole message, can be read and written as a plain object - keyed by names, not positions - with an interface for each segment, data type and message structure.

## Segments

```typescript
const pid = msg.getSegmentObject('PID'); // the first PID; getSegmentObject('PID', 1) the second
pid?.PatientName?.[0]?.FamilyName?.Surname; // 'Yılmaz'
pid?.AdministrativeSex; // 'F'
```

```json
{
  "SetID": 1,
  "PatientIdentifierList": [
    { "IDNumber": "123", "AssigningAuthority": { "NamespaceID": "HOSP", "UniversalID": "1.2.3", "UniversalIDType": "ISO" }, "IdentifierTypeCode": "MR" },
    { "IDNumber": "456", "AssigningAuthority": { "NamespaceID": "STATE" }, "IdentifierTypeCode": "SS" }
  ],
  "PatientName": [{ "FamilyName": { "Surname": "Doe" }, "GivenName": "John" }],
  "DateTimeOfBirth": { "Time": "19700101" },
  "AdministrativeSex": "M"
}
```

- Fields are keyed by the field enums' member names (`PIDSegment.PatientName` is `PatientName`), components by their data type's (`XPNType.GivenName`), sub-components likewise.
- A field the version lets repeat is an array.
- Empty values are left out. HL7's null (`""`) is `null`.
- Values are as `getValue()` gives them: text, numbers for `NM`/`SI`, dates as written.
- A position no enum names - a Z segment's field - is keyed by its number (`{ "1": "a", "2": "b" }`).

`segment.toObject()` gives the same for any segment.

### Writing a segment

```typescript
msg.getSegment('PID')!.assign({
  PatientName: [{ FamilyName: { Surname: 'Kaya' }, GivenName: 'Emre' }],
  AdministrativeSex: 'M',
  MaritalStatus: null, // HL7's null: ""
  Religion: undefined, // cleared
});
msg.addSegment('NTE').assign({ SetID: 1, Comment: ['Fasting sample.'] });
```

A field given is replaced; one not given is kept. `null` writes HL7's null, `undefined` clears. An unknown name throws. MSH-1 and MSH-2 are skipped.

## Whole messages

A message as one object, shaped as its structure is - segments by their IDs, groups by their names, arrays where the structure lets them repeat:

```typescript
const oru = HL7Message.parse(text, { version: '2.5.1' }).toObject<'ORU_R01'>();

for (const result of oru.PATIENT_RESULT ?? []) {
  const patient = result.PATIENT?.PID?.PatientName?.[0];
  for (const order of result.ORDER_OBSERVATION ?? []) {
    console.log(order.OBR?.UniversalServiceIdentifier?.Text);
    for (const { OBX, NTE } of order.OBSERVATION ?? []) {
      console.log(OBX?.ObservationIdentifier?.Text, OBX?.ObservationValue, NTE?.[0]?.Comment);
    }
  }
}
```

```
{ MSH: {...},
  PATIENT_RESULT: [{
    PATIENT: { PID: {...}, VISIT: { PV1: {...} } },
    ORDER_OBSERVATION: [
      { OBR: {...}, OBSERVATION: [{ OBX: {...} }, { OBX: {...}, NTE: [{...}] }] },
      { OBR: {...}, OBSERVATION: [{ OBX: {...} }] } ] }] }
```

- A choice (ORM_O01's `ORDER_DETAIL`: one of OBR, RQD, RQ1, RXO, ODS, ODT) appears as the alternative the message has.
- Segments the structure has no place for - Z segments, ones out of place - are kept at the top level, by their IDs, as arrays: `{ ..., ZPI: [{ "1": "a" }] }`.
- A message whose structure the dictionary does not know is its segments by their IDs.

### Building a message from an object

`assign()` writes the segments in the order the structure has them, whatever order the object gives them in:

```typescript
const msg = new HL7Message('2.5.1');
msg.set('MSH-9-1', 'ORU').set('MSH-9-2', 'R01').set('MSH-9-3', 'ORU_R01');
msg.assign<'ORU_R01'>({
  PATIENT_RESULT: [
    {
      PATIENT: { PID: { SetID: 1, PatientName: [{ GivenName: 'Ayşe' }] } },
      ORDER_OBSERVATION: [
        {
          OBR: { SetID: 1, UniversalServiceIdentifier: { Identifier: 'CBC' } },
          OBSERVATION: [
            { OBX: { SetID: 1, ValueType: 'NM', ObservationValue: ['7.2'] } },
            { OBX: { SetID: 2, ValueType: 'NM', ObservationValue: ['11.1'] } },
          ],
        },
      ],
    },
  ],
});
```

MSH's fields are assigned (those not given are kept); every other segment is replaced. The structure is the one MSH-9 names - set it first. `msg.assign(other.toObject())` copies a message.

## Types

The interfaces are generated from the dictionaries; they are types only and add nothing to the bundle.

| Type                                  | What                                                                 |
| ------------------------------------- | -------------------------------------------------------------------- |
| `PIDObject`, `XPNObject` ...          | a segment or data type uniting every version: a field whose type changed is the union (`MSH-7` is `TSObject \| string`) |
| `HL7SegmentObjects`                   | every segment's object, by ID - what `getSegmentObject()` gives for an untyped message |
| `HL7SegmentObject<'2.5', 'PID'>`      | a segment as one version defines it                                  |
| `HL7DataTypeObject<'2.5', 'XPN'>`     | a composite data type as one version defines it                      |
| `HL7MessageObject<'2.5.1', 'ORU_R01'>` | a message structure (or trigger event) as one version defines it    |

For a message whose version the compiler knows, `getSegmentObject()`, `segment.toObject()`, `segment.assign()`, `toObject()` and `assign()` take that version's types: a misspelt name, or a field the version does not have, is a compile error. See [TypeScript](typescript.md).

```typescript
function formatName(name: HL7DataTypeObject<'2.5', 'XPN'>): string {
  return [name.GivenName, name.FamilyName?.Surname].filter(Boolean).join(' ');
}
```
