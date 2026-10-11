# hl7v2-net

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## About

HL7 v2.x MLLP server and client for Node.js. This package provides a high-level API for building HL7 servers and clients using TCP or TLS.

## Installation

```bash
$ npm install hl7v2-net --save
```

## Usage Example

### Server Example

```typescript
import { HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer();

// Middleware to handle incoming messages
server.use(async (req, res) => {
  console.log('Received message:', req.message.toHL7String());
  // res.message is already initialized with an ACK
  // You can modify it or just let the server send it automatically
});

server.listen(12345, () => {
  console.log('HL7 Server listening on port 12345');
});
```

### Client Example

```typescript
import { Hl7Client } from 'hl7v2-net';
import { HL7Message } from 'hl7v2';

const client = Hl7Client.createClient({ host: 'localhost', port: 12345 });

async function send() {
  await client.connect();
  
  const msg = new HL7Message();
  msg.header.field(9).setValue('ORU^R01');
  msg.addSegment('PID').field(5).setValue('DOE^JOHN');
  
  const response = await client.sendMessageWaitAck(msg);
  console.log('Received ACK:', response.toHL7String());
  
  await client.close();
}

send().catch(console.error);
```

## API Reference

### HL7Server

The `HL7Server` class is used to create an HL7 MLLP server.

#### Methods

##### .createServer()

Creates a new `HL7Server` instance for TCP connections.
`static createServer(listenerOptions?: net.ListenOptions, options?: HL7Server.Options): HL7Server`
example

```typescript
const server = HL7Server.createServer();
```

##### .createTlsServer()

Creates a new `HL7Server` instance for TLS connections.
`static createTlsServer(listenerOptions?: tls.TlsOptions, options?: HL7Server.Options): HL7Server`
example

```typescript
const server = HL7Server.createTlsServer({
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
});
```

##### .listen()

Starts the server listening for connections.
`listen(port?: number, hostname?: string, backlog?: number): Promise<void>`
example

```typescript
await server.listen(12345);
```

##### .close()

Stops the server from accepting new connections and closes existing ones.
`close(waitRunningHandlers?: number): Promise<void>`
example

```typescript
await server.close(5000); // Wait up to 5s for running handlers
```

##### .use()

Adds a middleware handler or another router to the server.
Handlers run in ascending `priority` order (default `0`). A message no handler answers is acknowledged with `AA`, or with `AE` when a handler throws.
Acknowledgments (`ACK`) are never routed or answered: HL7 does not acknowledge an acknowledgment.
Given a filter first, the handler (or router) runs only for the messages it matches:

- `'ADT^A01'` - message type and trigger event; `*` matches any part, so `'ADT^*'` (or just `'ADT'`) is every ADT message, `'*'` every message;
- `'ADT_A01'` - a message structure: every event using it (A01, A04, A08 ...);
- a list of these, or a function `(req) => boolean`.

```typescript
server.use('ADT^A01', (req, res) => admit(req.message));
server.use(['ORU^R01', 'ORU^R30'], (req, res) => storeResults(req.message));
server.use('ADT', adtRouter); // a whole router, for every ADT message
```
`use(handler: HL7Middleware | HL7Router, priority?: number): void`
example

```typescript
server.use((req, res, next) => {
  // Do something
  next();
});
```

##### .onError()

Adds an error middleware handler or another router to the server.
`onError(handler: HL7ErrorMiddleware | HL7Router, priority?: number): void`
example

```typescript
server.onError((err, req, res, next) => {
  console.error(err);
  res.failed(err);
  next();
});
```

---

### Hl7Client

The `Hl7Client` class is used to create an HL7 MLLP client.

#### Properties

- `connected: boolean`: Whether the client is currently connected.
- `readyState: string`: The state of the underlying socket.

#### Methods

##### .createClient()

Creates a new `Hl7Client` instance for TCP connections.
`static createClient(options: Hl7Client.NetConnectOptions): Hl7Client`
example

```typescript
const client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
```

##### .createTlsClient()

