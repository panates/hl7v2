# Message structures

A message is a flat list of segments; its **structure** - from the dictionary of its version - groups them. An ORU_R01 is one or more patient results, each a patient and one or more orders, each an OBR and its observations:

```
ORU_R01
├─ MSH
└─ PATIENT_RESULT (repeats)
   ├─ PATIENT: PID, [PD1], [NTE...], [NK1...], [VISIT: PV1, [PV2]]
   └─ ORDER_OBSERVATION (repeats)
      ├─ [ORC], OBR, [NTE...]
      └─ OBSERVATION (repeats): OBX, [NTE...]
```

The structure decides what a path through groups means (`/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX-5`), how `toObject()` shapes a message, where `set()` adds a segment, and what `validate()` calls out of place.

## Which structure

The structure MSH-9-3 names, when the dictionary has it - `ADT^A04^ADT_A01` is an `ADT_A01`. Otherwise the trigger event's: in the dictionary, an event is its structure's very definition (`ADT_A04` and `ADT_A08` are `ADT_A01`). `msg.structureName` gives it.

## The tree

```typescript
const tree = msg.buildStructureTree(); // HL7MessageNode

const result = tree.getNode('PATIENT_RESULT'); // the first
const order = result?.getNode('ORDER_OBSERVATION', 1); // the second order
order?.getSegment('OBR')?.field(4).getValue(2);

for (let i = 0, obs; (obs = order?.getNode('OBSERVATION', i)); i++) {
  console.log(obs.getSegment('OBX')?.field(5).getValue());
}
```

An `HL7MessageNode` has a `name`, its `items` - segments and nodes, in order - and `getNode(name, index?)`, `getNodeFromLast()`, `getSegment(type, index?)`, `getSegmentFromLast()`. The tree refers to the message's own segments: changing one changes the message. It is built anew on each call.

Segments are matched to the structure in order and greedily, without backtracking - the next segment goes to the first place the structure has for it from where matching stands. Segments out of order stay at the top level, after the matched ones. A Z segment is kept where it is - after the segment before it, in that segment's group - and matching goes on around it, unless the structure has a place for it (`anyZSegment`).

## Names across versions

The standard renames groups between versions: ORU_R01's `PATIENT_RESULT` is `RESPONSE` in 2.3; ADT_A40's `PATIENT` is `PATIENT_ID` in 2.4-2.5.1. Each version keeps its own names, and a group lists the others as `aliases`. A lookup by either name finds it - `getNode('RESPONSE')` on a 2.5 message, a path `/PATIENT_RESULT/...` on a 2.3 one - preferring a group carrying the name itself.

```typescript
node.name; // the name in the message's version
node.aliases; // ['RESPONSE']
node.is('RESPONSE'); // true
```

## Repeated segments and choices

A segment that appears twice among its siblings is keyed with a number - the second `ROL` of a group is `ROL2` - with `segment` giving its type. A **choice** - ORM_O01's order detail, one of OBR, RQD, RQ1, RXO, ODS, ODT - is one item of the structure, `choice: true`, its alternatives inside; the tree and `toObject()` take the one the message has. The placeholders `anyHL7Segment` and `anyZSegment` take any segment and any Z segment.

## The definitions

`msg.dictionary.messages[name]` is a structure's definition: groups and segments keyed by name, each with `idx` (its order), `min`, `max` (absent: unbounded), `segments` for a group, and the properties above. See [Dictionary](dictionary.md).
