# [📖 DOCUMENTATION](https://github.com/panates/hl7v2/blob/main/doc/README.md)

---

# hl7v2-net

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

An HL7 v2 **MLLP server and client** for Node.js, over TCP or TLS: receive messages and route them to handlers by type, answer them with the acknowledgments the HL7 v2 standard defines, send messages and wait for their answers - one at a time, or in batches.

Messages are [`hl7v2`](https://www.npmjs.com/package/hl7v2)'s `HL7Message`.

> **Upgrading from 1.x?** Version 2 changes how values are read and written and adds type checks for typed messages - see [Migrating from v1 to v2](https://github.com/panates/hl7v2/blob/main/doc/migration-v1-to-v2.md).

## Installation

```bash
npm install hl7v2-net hl7v2 hl7v2-dictionary
```

Node.js 20 or later; ES modules, TypeScript types included.

## Usage

### A server

```typescript
import { HL7Error } from 'hl7v2';
import { HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer(undefined, { validate: true });

server.use('ADT^A01', req => {
  admit(req.message.getSegmentObject('PID'));
}); // answered AA

server.use('ORU^R01', async req => {
  if (!(await store(req.message))) {
    throw new HL7Error('Patient record locked', { hl7ErrorCode: 206 }); // answered AE
  }
});

await server.listen(2575);
```

### A client

```typescript
import { HL7Message } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

const client = Hl7Client.createClient({
  host: 'lab.example.org',
  port: 2575,
  responseTimeout: 10000,
  reconnect: { strategy: 'exponential', initialDelay: 500, maxDelay: 10000 },
});

const ack = await client.sendMessageWaitAck(message); // matched by MSA-2
console.log(ack.get('MSA-1')); // 'AA'
```

### TLS

```typescript
const server = HL7Server.createTlsServer({ key, cert });
const client = Hl7Client.createTlsClient({ host: 'localhost', port: 2575, ca: cert });
```

## Features

- **Routing** - handlers by message type, trigger event, structure, a list or a function; routers, priorities, error handlers.
- **Acknowledgments** - every message answered: `AA`, `AE` from a failing handler, `AR` for what cannot be taken; ACKs never acknowledged.
- **Enhanced acknowledgment mode** - MSH-15 and MSH-16 honoured: accept (`CA`/`CE`/`CR`) and application acknowledgments, as asked.
- **Validation** - received messages checked, the invalid ones answered with a NAK listing their errors.
- **Requests and responses** - `sendMessageWaitAck()` resolves with the answer whatever its type (an `ADR^A19` for a `QRY^A19`), matched by MSA-2.
- **Batches over MLLP** - a batch in one block, each message processed, answered with a batch.
- **TLS**, reconnection, connect and response timeouts, frame size limits.
- **Character sets** - messages sent and read in the character set MSH-18 names; unknown ones reported.

## Documentation

- [Getting started](https://github.com/panates/hl7v2/blob/main/doc/getting-started.md)
- [Network](https://github.com/panates/hl7v2/blob/main/doc/network.md) - servers, clients, routing, acknowledgment modes, TLS, events
- [Acknowledgments](https://github.com/panates/hl7v2/blob/main/doc/acknowledgments.md)
- [Batches](https://github.com/panates/hl7v2/blob/main/doc/batches.md)
- [API reference](https://github.com/panates/hl7v2/blob/main/doc/api/net.md)
- [Migrating from v1 to v2](https://github.com/panates/hl7v2/blob/main/doc/migration-v1-to-v2.md)
- [Examples](https://github.com/panates/hl7v2/tree/main/examples) - a server and client, TLS, enhanced acknowledgments, a routing gateway, batches

## Node Compatibility

- node >= 20.x

## License

Available under the [BSD 3-Clause](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2-net.svg
[npm-url]: https://npmjs.org/package/hl7v2-net
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg
[coveralls-url]: https://coveralls.io/github/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2-net.svg
[downloads-url]: https://npmjs.org/package/hl7v2-net
