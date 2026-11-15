# Messages

`HL7Message` is an HL7 v2 message: its segments, its delimiters, and the dictionary of its version, which says what each field is.

## The model

```
HL7Message                 MSH|^~\&|APP|FAC|...|ADT^A01^ADT_A01|MSG1|P|2.5
└─ HL7Segment              PID|1||123^^^HOSP^MR~456^^^STATE^SS||Yılmaz^Ayşe
   └─ HL7Field             PID-3: 123^^^HOSP^MR~456^^^STATE^SS
      └─ HL7Repetition     the first: 123^^^HOSP^MR
         └─ Hl7Component   PID-3-4: HOSP&1.2.3&ISO
            └─ Hl7SubComponent  PID-3-4-2: 1.2.3
```

Positions count from 1 - fields, components, sub-components - as HL7 numbers them; repetitions from 0, as they are a list. MSH-1 is the field separator itself and MSH-2 the encoding characters.

Each level knows its definition from the message's dictionary: a field's data type (`field.definition.type`, `XPN`), whether it repeats, its length, its table. A field of a primitive type (`ST`, `NM`, `DTM` ...) has one component, the value; a composite one (`XPN`, `CX` ...) has components, which may be composite themselves and hold sub-components.

## Parse

```typescript
import { HL7Message } from 'hl7v2';

const msg = HL7Message.parse(text);
const fromBytes = HL7Message.parse(buffer); // decoded in the character set MSH-18 names
```

The input may be a string or a `Buffer`, framed in MLLP or not. Segments end in CR; a message with no CR at all may end them in LF.

Options:

| Option           | Meaning                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `version`        | The version the message must be in. Parsing throws an `HL7Error` (203) when MSH-12 says otherwise, and the message is typed by it - see [TypeScript](typescript.md). |
| `strict`         | A value its data type cannot read throws, instead of being kept as written.                                      |
| `defaultCharset` | The character set a `Buffer` is decoded with when MSH-18 is empty or unknown. Default UTF-8.                     |
| `dictionaries`   | Dictionaries to use instead of the default ones (a site's extended ones - see [Dictionary](dictionary.md)).      |

Parsing is lenient by default: a value that does not fit its data type - `1980-05-12` in a date field - is kept as written, for `validate()` to report. Nothing read is ever reinterpreted.

The message's version is MSH-12, read with the definitions of the nearest version the library has: a 2.5.2 message is read as 2.5.1.

## Create

```typescript
const msg = new HL7Message('2.5'); // 2.7.1 when no version is given
```

A new message has an MSH with its delimiters, the date and time (MSH-7), a control ID (MSH-10), the processing ID `P` (MSH-11), the version (MSH-12) and the character set `UNICODE UTF-8` (MSH-18). Set the rest - the applications, facilities and the message type:

```typescript
import { MSHSegment } from 'hl7v2';

msg.header.field(MSHSegment.SendingApplication).setValue('MY-APP');
msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01^ORU_R01');
```

## The message

| Property / method                  | Gives                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------ |
| `header`                           | the MSH segment                                                          |
| `version`                          | MSH-12                                                                   |
| `messageType`                      | MSH-9's type and event: `ADT^A01`                                        |
| `structureName`                    | the structure the message follows: MSH-9-3, else derived from the type and event (`ADT_A01`) |
| `controlId`                        | MSH-10                                                                   |
| `charset`                          | MSH-18's first value                                                     |
| `segments`                         | every segment, in order                                                  |
| `dictionary`                       | the dictionary of the message's version                                  |
| `fieldSeparator`, `componentSeparator`, `repetitionSeparator`, `escapeCharacter`, `subComponentSeparator`, `truncationCharacter` | the delimiters |

## Segments

```typescript
msg.getSegment('PID'); // the first PID
msg.getSegment('OBX', 2); // the third OBX
msg.getSegment('OBX', previousObx); // the OBX after another
msg.getSegmentFromLast('OBX'); // the last OBX

msg.addSegment('NTE'); // at the end
msg.addSegment('ZPI', 3); // at index 3
msg.segments.splice(msg.segments.indexOf(nte), 1); // removed
```

`segment.segmentType` is its ID; `segment.index` its position in the message; `segment.sequence` its occurrence among the segments of its type, from 1.

Segments a structure groups - ORU's patient results, orders, observations - are reached through [Paths](paths.md) or the [structure tree](structure.md).

## Fields

```typescript
import { PIDSegment, XPNType } from 'hl7v2';

const pid = msg.getSegment('PID')!;
const name = pid.field(PIDSegment.PatientName); // or pid.field(5)

name.getValue(XPNType.GivenName); // the second component: 'Ayşe'
name.getValue(1, 1); // component 1, sub-component 1: 'Yılmaz'
name.setValue('Ayşe', XPNType.GivenName);
name.toHL7String(); // 'Yılmaz^Ayşe'
name.fromHL7String('Kaya^Emre'); // replaced, read as HL7 text
```

The field enums - `PIDSegment`, `XPNType` and one for every segment and data type - name the positions; see [Dictionary](dictionary.md#field-enums).

`getValue()` reads the first repetition. A field that repeats is a list:

```typescript
const ids = pid.field(PIDSegment.PatientIdentifierList);
ids.repetitions.length; // 2
ids.repetition(1).getValue(1); // the second ID
ids.rep(2).setValue('789', 1); // a third, added
for (const rep of ids.repetitions) console.log(rep.getValue(1), rep.getValue(5));
```

Components and sub-components:

```typescript
const authority = ids.repetition(0).component(4); // CX-4, an HD
authority.getValue(); // its first sub-component: 'HOSP'
authority.getValue(2); // '1.2.3'
authority.setValue('ISO', 3);
```

`comp()`, `rep()` and `subcomp()` are short forms of `component()`, `repetition()` and `subComponent()`.

### Values

| In the message              | `getValue()` gives                                                    |
| --------------------------- | --------------------------------------------------------------------- |
| empty                       | `undefined`                                                           |
| `""` - HL7's null           | `null`                                                                |
| an `NM` or `SI` value       | a `number`, when it is one in HL7's form and a JavaScript number holds it exactly; otherwise the text |
| a date or time              | the text, as written; `getDate()` gives a `Date`                      |
| `\X...\` as a whole         | a `Buffer` - binary data                                              |
| anything else               | the text, its escape sequences read                                   |

`setValue()` takes text, a number, a `Date` (written with its offset), `null` (written as `""`) or `undefined` (cleared). Text is escaped as it is written: a `|` in a value goes out as `\F\`. `setValue('')` clears.

See [Dates and numbers](dates-and-numbers.md) and [Character sets and escaping](encoding.md).

## Write out

```typescript
msg.toHL7String(); // segments joined by CR, ending in CR
msg.toBuffer(); // encoded in the character set MSH-18 names
segment.toHL7String(); // one segment
field.toHL7String(); // one field
```

Trailing empty fields and components are left out. `toBuffer()` transliterates what the character set cannot hold (`Şahin` goes out as `Sahin` in ASCII) - see [Character sets and escaping](encoding.md).

## Other ways in

- [Paths](paths.md): `msg.get('PID-5-1')`, `msg.set('OBX(2)-5', '7.2')`.
- [Objects](objects.md): `msg.getSegmentObject('PID')`, `msg.toObject()`, `segment.assign({...})`.
- [Message structures](structure.md): `msg.buildStructureTree()`.