Creates a new `Hl7Client` instance for TLS connections.
`static createTlsClient(options: Hl7Client.TlsConnectOptions): Hl7Client`
example

```typescript
const client = Hl7Client.createTlsClient({ host: 'localhost', port: 12345, rejectUnauthorized: false });
```

##### .connect()

Connects to the server.
`connect(): Promise<void>`
example

```typescript
await client.connect();
```

##### .close()

Closes the connection.
`close(): Promise<void>`
example

```typescript
await client.close();
```

##### .sendMessage()

Sends an HL7 message without waiting for an acknowledgment.
`sendMessage(message: HL7Message | string): Promise<void>`
example

```typescript
await client.sendMessage(msg);
```

##### .sendMessageWaitAck()

Sends an HL7 message and waits for its response: the first received message whose MSA-2 is the sent message's control ID (MSH-10), whatever its type - an `ACK`, or an application response such as `ADR^A19` for a `QRY^A19`, as HAPI HL7v2 matches it.
Rejects after `responseTimeout` (when set), or when the connection fails or closes first.
A response is not passed to the client's handlers (`use()`), and is not acknowledged.
`sendMessageWaitAck(message: HL7Message | string): Promise<HL7Message>`
example

```typescript
const ack = await client.sendMessageWaitAck(msg);
```

#### Options

- `connectTimeout?: number`: Milliseconds to wait for a connection before giving up.
- `responseTimeout?: number`: Milliseconds `sendMessageWaitAck()` waits for a response. Can be changed later with `setResponseTimeout()`.
- `keepAlive?: boolean`, `keepAliveInitialDelay?: number`: TCP keep-alive, applied to every connection.
- `maxBufferSize?: number`: The largest frame accepted; a larger one closes the connection.
- `reconnect?: ReconnectOptions`: How a lost connection is re-established.
- `validate?: boolean | { structure?: boolean; fields?: boolean }`: Validate received messages (`HL7Message.validate()`); one that fails is answered with a NAK listing its errors (one ERR each) and is not passed to the handlers. `HL7Server` takes it too.
- `defaultCharset?: string`: The character set used when MSH-18 is empty on a received message, or names one the library does not know (HL7 table 0211 value or iconv-lite encoding name). Default: UTF-8, which reads ASCII as well. `HL7Server` takes it too.

#### Acknowledgment modes

The server and the client answer as the message's MSH-15 and MSH-16 ask:

- **Original mode** (both empty): one application acknowledgment - `AA`, `AE` or `AR`.
- **Enhanced mode** (either valued, each `AL` always, `NE` never, `ER` on error only, `SU` on success only):
  - MSH-15 asks for an accept (commit) acknowledgment, sent on receipt before processing: `CA`, or `CE`/`CR` for a message that is not accepted (with `validate` on) - which is then not processed. Empty, none is sent, as HAPI HL7v2 sends none.
  - MSH-16 asks for the application acknowledgment, sent after processing. Empty, it is sent.

`sendMessageWaitAck(message, { acknowledgment })` chooses which one resolves in enhanced mode: `'accept'` (the default when MSH-15 asks for one) or `'application'` - a `CE` or `CR` resolves that too, since no application acknowledgment follows them.

#### Batches

One MLLP block may hold a batch instead of a message - `BHS ... BTS`, or a file `FHS ... FTS` (HL7 v2 chapter 2, "Batch protocol"). The server and the client take each message of a received batch in turn, as if it came alone - validated, routed to the handlers, acknowledged - and answer the batch with a batch: the same shape, sender and receiver swapped, each reply header referring to the one it answers (`BHS-12`, `FHS-12` = the received `BHS-11`, `FHS-11`). No message of a batch is acknowledged on its own.

`batchAcknowledgment` (server and client option) chooses what the reply batch carries, as the standard leaves it to the receiver: `'all'` every message's acknowledgment (the default), `'errors'` only those of messages not accepted - an empty batch when all were - or `'none'`, no reply batch.

```typescript
const batch = HL7Batch.create();
batch.messages.push(msg1, msg2, msg3);
const reply = await client.sendBatchWaitAck(batch); // HL7BatchFile
for (const ack of reply.messages) console.log(ack.get('MSA-2'), ack.get('MSA-1'));
```

