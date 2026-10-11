import {
  BHSSegment,
  BTSSegment,
  FHSSegment,
  FTSSegment,
} from 'hl7v2-dictionary';
import iconv from 'iconv-lite';
import { CR, FS, LF, VT } from './constants.js';
import { HL7Error } from './hl7-error.js';
import { HL7Message, type HL7MessageParseOptions } from './hl7-message.js';
import { HL7Segment } from './hl7-segment.js';
import {
  detectByteOrderMark,
  encodeHL7String,
  resolveHL7Encoding,
} from './utils/hl7-charset.js';

/*
 * HL7 batches (HL7 v2 chapter 2, "Batch protocol"): messages sent together,
 * in a file or one stream -
 *
 *   [FHS]               file header
 *     { [BHS]           batch header
 *         { MSH ... }   messages
 *       [BTS] }         batch trailer, BTS-1 the message count
 *   [FTS]               file trailer, FTS-1 the batch count
 *
 * FHS and BHS carry the delimiters as MSH does (FHS-1, FHS-2). Files with
 * no FHS, no BHS, or neither - bare messages one after another - are read
 * too. The whole is one character set: the BOM's, or the first message's.
 */

/** A batch: its BHS and BTS, and the messages between them */
export class HL7Batch {
  header?: HL7Segment;
  trailer?: HL7Segment;
  messages: HL7Message[] = [];

  /** A batch with a BHS (its date/time set) and a BTS, in the given version */
  static create(version: string = '2.5'): HL7Batch {
    const batch = new HL7Batch();
    const carrier = new HL7Message(version as any);
    batch.header = new HL7Segment(carrier, 'BHS');
    batch.header.field(BHSSegment.BatchCreationDateTime).setValue(new Date());
    batch.trailer = new HL7Segment(carrier, 'BTS');
    return batch;
  }

  /** The batch as HL7 text, BTS-1 set to the number of messages */
  toHL7String(): string {
    const lines: string[] = [];
    if (this.header) lines.push(this.header.toHL7String());
    for (const m of this.messages)
      lines.push(m.toHL7String().replace(/\r$/, ''));
    const trailer =
      this.trailer ??
      (this.header ? new HL7Segment(this.header.message, 'BTS') : undefined);
    if (trailer) {
      trailer
        .field(BTSSegment.BatchMessageCount)
        .setValue(this.messages.length);
      lines.push(trailer.toHL7String());
    }
    return lines.join(CR);
  }
}

/** A batch file: its FHS and FTS, and the batches between them */
export class HL7BatchFile {
  header?: HL7Segment;
  trailer?: HL7Segment;
  batches: HL7Batch[] = [];

  /** Every message of every batch, in order */
  get messages(): HL7Message[] {
    return this.batches.flatMap(b => b.messages);
  }

  /** A file with an FHS (its date/time set) and an FTS, in the given version */
  static create(version: string = '2.5'): HL7BatchFile {
    const file = new HL7BatchFile();
    const carrier = new HL7Message(version as any);
    file.header = new HL7Segment(carrier, 'FHS');
    file.header.field(FHSSegment.FileCreationDateTime).setValue(new Date());
    file.trailer = new HL7Segment(carrier, 'FTS');
    return file;
  }

  /** The file as HL7 text, FTS-1 set to the number of batches */
  toHL7String(): string {
    const lines: string[] = [];
    if (this.header) lines.push(this.header.toHL7String());
    for (const b of this.batches) lines.push(b.toHL7String());
    const trailer =
      this.trailer ??
      (this.header ? new HL7Segment(this.header.message, 'FTS') : undefined);
    if (trailer) {
      trailer.field(FTSSegment.FileBatchCount).setValue(this.batches.length);
      lines.push(trailer.toHL7String());
    }
    return lines.filter(Boolean).join(CR) + CR;
  }

  /** The file encoded in the first message's character set (see HL7Message.toBuffer()) */
  toBuffer(options?: { defaultCharset?: string }): Buffer {
    return encodeHL7String(
      this.toHL7String(),
      this.messages[0]?.charset,
      undefined,
      options?.defaultCharset,
    );
  }

