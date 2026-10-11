import net, { type AddressInfo } from 'node:net';
import { expect } from 'expect';
import {
  BHSSegment,
  CR,
  FHSSegment,
  FS,
  HL7Batch,
  HL7BatchFile,
  HL7Error,
  HL7Message,
  MSHSegment,
  VT,
} from 'hl7v2';
import { Hl7Client, HL7Server } from '../src/index.js';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function message(id: string, patient = id, extra = ''): HL7Message {
  return HL7Message.parse(
    `MSH|^~\\&|LAB|HOSP|EHR|HOSP|20250101||ADT^A08^ADT_A01|${id}|P|2.5${extra}\r` +
      `EVN||20250101\rPID|1||${patient}||Doe\rPV1|1|I`,
  );
}

function batchOf(...ids: string[]): HL7Batch {
  const batch = HL7Batch.create();
  for (const id of ids) batch.messages.push(message(id));
  return batch;
}

/** The control IDs a reply batch acknowledges, with their codes */
const acks = (b: HL7Batch) =>
  b.messages.map(m => `${m.get('MSA-2')} ${m.get('MSA-1')}`);

/** Batches over MLLP: one block a batch, answered with a batch */
describe('net:batch', () => {
  let server: HL7Server;
  let client: Hl7Client | undefined;
  let port: number;

  const start = async (options?: HL7Server.Options) => {
    server = HL7Server.createServer(undefined, options);
    await server.listen(0);
    port = (server.address() as AddressInfo).port;
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      responseTimeout: 5000,
    });
  };

  afterEach(async () => {
    await client?.close();
    client = undefined;
    await server.close();
  });

  it('should route each message of a batch, in order, and answer with a batch', async () => {
    await start();
    const routed: string[] = [];
    let singleAcks = 0;
    server.use(req => {
      routed.push(req.message.controlId);
    });
    client!.on('message', () => singleAcks++);
    const sent = batchOf('M1', 'M2', 'M3');
    const reply = await client!.sendBatchWaitAck(sent);
    expect(routed).toEqual(['M1', 'M2', 'M3']);
    /* No acknowledgment on its own: all in the reply batch */
    expect(singleAcks).toEqual(0);
    expect(reply.batches.length).toEqual(1);
    const b = reply.batches[0];
    expect(acks(b)).toEqual(['M1 AA', 'M2 AA', 'M3 AA']);
    /* BHS-12 refers to the batch it answers; BTS-1 counts */
    expect(
      b.header!.field(BHSSegment.ReferenceBatchControlID).getValue(),
    ).toEqual(sent.header!.field(BHSSegment.BatchControlID).getValue());
    expect(b.trailer!.field(1).getValue()).toEqual('3');
    /* Sender and receiver swapped */
    expect(
      b.header!.field(BHSSegment.BatchSendingApplication).getValue(),
    ).toEqual(
      sent.header!.field(BHSSegment.BatchReceivingApplication).getValue(),
    );
  });

  it('should answer a file with a file, batch by batch', async () => {
    await start();
    const file = HL7BatchFile.create();
    file.header!.field(FHSSegment.FileControlID).setValue('F1');
    file.batches.push(batchOf('A1', 'A2'), batchOf('B1'));
    const reply = await client!.sendBatchWaitAck(file);
    expect(
      reply.header!.field(FHSSegment.ReferenceFileControlID).getValue(),
    ).toEqual('F1');
    expect(reply.batches.map(acks)).toEqual([['A1 AA', 'A2 AA'], ['B1 AA']]);
    expect(reply.trailer!.field(1).getValue()).toEqual(2);
  });

  it('should acknowledge a failing message with its NAK, the others still', async () => {
    await start();
    server.use(req => {
      if (req.message.controlId === 'M2') {
        throw new HL7Error('Patient locked', { hl7ErrorCode: 207 });
      }
    });
    const reply = await client!.sendBatchWaitAck(batchOf('M1', 'M2', 'M3'));
    expect(acks(reply.batches[0])).toEqual(['M1 AA', 'M2 AE', 'M3 AA']);
    expect(reply.batches[0].messages[1].get('MSA-3')).toEqual('Patient locked');
  });

  it('should validate each message, when asked', async () => {
    await start({ validate: true });
    const batch = batchOf('M1', 'M2');
    batch.messages[1].getSegment('PID')!.field(3).clear();
    const reply = await client!.sendBatchWaitAck(batch);
    expect(acks(reply.batches[0])).toEqual(['M1 AA', 'M2 AE']);
  });

  it("should answer only errors with 'errors', nothing with 'none'", async () => {
    await start({ batchAcknowledgment: 'errors' });
    server.use(req => {
      if (req.message.controlId === 'M2') throw new Error('Failed');
    });
    const reply = await client!.sendBatchWaitAck(batchOf('M1', 'M2', 'M3'));
    expect(acks(reply.batches[0])).toEqual(['M2 AE']);
    /* All accepted: an empty batch, the receipt */
    const empty = await client!.sendBatchWaitAck(batchOf('M4'));
    expect(empty.batches[0].messages).toEqual([]);
    expect(empty.batches[0].trailer!.field(1).getValue()).toEqual('0');

    await client!.close();
    await server.close();
    await start({ batchAcknowledgment: 'none' });
    let received = 0;
    server.use(() => {
      received++;
    });
    client!.on('batch', () => received--);
    await client!.sendBatch(batchOf('N1', 'N2'));
    await sleep(200);
    expect(received).toEqual(2);
  });

  it('should gather both acknowledgments in enhanced mode', async () => {
    await start();
    const batch = HL7Batch.create();
    batch.messages.push(message('E1', 'E1', '|||AL|AL'));
    const reply = await client!.sendBatchWaitAck(batch);
    expect(acks(reply.batches[0])).toEqual(['E1 CA', 'E1 AA']);
  });

  it('should pass the messages of a reply batch through beforeResponse', async () => {
    await start();
    server.beforeResponse(ack => {
      ack.set('MSA-1', ack.get('MSA-1') === 'CA' ? 'AA' : ack.get('MSA-1'));
    });
    server.beforeResponse((ack, ctx) =>
      ctx.request.message.controlId === 'H2' ? null : undefined,
    );
    const batch = batchOf('H1', 'H2');
    batch.messages.push(message('H3', 'H3', '|||AL|NE'));
    const reply = await client!.sendBatchWaitAck(batch);
    expect(acks(reply.batches[0])).toEqual(['H1 AA', 'H3 AA']);
  });

  it('should answer a batch sent raw, by a sender of its own', async () => {
    await start();
    const text = [
      'BHS|^~\\&|LAB|HOSP|EHR|HOSP|20250101||||B77',
      message('R1').toHL7String().trim(),
      'BTS|1',
    ].join(CR);
    const replyText = await new Promise<string>((resolve, reject) => {
      const socket = net.connect({ port }, () => {
        socket.write(VT + text + CR + FS + CR);
      });
      let data = '';
      socket.on('data', d => {
        data += d.toString();
        if (data.endsWith(FS + CR)) {
          socket.end();
          resolve(data);
        }
      });
      socket.on('error', reject);
    });
    const reply = HL7BatchFile.parse(replyText);
    expect(
      reply.batches[0]
        .header!.field(BHSSegment.ReferenceBatchControlID)
        .getValue(),
    ).toEqual('B77');
    expect(acks(reply.batches[0])).toEqual(['R1 AA']);
  });

  it('should let the client answer a batch the server sends', async () => {
    await start();
    const routed: string[] = [];
    client!.use(req => {
      routed.push(req.message.controlId);
    });
    await client!.connect();
    await sleep(50);
    const [socket] = (server as any)._sockets as Set<any>;
    const reply = await socket.sendBatchWaitAck(batchOf('S1', 'S2'));
    expect(routed).toEqual(['S1', 'S2']);
    expect(acks(reply.batches[0])).toEqual(['S1 AA', 'S2 AA']);
    expect(
      reply.batches[0].messages[0].header
        .field(MSHSegment.MessageType)
        .getValue(),
    ).toEqual('ACK');
  });

  it("should take a handler's own answer, sent with req.send(), alone or in a batch", async () => {
    await start();
    server.use((req, res) => {
      /* An answer of its own: an ACK carrying a text, MSA-2 the request's */
      const answer = req.message.createAck(
        'AA',
        `Handled ${req.message.controlId}`,
      );
      req.send(answer);
      expect(res.finished).toBe(true);
    });
    /* Alone: that answer, and no ACK after it */
    let received = 0;
    client!.on('message', () => received++);
    const ack = await client!.sendMessageWaitAck(message('S1'));
    expect(ack.get('MSA-3')).toEqual('Handled S1');
    await sleep(100);
    expect(received).toEqual(1);
    /* In a batch: in the reply batch, once each */
    const reply = await client!.sendBatchWaitAck(batchOf('B1', 'B2'));
    expect(reply.batches[0].messages.map(m => m.get('MSA-3'))).toEqual([
      'Handled B1',
      'Handled B2',
    ]);
  });
});
