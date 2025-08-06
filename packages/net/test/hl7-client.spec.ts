import { expect } from 'expect';
import { HL7Message } from 'hl7v2';
import { Hl7Client, type HL7RequestContext, HL7Server } from '../src/index.js';

describe('net:client', () => {
  let server: HL7Server | undefined;
  let client: Hl7Client;

  afterEach(async () => {
    await client?.close();
    await server?.close();
  });

  it('should construct', async () => {
    client = new Hl7Client({ host: 'localhost', port: 12345 });
    expect(client).toBeDefined();
  });

  it('should connect', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = new Hl7Client({ host: 'localhost', port: 12345 });
    await client.connect();
    expect(client.connected).toBeTruthy();
    expect(client.readyState).toStrictEqual('open');
  });

  it('Should reconnect after close', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = new Hl7Client({ host: 'localhost', port: 12345 });
    await client.connect();
    expect(client.connected).toBeTruthy();
    await client.close();
    expect(client.connected).not.toBeTruthy();
    await client.connect();
    expect(client.connected).toBeTruthy();
  });

  it('Should receive messages from server', done => {
    Promise.resolve().then(async () => {
      const clientMessages: HL7Message[] = [];
      // Server side
      server = HL7Server.createServer();
      await server.listen(12345);
      server.on('connection', socket => {
        setTimeout(() => {
          const msg = new HL7Message();
          socket
            .sendMessageWaitAck(msg)
            .then(resp => {
              expect(clientMessages.length).toBe(1);
              expect(clientMessages[0].toHL7String()).toStrictEqual(
                msg.toHL7String(),
              );
              expect(resp).toBeInstanceOf(HL7Message);
              done();
            })
            .catch(done);
        }, 50);
      });
      client = new Hl7Client({ host: 'localhost', port: 12345 });

      // Client side
      client.use((ctx: HL7RequestContext) => {
        clientMessages.push(ctx.request);
        const ack = ctx.request.createAck();
        ctx.end(ack);
      });
      await client.connect();
    });
  });
});
