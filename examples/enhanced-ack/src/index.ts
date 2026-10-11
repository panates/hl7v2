/*
 * Enhanced acknowledgment mode. A sender asks for up to two answers, each
 * AL (always), NE (never), ER (on error only) or SU (on success only):
 *
 *   MSH-15  the accept acknowledgment, sent on receipt, before processing:
 *           CA accepted, CE an error in the message, CR rejected
 *   MSH-16  the application acknowledgment, sent after processing:
 *           AA, AE or AR
 *
 * With both empty (original mode) one application acknowledgment is sent.
 * The server and client here run in one process.
 */
import type { AddressInfo } from 'node:net';
import { HL7Error, HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer(undefined, { validate: true });
server.use(req => {
  /* Processing fails for one patient, to show AE */
  if (req.message.get('PID-3') === 'FAIL') {
    throw new HL7Error('Patient record locked', { hl7ErrorCode: 207 });
  }
});
await server.listen(0);
const { port } = server.address() as AddressInfo;

const client = Hl7Client.createClient({
  host: 'localhost',
  port,
  responseTimeout: 3000,
});
/* Every acknowledgment that arrives, by the control ID it answers - the
 * awaited one, and those coming after it */
const received = new Map<string, string[]>();
client.on('message', msg => {
  const id = String(msg.get('MSA-2'));
  received.set(id, [...(received.get(id) ?? []), String(msg.get('MSA-1'))]);
});
const labels = new Map<string, string>();

function message(accept: string, application: string, patient = '123456') {
  const msg = new HL7Message('2.5');
  msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');
  msg.header.field(MSHSegment.AcceptAcknowledgmentType).setValue(accept);
  msg.header
    .field(MSHSegment.ApplicationAcknowledgmentType)
    .setValue(application);
  msg.set('EVN-2', new Date()).set('PID-3', patient).set('PID-5-1', 'Yılmaz');
  msg.set('PV1-2', 'O');
  return msg;
}

async function send(
  label: string,
  msg: HL7Message,
  acknowledgment?: 'accept' | 'application',
) {
  labels.set(msg.controlId, label);
  const ack = await client.sendMessageWaitAck(msg, { acknowledgment });
  const text = ack.get('MSA-3');
  console.log(
    `${label.padEnd(46)} ${ack.get('MSA-1')}${text ? ` - ${text}` : ''}`,
  );
}

await client.connect();

/* Original mode: one application acknowledgment */
await send('Original (both empty)', message('', ''));

/* The accept acknowledgment only: received, nothing more */
await send('MSH-15 AL, MSH-16 NE', message('AL', 'NE'));

/* Both: wait for the one you need - accept resolves first by default */
await send('MSH-15 AL, MSH-16 AL - waiting for accept', message('AL', 'AL'));
await send(
  'MSH-15 AL, MSH-16 AL - waiting for application',
  message('AL', 'AL'),
  'application',
);

/* Application acknowledgment on error only */
await send('MSH-15 NE, MSH-16 ER - failing', message('NE', 'ER', 'FAIL'));
/* ... and on success, none: send without waiting */
const succeeding = message('NE', 'ER');
labels.set(succeeding.controlId, 'MSH-15 NE, MSH-16 ER - succeeding');
await client.sendMessage(succeeding);
console.log(`${'MSH-15 NE, MSH-16 ER - succeeding'.padEnd(46)} (no answer)`);

/* A message failing validation is not accepted: CE, and not processed */
const invalid = message('AL', 'AL');
invalid.getSegment('PID')!.field(3).clear();
await send('Invalid, MSH-15 AL', invalid);

/* Let the later answers arrive: everything each message got */
await new Promise(resolve => setTimeout(resolve, 200));
console.log('\nAll acknowledgments received:');
for (const [id, label] of labels) {
  console.log(`  ${label.padEnd(46)} ${received.get(id)?.join(', ') ?? '-'}`);
}
await client.close();
await server.close();
