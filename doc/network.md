# Network

`hl7v2-net` sends and receives HL7 messages over **MLLP** - the Minimal Lower Layer Protocol, HL7's framing over TCP: each message is sent as `VT` (0x0B), the message, `FS CR` (0x1C 0x0D). It has a server, a client, and a router that passes received messages to handlers, over TCP or TLS.

## A server

```typescript
import { HL7Error } from 'hl7v2';
import { HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer();

server.use('ADT^A01', req => {
  const pid = req.message.getSegmentObject('PID');
  admit(pid);
}); // returns: the message is acknowledged AA

server.use('ORU^R01', async req => {
  await storeResults(req.message);
}); // throws: AE, the error's text in MSA-3 and ERR

await server.listen(2575);
```

Each received message goes through the handlers whose filter matches, in order. When they are done the message is answered: `AA`, or - when a handler threw or called `res.failed()` - a NAK made from the error. A message no handler takes is acknowledged `AA` too. See [Acknowledgments](acknowledgments.md).

`listen(port, host?)` resolves once the server listens (port `0` takes a free one; `server.address()` tells which). `close(wait?)` stops it: the open connections are closed, after the running handlers finish, waiting up to `wait` ms.

## Handlers

### Filters

```typescript
server.use('ADT^A01', handler); // type and trigger event
server.use('ADT^*', handler); // every ADT - or just 'ADT'
server.use('ADT_A01', handler); // a structure: every event using it (A01, A04, A08 ...)
server.use(['ORU^R01', 'ORU^R30'], handler); // any of a list
server.use(req => req.message.get('MSH-5') === 'LAB', handler); // a function of the request
server.use(handler); // every message
```

### Request and response

A handler gets the request and the response:

```typescript
server.use((req, res) => {
  req.message; // the HL7Message received
  req.socket; // the connection it came on (remoteAddress, remotePort ...)
  res.message; // the answer to be sent: an ACK (AA), until changed
  res.failed(new HL7Error('Not found', { hl7ErrorCode: 204 })); // answer with a NAK
});
```

A handler of three arguments takes `next` and must call it - `next(error)` to fail - to go on; one of two goes on when it returns (or its promise resolves).

```typescript
server.use((req, res, next) => {
  if (!authorized(req)) return next(new HL7Error('Not allowed', { hl7ErrorCode: 207 }));
  next();
});
```

### Priorities and routers

Handlers run in ascending priority (default 0), then in the order added. A router groups handlers, and can be filtered as one:

```typescript
import { HL7Router } from 'hl7v2-net';

const adt = new HL7Router();
adt.use('ADT^A01', admit);
adt.use('ADT^A03', discharge);
server.use('ADT', adt);

server.use(auditLog, 10); // after the others
```

### Errors

An error thrown or passed to `next()` goes through the error handlers, then the message is answered with a NAK from it, and the server emits `error`:

```typescript
server.onError((error, req, res) => {
  log.error(error, req.message.controlId);
});
server.on('error', (error, socket) => log.error(error));
```

### Answering from a handler

`res.message` is what is sent; replace or change it to answer otherwise. To send an answer of its own - an application response, an `ADR^A19` for a `QRY^A19` - a handler uses `req.send()`:

```typescript
server.use('QRY^A19', req => {
  req.send(buildAdr(req.message)); // its MSA-2 the query's MSH-10
});
```

An answer whose MSA-2 is the request's control ID finishes the request: no ACK follows it. `req.send()` sends on the connection, or - for a message that came in a batch - into the reply batch; `socket.sendMessage()` would always send on its own.

### Time limit

The handlers get `responseTimeout` ms (server option, default 30000) for a message. A message not answered by then is answered `AE` ("Response timeout"); a handler that already answered is not interrupted.

## A client

```typescript
import { HL7Message } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

const client = Hl7Client.createClient({
  host: 'lab.example.org',
  port: 2575,
  connectTimeout: 5000,
  responseTimeout: 10000,
});

await client.connect();
const ack = await client.sendMessageWaitAck(message);
if (ack.get('MSA-1') !== 'AA') console.error(ack.get('MSA-3'));
await client.close();
```

- `sendMessageWaitAck()` resolves with the first message received whose MSA-2 is the sent message's control ID - an ACK, or an application response (`ADR^A19` for a `QRY^A19`). It rejects after `responseTimeout`, or when the connection closes first. The response is not passed to the client's handlers.
- `sendMessage()` sends without waiting.
- Both connect first when not connected.

### Reconnecting

A lost connection is re-established, waiting longer each time:

```typescript
const client = Hl7Client.createClient({
  host, port,
  reconnect: { strategy: 'exponential', initialDelay: 500, maxDelay: 10000, failAfter: 20 },
});
client.on('reconnecting', (attempt, delay) => log.warn(`reconnecting in ${delay} ms`));
client.on('reconnect', () => log.info('reconnected'));
client.on('disconnect', error => log.warn('connection lost', error));
```

A failed `connect()` rejects, and the client keeps trying in the background until `close()` - or until `failAfter` attempts.

### Receiving on a client

A client takes messages the other side sends on the same connection, as a server does: `client.use()`, `client.onError()`, and the same acknowledgments. Acknowledgments and responses to its own requests are not routed.

## Acknowledgments

The server and the client answer as each message's MSH-15 and MSH-16 ask:

- **Original mode** (both empty): one application acknowledgment - `AA`, `AE` or `AR`.
- **Enhanced mode** (either valued: `AL` always, `NE` never, `ER` on error only, `SU` on success only):
  - MSH-15 asks for an **accept acknowledgment**, sent on receipt, before processing: `CA`, or `CE`/`CR` for a message not accepted (with `validate` on) - which is then not processed. Empty, none is sent.
  - MSH-16 asks for the **application acknowledgment**, sent after processing. Empty, it is sent.

