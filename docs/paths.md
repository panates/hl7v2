# Paths

A path names a location in a message - `PID-5-1`, `OBX(2)-5`, `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX-5` - in the notation common among HL7 tools. `get()` reads the value there, `set()` writes it, `getDate()` reads it as a `Date`.

```typescript
msg.get('PID-5-1'); // the first PID, field 5, component 1
msg.set('PID-5-2', 'Ayşe');
msg.getDate('PID-7');
```

## Writing a path

```
[/GROUP(r)/...]SEGMENT(r)-FIELD(r)-COMPONENT-SUBCOMPONENT
```

| Path                      | Location                                                                 |
| ------------------------- | ------------------------------------------------------------------------ |
| `PID-5`                   | the first PID, field 5 - its first component                             |
| `PID-5-1`                 | component 1                                                              |
| `PID-5-1-2`               | component 1, sub-component 2                                             |
| `PID-3(1)-1`              | the second repetition of PID-3, component 1                              |
| `OBX(2)-5`                | the third OBX of the message, field 5                                    |
| `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBSERVATION(0)/OBX-5` | through the message structure's groups |

- Numbers in parentheses - repetitions of groups, segments and fields - count **from 0**. Field, component and sub-component numbers count **from 1**.
- A path **without groups** finds the segment in the whole message, in order: `OBX(2)` is the message's third OBX, wherever it is.
- A path **with groups** starts with `/` and goes through the message structure (see [Message structures](structure.md)). A group is found by its name in any version: `/RESPONSE/...` works on a 2.5 message, where the group is `PATIENT_RESULT`, and the other way round.
- Reading at a field gives its first component, at a component its first sub-component.

## Reading

```typescript
msg.get('PID-3(1)-1'); // undefined when there is no second repetition
msg.get('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBR-4-2');
msg.getDate('OBR-7'); // a Date, read in the value's offset
```

A location that is not there gives `undefined`. HL7's null (`""`) gives `null`. A malformed path throws.

## Writing

```typescript
msg
  .set('PID-5-1', 'Yılmaz')
  .set('PID-3(1)-1', '98765432100') // the field's second repetition, added
  .set('PID-3(1)-5', 'NNTUR')
  .set('NK1-2-1', 'Yılmaz'); // NK1 added where ADT_A01 has it: before PV1
```

A segment the path names that is not there is added **where the message structure puts it** - an NK1 before PV1 in an ADT_A01; a Z segment, or one in a message of an unknown structure, at the end. Through groups, `set()` adds a group's next repetition:

```typescript
msg.set('/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBSERVATION(1)/OBX-5', '140');
```

Only the next repetition can be added - a path skipping one (`OBX(3)` where there are two) is refused - and only a segment that, added, is where the path says.

`set()` takes what `setValue()` takes: text (escaped as it is written), a number, a `Date`, `null` for HL7's null, `undefined` to clear.

## Checked by the compiler

For a message whose version the compiler knows - `new HL7Message('2.6')`, `HL7Message.parse(text, { version: '2.6' })` - a path written as a literal is checked against that version: the segment's field, the field's component, the component's sub-component.

```typescript
const msg = new HL7Message('2.6');
msg.get('DG1-3'); // fine
msg.get('DG1-2'); // compile error: "DG1-2 is not a field of DG1 in 2.6"
msg.get('PID-5-15'); // compile error: "PID-5: XPN has no component 15 in 2.6"
msg.get('PID-8-2'); // compile error: "PID-8: IS has no component 2 in 2.6"
```

A path held in a `string` variable, a message read without a version, a Z segment and a field of a type that takes anything (OBX-5's `VARIES`) are not checked. Group names are not checked. See [TypeScript](typescript.md).

`parseHL7Path()` reads a path into its parts, for code of your own.
