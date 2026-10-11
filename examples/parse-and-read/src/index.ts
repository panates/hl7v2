/*
 * Reading an HL7 message: by path, as typed
 * segment objects, and field by field.
 */
import { readFileSync } from 'node:fs';
import { HL7Message, PIDSegment, XPNType } from 'hl7v2';

const text = readFileSync(
  new URL('../../messages/adt-a01.hl7', import.meta.url),
  'utf8',
);
/*
 * The version expected: it types the segment objects by 2.5's definitions
 * and checks paths against them (see typed-access). Parse throws when MSH-12
 * says otherwise; HL7Message.parse(text) reads any version.
 */
const msg = HL7Message.parse(text, { version: '2.5' });

console.log('Message type :', msg.messageType); // ADT^A01
console.log('Structure    :', msg.structureName); // ADT_A01
console.log('Version      :', msg.version); // 2.5
console.log('Control ID   :', msg.controlId); // MSG00001

/*
 * 1. Paths - SEGMENT(repetition)-field(repetition)-component-subComponent.
 * Repetitions count from 0, positions from 1.
 */
console.log('\n-- By path');
console.log('Family name  :', msg.get('PID-5-1')); // Yılmaz
console.log('Given name   :', msg.get('PID-5-2')); // Ayşe
console.log('First ID     :', msg.get('PID-3-1')); // 123456
console.log('Second ID    :', msg.get('PID-3(1)-1')); // 98765432100
console.log('Its type     :', msg.get('PID-3(1)-5')); // NNTUR
/* A date/time as a Date; the value itself stays as written */
console.log('Birth date   :', msg.getDate('PID-7')?.toDateString());
console.log('Admitted at  :', msg.get('EVN-2')); // 20250301101500+0300

/*
 * 2. Segment objects - a segment as a plain object keyed by field names,
 * composites keyed by component names. Typed: the compiler knows PID.
 */
console.log('\n-- As an object');
const pid = msg.getSegmentObject('PID')!;
for (const id of pid.PatientIdentifierList ?? []) {
  console.log(`Identifier   : ${id.IDNumber} (${id.IdentifierTypeCode})`);
}
console.log('Sex          :', pid.AdministrativeSex); // F
console.log('City         :', pid.PatientAddress?.[0]?.City); // İstanbul

/*
 * 3. Field by field - segments, fields, repetitions and components, with
 * the dictionary's enums naming the positions.
 */
console.log('\n-- Field by field');
const pidSegment = msg.getSegment('PID')!;
const name = pidSegment.field(PIDSegment.PatientName);
console.log('Name type    :', name.definition.type); // XPN
console.log(
  'Name         :',
  name.getValue(XPNType.GivenName),
  name.getValue(XPNType.FamilyName),
);
for (const rep of pidSegment.field(PIDSegment.PatientIdentifierList)
  .repetitions) {
  console.log(
    'Identifier   :',
    rep.getValue(1),
    'assigned by',
    rep.getValue(4),
  );
}

/* Every segment, in order */
console.log('\n-- Segments');
for (const segment of msg.segments) {
  console.log(segment.segmentType, '|', segment.toHL7String().slice(4, 60));
}
