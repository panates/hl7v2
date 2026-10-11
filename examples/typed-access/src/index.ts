/*
 * Version-specific types. A message whose version the compiler knows is
 * typed by that version's own definitions: its segment objects, the fields
 * field() takes and the paths get() and set() take. Mistakes are compile
 * errors - the lines marked @ts-expect-error below fail without the marker;
 * run `npx tsc -p .` to see them checked.
 */
import { readFileSync } from 'node:fs';
import {
  DG1Segment,
  type HL7DataTypeObject,
  HL7Error,
  HL7Message,
  type HL7SegmentObject,
  PIDSegment,
} from 'hl7v2';

const text = readFileSync(
  new URL('../../messages/adt-a01.hl7', import.meta.url),
  'utf8',
);

/* 1. The version expected, given to parse(): checked against MSH-12 */
const msg = HL7Message.parse(text, { version: '2.5' });
try {
  HL7Message.parse(text, { version: '2.7' });
} catch (e) {
  if (e instanceof HL7Error) console.log('Refused:', e.message);
}

/* 2. Segment objects typed by 2.5: PID-5 is an XPN as 2.5 defines it */
const pid = msg.getSegmentObject('PID')!;
const name = pid.PatientName?.[0];
console.log('Name:', name?.GivenName, name?.FamilyName?.Surname);
// @ts-expect-error - PID has no such field
void pid.PatientNickname;

/* The types by name, for your own functions */
function formatName(xpn: HL7DataTypeObject<'2.5', 'XPN'>): string {
  return [xpn.GivenName, xpn.FamilyName?.Surname].filter(Boolean).join(' ');
}
function describe(patient: HL7SegmentObject<'2.5', 'PID'>): string {
  return `${formatName(patient.PatientName![0])}, born ${patient.DateTimeOfBirth?.Time}`;
}
console.log('Patient:', describe(pid));

/* 3. Fields: only those the version defines */
const msg26 = new HL7Message('2.6');
const dg1 = msg26.addSegment('DG1');
dg1.field(DG1Segment.DiagnosisCodeDG1).setValue('I10');
// @ts-expect-error - DG1-2 (Diagnosis Coding Method) is withdrawn in 2.6
dg1.field(DG1Segment.DiagnosisCodingMethod);

/* 4. Paths: segment, field, component and sub-component checked */
msg.get('PID-5-1-1'); // XPN-1 is an FN, FN-1 its surname
// @ts-expect-error - "PID-5: XPN has no component 15 in 2.5"
msg.get('PID-5-15');
// @ts-expect-error - "PID-8: IS has no component 2 in 2.5"
msg.get('PID-8-2');
// @ts-expect-error - "DG1-2 is not a field of DG1 in 2.6"
msg26.get('DG1-2');

/*
 * 5. A message read without a version unites every version's types; type
 * it once its version is known. asVersion() checks MSH-12 as parse() does.
 */
const any = HL7Message.parse(text);
if (any.hasVersion('2.5')) {
  const typed = any.asVersion('2.5');
  console.log('Sex:', typed.getSegmentObject('PID')?.AdministrativeSex);
}

/* What is known only at run time is not checked: a path in a string, a
 * field position in a number on an untyped segment */
const path: string = 'PID-5-2';
console.log('By a run-time path:', msg.get(path));
const position: number = PIDSegment.PatientName;
console.log(
  'By a run-time position:',
  HL7Message.parse(text).getSegment('PID')!.field(position).getValue(2),
);