### Accepting after processing

An accept acknowledgment tells the sender the message is in safe storage: a sender getting `CA` does not send it again. When it is your handlers that store the message - writing it to a database, passing it to another system - send the `CA` once they have, with `acceptAcknowledgment: 'processed'` (server or client option):

```typescript
const server = HL7Server.createServer(undefined, { acceptAcknowledgment: 'processed' });
server.use('ORU^R01', async req => {
  await store(req.message); // throws when it cannot
});
```

- The handlers run first. `CA` follows when they succeed; `CE` (`CR` for a rejection) when one throws, calls `res.failed()`, or does not finish within `responseTimeout` - so the sender sends the message again.
- The application acknowledgment MSH-16 asks for, if any, follows the accept one, as before.
- A handler may send the `CA` earlier, once the message is stored, with `req.sendAccept()`.
- MSH-15 still decides whether it is sent (`ER`: only `CE`/`CR`; `SU`: only `CA`). A message without MSH-15 is answered as before.

The default, `'receipt'`, sends the accept acknowledgment before the handlers run.

Sending in enhanced mode, choose which acknowledgment to wait for:

```typescript
msg.header.field(MSHSegment.AcceptAcknowledgmentType).setValue('AL');
msg.header.field(MSHSegment.ApplicationAcknowledgmentType).setValue('AL');

await client.sendMessageWaitAck(msg); // the accept one (CA) - the default when MSH-15 asks for it
await client.sendMessageWaitAck(msg, { acknowledgment: 'application' }); // AA / AE / AR
```

A `CE` or `CR` resolves a wait for the application acknowledgment too, since none will follow. `NE` and `NE` together are refused at once, rather than left to time out.

An acknowledgment is never acknowledged, and never routed - two endpoints acknowledging each other's ACKs would never stop.

The server's acknowledgments carry the received MSH-5/6 as their MSH-3/4; `applicationName` and `facilityName` (server options) set them instead.

## Validation

With `validate: true` (server or client option), each received message is checked against its version (see [Validation](validation.md)). One that fails is answered with a NAK listing every error - one ERR each - and is not passed to the handlers. An options object chooses the checks: `validate: { structure: false }`.

## Batches

A block holding a batch (`BHS ... BTS`, `FHS ... FTS`) is processed message by message and answered with a batch; `sendBatch()` and `sendBatchWaitAck()` send one. See [Batches](batches.md#batches-over-mllp).

## TLS

```typescript
const server = HL7Server.createTlsServer({ key, cert });
const client = Hl7Client.createTlsClient({ host: 'localhost', port, ca: cert });
```

The first argument of `createTlsServer()` is `tls.createServer()`'s options; a client's are `tls.connect()`'s. The client is connected once the handshake is done and the server verified: `connect()` rejects a server it does not trust. Trust a self-signed certificate by giving it as `ca` - not by turning verification off. See the [tls example](../examples/tls).

## Character sets

Messages are sent in the character set MSH-18 names, and received ones decoded by theirs (see [Character sets and escaping](encoding.md)). A message to send with an empty MSH-18 (2.3 and later) gets `UNICODE UTF-8`. A value the library does not know - `ANSI` - is read and written with `defaultCharset` (UTF-8 unless given), and reported:

```typescript
server.on('warning', (warning, socket) => {
  // { code: 'UNKNOWN_CHARSET', charset: 'ANSI', encoding: 'utf-8', direction: 'receive', message, hl7Message }
  log.warn(warning.message);
});
```

## Limits and timeouts

| Option                     | Of                | Meaning                                                                            |
| -------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| `responseTimeout`          | server            | ms the handlers get for a message (default 30000); then `AE`                       |
| `responseTimeout`          | client            | ms `sendMessageWaitAck()` / `sendBatchWaitAck()` wait; without it, no limit       |
| `connectTimeout`           | client            | ms a connection attempt may take                                                   |
| `maxBufferPerSocket`       | server            | the largest frame a connection accepts; a larger one is dropped and the connection closed |
| `maxBufferSize`            | client            | the same, for the client                                                           |
| `keepAlive`, `keepAliveInitialDelay` | client  | TCP keep-alive                                                                     |

## Events

| Event                         | Server | Client | When                                              |
| ----------------------------- | :----: | :----: | ------------------------------------------------- |
| `listening`                   |   ✓    |        | the server listens                                |
| `connection` (socket)         |   ✓    |        | a client connected                                |
| `disconnect`                  |   ✓    |   ✓    | a connection closed / was lost                    |
| `connect`, `ready`            |        |   ✓    | connected; ready (after the TLS handshake)        |
| `reconnecting`, `reconnect`   |        |   ✓    | trying again; connected again                     |
| `message`                     |   ✓    |   ✓    | a message received                                |
| `batch`                       |   ✓    |   ✓    | a batch received                                  |
| `send`, `sendBatch`           |   ✓    |   ✓    | a message, a batch sent                           |
| `data`, `write`               |   ✓    |   ✓    | a frame received, bytes written                   |
| `warning`                     |   ✓    |   ✓    | something worked around: an unknown character set |
| `error`                       |   ✓    |   ✓    | an error - of a connection, a handler, a frame    |
| `close`                       |   ✓    |   ✓    | the server closed / the connection closed         |

Server events pass the connection (`HL7Socket`) as their last argument.

## Reference

[hl7v2-net API](api/net.md) - every class, option and event.