  /**
   * Reads a batch file - or a single batch, or bare messages one after
   * another. Each message is parsed with the given options.
   */
  static parse(
    input: string | Buffer,
    options?: HL7MessageParseOptions,
  ): HL7BatchFile {
    const text = decode(input, options?.defaultCharset);
    const lines = (text.includes(CR) ? text.split(/\r\n?/) : text.split(LF))
      /* MLLP framing, when a frame carried the batch */
      .map(l => {
        const start = l.startsWith(VT) ? 1 : 0;
        const end = l.indexOf(FS);
        return l.substring(start, end < 0 ? undefined : end);
      })
      .filter(l => l.trim());
    /* The header segments are read in the first message's version */
    const msh = lines.find(l => l.startsWith('MSH'));
    const version = msh ? msh.split(msh[3])[11] || undefined : undefined;

    const file = new HL7BatchFile();
    let batch: HL7Batch | undefined;
    let current: string[] | undefined;
    const pending: [HL7Batch, string[]][] = [];
    const flush = () => {
      if (current) pending.push([batch!, current]);
      current = undefined;
    };

    lines.forEach((line, i) => {
      const type = line.substring(0, 3);
      const fail = (msg: string) =>
        new HL7Error(msg, {
          line: i + 1,
          segmentType: type,
          hl7ErrorCode: 100,
        });
      switch (type) {
        case 'FHS':
          if (file.header || file.batches.length)
            throw fail('FHS out of place');
          file.header = headerSegment(line, version);
          return;
        case 'BHS':
          flush();
          batch = new HL7Batch();
          batch.header = headerSegment(line, version);
          file.batches.push(batch);
          return;
        case 'BTS':
          flush();
          if (!batch) throw fail('BTS without a batch');
          batch.trailer = HL7Segment.parse(
            carrierOf(batch, file, version),
            line,
          );
          batch = undefined;
          return;
        case 'FTS':
          flush();
          file.trailer = HL7Segment.parse(
            file.header?.message ?? carrierFor(undefined, version),
            line,
          );
          return;
        case 'MSH':
          flush();
          if (!batch) {
            batch = new HL7Batch();
            file.batches.push(batch);
          }
          current = [line];
          return;
        default:
          if (!current) throw fail(`${type} outside a message`);
          current.push(line);
      }
    });
    flush();
    for (const [b, segs] of pending) {
      b.messages.push(HL7Message.parse(segs.join(CR), options));
    }
    return file;
  }
}

function decode(input: string | Buffer, defaultCharset?: string): string {
  if (typeof input === 'string') return input;
  const bom = detectByteOrderMark(input);
  if (bom) return iconv.decode(bom.data, bom.encoding);
  /* The first message's MSH-18 names the character set */
  const at = input.indexOf('MSH');
  const encoding =
    at >= 0
      ? HL7Message.parseRaw(input.subarray(at), defaultCharset).encoding
      : resolveHL7Encoding(undefined, defaultCharset);
  return iconv
    .decode(input, encoding)
    .replace(new RegExp(`[${VT}${FS}]`, 'g'), '');
}

/** A message to carry a header line's delimiters, for its segments to parse and print */
function carrierFor(line: string | undefined, version?: string): HL7Message {
  const carrier = new HL7Message((version || '2.5') as any);
  if (line) {
    const sep = line[3];
    const enc = line.substring(4).split(sep)[0];
    carrier.fieldSeparator = sep;
    if (enc[0]) carrier.componentSeparator = enc[0];
    if (enc[1]) carrier.repetitionSeparator = enc[1];
    if (enc[2]) carrier.escapeCharacter = enc[2];
    if (enc[3]) carrier.subComponentSeparator = enc[3];
  }
  return carrier;
}

function headerSegment(line: string, version?: string): HL7Segment {
  return HL7Segment.parse(carrierFor(line, version), line);
}

function carrierOf(
  batch: HL7Batch,
  file: HL7BatchFile,
  version?: string,
): HL7Message {
  return (
    batch.header?.message ??
    file.header?.message ??
    carrierFor(undefined, version)
  );
}
