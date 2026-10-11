# hl7v2-net - API reference

`hl7v2-net` is an HL7 v2 MLLP server and client for Node.js, over TCP or TLS. A server (`HL7Server`) and a client (`Hl7Client`) both receive messages and pass them to handlers added with `use()`, as an Express application does; they answer each message with the acknowledgment its MSH-15 and MSH-16 ask for, take batches in one MLLP block and answer them with a reply batch, and send messages and wait for their responses. This page lists every export of the package. The guide pages explain the concepts: [Network](../network.md), [Acknowledgments](../acknowledgments.md), [Batches](../batches.md), [Validation](../validation.md) and [Character sets](../encoding.md). Messages, batches and errors (`HL7Message`, `HL7Batch`, `HL7BatchFile`, `HL7Error`) come from the [`hl7v2`](hl7v2.md) package.

```typescript
import { HL7Server, Hl7Client } from 'hl7v2-net';
```

## Contents

- [HL7Server](#hl7server)
- [Hl7Client](#hl7client)
- [HL7Socket](#hl7socket)
- [HL7Router](#hl7router)
- [HL7Request](#hl7request)
- [HL7Response](#hl7response)
- [Handler types](#handler-types)
  - [HL7Middleware](#hl7middleware)
  - [HL7ErrorMiddleware](#hl7errormiddleware)
  - [NextFunction](#nextfunction)
  - [HL7MessageFilter](#hl7messagefilter)
- [HL7ExchangeError](#hl7exchangeerror)
- [Acknowledgment helpers](#acknowledgment-helpers)
- [Batch helpers](#batch-helpers)
- [How messages are processed](#how-messages-are-processed)

---

## HL7Server

An MLLP server over TCP or TLS. It wraps a `net.Server` or `tls.Server`, wraps each accepted connection in an [`HL7Socket`](#hl7socket), and passes each received message to its handlers through an internal [`HL7Router`](#hl7router). See [How messages are processed](#how-messages-are-processed) for what happens to a received message, and [Network](../network.md) for a guide.

`HL7Server` extends `AsyncEventEmitter` (from `node-events-async`). Its constructor is protected: create a server with `createServer()` or `createTlsServer()`.

```typescript
import { HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer(undefined, { validate: true });
server.use('ADT^A01', req => {
  console.log('Admit', req.message.get('PID-5-1'));
});
await server.listen(2575);
```

### Properties

- `listening: boolean` - Whether the server is listening for connections (read-only).
- `maxConnections: number` - The `maxConnections` of the underlying Node.js server: connections are rejected once the count reaches it.
- `dropMaxConnection: boolean` - The `dropMaxConnection` of the underlying Node.js server (Node.js 22.12 and 23.1 or later): begin closing connections once `maxConnections` is reached. Effective only in cluster mode.
- `connections: number` - The number of connections open now (read-only).
- `applicationName?: string` - See [Options](#hl7server-options). Read when an acknowledgment is sent.
- `facilityName?: string` - See [Options](#hl7server-options). Read when an acknowledgment is sent.
- `validate?: boolean | HL7ValidateOptions` - See [Options](#hl7server-options). Read when a message arrives, so a change applies to the next message.
- `acceptAcknowledgment?: HL7AcceptAcknowledgment` - See [Options](#hl7server-options). Read when a message arrives.
- `batchAcknowledgment?: HL7BatchAcknowledgment` - See [Options](#hl7server-options). Read when a batch has been processed.
- `responseTimeout?: number` - See [Options](#hl7server-options). Read when a message arrives.
- `parseStrict?: boolean` - See [Options](#hl7server-options). Applies to connections accepted after the change.
- `defaultCharset?: string` - See [Options](#hl7server-options). Applies to connections accepted after the change.
- `maxBufferPerSocket?: number` - See [Options](#hl7server-options). Applies to connections accepted after the change.

### Methods

#### .createServer()

`static createServer(listenerOptions?: net.ServerOpts, options?: HL7Server.Options): HL7Server`

Creates a server for plain TCP connections. `listenerOptions` goes to `net.createServer()`; `options` are the server's own (see [Options](#hl7server-options)).

```typescript
const server = HL7Server.createServer(undefined, {
  responseTimeout: 10000,
  batchAcknowledgment: 'errors',
});
```

#### .createTlsServer()

`static createTlsServer(listenerOptions: tls.TlsOptions, options?: HL7Server.Options): HL7Server`

Creates a server for TLS connections. `listenerOptions` goes to `tls.createServer()` and carries the key and certificate. A connection is taken once its TLS handshake is done (the `secureConnection` event of `tls.Server`); a failed handshake is reported as an `error` event with no socket.

```typescript
import { readFileSync } from 'node:fs';

const server = HL7Server.createTlsServer({
  key: readFileSync('server-key.pem'),
  cert: readFileSync('server-cert.pem'),
});
```

#### .listen()

```
listen(port?: number, hostname?: string, backlog?: number): Promise<void>
listen(port?: number, hostname?: string): Promise<void>
listen(port?: number, backlog?: number): Promise<void>
listen(port?: number): Promise<void>
listen(path: string, backlog?: number): Promise<void>
listen(path: string): Promise<void>
listen(options: net.ListenOptions): Promise<void>
```

Starts listening, with the arguments of `net.Server.listen()`. The promise resolves on the `listening` event and rejects when the server emits `error` first (a port in use, say). Port `0` asks the operating system for a free port; `address()` tells which.

```typescript
await server.listen(0);
const { port } = server.address() as AddressInfo;
```

#### .close()

`close(waitRunningHandlers?: number): Promise<void>`

Stops the server: it accepts no new connections, and closes the open ones once the running handlers finish. With `waitRunningHandlers` (milliseconds), it waits up to that long for messages still being processed (without it, it does not wait), then closes every connection (each one waiting up to the same time for its own `sendMessageWaitAck()` / `sendBatchWaitAck()` calls in progress, see [`HL7Socket.close()`](#hl7socket-close)), then closes the underlying server. Resolves at once when the server is not listening.

```typescript
await server.close(5000); // wait up to 5 s for running handlers
```

#### .use()

```
use(handler: HL7Middleware | HL7Router, priority?: number): void
use(filter: HL7MessageFilter, handler: HL7Middleware | HL7Router, priority?: number): void
```

Adds a handler, or a whole router, for every received message, or, given a [filter](#hl7messagefilter) first, for the messages it matches. Handlers run in ascending numeric `priority` (default `0`), and in the order they were added within one priority. See [`HL7Router.use()`](#hl7router-use).

A message no handler answers is acknowledged `AA`; a handler that throws (or passes an error to `next()`) makes it `AE`, or `AR` for an `HL7Error` with an HL7 error code 200-203. Acknowledgments and responses to this side's own requests are never routed (see [How messages are processed](#how-messages-are-processed)).

```typescript
server.use('ADT^A01', (req, res) => admit(req.message));
server.use(['ORU^R01', 'ORU^R30'], req => storeResults(req.message));
server.use('ADT', adtRouter); // a whole router, for every ADT message
server.use((req, res, next) => {
  audit(req.message);
  next();
}, -10); // before the handlers of priority 0
```

#### .beforeResponse()

`beforeResponse(hook: HL7ResponseHook): void`

Adds a hook called with every answer the server sends to a request, before it goes out - to change it, replace it or send nothing. A hook that throws is reported as an `error` event, and the answer is sent without it. See [`HL7Router.beforeResponse()`](#hl7router-beforeresponse).

```typescript
server.beforeResponse((ack, { kind }) => {
  if (kind === 'accept' && ack.get('MSA-1') === 'CA') ack.set('MSA-1', 'AA');
});
```

#### .onError()

`onError(handler: HL7ErrorMiddleware | HL7Router, priority = 0): void`

Adds an error handler, or the error handlers of a router. Error handlers run, in ascending `priority`, when a handler throws or passes an error to `next()`. They see the error but do not clear it: once they have run, the request is answered with a NAK for the error (unless a handler answered it already) and the server emits `error`. See [`HL7Router.onError()`](#hl7router-onerror).

```typescript
server.onError((error, req) => {
  console.error(`${req.message.controlId} failed:`, error.message);
});
```

#### .address()

`address(): AddressInfo | string | null`

The bound address, as `net.Server.address()` returns it: `{ port, family, address }` for an IP socket, the name for a pipe or Unix domain socket, `null` before listening or after closing.

#### .getConnections()

`getConnections(): Promise<number>`

The number of open connections, from `net.Server.getConnections()`. Works when sockets were sent to forks.

#### .ref() / .unref()

`ref(): this`, `unref(): this`

As `net.Server.ref()` / `unref()`: `unref()` lets the program exit when this server is the only thing left running; `ref()` undoes it. Both return the server.

<a id="hl7server-options"></a>

### Options

`HL7Server.Options`, the second argument of `createServer()` and `createTlsServer()`:

| Option                | Type                              | Default    | Description                                                                                                                                                                                                                                                                |
| --------------------- | --------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validate`            | `boolean \| HL7ValidateOptions`   | `false`    | Validate each received message against its version's dictionary (`HL7Message.validate()`). A message with errors of severity `E` is answered with a NAK listing them (one ERR each) and is not passed to the handlers. An options object chooses the checks (`structure`, `fields`, `tables`). See [Validation](../validation.md). |
| `acceptAcknowledgment` | `HL7AcceptAcknowledgment`        | `'receipt'` | When the accept acknowledgment MSH-15 asks for is sent: `'receipt'`, before the handlers run; `'processed'`, after them - `CA` when they succeed, `CE` (`CR` for a rejection) when one throws, fails the response or times out. See [`HL7AcceptAcknowledgment`](#hl7acceptacknowledgment). |
| `batchAcknowledgment` | `HL7BatchAcknowledgment`          | `'all'`    | What the reply to a received batch carries: `'all'`, `'errors'` or `'none'`. See [Batch helpers](#hl7batchacknowledgment).                                                                                                                                                |
| `responseTimeout`     | `number`                          | `30000`    | Milliseconds the handlers get for a message. When they have not finished by then and the message is not answered, it is answered with `AE` (an `HL7ExchangeError` "Response timeout"); a handler that already answered is not interrupted. This is not a timeout for `sendMessageWaitAck()` on the server's sockets. |
| `maxBufferPerSocket`  | `number`                          | no limit   | The largest frame, in bytes, a connection accepts. A larger frame is dropped - not parsed or routed - and that connection is closed with an `error` ("Max buffer size exceeded").                                                                                                                                     |
| `parseStrict`         | `boolean`                         | `false`    | Parse received messages and batches in strict mode (the `strict` option of `HL7Message.parse()`).                                                                                                                                                                          |
| `defaultCharset`      | `string`                          | UTF-8      | The character set used when MSH-18 is empty on a received message, or names one this library does not know: an HL7 table 0211 value or an iconv-lite encoding name. UTF-8 reads ASCII as well. See [Character sets](../encoding.md).                                       |
| `applicationName`     | `string`                          | received MSH-5 | MSH-3 (sending application) of every acknowledgment the server sends - accept acknowledgments, `res.message`, NAKs and any message of type `ACK` sent with `req.send()` - as an HD string (`APP^1.2.3^ISO`). Without it, MSH-3 is the received message's MSH-5. Not applied to the NAK the socket sends for a frame it cannot parse. |
| `facilityName`        | `string`                          | received MSH-6 | MSH-4 (sending facility) of the acknowledgments the server sends, as `applicationName` is MSH-3. Without it, MSH-4 is the received message's MSH-6. |

### Events

`HL7Server.Events`:

| Event        | Arguments                                                | When                                                                                                                       |
| ------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `listening`  | -                                                        | The server is listening.                                                                                                   |
| `close`      | -                                                        | The server closed (the underlying server's `close` event), once per close.                                                 |
| `connection` | `socket: HL7Socket`                                      | A connection was accepted (for TLS, after the handshake).                                                                  |
| `disconnect` | `socket: HL7Socket`                                      | A connection closed.                                                                                                       |
| `drop`       | `data?: net.DropArgument`                                | A connection was dropped because `maxConnections` was reached.                                                             |
| `error`      | `error: Error, socket: HL7Socket \| undefined`           | A server, TLS handshake, connection, parse or handler error. `socket` is `undefined` for errors of the server itself.      |
| `message`    | `message: HL7Message, socket: HL7Socket`                 | A message was received, before it is processed. Emitted for every message, acknowledgments and responses included.         |
| `batch`      | `file: HL7BatchFile, socket: HL7Socket`                  | A batch was received (one block starting with FHS or BHS), before it is processed.                                         |
| `send`       | `message: HL7Message, socket: HL7Socket`                 | A message was written to a connection.                                                                                     |
| `sendBatch`  | `file: HL7BatchFile, socket: HL7Socket`                  | A batch was written to a connection.                                                                                       |
| `data`       | `buffer: Buffer, socket: HL7Socket`                      | A complete MLLP frame was received, start and end bytes included.                                                          |
| `write`      | `buffer: Buffer, socket: HL7Socket`                      | An MLLP frame was written.                                                                                                 |
| `warning`    | `warning: HL7Socket.Warning, socket: HL7Socket`          | A connection worked around a problem; see [HL7Socket.Warning](#hl7socket-warning).                                         |

```typescript
server.on('connection', socket =>
  console.log(`Connected: ${socket.remoteAddress}:${socket.remotePort}`),
);
server.on('error', (error, socket) => console.error(error.message));
```

---

## Hl7Client

An MLLP client over TCP or TLS. It connects to a server, re-establishes a lost connection (using `reconnect-core`), sends messages and batches, and, like the server, passes the messages the server sends to it to handlers added with `use()` and acknowledges them. See [Network](../network.md).

`Hl7Client` extends `AsyncEventEmitter`. Its constructor is protected: create a client with `createClient()` or `createTlsClient()`.

```typescript
import { HL7Message, MSHSegment } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

const client = Hl7Client.createClient({
  host: 'localhost',
  port: 2575,
  responseTimeout: 10000,
});
await client.connect();

const msg = new HL7Message('2.5');
msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A01^ADT_A01');
msg.set('PID-3', '123456').set('PID-5-1', 'DOE');

const ack = await client.sendMessageWaitAck(msg);
console.log(ack.get('MSA-1')); // AA
await client.close();
```

### Properties

- `connected: boolean` - Whether a connection is open.
- `closed: boolean` - Whether there is no open connection; `true` before `connect()`.
- `readyState: string` - The `readyState` of the TCP socket (`'opening'`, `'open'`, `'readOnly'`, `'writeOnly'`), or `'closed'` when there is no connection.
- `uri: string` - `host:port` from the options.
- `localAddress`, `localPort`, `localFamily` - Of the current connection; `undefined` without one.
- `remoteAddress` - Of the current connection (an IPv4-mapped IPv6 address without its `::ffff:` prefix), or the `host` option without one.
- `remotePort` - Of the current connection, or the `port` option without one.
- `remoteFamily` - Of the current connection.
- `connectTimeout: number | undefined` - The `connectTimeout` option (read-only; see `setConnectTimeout()`).
- `responseTimeout: number | undefined` - The `responseTimeout` option (read-only; see `setResponseTimeout()`).
- `maxBufferSize: number` - The `maxBufferSize` option, `0` when not set (read-only; see `setMaxBufferSize()`).

### Methods

#### .createClient()

`static createClient(options: Hl7Client.NetConnectOptions): Hl7Client`

Creates a client for plain TCP. The options are those of `net.connect()` (`host`, `port` ...) plus the client's own (see [Options](#hl7client-options)). It does not connect: call `connect()`, or send.

```typescript
const client = Hl7Client.createClient({ host: 'localhost', port: 2575 });
```

#### .createTlsClient()

`static createTlsClient(options: Hl7Client.TlsConnectOptions): Hl7Client`

Creates a client for TLS. The options are those of `tls.connect()` (`host`, `port`, `ca`, `servername`, `rejectUnauthorized` ...) plus the client's own.

```typescript
const client = Hl7Client.createTlsClient({
  host: 'hl7.example.org',
  port: 2576,
  ca: readFileSync('ca.pem'),
});
```

#### .connect()

`connect(): Promise<void>`

Connects. Resolves on the `ready` event: for TCP once connected, for TLS once the handshake is done and the server certificate accepted. Rejects with the first `error` event (a refused connection, a refused certificate, a connect timeout). Resolves at once when already connected.

Reconnection is turned on by `connect()`: when the connection fails or is lost, the client tries again, waiting as `reconnect` sets, until `close()` (or until `reconnect.failAfter` attempts). This holds after a rejected `connect()` too: call `close()` to stop retrying.

```typescript
try {
  await client.connect();
} catch (e) {
  await client.close(); // stop the reconnection attempts
  throw e;
}
```

#### .close()

`close(waitRunningHandlers?: number): Promise<void>`

Turns reconnection off and closes the connection. With `waitRunningHandlers` (milliseconds), it first waits up to that long for `sendMessageWaitAck()` / `sendBatchWaitAck()` calls in progress (see [`HL7Socket.close()`](#hl7socket-close)).

#### .sendMessage()

`sendMessage(message: HL7Message): Promise<void>`

Sends a message without waiting for an answer, connecting first when not connected. An empty MSH-18 is set to `UNICODE UTF-8` before sending, in versions whose MSH has field 18 (2.3 and later; the message object is changed); a message is encoded in its MSH-18 character set. Rejects when the connection cannot be made or the socket is not writable.

```typescript
await client.sendMessage(msg);
```

#### .sendMessageWaitAck()

`sendMessageWaitAck(message: HL7Message, options?: HL7Socket.WaitAckOptions): Promise<HL7Message>`

Sends a message, connecting first when not connected, and resolves with its response: the first received message whose MSA-2 is the sent message's control ID (MSH-10), whatever its type - an `ACK`, or an application response such as `ADR^A19` for a `QRY^A19`. A response is not passed to the client's handlers and is not acknowledged.

Rejects after `responseTimeout` milliseconds (`"Response timeout"`) when it is set - without it, it waits indefinitely - and when the connection errors or closes first (`"Socket closed before response"`). Rejects at once when MSH-15 and MSH-16 are both `NE`, since no acknowledgment will come.

In enhanced acknowledgment mode, `options.acknowledgment` chooses which acknowledgment resolves (see [`HL7Socket.WaitAckOptions`](#hl7socket-waitackoptions) and [Acknowledgments](../acknowledgments.md)):

- `'accept'` - the accept acknowledgment (`CA`, `CE`, `CR`). The default when MSH-15 is valued and not `NE`.
- `'application'` - the application acknowledgment (`AA`, `AE`, `AR`); a `CA` before it is passed over, a `CE` or `CR` resolves it, since no application acknowledgment follows them. The default otherwise.

```typescript
msg.header.field(MSHSegment.AcceptAcknowledgmentType).setValue('AL');
msg.header.field(MSHSegment.ApplicationAcknowledgmentType).setValue('AL');
const ack = await client.sendMessageWaitAck(msg, {
  acknowledgment: 'application',
});
console.log(ack.get('MSA-1')); // AA, not the CA that came first
```

#### .sendBatch()

`sendBatch(batch: HL7BatchFile | HL7Batch): Promise<HL7BatchFile>`

Sends a batch file (`FHS ... FTS`) or a batch (`BHS ... BTS`) in one MLLP block, connecting first when not connected, without waiting for the reply. A file or batch header without a control ID (FHS-11, BHS-11) is given one. Resolves with the file sent: the given `HL7BatchFile`, or an `HL7BatchFile` with no file header holding the given `HL7Batch`. See [Batches](../batches.md).

#### .sendBatchWaitAck()

`sendBatchWaitAck(batch: HL7BatchFile | HL7Batch): Promise<HL7BatchFile>`

Sends a batch file or batch as `sendBatch()` does and resolves with the reply batch: the first received batch whose FHS-12 is the sent FHS-11, or, when the sent file has no file header, whose first BHS-12 is the sent first BHS-11. Rejects on `responseTimeout`, on a connection error or on close, as `sendMessageWaitAck()` does. The reply is not reported as a `batch` event.

```typescript
import { HL7Batch } from 'hl7v2';

const batch = HL7Batch.create();
batch.messages.push(msg1, msg2, msg3);
const reply = await client.sendBatchWaitAck(batch);
for (const ack of reply.messages) console.log(ack.get('MSA-2'), ack.get('MSA-1'));
```

#### .use()

```
use(handler: HL7Middleware | HL7Router, priority?: number): void
use(filter: HL7MessageFilter, handler: HL7Middleware | HL7Router, priority?: number): void
```

Adds a handler for the messages the server sends to the client, as [`HL7Server.use()`](#use) does. They are processed and acknowledged as on the server - a message without a control ID (MSH-10) is given one first - with these differences: the client has no handler timeout (a handler that never calls `next()` leaves its message unanswered), and its acknowledgments keep MSH-3/MSH-4 from the received MSH-5/MSH-6 (there is no `applicationName` / `facilityName` option).

```typescript
client.use('ADT^A08', req => updatePatient(req.message));
```

#### .beforeResponse()

`beforeResponse(hook: HL7ResponseHook): void`

Adds a hook called with every answer the client sends to a request the other side made, as [`HL7Server.beforeResponse()`](#beforeresponse) does.

#### .onError()

`onError(handler: HL7Router | HL7ErrorMiddleware, priority = 0): void`

Adds an error handler, or a router's error handlers, as [`HL7Server.onError()`](#onerror) does. Error handlers see the error but do not clear it: the request is answered with a NAK for it (unless it was answered already) and the client emits `error`.

```typescript
client.onError((error, req) => {
  console.error(`${req.message.controlId} failed:`, error.message);
});
```

#### .setResponseTimeout()

`setResponseTimeout(value: number | null): void`

Sets `responseTimeout`, for the current connection too; `null` removes it.

#### .setConnectTimeout()

`setConnectTimeout(value: number | null): void`

Sets `connectTimeout` for the next connection attempts; `null` removes it.

#### .setMaxBufferSize()

`setMaxBufferSize(value: number): void`

Sets `maxBufferSize`, for the current connection too.

#### .setKeepAlive()

`setKeepAlive(enable?: boolean, initialDelay?: number): void`

Sets TCP keep-alive (`keepAlive`, `keepAliveInitialDelay`), for the current connection too.

#### .address()

`address(): AddressInfo | {} | undefined`

The local address of the current connection (`socket.address()`), `undefined` without one.

<a id="hl7client-options"></a>

### Options

`Hl7Client.NetConnectOptions` is `net.TcpNetConnectOpts` (without `onread`, `readable`, `writable`); `Hl7Client.TlsConnectOptions` is `tls.ConnectionOptions` (without `socket`). Both add:

| Option                  | Type                            | Default  | Description                                                                                                                                                                                                       |
| ----------------------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectTimeout`        | `number`                        | none     | Milliseconds a connection attempt may take; then it fails with `"Connection timed out after <n> ms"`. The `timeout` option of `net.connect()` is not passed on.                                                  |
| `responseTimeout`       | `number`                        | none     | Milliseconds `sendMessageWaitAck()` and `sendBatchWaitAck()` wait for an answer. Without it they wait indefinitely.                                                                                               |
| `keepAlive`             | `boolean`                       | `false`  | Turn TCP keep-alive on for every connection.                                                                                                                                                                      |
| `keepAliveInitialDelay` | `number`                        | -        | The keep-alive initial delay, in milliseconds.                                                                                                                                                                    |
| `maxBufferSize`         | `number`                        | no limit | The largest frame, in bytes, the client accepts. A larger frame is dropped - not parsed or routed - and the connection is closed with an `error` ("Max buffer size exceeded"); it is then re-established.                                               |
| `parseStrict`           | `boolean`                       | `false`  | Parse received messages and batches in strict mode.                                                                                                                                                               |
| `defaultCharset`        | `string`                        | UTF-8    | As the server option: the character set for a received message with an empty or unknown MSH-18, and for encoding a message whose MSH-18 is unknown. See [Character sets](../encoding.md).                         |
| `validate`              | `boolean \| HL7ValidateOptions` | `false`  | As the server option: validate received messages, NAK and drop the invalid ones. See [Validation](../validation.md).                                                                                               |
| `acceptAcknowledgment`  | `HL7AcceptAcknowledgment`       | `'receipt'` | As the server option: when the accept acknowledgment is sent. |
| `batchAcknowledgment`   | `HL7BatchAcknowledgment`        | `'all'`  | As the server option: what the reply to a received batch carries.                                                                                                                                                 |
| `reconnect`             | `Hl7Client.ReconnectOptions`    | see below | How a failed or lost connection is retried.                                                                                                                                                                       |

#### ReconnectOptions

`Hl7Client.ReconnectOptions`, passed to `reconnect-core` and the `backoff` package:

| Option                | Type                                       | Description                                                                                       |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `strategy`            | `'fibonacci' \| 'exponential' \| Backoff`  | The delay sequence between attempts, or a `backoff` instance of your own. Default `'fibonacci'`. |
| `initialDelay`        | `number`                                   | The first delay, in milliseconds (`backoff` default: 100).                                        |
| `maxDelay`            | `number`                                   | The largest delay, in milliseconds (`backoff` default: 10000).                                    |
| `randomisationFactor` | `number`                                   | Between 0 and 1: how much each delay is randomised (`backoff` default: 0).                        |
| `failAfter`           | `number`                                   | Stop after this many failed attempts. Default: never stop.                                        |
| `immediate`           | `boolean`                                  | Treat the connection as made as soon as the socket is created, not on its `connect` event.        |

```typescript
const client = Hl7Client.createClient({
  host: 'localhost',
  port: 2575,
  connectTimeout: 5000,
  reconnect: { strategy: 'exponential', initialDelay: 500, maxDelay: 10000 },
});
client.on('reconnecting', (attempt, delay) =>
  console.log(`Reconnecting (${attempt}) in ${delay} ms`),
);
```

### Events

`Hl7Client.Events` extends [`HL7Socket.Events`](#hl7socket-events):

| Event          | Arguments                                                              | When                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connect`      | -                                                                      | A connection was made (for TLS, before the handshake). Once per connection, reconnections included.                                                         |
| `ready`        | -                                                                      | The connection is ready to use: for TCP right after `connect`, for TLS once the handshake is done (`secureConnect`).                                        |
| `close`        | -                                                                      | The connection closed.                                                                                                                                       |
| `disconnect`   | `error?: Error`                                                        | The connection failed or was lost. While reconnection is on, it carries an error (`"TCP socket connection lost[: reason]"`); after `close()`, none. |
| `reconnecting` | `n: number, delay: number`                                             | A reconnection attempt is about to be made: the attempt number and the delay waited.                                                                         |
| `reconnect`    | `socket: net.Socket`                                                   | A reconnection attempt succeeded.                                                                                                                            |
| `error`        | `error: Error`                                                         | A connection, parse or handler error. Errors of connection attempts are not emitted after `close()`.                      |
| `warning`      | `warning: HL7Socket.Warning`                                           | See [HL7Socket.Warning](#hl7socket-warning).                                                                                                                 |
| `message`      | `message: HL7Message`                                                  | A message was received, responses and acknowledgments included.                                                                                             |
| `batch`        | `file: HL7BatchFile`                                                   | A batch was received that is not the reply awaited by `sendBatchWaitAck()`.                                                                                 |
| `send`         | `message: HL7Message`                                                  | A message was written.                                                                                                                                       |
| `sendBatch`    | `file: HL7BatchFile`                                                   | A batch was written.                                                                                                                                         |
| `data`         | `buffer: Buffer`                                                       | A complete MLLP frame was received.                                                                                                                          |
| `lookup`       | `err: Error \| null, address: string, family: number \| null, host: string` | Forwarded from the socket. The client wraps a socket once it has connected, after its DNS lookup, so the event is not expected in practice.                     |

`write` (`buffer: Buffer`, an MLLP frame was written) is forwarded from the socket as well.

---

## HL7Socket

One MLLP connection: it wraps a `net.Socket` or `tls.TLSSocket`, splits the incoming bytes into frames (`<VT> ... <FS><CR>`), parses each frame as a message or a batch, and sends messages and batches. The server creates one for each connection (`req.socket`, the `connection` event) and the client one for each connection. It does not route or acknowledge messages itself; the server and client do that on its `message` and `batch` events.

`HL7Socket` extends `AsyncEventEmitter`. The constructor is public, for wrapping a socket of your own:

`new HL7Socket(socket: net.Socket, options: HL7Socket.Options)`

When a received frame cannot be parsed, the socket emits `error` and, when the frame's MSH can be read, answers it with a NAK (`ACK^<event>`); a frame whose MSH cannot be read, or a batch that cannot be parsed, gets no answer.

### Properties

- `socket: net.Socket` - The wrapped socket (read-only).
- `connected: boolean` - Whether the socket is open (not `closed`).
- `closed: boolean` - Whether the socket is closed.
- `writable: boolean` - Whether the socket is open and writable.
- `readyState: string` - The `readyState` of the socket, or `'closed'`.
- `maxBufferSize: number` - The largest frame accepted, `0` for no limit (read-only; see `setMaxBufferSize()`).
- `responseTimeout?: number` - Milliseconds `sendMessageWaitAck()` and `sendBatchWaitAck()` wait; `undefined` for no limit. Writable. A socket created by `HL7Server` has none.
- `localAddress`, `localPort`, `localFamily` - Of the socket.
- `remoteAddress` - Of the socket, an IPv4-mapped IPv6 address (`::ffff:10.0.0.1`) given without its prefix.
- `remotePort`, `remoteFamily` - Of the socket.

### Methods

#### .sendMessage()

`sendMessage(message: HL7Message): void`

Writes a message in one MLLP block. An empty MSH-18 is set to `UNICODE UTF-8` first, when the version's MSH has field 18 (2.3 and later; the message object is changed); a non-empty one is kept. The message is encoded in its MSH-18 character set, or in `defaultCharset` when MSH-18 names an unknown one (with a `warning` event). Emits `send` and `write`. Throws, and emits `error`, when the socket is not connected or not writable.

Inside a handler, answer a request with [`req.send()`](#hl7request-send) rather than `req.socket.sendMessage()`: for a message that came in a batch, `req.send()` puts the answer into the reply batch, while `sendMessage()` sends it on its own.

```typescript
server.on('connection', socket => socket.sendMessage(welcome));
```

#### .sendMessageWaitAck()

`sendMessageWaitAck(message: HL7Message, options?: HL7Socket.WaitAckOptions): Promise<HL7Message>`

Sends a message and resolves with its response, matched by MSA-2 whatever the response's type; rejects on `responseTimeout`, on a socket error or on close. The same as [`Hl7Client.sendMessageWaitAck()`](#sendmessagewaitack), without connecting first. The response is reported as a `message` event too, and `isResponse()` returns `true` for it.

```typescript
server.on('connection', async socket => {
  socket.responseTimeout = 5000;
  const ack = await socket.sendMessageWaitAck(query);
});
```

#### .sendBatch()

`sendBatch(batch: HL7BatchFile | HL7Batch): HL7BatchFile`

Writes a batch file or batch in one MLLP block, encoded in its first message's character set, giving a header without a control ID (FHS-11, BHS-11) one. Returns the file sent (an `HL7Batch` is wrapped in an `HL7BatchFile` without a file header). Emits `sendBatch` and `write`. Throws, and emits `error`, when the socket is not connected or not writable.

#### .sendBatchWaitAck()

`sendBatchWaitAck(batch: HL7BatchFile | HL7Batch): Promise<HL7BatchFile>`

Sends a batch and resolves with the reply batch matched by FHS-12, or the first BHS-12 (see [`answersBatch()`](#answersbatch)); rejects on `responseTimeout`, on a socket error or on close. The reply is not emitted as a `batch` event.

#### .isResponse()

`isResponse(message: HL7Message): boolean`

Whether a received message was the response awaited by a `sendMessageWaitAck()` call on this socket. The server and client do not route or acknowledge such a message.

```typescript
socket.on('message', message => {
  if (!socket.isResponse(message)) console.log('Unsolicited', message.messageType);
});
```

<a id="hl7socket-close"></a>

#### .close()

`close(waitRunningHandlers?: number): Promise<void>`

Stops reading, and with `waitRunningHandlers` (milliseconds) waits up to that long for `sendMessageWaitAck()` and `sendBatchWaitAck()` calls in progress, then destroys the socket. Resolves on the socket's `close` event, or at once when already closed.

#### .setKeepAlive()

`setKeepAlive(enable?: boolean, initialDelay?: number): void`

Turns TCP keep-alive on or off, as `net.Socket.setKeepAlive()`.

#### .setMaxBufferSize()

`setMaxBufferSize(value: number): void`

Sets the largest frame, in bytes, the socket accepts.

#### .address()

`address(): AddressInfo | {}`

The local address of the socket, `{}` without one.

### Options

`HL7Socket.Options`:

| Option                  | Type      | Description                                                                                                                                                                |
| ----------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responseTimeout`       | `number`  | The initial `responseTimeout`.                                                                                                                                             |
| `maxBufferSize`         | `number`  | The largest frame, in bytes. A larger frame is dropped (not parsed), the stream stops framing - it cannot find the next frame after it - and the socket emits `error` ("Max buffer size exceeded") and is destroyed. |
| `keepAlive`             | `boolean` | Stored by `setKeepAlive()`; the constructor does not apply it.                                                                                                             |
| `keepAliveInitialDelay` | `number`  | Stored by `setKeepAlive()`.                                                                                                                                                |
| `parseStrict`           | `boolean` | Parse received messages and batches in strict mode.                                                                                                                        |
| `defaultCharset`        | `string`  | The character set used when MSH-18 is empty on a received message, or names one this library does not know: an HL7 table 0211 value or an iconv-lite encoding name. Default: UTF-8, which reads ASCII as well. |

<a id="hl7socket-waitackoptions"></a>

### WaitAckOptions

`HL7Socket.WaitAckOptions`:

- `acknowledgment?: 'accept' | 'application'` - In enhanced mode (MSH-15/16 valued), which acknowledgment resolves `sendMessageWaitAck()`: the accept one (`CA`/`CE`/`CR`) or the application one (`AA`/`AE`/`AR`; a `CE` or `CR` resolves it too, as no application acknowledgment follows them). Default: the accept one when MSH-15 asks for it (valued and not `NE`), otherwise the application one.

<a id="hl7socket-warning"></a>

### Warning

`HL7Socket.Warning`, the argument of the `warning` event - something the socket worked around rather than failed on. A message whose MSH-18 names a character set this library does not know (`ANSI`, for one) is still received and sent, decoded or encoded with the default character set:

- `code: 'UNKNOWN_CHARSET'`
- `message: string` - A description, such as `Unknown character set "ANSI" in MSH-18 of a message to receive; decoded as utf-8`.
- `charset: string` - The MSH-18 value.
- `encoding: string` - The encoding used instead.
- `direction: 'receive' | 'send'`
- `hl7Message: HL7Message` - The message.

```typescript
server.on('warning', (warning, socket) => console.warn(warning.message));
```

<a id="hl7socket-events"></a>

### Events

`HL7Socket.Events`:

| Event       | Arguments                                                                   | When                                                                                     |
| ----------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `connect`   | -                                                                           | The socket connected.                                                                    |
| `ready`     | -                                                                           | The socket is ready: `ready` for a TCP socket, `secureConnect` for a TLS socket.         |
| `close`     | -                                                                           | The socket closed.                                                                       |
| `error`     | `error: Error`                                                              | A socket error (`ECONNRESET` reads "Connection reset by peer"), a framing error, a parse error, a send error. |
| `lookup`    | `err: Error \| null, address: string, family: number \| null, host: string` | The socket's DNS lookup.                                                                 |
| `message`   | `message: HL7Message`                                                       | A message was received and parsed.                                                       |
| `batch`     | `file: HL7BatchFile`                                                        | A batch was received - not the reply awaited by `sendBatchWaitAck()`.                    |
| `send`      | `message: HL7Message`                                                       | A message was written.                                                                   |
| `sendBatch` | `file: HL7BatchFile`                                                        | A batch was written.                                                                     |
| `data`      | `buffer: Buffer`                                                            | A complete frame was received, start and end bytes included.                            |
| `write`     | `buffer: Buffer`                                                            | A frame was written.                                                                     |
| `warning`   | `warning: HL7Socket.Warning`                                                | See [Warning](#hl7socket-warning).                                                       |

A socket that is idle past a timeout set on the underlying socket (`socket.setTimeout()`) is destroyed.

---

## HL7Router

A stack of handlers and error handlers. `HL7Server` and `Hl7Client` each hold one and pass their `use()` calls to it; a router of your own groups handlers and is added to a server, a client or another router with `use()`.

```typescript
import { HL7Router } from 'hl7v2-net';

const adt = new HL7Router();
adt.use('ADT^A01', req => admit(req.message));
adt.use('ADT^A03', req => discharge(req.message));
adt.onError(error => console.error(error));

server.use('ADT', adt);
```

### Methods

<a id="hl7router-use"></a>

#### .use()

```
use(handler: HL7Middleware | HL7Router, priority?: number): void
use(filter: HL7MessageFilter, handler: HL7Middleware | HL7Router, priority?: number): void
```

Adds a handler, or another router's handlers, for every message, or, given a [filter](#hl7messagefilter) first, for the messages it matches. A function as the first argument is taken as a filter when a second argument follows that is not a number.

Handlers run in ascending numeric `priority` (default `0`; negative values run earlier), then in the order they were added. A router added with `use()` contributes its handlers at the priority it is added with, in its own order; its error handlers are not taken over (add the router with `onError()` for that). A filter given with a router applies to each of its handlers.

A handler declared with fewer than three parameters (`(req, res)`) is called and awaited, and the next one runs after it. A handler declared with `next` (`(req, res, next)`) must call `next()` to continue; one that does not ends the chain.

```typescript
router.use((req, res, next) => {
  if (req.message.get('MSH-11') !== 'P') return next(new Error('Not production'));
  next();
}, -1);
router.use(req => req.message.messageType.startsWith('Z'), zHandler);
```

<a id="hl7router-onerror"></a>

#### .onError()

`onError(handler: HL7ErrorMiddleware | HL7Router, priority = 0): void`

Adds an error handler, or another router's error handlers. They run in ascending `priority` when a handler throws or calls `next(error)`. One declared with fewer than four parameters is awaited and the next one runs; one declared with `next` continues with `next()`, or replaces the error with `next(otherError)`. After the last one, the request ends with the error: [`res.failed(error)`](#failed) makes the answer a NAK unless one was sent already, and the error goes to the caller of `handle()`.

<a id="hl7router-beforeresponse"></a>

#### .beforeResponse()

`beforeResponse(hook: HL7ResponseHook): void`

Adds a hook called with every answer to a request before it is sent: accept and application acknowledgments, NAKs for messages refused or not processed in time, and the replies handlers send with `req.send()` - in a batch, each message of the reply batch. Not messages sent with `sendMessage()` or `sendBatch()`, the envelope of a reply batch, or the NAK for a frame that could not be parsed.

- The hook gets the answer and an [`HL7ResponseContext`](#hl7responsecontext). It returns nothing to send the answer, changed in place or not; another `HL7Message` to send instead; or `null` to send nothing.
- Hooks run in the order added, each given what the one before returned; `null` ends the chain. The router's own hooks run first, then those of the routers added to it with `use()`, which run only for the messages those take (a filter given with the router applies).
- A hook may return a promise; the answer waits for it, and the answers to a request go out in the order they were given.
- A hook that throws is passed over, and the error reported: `HL7Server` and `Hl7Client` emit it as `error`. The answer is not lost to a broken hook.

```typescript
router.beforeResponse(async (ack, { kind, request }) => {
  await audit(request.message.controlId, kind, ack.get('MSA-1'));
});
```

#### .responseHooks

`responseHooks: HL7ResponseHook[]` (read-only) - The hooks of the router and of the routers added to it, in the order they run. `HL7Server` and `Hl7Client` give them to each request.

#### .handle()

`handle(req: HL7Request, res: HL7Response, callback: (err?: Error) => void): void`

Runs the handlers for a request, then finishes it: when the chain ended with an error, `res.failed(error)`; when the request is not answered yet (`res.finished` is `false`) and `res.acknowledgmentWanted`, it sends `res.message` with `req.send()`. Then it calls `callback` with the error, if any, and `res.dispose()`. The callback is called once. `HL7Server` and `Hl7Client` call it; it is public for running a router outside them.

---

## HL7Request

A received message, as the handlers see it.

`new HL7Request(socket: HL7Socket, message: HL7Message, batch?: HL7BatchReplies, options?: HL7Request.Options | ((message: HL7Message) => void))`

`HL7Request.Options`, all optional - a function in their place is taken as `prepare`, as in 2.0:

- `prepare: (message: HL7Message) => void` - Called with every answer before the hooks; `HL7Server` uses it to set MSH-3/MSH-4 of its acknowledgments (`applicationName`, `facilityName`).
- `acceptPending: boolean` - Holds the accept acknowledgment back until the request is processed (see `sendAccept()`); the server and the client set it with `acceptAcknowledgment: 'processed'` when MSH-15 is valued.
- `beforeResponse: HL7ResponseHook[]` - The hooks every answer passes before it is sent (see [`HL7Router.beforeResponse()`](#hl7router-beforeresponse)).
- `onError: (error: Error) => void` - Called with an error a hook threw, or one sending an answer that went through the hooks.

### Properties

- `socket: HL7Socket` - The connection the message came on (read-only).
- `message: HL7Message` - The received message (read-only).
- `batch?: HL7BatchReplies` - The replies of the batch the message came in, when it came in one (read-only). See [Batch helpers](#hl7batchreplies).
- `acceptPending: boolean` - Whether the accept acknowledgment is still held back (read-only).
- `answered: boolean` - Whether the request is answered for the application: an `AA`, `AE` or `AR` with its control ID in MSA-2 was given to `send()` - sent, or on its way through the hooks (read-only). `res.finished` counts it.

### Methods

#### .sendAccept()

`sendAccept(error?: Error): void`

Sends the accept acknowledgment held back while the request is processed: `CA`, or - given the error processing failed with - a `CE` (`CR` for a rejection, as `createNak()` decides) listing it, if MSH-15 wants it. The router calls it when the handlers finish, before the application acknowledgment, and the server when they time out; a handler may call it earlier, once the message is stored. It sends once; nothing when no acknowledgment is held back.

```typescript
server.use('ORU^R01', async (req, res, next) => {
  await store(req.message);
  req.sendAccept(); // CA now; indexing may take longer
  await index(req.message);
  next();
});
```

<a id="hl7request-send"></a>

#### .send()

`send(message: HL7Message, kind: HL7ResponseKind = 'reply', error?: Error): void`

Sends an answer to the request: on the socket, or - for a message that came in a batch - into the reply batch. It passes the `beforeResponse` hooks first, which are told `kind` and `error`; a handler's own answer is a `'reply'`. Answers go out in the order they were given; without hooks, at once. An application acknowledgment of the request (`AA`, `AE`, `AR` with its control ID in MSA-2) is preceded by the accept acknowledgment still held back: `CA` for `AA`, `CE` or `CR` otherwise. On a server, an answer of type `ACK` gets the server's `applicationName` / `facilityName` in MSH-3/MSH-4 first. A handler answering a request itself, with something other than `res.message` (an `ADR^A19` for a `QRY^A19`, say), uses it rather than `req.socket.sendMessage()`, which would send the answer on its own, outside the batch. An answer whose MSA-2 is the request's control ID finishes the request: no acknowledgment follows it.

```typescript
server.use('QRY^A19', req => {
  const response = buildAdr(req.message); // an ADR^A19 whose MSA-2 is the query's MSH-10
  req.send(response);
});
```

---

## HL7Response

The answer to a request. Its `message` starts as the request's `AA` acknowledgment (`req.message.createAck()`); handlers may change it or replace it, and the router sends it when the handlers are done, unless the request was answered another way or MSH-16 asks for no such acknowledgment.

`new HL7Response(request: HL7Request)`

### Properties

- `request: HL7Request` - The request (read-only).
- `socket: HL7Socket` - The request's socket (read-only).
- `message: HL7Message` - The acknowledgment to send: `AA` at first, a NAK after `failed()`. Writable.
- `error?: Error` - The error given to `failed()`.
- `finished: boolean` - Whether the request is answered: by this response's `message`, or by any message whose MSA-2 is the request's control ID and whose MSA-1 is not an accept code (`CA`, `CE`, `CR`), sent on the socket or into the reply batch. Messages that answer other requests on the same socket do not count.
- `acknowledgmentWanted: boolean` - Whether the request wants the application acknowledgment `message` would send: in original mode always; in enhanced mode as MSH-16 asks (`AL` or empty always, `NE` never, `ER` for `AE`/`AR` only, `SU` for `AA` only). See [`ackWanted()`](#ackwanted).

### Methods

#### .failed()

`failed(error: Error): void`

Records `error` and, unless `message` is already an `AE` or `AR`, replaces `message` with a NAK for it (`req.message.createNak([error])`): `AR` when the error is an `HL7Error` whose `ackCode` is `'AR'`, or with no `ackCode` and an HL7 error code from 200 to 203 (unsupported message type, event, processing ID or version), otherwise `AE`. The error's text goes to MSA-3, and an ERR segment carries its code (207, application internal error, when it has none). See [Acknowledgments](../acknowledgments.md).

```typescript
server.use('ORU^R01', (req, res) => {
  if (!req.message.getSegment('OBX')) {
    res.failed(new HL7Error('No results in the message', { hl7ErrorCode: 207 }));
  }
});
```

#### .dispose()

`dispose(): void`

Stops watching the socket (or reply batch) for an answer to the request. `HL7Router.handle()` calls it when the request is done; `finished` no longer changes after it.

---

## Handler types

### HL7Middleware

```typescript
type HL7Middleware =
  | ((req: HL7Request, res: HL7Response) => void)
  | ((req: HL7Request, res: HL7Response) => Promise<void>)
  | ((req: HL7Request, res: HL7Response, next: NextFunction) => void);
```

A message handler. The router tells the forms apart by the function's declared parameter count (`Function.length`): with fewer than three, it awaits the handler and continues; with three, the handler continues by calling `next()`. A thrown error, or a rejected promise, goes to the error handlers. Note that a default or rest parameter is not counted in `length`.

### HL7ErrorMiddleware

```typescript
type HL7ErrorMiddleware =
  | ((error: Error, req: HL7Request, res: HL7Response) => void)
  | ((error: Error, req: HL7Request, res: HL7Response) => Promise<void>)
  | ((error: Error, req: HL7Request, res: HL7Response, next: NextFunction) => void);
```

An error handler; with fewer than four declared parameters it is awaited and the next one runs, with four it continues by calling `next()`.

### NextFunction

```typescript
type NextFunction = (err?: Error) => void | Promise<void>;
```

Continues with the next handler, or, given an error, with the error handlers.

### HL7ResponseHook

```typescript
type HL7ResponseHook = (
  response: HL7Message,
  context: HL7ResponseContext,
) => HL7Message | null | undefined | void | Promise<HL7Message | null | undefined | void>;
```

Called with an answer to a request before it is sent; see [`HL7Router.beforeResponse()`](#hl7router-beforeresponse). Returns nothing to send it, another message to send instead, or `null` to send nothing.

### HL7ResponseContext

```typescript
interface HL7ResponseContext {
  kind: HL7ResponseKind;
  request: HL7Request; // the request answered: its message, socket, batch
  socket: HL7Socket; // the connection the answer goes out on
  error?: Error; // the error the answer reports, when it reports one
}
```

### HL7ResponseKind

```typescript
type HL7ResponseKind = 'accept' | 'application' | 'reply' | 'reject';
```

- `'accept'` - an accept acknowledgment: `CA`, or `CE`/`CR` when processing failed (`acceptAcknowledgment: 'processed'`).
- `'application'` - the application acknowledgment sent when the handlers are done: `res.message`, `AA` or a NAK.
- `'reply'` - an answer a handler sends itself with `req.send()`.
- `'reject'` - a message refused before processing (validation: `CE`/`CR`, or `AE`/`AR`), or the NAK sent when the handlers time out.

### HL7MessageFilter

```typescript
type HL7MessageFilter = string | string[] | ((req: HL7Request) => boolean);
```

Which messages a handler takes, matched case-insensitively:

- `'ADT^A01'` - message type and trigger event (MSH-9 components 1 and 2); `*` matches any part, so `'ADT^*'` (or just `'ADT'`) is every ADT message and `'*'` every message;
- `'ADT_A01'` - a message structure (any pattern with `_`), so every event using it - A01, A04, A08 ... (see `HL7Message.structureName`). A message with no known structure name matches when its type and event, joined with `_`, are the pattern;
- a list of these, any of which may match;
- a function deciding for itself.

```typescript
server.use('ADT_A01', handler); // ADT^A01, ADT^A04, ADT^A08, ADT^A13 ...
server.use(['ORU^R01', 'ORU^R30'], handler);
server.use(req => req.message.get('MSH-11') === 'T', testHandler);
```

---

## HL7ExchangeError

`class HL7ExchangeError extends HL7Error`

An error of a message exchange. `HL7Server` answers a message its handlers do not finish within `responseTimeout` with a NAK for `new HL7ExchangeError('Response timeout')`.

`new HL7ExchangeError(message: string, args?: HL7ExchangeError.ErrorArgs)`

- `request?: HL7Message` - The request involved.
- `response?: HL7Message` - The response involved.

`HL7ExchangeError.ErrorArgs` extends `HL7Error.ErrorArgs` (`hl7ErrorCode`, `ackCode`, `severity`, `appErrorCode`, the location fields) with `request` and `response`.

---

## Acknowledgment helpers

From `helpers/acknowledgment.ts`: reading MSH-15 and MSH-16, and deciding which acknowledgments are sent (HL7 v2 chapter 2, "Acknowledgment messages"). See [Acknowledgments](../acknowledgments.md).

- **Original mode** - MSH-15 and MSH-16 both empty: the receiver answers every message with one application acknowledgment, `AA`, `AE` or `AR`.
- **Enhanced mode** - either valued, each one of `AL` (always), `NE` (never), `ER` (on error or reject only), `SU` (on success only):
  - MSH-15 asks for an accept (commit) acknowledgment: `CA` when the message is accepted, `CE` when it is not (an error in it), `CR` when it is rejected (unsupported type, event, processing ID or version). Empty, none is sent. It is sent on receipt, before processing, or after processing (`HL7AcceptAcknowledgment`).
  - MSH-16 asks for the application acknowledgment, sent after processing. Empty, it is sent, as in original mode.

### HL7AckCondition

```typescript
type HL7AckCondition = 'AL' | 'NE' | 'ER' | 'SU' | '';
```

An MSH-15 or MSH-16 value; `''` when empty.

### HL7AcceptAcknowledgment

```typescript
type HL7AcceptAcknowledgment = 'receipt' | 'processed';
```

When the accept acknowledgment is sent - the `acceptAcknowledgment` option of `HL7Server` and `Hl7Client`:

- `'receipt'` (default): on receipt, before the handlers run.
- `'processed'`: once the handlers finish - `CA` when they succeed, `CE` (`CR` for a rejection) when one throws, calls `res.failed()` or times out. For a receiver whose handlers are what commits the message to safe storage, so that `CA` means it is stored. See [`HL7Request.sendAccept()`](#hl7request).

### HL7AckMode

```typescript
interface HL7AckMode {
  enhanced: boolean; // MSH-15 or MSH-16 valued
  accept: HL7AckCondition; // MSH-15
  application: HL7AckCondition; // MSH-16
}
```

### ackModeOf()

`ackModeOf(message: HL7Message): HL7AckMode`

Reads MSH-15 and MSH-16 of a message, trimmed and upper-cased.

```typescript
ackModeOf(msg); // { enhanced: true, accept: 'AL', application: 'ER' }
```

### ackWanted()

`ackWanted(condition: HL7AckCondition, code: string): boolean`

Whether an acknowledgment with MSA-1 `code` is to be sent under `condition`: `NE` never; `ER` only for a code other than `AA` and `CA`; `SU` only for `AA` or `CA`; `AL` or empty always.

```typescript
ackWanted('ER', 'AA'); // false
ackWanted('ER', 'AE'); // true
```

### acknowledges()

`acknowledges(ack: HL7Message, message: HL7Message): boolean`

Whether `ack` answers `message` for the application: its MSA-1 is `AA`, `AE` or `AR`, and its MSA-2 is the message's control ID.

### ackCodeOf()

`ackCodeOf(message: HL7Message): string`

The MSA-1 of an acknowledgment, `''` when it has none.

### acceptMessage()

`acceptMessage(message: HL7Message, socket: HL7Socket | ((ack: HL7Message) => void), validate: boolean | HL7ValidateOptions | undefined, when?: HL7AcceptAcknowledgment): boolean`

Takes a received message in, before routing, and returns whether it is to be processed. `HL7Server` and `Hl7Client` call it for each routable message.

1. When `validate` is set, validates the message and keeps the errors of severity `E`.
2. When MSH-15 is valued, sends the accept acknowledgment if MSH-15 wants it - `CA`, or with errors a `CE` (or `CR`, see `createNak()`) listing them - and returns `true` only when there are no errors. With `when` `'processed'` (default `'receipt'`), the `CA` is not sent: it is left to the request, [`sendAccept()`](#hl7request).
3. Otherwise, with errors, sends a NAK (`AE`, or `AR`) listing them if MSH-16 wants it, and returns `false`.
4. Otherwise returns `true`.

`socket` is where an acknowledgment goes: an `HL7Socket`, or a function sending it (the server passes the reply batch for a message in a batch).

---

## Batch helpers

From `helpers/batch.ts`: batches over MLLP (HL7 v2 chapter 2, "Batch protocol", and the MLLP appendix). One MLLP block holds a message, or a batch - `FHS ... FTS`, or `BHS ... BTS`. The receiver processes each message as if it came alone - validated, routed to the handlers, acknowledged - and answers the batch with a batch of the acknowledgments, as `batchAcknowledgment` keeps them; no message of a batch is acknowledged on its own. Each reply header refers to the one it answers (BHS-12, FHS-12 = the received BHS-11, FHS-11). The messages of a batch are processed one after another, batch by batch. See [Batches](../batches.md).

<a id="hl7batchacknowledgment"></a>

### HL7BatchAcknowledgment

```typescript
type HL7BatchAcknowledgment = 'all' | 'errors' | 'none';
```

Which acknowledgments a reply batch carries - the standard's options:

- `'all'` - every message's acknowledgment (the default of the server and client);
- `'errors'` - only those of messages not accepted (any MSA-1 other than `AA` and `CA`); a batch with no messages when all were accepted;
- `'none'` - no reply batch at all.

<a id="hl7batchreplies"></a>

### HL7BatchReplies

`class HL7BatchReplies`

Where the answers to the messages of one received batch go instead of the socket: kept for the reply batch (`req.batch`). A response watching for its request being answered is told, as the socket's `send` event tells it.

- `messages: HL7Message[]` - The answers gathered (read-only array).
- `listeners: Set<(message: HL7Message) => void>` - Called with each message sent into it.
- `send(message: HL7Message): void` - Adds a message to `messages` and calls the listeners.

### isBatchData()

`isBatchData(data: Buffer): boolean`

Whether a received block is a batch: it starts with `FHS` or `BHS`, after a UTF-8 byte order mark, NUL bytes (UTF-16) or leading non-word characters.

### replyBatchFile()

`replyBatchFile(received: HL7BatchFile, replies: HL7Message[][], policy: HL7BatchAcknowledgment): HL7BatchFile`

Builds the reply to a received batch file, in the same shape: an FHS (and FTS) when it had one, a BHS (and BTS) for each batch that had one. Each reply header has sending and receiving application and facility swapped (3/4 and 5/6), the current time in field 7, a new control ID in field 11, and the received control ID in field 12 (FHS-12, BHS-12). `replies[i]` holds the acknowledgments of batch `i`, filtered by `policy` (`'errors'` keeps those not `AA`/`CA`; any other value keeps all).

### answersBatch()

`answersBatch(reply: HL7BatchFile, sent: HL7BatchFile): boolean`

Whether a received batch file answers one sent: its FHS-12 is the sent FHS-11, or - when the sent file has no FHS-11 or the reply no FHS - its first BHS-12 is the sent first BHS-11.

### identifyBatchFile()

`identifyBatchFile(file: HL7BatchFile): void`

Gives the file header and each batch header that has no control ID (field 11) a random one, so a reply can refer to it. `sendBatch()` and `sendBatchWaitAck()` call it.

---

## How messages are processed

What `HL7Server` and `Hl7Client` do with each received MLLP frame, in order:

1. **Framing.** Bytes are split into frames `<VT> ... <FS><CR>`. A frame over `maxBufferPerSocket` (server) or `maxBufferSize` (client) is dropped, not parsed or routed; the connection is closed with an `error`.
2. **Parsing.** A frame starting with FHS or BHS is parsed as a batch file; any other as a message, in its MSH-18 character set or `defaultCharset` (an unknown MSH-18 emits `warning`). A message that cannot be parsed emits `error` and is answered with a NAK when its MSH can be read. The `message` (or `batch`) event is emitted.
3. **Responses and acknowledgments are not routed.** A message that is the awaited response of a `sendMessageWaitAck()` call, and any message of type `ACK`, is not passed to the handlers and not acknowledged: acknowledging an acknowledgment would make both sides answer each other forever. A batch that is the awaited reply of `sendBatchWaitAck()` is not processed.
4. **Acceptance.** [`acceptMessage()`](#acceptmessage): validation when `validate` is set, the accept acknowledgment MSH-15 asks for, and a NAK for an invalid message, which is then not routed. With `acceptAcknowledgment: 'processed'`, the `CA` waits for step 6.
5. **Routing.** A message with an empty MSH-10 is given a random control ID. The handlers run in priority order, with `res.message` set to an `AA` acknowledgment.
6. **Answer.** With `acceptAcknowledgment: 'processed'`, the accept acknowledgment held back is sent first: `CA` when no handler failed, `CE`/`CR` otherwise (also on a response timeout). Unless a handler answered the request (`res.finished`), `res.message` is sent if MSH-16 wants it: `AA` when no handler failed, `AE` when one threw or called `next(error)`, `AR` for an `HL7Error` with HL7 error code 200-203 (or `ackCode: 'AR'`). On the server, handlers that have not finished within `responseTimeout` (default 30 s) get an `AE` "Response timeout" answer, if the request is not answered yet. Handler errors are emitted as `error` events. Every acknowledgment the server sends (steps 4 and 6) carries `applicationName` / `facilityName` in MSH-3/MSH-4 when they are set.
7. **Batches.** The messages of a received batch go through steps 3-6 one after another; their answers are gathered into a reply batch (`req.send()` and `res.message` go there) and sent in one block when all are done, as `batchAcknowledgment` keeps them.
