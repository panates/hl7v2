import { HL7Server } from 'hl7v2-net';

async function main() {
  const server = HL7Server.createServer();
  server.on('message', message => {
    console.log('Received message:\n' + message.toHL7String());
  });
  await server.listen(2575);
  console.log('Listening on port 2575');
}

main().catch(console.error);