`sendBatch()` sends without waiting; `sendBatchWaitAck()` resolves with the reply batch, matched by its reference control ID. A header without a control ID is given one. A batch file (`HL7BatchFile`) is sent the same way. `server.on('batch', (file, socket) => ...)` and `client.on('batch', file => ...)` report a received batch.

#### Warnings

A message whose MSH-18 names an unknown character set (`ANSI`, for one) is still received and sent, with the default character set, and `Hl7Client`, `HL7Server` and `HL7Socket` emit a `warning` - as HAPI HL7v2 logs one:

```typescript
server.on('warning', (warning, socket) => {
  // { code: 'UNKNOWN_CHARSET', charset: 'ANSI', encoding: 'utf-8', direction: 'receive', message, hl7Message }
  console.warn(warning.message);
});
```

---

### HL7Socket

Represents an HL7 MLLP socket connection.

#### Properties

- `connected: boolean`: Whether the socket is connected.
- `remoteAddress: string`: The remote IP address.
- `remotePort: number`: The remote port.

#### Methods

##### .sendMessage()

Sends an HL7 message.
`sendMessage(message: HL7Message | string): Promise<void>`
example

```typescript
await socket.sendMessage(msg);
```

##### .sendMessageWaitAck()

Sends an HL7 message and waits for its response, matched by MSA-2 (see `Hl7Client.sendMessageWaitAck()`).
`sendMessageWaitAck(message: HL7Message | string): Promise<HL7Message>`
example

```typescript
const ack = await socket.sendMessageWaitAck(msg);
```

---

### HL7Router

Provides routing capabilities for HL7 messages based on middleware.

#### Methods

##### .use()

Adds a middleware or another router to this router.
`use(handler: HL7Middleware | HL7Router, priority?: number): void`
example

```typescript
const router = new HL7Router();
router.use((req, res) => { ... });
server.use(router);
```

##### .onError()

Adds an error middleware or another router to this router.
`onError(handler: HL7ErrorMiddleware | HL7Router, priority?: number): void`
example

```typescript
const router = new HL7Router();
router.onError((err, req, res, next) => { ... });
server.use(router);
```

---

### HL7Request

Represents an incoming HL7 request.

#### Properties

- `socket: HL7Socket`: The socket the request was received on.
- `message: HL7Message`: The received HL7 message.
- `batch?: HL7BatchReplies`: The replies of the batch the message came in, when it came in one (see [Batches](#batches)).

#### Methods

##### .send()

Sends an answer to the request: on the socket, or - for a message that came in a batch - into the reply batch. A handler answering a request itself, with something other than `res.message` (an `ADR^A19` for a `QRY^A19`, say), uses it rather than `socket.sendMessage()`, which would send the answer on its own, outside the batch.
`send(message: HL7Message): void`
example

```typescript
server.use('QRY^A19', (req, res) => {
  const response = buildAdr(req.message); // an ADR^A19 whose MSA-2 is the query's MSH-10
  req.send(response);
});
```

A response sent this way, answering the request's control ID (MSA-2), finishes the request: no ACK follows it.

---

### HL7Response

Represents the response to an HL7 request.

#### Properties

- `request: HL7Request`: The corresponding request.
- `message: HL7Message`: The HL7 message to be sent as a response (defaults to an ACK).
- `finished: boolean`: Whether the request has been answered - by this response's message, or by any message whose MSA-2 is the request's control ID.

#### Methods

##### .failed()

Marks the request as failed and sets the response to a NAK message.
`failed(error: Error): void`
example

```typescript
res.failed(new Error('Processing failed'));
```

---

## Node Compatibility

- node >= 20.x

### License

hl7v2-net is available under [MIT](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2-net.svg
[npm-url]: https://npmjs.org/package/hl7v2-net
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg
[coveralls-url]: https://coveralls.io/r/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2-net.svg
[downloads-url]: https://npmjs.org/package/hl7v2-net
