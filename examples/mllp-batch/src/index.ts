/*
 * Batches over MLLP: a whole batch file in one block. The receiver takes
 * each message as if it came alone - validated, routed, acknowledged - and
 * answers the batch with a batch of acknowledgments, never one on its own.
 * The server and client run here, in one process.
 */
import { readFileSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { BHSSegment, FHSSegment, HL7BatchFile, HL7Error } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';

/*
 * batchAcknowledgment: 'all' acknowledges every message (the default),
 * 'errors' only those not accepted, 'none' sends no reply batch
 */
const server = HL7Server.createServer(undefined, {
  validate: true,
  batchAcknowledgment: 'all',
});
server.use('ADT', req => {
  const patient = req.message.get('PID-3');
  /* One fails, to show its NAK among the others' ACKs */
  if (patient === '123456') {
    throw new HL7Error('Patient record locked', { hl7ErrorCode: 207 });
  }
  console.log(`  server: ${req.message.messageType} for patient ${patient}`);
});
server.on('batch', file =>
  console.log(
    `Server received a batch file of ${file.messages.length} messages`,
  ),
);
await server.listen(0);
const { port } = server.address() as AddressInfo;

const client = Hl7Client.createClient({
  host: 'localhost',
  port,
  responseTimeout: 5000,
});

/* The batch file of the batch-files example: FHS, a batch of three, FTS */
const file = HL7BatchFile.parse(
  readFileSync(new URL('../../messages/batch.hl7', import.meta.url)),
);

/* Sent in one block; the reply matched by FHS-12 = our FHS-11 */
const reply = await client.sendBatchWaitAck(file);

console.log('\nReply file');
console.log(
  '  FHS-12 (answers):',
  reply.header?.field(FHSSegment.ReferenceFileControlID).getValue(),
);
for (const batch of reply.batches) {
  console.log(
    '  batch answering',
    batch.header?.field(BHSSegment.ReferenceBatchControlID).getValue(),
  );
  for (const ack of batch.messages) {
    const text = ack.get('MSA-3');
    console.log(
      `    ${ack.get('MSA-2')}: ${ack.get('MSA-1')}${text ? ` - ${text}` : ''}`,
    );
  }
}

await client.close();
await server.close();
