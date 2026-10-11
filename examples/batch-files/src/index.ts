/*
 * Batch files: many messages in one file, as systems exchange them
 * overnight -
 *
 *   FHS               file header
 *     BHS             batch header
 *       MSH ...       the messages
 *     BTS             batch trailer: the message count
 *   FTS               file trailer: the batch count
 *
 * Read, processed one by one, and answered with a batch of acknowledgments.
 */
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  BHSSegment,
  FHSSegment,
  HL7Batch,
  HL7BatchFile,
  type HL7Message,
} from 'hl7v2';

/* 1. Reading: a Buffer is decoded in the first message's character set */
const file = HL7BatchFile.parse(
  readFileSync(new URL('../../messages/batch.hl7', import.meta.url)),
);
console.log(
  'File   :',
  file.header?.field(FHSSegment.FileControlID).getValue(),
);
for (const batch of file.batches) {
  console.log(
    'Batch  :',
    batch.header?.field(BHSSegment.BatchControlID).getValue(),
    `- ${batch.messages.length} message(s), BTS-1 says ${batch.trailer?.field(1).getValue()}`,
  );
}

/* 2. Processing each message - here, the latest name of each patient */
const patients = new Map<string, string>();
const process = (msg: HL7Message): void => {
  if (!msg.get('PID-3')) throw new Error('No patient identifier');
  patients.set(
    String(msg.get('PID-3')),
    [msg.get('PID-5-2'), msg.get('PID-5-3'), msg.get('PID-5-1')]
      .filter(Boolean)
      .join(' '),
  );
};

/*
 * 3. The answer: a batch of acknowledgments, one per message, in a file of
 * its own - how a batch is acknowledged in HL7's batch protocol
 */
const answer = HL7BatchFile.create();
answer.header!.field(FHSSegment.FileSendingApplication).setValue('EHR');
answer.header!.field(FHSSegment.FileControlID).setValue('ACK-DAILY-20250301');
answer
  .header!.field(FHSSegment.ReferenceFileControlID)
  .setValue(file.header?.field(FHSSegment.FileControlID).getValue());
const acks = HL7Batch.create();
for (const msg of file.messages) {
  try {
    process(msg);
    acks.messages.push(msg.createAck('AA'));
  } catch (e) {
    acks.messages.push(msg.createNak([e as Error]));
  }
}
answer.batches.push(acks);

console.log('\nPatients:');
for (const [id, name] of patients) console.log(`  ${id}: ${name}`);

/* 4. Writing: counts in BTS-1 and FTS-1 are filled in; bytes as MSH-18 says */
const out = join(mkdtempSync(join(tmpdir(), 'hl7-')), 'ack.hl7');
writeFileSync(out, answer.toBuffer());
console.log(`\nWrote ${out}:`);
console.log(readFileSync(out, 'utf8').replace(/\r/g, '\n'));

/* Read back: three acknowledgments, all AA */
const check = HL7BatchFile.parse(readFileSync(out));
console.log(
  'Read back:',
  check.messages.map(m => `${m.get('MSA-2')} ${m.get('MSA-1')}`),
);
