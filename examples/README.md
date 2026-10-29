# Examples

Small programs showing how `hl7v2` and `hl7v2-net` are used. Each is one commented file, `src/index.ts`, and runs with `pnpm start` in its folder.

| Example                                 | What it shows                                                                                                        |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [parse-and-read](parse-and-read)       | Reading a message: paths (`PID-5-1`), typed segment objects, fields and repetitions                                   |
| [build-message](build-message)         | Building a message from scratch, validating it, answering it with an ACK or a NAK                                    |
| [typed-access](typed-access)           | Version-specific types: segment objects, fields and paths checked by the compiler                                     |
| [lab-results-oru](lab-results-oru)     | An ORU^R01's groups - patients, orders, observations - as a tree and by path                                         |
| [charset](charset)                     | Character sets (MSH-18): encoding to bytes, decoding them, `ANSI`; escape sequences                                   |
| [mllp-server](mllp-server)             | An MLLP server: handlers by message type, validation, AA / AE / AR acknowledgments, errors                           |
| [mllp-client](mllp-client)             | An MLLP client: sending messages and reading their acknowledgments; run it against `mllp-server`                     |
| [validation](validation) | Validation: structure, fields, tables, strict parsing; errors as a NAK carries them |
| [adt-to-json](adt-to-json) | Mapping ADT to an application's own JSON model and back, with the typed objects |
| [batch-files](batch-files) | Batch files (FHS/BHS ... BTS/FTS): reading, processing, answering with a batch of ACKs |
| [tls](tls) | MLLP over TLS, with a certificate the client trusts |
| [enhanced-ack](enhanced-ack) | Enhanced acknowledgment mode (MSH-15/16): accept (CA/CE) and application (AA/AE) acknowledgments |
| [router-gateway](router-gateway) | A gateway routing messages by type to other MLLP systems, passing their answers back |
| [mllp-batch](mllp-batch) | Batches over MLLP: a batch file sent in one block, each message processed, the reply batch of acknowledgments |

The sample messages are in [messages](messages).

## Running

From the repository, after `pnpm install`:

```bash
cd examples/parse-and-read
pnpm start
```

The examples import `hl7v2` and `hl7v2-net` as an application does; here those names resolve to the packages' sources (see `tsconfig.json` and `register.mjs`), so nothing needs building first. Node.js 22.6 or later.

`tls`, `enhanced-ack`, `router-gateway` and `mllp-batch` run their servers and clients in one process. For `mllp-server` and `mllp-client`, start the server first, then the client in another terminal:

```bash
cd examples/mllp-server && pnpm start
```

```bash
cd examples/mllp-client && pnpm start
```

`pnpm examples` (from the repository root) checks the examples' types - including the compile errors `typed-access` expects - and runs them all, the client against the server, as CI does. Each must print what its `expected.txt` holds: the examples run with a standing clock, a seeded `Math.random()` and a fixed time zone ([deterministic.mjs](deterministic.mjs)), so their dates and control IDs repeat, and ports, addresses and temporary paths are replaced before comparing. The examples are tests too: a change in what the library reads, writes or answers shows as a difference.

After a deliberate change, look at the differences, then write the expected outputs anew:

```bash
node examples/run-all.mjs --update
```
