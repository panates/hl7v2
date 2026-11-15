# Getting started

## Install

```bash
npm install hl7v2 hl7v2-dictionary
```

`hl7v2-dictionary` is a peer of `hl7v2`: the definitions it reads messages by. For the network, add `hl7v2-net`:

```bash
npm install hl7v2-net
```

Node.js 22 or later. The packages are ES modules, with TypeScript types included.

## Read a message

```typescript
import { HL7Message } from 'hl7v2';

const text = [
  'MSH|^~\\&|REGADT|HOSPITAL|EHR|HOSPITAL|20250301101500||ADT^A01^ADT_A01|MSG00001|P|2.5',
  'EVN|A01|20250301101500',
  'PID|1||123456^^^HOSP^MR||Yılmaz^Ayşe||19800512|F',
  'PV1|1|I|2000^2012^01',
].join('\r');

const msg = HL7Message.parse(text);

msg.messageType; // 'ADT^A01'
msg.version; // '2.5'
msg.get('PID-5-1'); // 'Yılmaz' - by path
msg.get('PID-3-1'); // '123456'
msg.getDate('PID-7'); // a Date
msg.getSegmentObject('PID')?.AdministrativeSex; // 'F' - the segment as an object
```

A message holds segments; a segment fields; a field repetitions; a repetition components; a component sub-components. [Messages](messages.md) explains the model, [Paths](paths.md) the locations, [Objects](objects.md) the plain-object view.

## Build a message

```typescript
import { HL7Message, MSHSegment } from 'hl7v2';

const msg = new HL7Message('2.5');
msg.header.field(MSHSegment.SendingApplication).setValue('MY-APP');
msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');

msg
  .set('EVN-2', new Date())
  .set('PID-3-1', '123456')
  .set('PID-5-1', 'Yılmaz')
  .set('PID-5-2', 'Ayşe');

msg.toHL7String(); // the text, segments ending in CR
msg.toBuffer(); // the bytes, in the character set MSH-18 names
```

A new message has its MSH filled: the date and time, a control ID, the processing ID (`P`), the version and the character set (`UNICODE UTF-8`).

## Check it

```typescript
const errors = msg.validate(); // [] when nothing is wrong
for (const e of errors) console.log(e.hl7ErrorCode, e.message);
```

See [Validation](validation.md).

## Answer it

```typescript
const ack = msg.createAck(); // MSA|AA|<control ID>
const nak = msg.createNak(errors); // MSA|AE, one ERR per error
```

See [Acknowledgments](acknowledgments.md).

## Receive and send over MLLP

```typescript
import { HL7Message } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';

const server = HL7Server.createServer();
server.use('ADT^A01', req => {
  console.log('Admitted:', req.message.get('PID-5-2'), req.message.get('PID-5-1'));
});
/* Every message is acknowledged: AA, or AE when a handler throws */
await server.listen(2575);

const client = Hl7Client.createClient({ host: 'localhost', port: 2575 });
const ack = await client.sendMessageWaitAck(HL7Message.parse(text));
ack.get('MSA-1'); // 'AA'

await client.close();
await server.close();
```

See [Network](network.md).

## With TypeScript

Give the version, and the compiler knows the message by that version's definitions:

```typescript
const msg = HL7Message.parse(text, { version: '2.5' }); // throws if MSH-12 is not 2.5
msg.getSegmentObject('PID')?.PatientName?.[0]?.GivenName; // typed by 2.5's PID
msg.get('PID-5-15'); // compile error: XPN has no component 15 in 2.5
```

See [TypeScript](typescript.md).

## Next

- The [examples](../examples) - fourteen programs that run with `pnpm start`.
- Coming from 1.x: [Migrating from v1 to v2](migration-v1-to-v2.md).
