/*
 * Building an HL7 message from scratch, checking it against its version's
 * dictionary, and answering it with an acknowledgment.
 */
import { HL7Message, type HL7SegmentObject, MSHSegment } from 'hl7v2';

/*
 * A new message has an MSH with the date/time, a control ID, the processing
 * ID (P), the version and the character set filled in.
 */
const msg = new HL7Message('2.5');
msg.header.field(MSHSegment.SendingApplication).setValue('REGADT');
msg.header.field(MSHSegment.SendingFacility).setValue('GOOD HEALTH HOSPITAL');
msg.header.field(MSHSegment.ReceivingApplication).setValue('EHR');
msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A01^ADT_A01');

/* By path: a missing segment is added, in the order the message is built */
msg
  .set('EVN-1', 'A01')
  .set('EVN-2', new Date()) // written as an HL7 date/time with its offset
  .set('PID-1', 1)
  .set('PID-3-1', '123456')
  .set('PID-3-4', 'GHH')
  .set('PID-3-5', 'MR')
  .set('PID-5-1', 'Yılmaz')
  .set('PID-5-2', 'Ayşe')
  .set('PID-7', '19800512')
  .set('PID-8', 'F');

/* A second identifier: the field's next repetition */
msg.set('PID-3(1)-1', '98765432100').set('PID-3(1)-5', 'NNTUR');

/*
 * Values holding delimiters are escaped as they are written: \F\ \S\ \T\.
 * NK1 comes before PV1 in ADT_A01: segments are kept in the order added.
 */
msg.set('NK1-1', 1).set('NK1-2-1', 'Yılmaz & Sons | Ltd.');

/*
 * Or a whole segment from an object, keyed as getSegmentObject() gives it;
 * typed by the version, the compiler checks the names
 */
msg.addSegment('PV1').assign<HL7SegmentObject<'2.5', 'PV1'>>({
  SetID: 1,
  PatientClass: 'I',
  AssignedPatientLocation: { PointOfCare: '2000', Room: '2012', Bed: '01' },
  AttendingDoctor: [
    {
      PersonIdentifier: '004777',
      FamilyName: { Surname: 'Doğan' },
      GivenName: 'Ali',
    },
  ],
});

console.log(msg.toHL7String().replace(/\r/g, '\n'));

/*
 * Validation: required fields, lengths, data types and table values, as the
 * version's dictionary defines them. An empty list when nothing is wrong.
 */
const errors = msg.validate();
console.log(
  'Validation:',
  errors.length ? errors.map(e => e.message) : 'no problems',
);

/* A message missing its required MSH-10: what a receiver would reject */
const broken = HL7Message.parse(msg.toHL7String());
broken.header.field(MSHSegment.MessageControlID).setValue('');
for (const e of broken.validate()) {
  console.log(`  ${e.hl7ErrorCode} ${e.message}`);
}

/* The receiver's answers: an ACK (AA), or a NAK listing the errors */
const ack = msg.createAck('AA', 'Admitted');
console.log('\nACK:\n' + ack.toHL7String().replace(/\r/g, '\n'));
const nak = broken.createNak(broken.validate());
console.log('NAK:\n' + nak.toHL7String().replace(/\r/g, '\n'));
