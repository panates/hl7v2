# [📖 DOCUMENTATION](./doc/README.md)

---

# HL7 v2 for Node.js

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![CI Tests][ci-test-image]][ci-test-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Parse, build, validate and exchange **HL7 v2** messages in Node.js and TypeScript - every version from 2.1 to 2.9, as the HL7 v2 standard defines them. Designed from the ground up for Node.js, with types for every version.

## Packages

| Package                                          | What it does                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| [`hl7v2`](./packages/hl7v2)                      | Messages: parsing, building, values by path, objects, validation, acknowledgments, batch files  |
| [`hl7v2-net`](./packages/net)                    | Network: an MLLP server and client over TCP or TLS, routing, acknowledgment modes, batches       |
| [`hl7v2-dictionary`](./packages/dictionary)      | Definitions: segments, data types, message structures and tables of HL7 v2.1 to v2.9            |

```bash
npm install hl7v2 hl7v2-dictionary      # messages
npm install hl7v2-net                   # and the network
```

## At a glance

```typescript
import { HL7Message } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';

/* Read */
const msg = HL7Message.parse(text);
msg.get('PID-5-1'); // the family name, by path
msg.getSegmentObject('PID')?.DateTimeOfBirth; // the segment as an object
msg.validate(); // what is wrong, with HL7 error codes

/* Build */
const adt = new HL7Message('2.5');
adt.set('MSH-9', 'ADT').set('MSH-9-2', 'A08').set('PID-3-1', '123456').set('PID-5-1', 'Yılmaz');

/* Receive: routed by type, answered with an ACK */
const server = HL7Server.createServer();
server.use('ADT^A08', req => update(req.message));
await server.listen(2575);

/* Send, and wait for the answer */
const client = Hl7Client.createClient({ host: 'localhost', port: 2575 });
const ack = await client.sendMessageWaitAck(adt);
ack.get('MSA-1'); // 'AA'
```

## Features

- **Every version, 2.1 to 2.9** - generated from HL7's own v2 XML schemas: segments, fields, data types, structures, groups, tables.
- **Paths** - read and write by location (`PID-5-1`), through the structure's groups.
- **Objects** - segments and whole messages as plain objects, and back.
- **Types by version** - the compiler checks fields, components, paths and objects against the message's version.
- **Validation** - structure, required fields, data types, lengths, tables, with HL7 error codes and locations.
- **Acknowledgments** - ACKs and NAKs in each version's layout; original and enhanced acknowledgment modes on the network.
- **Character sets and escaping** - MSH-18 honoured both ways, escape sequences as the standard defines them.
- **Values as written** - dates, times and numbers checked, never reinterpreted.
- **Batches** - batch files, and batches over MLLP.
- **MLLP over TCP and TLS** - routing, error handlers, timeouts, reconnection.
- **Interoperable** - what goes over the wire is tested case by case against what other HL7 systems send and expect.

## Documentation

The [documentation](./doc/README.md) covers all three packages:

- [Getting started](./doc/getting-started.md)
- Guide: [Messages](./doc/messages.md) · [Paths](./doc/paths.md) · [Objects](./doc/objects.md) · [TypeScript](./doc/typescript.md) · [Message structures](./doc/structure.md) · [Validation](./doc/validation.md) · [Acknowledgments](./doc/acknowledgments.md) · [Character sets and escaping](./doc/encoding.md) · [Dates and numbers](./doc/dates-and-numbers.md) · [Batches](./doc/batches.md) · [Network](./doc/network.md) · [Dictionary](./doc/dictionary.md)
- API reference: [hl7v2](./doc/api/hl7v2.md) · [hl7v2-net](./doc/api/net.md) · [hl7v2-dictionary](./doc/api/dictionary.md)
- [Migrating from v1 to v2](./doc/migration-v1-to-v2.md)

## Examples

Fourteen runnable programs in [examples](./examples/README.md) - reading and building messages, typed access, validation, lab results, mapping to JSON, character sets, batch files, an MLLP server and client, TLS, enhanced acknowledgments, a routing gateway, batches over MLLP. Each runs with `npm start`; CI checks their output.

## HL7 versions

Every HL7 v2 version from 2.1 to 2.9, each read and written by its own definitions:

| Series | Versions                      |
| ------ | ----------------------------- |
| 2.1    | 2.1                           |
| 2.2    | 2.2                           |
| 2.3    | 2.3, 2.3.1                    |
| 2.4    | 2.4                           |
| 2.5    | 2.5, 2.5.1                    |
| 2.6    | 2.6                           |
| 2.7    | 2.7, 2.7.1                    |
| 2.8    | 2.8, 2.8.1, 2.8.2             |
| 2.9    | 2.9                           |

A message of a version in between - 2.5.2, say - is read by the nearest one below it.

## Requirements

| Requirement | Version          | For                        |
| ----------- | ---------------- | -------------------------- |
| Node.js     | 20 or later      | all three packages         |
| TypeScript  | 5.4 or later     | the types - optional       |

## Development

```bash
npm install
npm run build          # build every package
npm test               # the tests
npm run examples       # type-check and run the examples, comparing their output
```

- The dictionaries are generated from HL7's v2 XML schemas by `support/build-dictionary.mts`; the schemas are licensed by HL7 and not in the repository - see [Dictionary](./doc/dictionary.md#how-the-dictionaries-are-built).

## Support

Report bugs and discuss features on the [GitHub issues](https://github.com/panates/hl7v2/issues) page. Please give the Node.js version and, for a message the library reads or writes wrongly, the message.

## License

Available under [MIT](LICENSE) license.

[npm-image]: https://img.shields.io/npm/v/hl7v2.svg
[npm-url]: https://npmjs.org/package/hl7v2
[ci-test-image]: https://github.com/panates/hl7v2/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/panates/hl7v2/actions/workflows/test.yml
[coveralls-image]: https://img.shields.io/coveralls/panates/hl7v2/dev.svg
[coveralls-url]: https://coveralls.io/r/panates/hl7v2
[downloads-image]: https://img.shields.io/npm/dm/hl7v2.svg
[downloads-url]: https://npmjs.org/package/hl7v2
