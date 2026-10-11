import fs from 'node:fs';
import type { AddressInfo } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect } from 'expect';
import { HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client, HL7Server } from '../src/index.js';

/* A self-signed certificate for localhost, for these tests only */
const fixtures = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'fixtures',
);
const key = fs.readFileSync(path.join(fixtures, 'localhost.key'));
const cert = fs.readFileSync(path.join(fixtures, 'localhost.crt'));

describe('net:tls', () => {
  let server: HL7Server;
  let client: Hl7Client | undefined;
  let port: number;

  beforeEach(async () => {
    server = HL7Server.createTlsServer({ key, cert });
    await server.listen(0);
    port = (server.address() as AddressInfo).port;
  });

  afterEach(async () => {
    await client?.close();
    client = undefined;
    await server.close();
  });

  it('should exchange messages over TLS', async () => {
    let received: HL7Message | undefined;
    server.use(req => {
      received = req.message;
    });
    client = Hl7Client.createTlsClient({ host: 'localhost', port, ca: cert });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
    const ack = await client.sendMessageWaitAck(msg);
    expect(ack.messageType).toEqual('ACK^R01');
    expect(received!.getSegment('PID')!.field(5).toHL7String()).toEqual(
      'Şahin^Gül',
    );
  });

  it('should refuse a server it cannot verify', async () => {
    /* No ca: the self-signed certificate is not trusted */
    client = Hl7Client.createTlsClient({ host: 'localhost', port });
    client.on('error', () => undefined);
    await expect(client.connect()).rejects.toThrow(/self[- ]signed/i);
  });
});
