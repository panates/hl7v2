/*
 * MLLP over TLS: the same server and client, on an encrypted connection.
 * Both run here, in one process.
 *
 * certs/ holds a self-signed certificate for localhost, for this example
 * only. Make your own with:
 *
 *   openssl req -x509 -newkey rsa:2048 -nodes -days 365 \
 *     -keyout localhost.key -out localhost.crt -subj /CN=localhost
 */
import { readFileSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';

const certs = new URL('../certs/', import.meta.url);
const key = readFileSync(new URL('localhost.key', certs));
const cert = readFileSync(new URL('localhost.crt', certs));

/* The server: node's tls.createServer() options, then HL7Server's own */
const server = HL7Server.createTlsServer(
  { key, cert },
  { applicationName: 'TLS-SERVER' },
);
server.use(req => {
  console.log('Server received:', req.message.messageType, 'over TLS');
});
await server.listen(0); // a free port
const { port } = server.address() as AddressInfo;
console.log(`Listening on ${port} (TLS)`);

const message = new HL7Message('2.5');
message.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');
message.set('PID-3', '123456').set('PID-5-1', 'Yılmaz');

/*
 * The client: node's tls.connect() options. A self-signed certificate is
 * trusted by giving it as the CA - never by turning verification off
 * (rejectUnauthorized: false), which accepts any server at all.
 */
const client = Hl7Client.createTlsClient({ host: 'localhost', port, ca: cert });
const ack = await client.sendMessageWaitAck(message);
console.log('Client received:', ack.messageType, ack.get('MSA-1'));
await client.close();

/* A client that does not trust the certificate cannot connect */
const untrusting = Hl7Client.createTlsClient({ host: 'localhost', port });
untrusting.on('error', () => undefined);
try {
  await untrusting.connect();
} catch (e) {
  /* Node's text varies by version; the reason is the same */
  const selfSigned = /self[- ]signed/i.test((e as Error).message);
  console.log(
    'Without the CA: refused',
    selfSigned ? '(self-signed certificate not trusted)' : `(${e})`,
  );
}
await untrusting.close();

await server.close();
