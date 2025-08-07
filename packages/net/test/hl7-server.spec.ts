import { expect } from 'expect';
import { HL7Message, MSASegment, MSHSegment } from 'hl7v2';
import { Hl7Client, type HL7RequestContext, HL7Server } from '../src/index.js';

describe('net:server', () => {
  let server: HL7Server | undefined;
  let client: Hl7Client;

  afterEach(async () => {
    await client?.close();
    await server?.close();
  });

  it('should construct', async () => {
    server = HL7Server.createServer();
    expect(server).toBeDefined();
  });

  it('should listen than close', async () => {
    server = HL7Server.createServer();
    await server.listen(0);
    expect(server.address()).toBeDefined();
    expect(server.listening).toBe(true);
  });

  it('should receive hl7 messages', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    const messages: HL7Message[] = [];
    server.use((ctx: HL7RequestContext) => {
      messages.push(ctx.request);
      const ack = ctx.request.createAck();
      messages.push(ack);
      ctx.end(ack);
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    expect(messages.length).toEqual(2);
    expect(msg.toHL7String()).toEqual(messages[0].toHL7String());
    expect(resp.toHL7String()).toEqual(messages[1].toHL7String());
    expect(msg.controlId).toEqual(
      messages[1]
        .getSegment('MSA')
        ?.field(MSASegment.MessageControlID)
        .toHL7String(),
    );
  });

  it('should send nak if no middle-ware handles the message', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    const msa = resp.getSegment('MSA');
    expect(msa).toBeDefined();
    expect(
      msa?.field(MSASegment.AcknowledgmentCode).toHL7String(),
    ).toStrictEqual('AE');
  });

  it('should send nak if error in middle-wares', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    server.use(() => {
      throw new Error('test error');
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    const msa = resp.getSegment('MSA');
    expect(msa).toBeDefined();
    expect(
      msa?.field(MSASegment.AcknowledgmentCode).toHL7String(),
    ).toStrictEqual('AE');
    expect(msa?.field(MSASegment.TextMessage).toHL7String()).toStrictEqual(
      'test error',
    );
  });

  it('should wait running handlers for shutdownWait time', function (done) {
    this.slow(500);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    server = HL7Server.createServer();
    server.use(() => {
      const t1 = Date.now();
      setTimeout(() => {
        server!.close(100).then(() => {
          try {
            expect(Date.now() - t1).toBeGreaterThan(100);
            done();
          } catch (e) {
            done(e);
          }
        });
      }, 10);
    });

    const msg = new HL7Message();
    server
      .listen(12345)
      .then(() => {
        client.connect().then(() => client.sendMessageWaitAck(msg));
      })
      .catch(e => done(e));
  });

  it('should close immediately if there is no message to response', function (done) {
    this.slow(500);
    this.timeout(10000);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    server = HL7Server.createServer();
    client.connect().then(() => {
      const t1 = Date.now();
      server!.close(5000).then(() => {
        try {
          const n = Date.now() - t1;
          expect(n).toBeLessThan(100);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
    server.listen(12345).catch(e => done(e));
  });

  it('should listen() reject on lister error', function (done) {
    this.slow(500);
    this.timeout(10000);
    server = HL7Server.createServer();
    server.listen(12345).catch(e => done(e));
    const server2 = HL7Server.createServer();
    server2.listen(12345).catch(() => done());
  });
});
