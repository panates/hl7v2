import { expect } from 'expect';
import { HL7Message } from 'hl7v2';
import { Hl7Client, HL7Server } from '../src/index.js';

describe('net:client', () => {
  let server: HL7Server | undefined;
  let client: Hl7Client;

  afterEach(async () => {
    await client?.close();
    await server?.close();
  });

  it('should construct', async () => {
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    expect(client).toBeDefined();
  });

  it('should connect', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    await client.connect();
    expect(client.connected).toBeTruthy();
    expect(client.readyState).toStrictEqual('open');
  });

  it('Should manually reconnect after close', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    await client.connect();
    expect(client.connected).toBeTruthy();
    await client.close();
    expect(client.connected).not.toBeTruthy();
    await client.connect();
    expect(client.connected).toBeTruthy();
  });

  it('should automatically reconnect when connection lost', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    await client.connect();
    expect(client.connected).toBeTruthy();
    const events: string[] = [];
    await new Promise<void>(resolve => {
      client.on('reconnecting', () => events.push('reconnecting'));
      client.on('reconnect', () => events.push('reconnect'));
      client.on('connect', () => {
        events.push('connect');
        resolve();
      });
      (client as any)._socket.socket.destroy();
    });
    expect(events).toStrictEqual(['reconnecting', 'reconnect', 'connect']);
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
      client = Hl7Client.createClient({ host: 'localhost', port: 12345 });

      // Client side
      client.use(req => {
        clientMessages.push(req.message);
      });
      await client.connect();
    });
  });
});
