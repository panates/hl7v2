/*
 * A gateway, an interface engine's core: messages received from one system
 * are routed by type to others, and each sender gets the answer of the
 * system its message went to.
 *
 *   source --ADT--> gateway --> ADT system
 *          --ORU-->         --> lab system
 *          --else-->  AR (not routed)
 *
 * All four run here, in one process, on free ports.
 */
import { readFileSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { HL7Error, HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client, HL7Router, HL7Server } from 'hl7v2-net';

const read = (file: string) =>
  HL7Message.parse(
    readFileSync(new URL(`../../messages/${file}`, import.meta.url), 'utf8'),
  );

async function start(server: HL7Server): Promise<number> {
  await server.listen(0);
  return (server.address() as AddressInfo).port;
}

/* The downstream systems */
const adtSystem = HL7Server.createServer(undefined, { applicationName: 'ADT' });
adtSystem.use(req =>
  console.log(
    `    ADT system: ${req.message.messageType} of ${req.message.get('PID-3')}`,
  ),
);
const labSystem = HL7Server.createServer(undefined, { applicationName: 'LAB' });
labSystem.use(req => {
  if (req.message.get('PID-3') === 'UNKNOWN') {
    throw new HL7Error('No such patient', { hl7ErrorCode: 204 });
  }
  console.log(`    Lab system: results of ${req.message.get('PID-3')}`);
});
const toAdt = Hl7Client.createClient({
  host: 'localhost',
  port: await start(adtSystem),
  responseTimeout: 5000,
});
const toLab = Hl7Client.createClient({
  host: 'localhost',
  port: await start(labSystem),
  responseTimeout: 5000,
});

/*
 * Forwards to a destination and answers as it answered: its AA as ours, its
 * error as an AE of ours carrying its text
 */
function forwardTo(client: Hl7Client, application: string) {
  return async (req: { message: HL7Message }) => {
    const msg = req.message;
    msg.header.field(MSHSegment.ReceivingApplication).setValue(application);
    const ack = await client.sendMessageWaitAck(msg);
    if (ack.get('MSA-1') !== 'AA') {
      throw new HL7Error(`${application}: ${ack.get('MSA-3')}`, {
        hl7ErrorCode: 207,
      });
    }
  };
}

/* The gateway: a router per destination, chosen by message type */
const gateway = HL7Server.createServer(undefined, {
  applicationName: 'GATEWAY',
});

const adt = new HL7Router();
adt.use(forwardTo(toAdt, 'ADT'));
gateway.use('ADT', adt);

const lab = new HL7Router();
/* A rule before forwarding: only final results go to the lab system */
lab.use(req => {
  const statuses = req.message.segments
    .filter(s => s.segmentType === 'OBX')
    .map(obx => obx.field(11).getValue());
  if (statuses.some(s => s !== 'F')) {
    throw new HL7Error('Only final results are routed', { hl7ErrorCode: 207 });
  }
});
lab.use(forwardTo(toLab, 'LAB'));
gateway.use('ORU^R01', lab);

/* What no route takes is rejected */
gateway.use(
  req => !/^(ADT|ORU)\^/.test(req.message.messageType),
  req => {
    throw new HL7Error(`No route for ${req.message.messageType}`, {
      hl7ErrorCode: 200,
    });
  },
);

/* The source system, sending to the gateway */
const source = Hl7Client.createClient({
  host: 'localhost',
  port: await start(gateway),
  responseTimeout: 10000,
});

async function send(label: string, msg: HL7Message) {
  console.log(label);
  const ack = await source.sendMessageWaitAck(msg);
  const text = ack.get('MSA-3');
  console.log(`  -> ${ack.get('MSA-1')}${text ? ` - ${text}` : ''}`);
}

await send('ADT^A01', read('adt-a01.hl7'));
await send('ORU^R01', read('oru-r01.hl7'));

const unknown = read('oru-r01.hl7');
unknown.set('PID-3', 'UNKNOWN');
await send('ORU^R01 for an unknown patient', unknown);

const preliminary = read('oru-r01.hl7');
preliminary.set('OBX-11', 'P');
await send('ORU^R01 with a preliminary result', preliminary);

const order = new HL7Message('2.5');
order.header.field(MSHSegment.MessageType).fromHL7String('ORM^O01^ORM_O01');
await send('ORM^O01', order);

for (const c of [source, toAdt, toLab]) await c.close();
for (const s of [gateway, adtSystem, labSystem]) await s.close();
