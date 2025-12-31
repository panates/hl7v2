import { HL7Message } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

async function main() {
  const client = Hl7Client.createClient({
    host: 'localhost',
    port: 2575,
    reconnect: {},
  });
  client.on('message', message => {
    console.log('Received message: \n' + message.toHL7String());
  });
  client.on('connect', () => {
    console.log('Connected');
    const msj = HL7Message.parse(
      'MSH|^~\\&|SENDER|RECEIVER|20080305000000||ADT^A01|12345|P|2.5',
    );
    client.sendMessage(msj);
  });
  client.on('close', () => console.log('Disconnected'));
  client.on('reconnecting', () => console.log('Reconnecting'));
  client.on('reconnect', () => console.log('Reconnect'));
  await client.connect();
}

main().catch(console.error);
