/*
 * An MLLP server. Handlers are routed by message type; every message is
 * answered with an acknowledgment - AA when the handlers succeed, AE when
 * one fails, AR for what the server does not take - unless MSH-15/16 ask
 * for none (enhanced acknowledgment mode).
 *
 *   npm start                  listens on 2575 (HL7_PORT to change it)
 *   cd ../mllp-client && npm start
 */
import { HL7Error } from 'hl7v2';
import { HL7Server } from 'hl7v2-net';

const port = Number(process.env.HL7_PORT || 2575);

const server = HL7Server.createServer(undefined, {
  /* MSH-3/MSH-4 of the acknowledgments */
  applicationName: 'EXAMPLE-SERVER',
  facilityName: 'GOOD HEALTH HOSPITAL',
  /* A message that fails validation gets a NAK listing its errors, and is
   * not passed to the handlers */
  validate: true,
});

/* 1. What the server takes; anything else is rejected (AR, error 200) */
const SUPPORTED = ['ADT', 'ORU'];
server.use(
  req => !SUPPORTED.includes(req.message.messageType.split('^')[0]),
  req => {
    throw new HL7Error(`${req.message.messageType} is not supported here`, {
      hl7ErrorCode: 200,
    });
  },
);

/* 2. Handlers by message type and trigger event: 'ADT^A01', 'ADT' ... */
server.use('ADT^A01', req => {
  const pid = req.message.getSegmentObject('PID');
  console.log(
    `Admitted ${pid?.PatientIdentifierList?.[0]?.IDNumber}:`,
    req.message.get('PID-5-2'),
    req.message.get('PID-5-1'),
  );
});

server.use('ORU^R01', (req, res) => {
  const results = req.message.segments.filter(s => s.segmentType === 'OBX');
  if (!results.length) {
    /* An application error: AE, the reason in MSA-3 and ERR */
    res.failed(
      new HL7Error('No results in the message', { hl7ErrorCode: 207 }),
    );
    return;
  }
  console.log(
    `Stored ${results.length} results of ${req.message.get('PID-3')}`,
  );
});

/* A handler for every message, after those above (priority 10) */
server.use(async (req, res) => {
  const ack = res.message.get('MSA-1');
  console.log(
    `  ${req.message.messageType} ${req.message.controlId} -> ${ack}`,
  );
}, 10);

/* 3. Errors thrown by handlers: logged; the NAK is sent for them */
server.onError((error, req) => {
  console.error(`  ${req.message.controlId} failed:`, error.message);
});

server.on('connection', socket =>
  console.log(`Connected: ${socket.remoteAddress}:${socket.remotePort}`),
);
server.on('warning', warning => console.warn('Warning:', warning.message));

await server.listen(port);
console.log(`Listening on ${port}`);

/* Stop on Ctrl+C, giving running handlers up to 5 seconds */
process.once('SIGINT', async () => {
  await server.close(5000);
  console.log('Stopped');
});
