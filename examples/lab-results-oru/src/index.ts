/*
 * Laboratory results (ORU^R01): walking the message structure's groups -
 *
 *   PATIENT_RESULT       one per patient
 *     PATIENT            PID, PV1 ...
 *     ORDER_OBSERVATION  one per order: ORC, OBR
 *       OBSERVATION      one per result: OBX, its NTEs
 *
 * as a tree of nodes, or by paths through the groups.
 */
import { readFileSync } from 'node:fs';
import { HL7Message, type HL7MessageNode, type HL7SegmentObject } from 'hl7v2';

type OBX = HL7SegmentObject<'2.5.1', 'OBX'>;

const text = readFileSync(
  new URL('../../messages/oru-r01.hl7', import.meta.url),
  'utf8',
);
const msg = HL7Message.parse(text, { version: '2.5.1' });
console.log(`${msg.messageType} (${msg.structureName}), ${msg.controlId}\n`);

/* Every node of a name in a group, in order */
function* nodes(parent: HL7MessageNode, name: string) {
  let node: HL7MessageNode | undefined;
  for (let i = 0; (node = parent.getNode(name, i)); i++) yield node;
}

/* 1. The tree: the segments sorted into the structure's groups */
const tree = msg.buildStructureTree();
for (const result of nodes(tree, 'PATIENT_RESULT')) {
  const pid = result.getNode('PATIENT')?.getSegment('PID');
  console.log('Patient:', pid?.field(5).getValue(2), pid?.field(5).getValue(1));

  for (const order of nodes(result, 'ORDER_OBSERVATION')) {
    const obr = order.getSegment('OBR')!;
    console.log(
      `\n  ${obr.field(4).getValue(2)} (${obr.field(4).getValue(1)})`,
    );

    for (const observation of nodes(order, 'OBSERVATION')) {
      const obx = observation.getSegment('OBX')!.toObject<OBX>();
      const flag = obx.InterpretationCodes?.[0];
      console.log(
        '   ',
        String(obx.ObservationIdentifier?.Text).padEnd(48),
        String(obx.ObservationValue).padStart(6),
        String(obx.Units?.Identifier ?? '').padEnd(10),
        `[${obx.ReferencesRange ?? ''}]`,
        flag && flag !== 'N' ? `<- ${flag}` : '',
      );
      /* An NTE after an OBX is a note on that result */
      for (let i = 0, nte; (nte = observation.getSegment('NTE', i)); i++) {
        console.log('      Note:', nte.field(3).getValue());
      }
    }
  }
}

/*
 * 2. Paths through the groups: repetitions
 * of groups and segments count from 0.
 */
console.log('\n-- By path');
const second = '/PATIENT_RESULT/ORDER_OBSERVATION(1)';
console.log('Second order :', msg.get(`${second}/OBR-4-2`));
console.log('Its first OBX:', msg.get(`${second}/OBSERVATION(0)/OBX-3-2`));
console.log('Value        :', msg.get(`${second}/OBSERVATION(0)/OBX-5`));
console.log('Observed at  :', msg.getDate(`${second}/OBR-7`)?.toISOString());

/*
 * 3. The whole message as one object, typed by its structure: groups and
 * segments by name, arrays where they repeat
 */
console.log('\n-- As an object');
const oru = msg.toObject<'ORU_R01'>();
for (const result of oru.PATIENT_RESULT ?? []) {
  for (const order of result.ORDER_OBSERVATION ?? []) {
    const values = (order.OBSERVATION ?? []).map(
      ({ OBX }) =>
        `${OBX?.ObservationIdentifier?.Identifier}=${OBX?.ObservationValue}`,
    );
    console.log(
      `${order.OBR?.UniversalServiceIdentifier?.Identifier}:`,
      values.join(', '),
    );
  }
}
