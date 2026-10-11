# Batches

HL7's batch protocol sends many messages together - in a file, or in one MLLP block:

```
[FHS]                 file header
  { [BHS]             batch header
      { MSH ... }     the messages
    [BTS] }           batch trailer: BTS-1, the message count
[FTS]                 file trailer: FTS-1, the batch count
```

## Batch files

```typescript
import { HL7BatchFile } from 'hl7v2';

const file = HL7BatchFile.parse(fs.readFileSync('daily.hl7'));

file.header?.field(FHSSegment.FileControlID).getValue(); // FHS-11
for (const batch of file.batches) {
  batch.header?.field(BHSSegment.BatchControlID).getValue(); // BHS-11
  for (const message of batch.messages) process(message);
}
file.messages; // every message of every batch, in order
```

`parse()` reads a file of batches, a single batch without FHS, or bare messages one after another - segments split by CR or LF, or carried in one MLLP frame. FHS and BHS carry the delimiters as MSH does. A `Buffer` is decoded in its byte order mark's character set, or the first message's MSH-18; each message is parsed with the options given (`strict`, `defaultCharset` ...). A segment outside a message is refused.

### Writing

```typescript
import { HL7Batch, HL7BatchFile } from 'hl7v2';

const file = HL7BatchFile.create(); // an FHS dated now, and an FTS
file.header!.field(FHSSegment.FileControlID).setValue('DAILY-20250301');
const batch = HL7Batch.create(); // a BHS dated now, and a BTS
batch.messages.push(message1, message2);
file.batches.push(batch);

fs.writeFileSync('out.hl7', file.toBuffer()); // in the first message's character set
file.toHL7String(); // the text
```

BTS-1 and FTS-1 are set to the message and batch counts as the file is written. `create(version)` makes the headers in a version (default 2.5).

## Batches over MLLP

One MLLP block may hold a batch - `BHS ... BTS`, or `FHS ... FTS` - instead of a message. `hl7v2-net` takes it as one: each message is processed as if it came alone - validated, routed to the handlers, acknowledged - and the batch is answered with a batch.

```typescript
import { HL7Batch } from 'hl7v2';
import { Hl7Client } from 'hl7v2-net';

const batch = HL7Batch.create();
batch.messages.push(m1, m2, m3);

const reply = await client.sendBatchWaitAck(batch); // HL7BatchFile
for (const ack of reply.messages) console.log(ack.get('MSA-2'), ack.get('MSA-1'));
```

- **The reply has the same shape** - an FHS when the batch file had one, a BHS for each batch that had one - with sender and receiver swapped, and each header referring to the one it answers: FHS-12 is the received FHS-11, BHS-12 the received BHS-11.
- **No message of a batch is acknowledged on its own**: every acknowledgment - accept and application ones in enhanced mode, NAKs from validation or from a failing handler - goes into the reply batch.
- **Messages are processed in order**, one after the other.
- `sendBatch()` sends without waiting. `sendBatchWaitAck()` resolves with the reply batch matched by its reference control ID; a header without a control ID (FHS-11, BHS-11) is given one.

### What the reply carries

The standard leaves it to the receiver; `batchAcknowledgment`, a server and client option, chooses:

| Value      | The reply batch                                                      |
| ---------- | -------------------------------------------------------------------- |
| `'all'`    | every message's acknowledgment (default)                             |
| `'errors'` | only those of messages not accepted - an empty batch, the receipt, when all were |
| `'none'`   | no reply batch                                                       |

```typescript
const server = HL7Server.createServer(undefined, { batchAcknowledgment: 'errors' });
server.on('batch', (file, socket) => console.log(`${file.messages.length} messages`));
```

### Answering from a handler

A handler answering a request itself sends its answer with `req.send()`, so a message that came in a batch is answered in the reply batch:

```typescript
server.use('QRY^A19', req => {
  req.send(buildResponse(req.message));
});
```

`socket.sendMessage()` would send it on its own, outside the batch. See [Network](network.md#answering-from-a-handler).
