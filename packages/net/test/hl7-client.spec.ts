import backoff from 'backoff';
import { expect } from 'expect';
import { HL7Message, MSHSegment } from 'hl7v2';
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

  it('should reconnect with a backoff strategy given as an instance', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let delays = 0;
    const strategy = backoff.exponential({ initialDelay: 10, maxDelay: 50 });
    strategy.on('backoff', () => delays++);
    client = Hl7Client.createClient({
      host: 'localhost',
      port: 12345,
      reconnect: { strategy },
    });
    await client.connect();
    const reconnected = new Promise(resolve => client.once('connect', resolve));
    (client as any)._socket.socket.destroy();
    await reconnected;
    expect(client.connected).toBeTruthy();
    expect(delays).toBeGreaterThan(0);
  });

  it('should share one connection between calls made while connecting', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let connections = 0;
    server.on('connection', () => connections++);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const acks = await Promise.all(
      Array.from({ length: 5 }, (_, i) => {
        const msg = new HL7Message();
        msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
        msg.header.field(MSHSegment.MessageControlID).setValue('C' + i);
        msg.addSegment('PID');
        return client.sendMessageWaitAck(msg);
      }),
    );
    expect(acks.map(a => a.messageType)).toEqual(Array(5).fill('ACK^R01'));
    expect(connections).toBe(1);
  });

  it('should not add socket listeners per wait in flight', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    const count = 15;
    let release!: () => void;
    const gate = new Promise<void>(resolve => (release = resolve));
    let arrived = 0;
    server.use(async () => {
      if (++arrived === count) release();
      await gate;
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    await client.connect();
    const tcpSocket = (client as any)._socket.socket;
    const before = {
      error: tcpSocket.listenerCount('error'),
      close: tcpSocket.listenerCount('close'),
    };
    const waits = Array.from({ length: count }, (_, i) => {
      const msg = new HL7Message();
      msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
      msg.header.field(MSHSegment.MessageControlID).setValue('C' + i);
      msg.addSegment('PID');
      return client.sendMessageWaitAck(msg);
    });
    await gate;
    expect({
      error: tcpSocket.listenerCount('error'),
      close: tcpSocket.listenerCount('close'),
    }).toEqual(before);
    await Promise.all(waits);
  });

  it('should reject the waits in flight when the connection closes', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    server.use(() => new Promise(() => undefined));
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    await client.connect();
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const wait = client.sendMessageWaitAck(msg);
    await new Promise(resolve => setTimeout(resolve, 50));
    (client as any)._socket.socket.destroy();
    await expect(wait).rejects.toThrow('Socket closed before response');
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
