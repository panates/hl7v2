import {
  BHSSegment,
  FHSSegment,
  HL7Batch,
  HL7BatchFile,
  type HL7Message,
  HL7Segment,
  MSASegment,
} from 'hl7v2';
import { uid } from 'uid';

/*
 * Batches over MLLP (HL7 v2 chapter 2, "Batch protocol", and the MLLP
 * appendix): one block holds a message, or a batch - FHS ... FTS, or
 * BHS ... BTS. The receiver processes each message as if it came alone, and
 * answers the batch with a batch: its acknowledgments, as the receiver
 * chooses (see HL7BatchAcknowledgment), each reply batch referring to the
 * batch it answers (BHS-12, FHS-12 the received BHS-11, FHS-11).
 */

/**
 * Which acknowledgments a reply batch carries - the standard's options:
 * 'all' every message's, 'errors' only those of messages not accepted
 * (an empty batch when all were), 'none' no reply batch at all.
 */
export type HL7BatchAcknowledgment = 'all' | 'errors' | 'none';

/** Whether a received block is a batch: it starts with FHS or BHS */
export function isBatchData(data: Buffer): boolean {
  let at = 0;
  /* After a byte order mark: UTF-8's, or a UTF-16 one */
  if (data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) at = 3;
  const head = data
    .subarray(at, at + 8)
    .toString('latin1')
    .replace(/\0/g, '')
    .replace(/^\W+/, '');
  return head.startsWith('FHS') || head.startsWith('BHS');
}

/**
 * Where the acknowledgments of one message in a batch go instead of the
 * socket: kept for the reply batch. A response watching for its message
 * being answered is told, as the socket's 'send' event tells it.
 */
export class HL7BatchReplies {
  readonly messages: HL7Message[] = [];
  readonly listeners = new Set<(message: HL7Message) => void>();

  send(message: HL7Message) {
    this.messages.push(message);
    for (const listener of this.listeners) listener(message);
  }
}

/** Whether an acknowledgment accepts its message: AA or CA */
const accepted = (ack: HL7Message) =>
  /^[AC]A$/.test(
    String(
      ack.getSegment('MSA')?.field(MSASegment.AcknowledgmentCode).getValue(),
    ),
  );

/** A header answering one: sender and receiver swapped, the reference set */
function answerHeader(
  received: HL7Segment,
  carrier: HL7Message,
  referenceField: number,
): HL7Segment {
  const out = new HL7Segment(carrier, received.segmentType);
  const copy = (to: number, from: number) =>
    out.field(to).fromHL7String(received.field(from).toHL7String());
  /* FHS and BHS alike: 3/4 sending application/facility, 5/6 receiving */
  copy(3, 5);
  copy(4, 6);
  copy(5, 3);
  copy(6, 4);
  out.field(7).setValue(new Date());
  out.field(11).setValue(uid(8));
  out.field(referenceField).setValue(received.field(11).getValue());
  return out;
}

/**
 * The reply to a received batch file: the same shape - an FHS when it had
 * one, a BHS for each batch that had one - with the acknowledgments each
 * batch's messages got, as the policy keeps them
 */
export function replyBatchFile(
  received: HL7BatchFile,
  replies: HL7Message[][],
  policy: HL7BatchAcknowledgment,
): HL7BatchFile {
  const out = new HL7BatchFile();
  const version = received.messages[0]?.version;
  if (received.header) {
    const carrier = HL7BatchFile.create(version).header!.message;
    out.header = answerHeader(
      received.header,
      carrier,
      FHSSegment.ReferenceFileControlID,
    );
    out.trailer = new HL7Segment(carrier, 'FTS');
  }
  received.batches.forEach((batch, i) => {
    const reply = new HL7Batch();
    if (batch.header) {
      const carrier = HL7Batch.create(version).header!.message;
      reply.header = answerHeader(
        batch.header,
        carrier,
        BHSSegment.ReferenceBatchControlID,
      );
      reply.trailer = new HL7Segment(carrier, 'BTS');
    }
    reply.messages = (replies[i] || []).filter(
      ack => policy === 'all' || !accepted(ack),
    );
    out.batches.push(reply);
  });
  return out;
}

/**
 * Whether a received batch file answers one sent: its FHS-12 is the sent
 * FHS-11, or - without a file header - its first BHS-12 the sent first BHS-11
 */
export function answersBatch(reply: HL7BatchFile, sent: HL7BatchFile): boolean {
  const sentFile = sent.header?.field(FHSSegment.FileControlID).getValue();
  if (sentFile && reply.header) {
    return (
      reply.header.field(FHSSegment.ReferenceFileControlID).getValue() ===
      sentFile
    );
  }
  const sentBatch = sent.batches[0]?.header
    ?.field(BHSSegment.BatchControlID)
    .getValue();
  return (
    !!sentBatch &&
    reply.batches[0]?.header
      ?.field(BHSSegment.ReferenceBatchControlID)
      .getValue() === sentBatch
  );
}

/** Control IDs for a file and its batches that have none, to be answered by */
export function identifyBatchFile(file: HL7BatchFile) {
  const id = (segment: HL7Segment | undefined) => {
    const field = segment?.field(11);
    if (field && !field.getValue()) field.setValue(uid(8));
  };
  id(file.header);
  for (const b of file.batches) id(b.header);
}
