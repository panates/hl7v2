import fs from 'node:fs';
import net, { type AddressInfo } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect } from 'expect';
import { HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client, HL7Server } from '../src/index.js';
import { TestSocksServer } from './support/socks-server.js';

const fixtures = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'fixtures',
);
const key = fs.readFileSync(path.join(fixtures, 'localhost.key'));
const cert = fs.readFileSync(path.join(fixtures, 'localhost.crt'));

function newMessage(): HL7Message {
  const msg = new HL7Message('2.5');
  msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
  return msg;
}

/** Connecting through a SOCKS proxy, or a connection factory */
describe('net:proxy', () => {
  let server: HL7Server;
  let client: Hl7Client | undefined;
  let socks: TestSocksServer;
  let port: number;

  async function start(secure = false) {
    server = secure
      ? HL7Server.createTlsServer({ key, cert })
      : HL7Server.createServer();
    await server.listen(0);
    port = (server.address() as AddressInfo).port;
  }

  beforeEach(async () => {
    socks = new TestSocksServer();
    await socks.listen();
  });

  afterEach(async () => {
    await client?.close();
    client = undefined;
    await server?.close();
    await socks.close();
  });

  it('should exchange messages through a SOCKS5 proxy', async () => {
    await start();
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      proxy: { host: '127.0.0.1', port: socks.port, type: 5 },
    });
    const ack = await client.sendMessageWaitAck(newMessage());
    expect(ack.get('MSA-1')).toEqual('AA');
    expect(socks.tunnels).toEqual([`localhost:${port}`]);
  });

  it('should exchange messages through a SOCKS4 proxy', async () => {
    await start();
    client = Hl7Client.createClient({
      host: '127.0.0.1',
      port,
      proxy: { host: '127.0.0.1', port: socks.port, type: 4 },
    });
    const ack = await client.sendMessageWaitAck(newMessage());
    expect(ack.get('MSA-1')).toEqual('AA');
    expect(socks.tunnels).toEqual([`127.0.0.1:${port}`]);
  });

  it('should authenticate to a SOCKS5 proxy, and fail when refused', async () => {
    await start();
    socks.credentials = { userId: 'hl7', password: 'secret' };
    const proxy = { host: '127.0.0.1', port: socks.port, type: 5 as const };
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      proxy: { ...proxy, userId: 'hl7', password: 'secret' },
    });
    expect(
      (await client.sendMessageWaitAck(newMessage())).get('MSA-1'),
    ).toEqual('AA');
    await client.close();
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      proxy: { ...proxy, userId: 'hl7', password: 'wrong' },
      reconnect: { failAfter: 1 },
    });
    client.on('error', () => undefined);
    await expect(client.connect()).rejects.toThrow(/authentication/i);
  });

  it('should start TLS over the tunnel', async () => {
    await start(true);
    let received: HL7Message | undefined;
    server.use(req => {
      received = req.message;
    });
    client = Hl7Client.createTlsClient({
      host: 'localhost',
      port,
      ca: cert,
      proxy: { host: '127.0.0.1', port: socks.port, type: 5 },
    });
    const msg = newMessage();
    msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
    const ack = await client.sendMessageWaitAck(msg);
    expect(ack.get('MSA-1')).toEqual('AA');
    expect(received!.get('PID-5-1')).toEqual('Şahin');
    expect(socks.tunnels).toEqual([`localhost:${port}`]);
  });

  it('should check the server certificate over the tunnel', async () => {
    await start(true);
    client = Hl7Client.createTlsClient({
      host: 'localhost',
      port,
      proxy: { host: '127.0.0.1', port: socks.port, type: 5 },
    });
    client.on('error', () => undefined);
    await expect(client.connect()).rejects.toThrow(/self[- ]signed/i);
  });

  it('should reconnect through the proxy', async () => {
    await start();
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      proxy: { host: '127.0.0.1', port: socks.port, type: 5 },
      reconnect: { initialDelay: 20, maxDelay: 50 },
    });
    client.on('error', () => undefined);
    await client.connect();
    const reconnected = new Promise(resolve => client!.once('ready', resolve));
    /* The server drops the connection */
    for (const s of (server as any)._sockets) s.socket.destroy();
    await reconnected;
    const ack = await client.sendMessageWaitAck(newMessage());
    expect(ack.get('MSA-1')).toEqual('AA');
    expect(socks.tunnels.length).toEqual(2);
  });

  it('should time out on a proxy that does not answer', async () => {
    await start();
    socks.silent = true;
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      connectTimeout: 100,
      proxy: { host: '127.0.0.1', port: socks.port, type: 5 },
      reconnect: { failAfter: 1 },
    });
    client.on('error', () => undefined);
    await expect(client.connect()).rejects.toThrow(/timed out/i);
  });

  it('should open each connection with createConnection', async () => {
    await start();
    const opened: string[] = [];
    client = Hl7Client.createClient({
      host: 'localhost',
      port,
      createConnection: ({ host, port: p }) => {
        opened.push(`${host}:${p}`);
        return new Promise((resolve, reject) => {
          const socket = net.connect({ host, port: p }, () => resolve(socket));
          socket.once('error', reject);
        });
      },
    });
    const ack = await client.sendMessageWaitAck(newMessage());
    expect(ack.get('MSA-1')).toEqual('AA');
    expect(opened).toEqual([`localhost:${port}`]);
  });

  it('should refuse both proxy and createConnection', () => {
    expect(() =>
      Hl7Client.createClient({
        host: 'localhost',
        port: 1,
        proxy: { host: '127.0.0.1', port: 1, type: 5 },
        createConnection: () => Promise.reject(new Error('unused')),
      }),
    ).toThrow('Give either proxy or createConnection, not both');
  });
});
