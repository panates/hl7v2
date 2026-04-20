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

Sends an HL7 message and waits for an acknowledgment.
`sendMessageWaitAck(message: HL7Message | string): Promise<HL7Message>`
example

```typescript
const ack = await client.sendMessageWaitAck(msg);
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

Sends an HL7 message and waits for an acknowledgment.
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

---

### HL7Response

Represents the response to an HL7 request.

#### Properties

- `request: HL7Request`: The corresponding request.
- `message: HL7Message`: The HL7 message to be sent as a response (defaults to an ACK).
- `finished: boolean`: Whether the response has been sent.

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
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/master.svg
[coveralls-url]: https://coveralls.io/r/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2-net.svg
[downloads-url]: https://npmjs.org/package/hl7v2-net
