/*
 * An MLLP client: sends messages to the mllp-server example and waits for
 * each one's acknowledgment, matched by MSA-2 = the message's MSH-10.
 *
 *   cd ../mllp-server && npm start     (in another terminal)
 *   npm start                          HL7_HOST / HL7_PORT to change where
 */
import { readFileSync } from 'node:fs';
import { HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

const read = (file: string) =>
  HL7Message.parse(
    readFileSync(new URL(`../../messages/${file}`, import.meta.url), 'utf8'),
  );

const client = Hl7Client.createClient({
  host: process.env.HL7_HOST || 'localhost',
  port: Number(process.env.HL7_PORT || 2575),
  connectTimeout: 5000,
  /* sendMessageWaitAck() gives up after 10 seconds */
  responseTimeout: 10000,
  /* A lost connection is re-established, waiting longer each time */
  reconnect: { strategy: 'exponential', initialDelay: 500, maxDelay: 10000 },
});
client.on('reconnecting', (attempt, delay) =>
  console.log(`Reconnecting (${attempt}) in ${delay} ms`),
);
client.on('error', error => console.error('Connection error:', error.message));

async function send(label: string, message: HL7Message) {
  const ack = await client.sendMessageWaitAck(message);
  const code = ack.get('MSA-1');
  const text = ack.get('MSA-3');
  console.log(`${label.padEnd(26)} ${code}${text ? ` - ${text}` : ''}`);
  /* An ERR for each problem the receiver found */
  for (let i = 0, err; (err = ack.getSegment('ERR', i)); i++) {
    console.log(`${''.padEnd(26)}   ERR ${err.toHL7String().slice(4)}`);
  }
}

await client.connect();
console.log('Connected\n');

/* Accepted: AA */
await send('ADT^A01', read('adt-a01.hl7'));
await send('ORU^R01', read('oru-r01.hl7'));

/* A type the server does not take: AR, HL7 error 200 */
const query = new HL7Message('2.5');
query.header.field(MSHSegment.MessageType).fromHL7String('QBP^Q22^QBP_Q21');
query.set('QPD-1-1', 'Q22').set('RCP-1', 'I');
await send('QBP^Q22 (unsupported)', query);

/* Invalid: PID-3 is required - the server validates, AE with an ERR */
const invalid = read('adt-a01.hl7');
invalid.getSegment('PID')!.field(3).clear();
await send('ADT^A01 without PID-3', invalid);

/* Fails in the handler: AE */
const empty = read('oru-r01.hl7');
const kept = empty.segments.filter(s => s.segmentType !== 'OBX');
empty.segments.splice(0, empty.segments.length, ...kept);
await send('ORU^R01 without results', empty);

await client.close();
console.log('\nClosed');
