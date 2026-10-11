import net, { type AddressInfo } from 'node:net';
import { expect } from 'expect';
import { CR, FS, HL7Message, MSASegment, MSHSegment, VT } from 'hl7v2';
import { Hl7Client, HL7Router, HL7Server } from '../src/index.js';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function newMessage(messageType = 'ORU^R01', controlId?: string): HL7Message {
  const msg = new HL7Message();
  msg.header.field(MSHSegment.MessageType).fromHL7String(messageType);
  if (controlId)
    msg.header.field(MSHSegment.MessageControlID).setValue(controlId);
  return msg;
}

/** Message exchange, checked against how HAPI HL7v2 exchanges messages */
describe('net:exchange', () => {
  let server: HL7Server;
  let client: Hl7Client | undefined;
  let port: number;

  beforeEach(async () => {
    server = HL7Server.createServer();
    await server.listen(0);
    port = (server.address() as AddressInfo).port;
  });

  afterEach(async () => {
    await client?.close();
    client = undefined;
    await server.close();
  });

  describe('acknowledgments', () => {
    it('should not acknowledge an acknowledgment', async () => {
      let serverReceived = 0;
      let clientReceived = 0;
      server.on('message', () => serverReceived++);
      client = Hl7Client.createClient({ host: 'localhost', port });
      client.on('message', () => clientReceived++);
      await client.sendMessageWaitAck(newMessage());
      await sleep(200);
      /* Before the fix both sides acknowledged each other's ACK, thousands of times */
      expect(serverReceived).toEqual(1);
      expect(clientReceived).toEqual(1);
    });

    it('should not route a response to the handlers', async () => {
      const routed: string[] = [];
      client = Hl7Client.createClient({ host: 'localhost', port });
      client.use(req => {
        routed.push(req.message.messageType);
      });
      await client.sendMessageWaitAck(newMessage());
      await sleep(100);
      expect(routed).toEqual([]);
    });

    it('should not route an unsolicited ACK either', async () => {
      const routed: string[] = [];
      server.use(req => {
        routed.push(req.message.messageType);
      });
      const socket = net.connect(port, 'localhost');
      await new Promise(resolve => socket.once('connect', resolve));
      const ack = newMessage('ORU^R01', 'X1').createAck();
      socket.write(VT + ack.toHL7String() + FS + CR);
      await sleep(100);
      socket.destroy();
      expect(routed).toEqual([]);
    });
  });

  describe('sendMessageWaitAck()', () => {
    it('should match an application response by MSA-2, whatever its type', async () => {
      server.use((req, res) => {
        const adr = newMessage('ADR^A19^ADR_A19');
        const msa = adr.addSegment('MSA');
        msa.field(MSASegment.AcknowledgmentCode).setValue('AA');
        msa.field(MSASegment.MessageControlID).setValue(req.message.controlId);
        res.message = adr;
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      const resp = await client.sendMessageWaitAck(newMessage('QRY^A19'));
      expect(resp.messageType).toEqual('ADR^A19');
    });

    it('should answer concurrent requests on one connection', async () => {
      server.use(async req => {
        if (req.message.controlId === 'SLOW') await sleep(150);
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      await client.connect();
      const [slow, fast] = await Promise.all([
        client.sendMessageWaitAck(newMessage('ORU^R01', 'SLOW')),
        client.sendMessageWaitAck(newMessage('ORU^R01', 'FAST')),
      ]);
      const msa2 = (m: HL7Message) =>
        m.getSegment('MSA')!.field(MSASegment.MessageControlID).toHL7String();
      expect(msa2(slow)).toEqual('SLOW');
      expect(msa2(fast)).toEqual('FAST');
    });

    it('should reject after the client responseTimeout', async () => {
      server.use(async () => {
        await sleep(1000);
      });
      client = Hl7Client.createClient({
        host: 'localhost',
        port,
        responseTimeout: 100,
      });
      await expect(client.sendMessageWaitAck(newMessage())).rejects.toThrow(
        'Response timeout',
      );
    });

    it('should reject when the connection closes before the response', async () => {
      server.use(async req => {
        await sleep(50);
        req.socket.socket.destroy();
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      client.on('error', () => undefined);
      await expect(client.sendMessageWaitAck(newMessage())).rejects.toThrow(
        'Socket closed before response',
      );
    });
  });

  describe('server', () => {
    it('should not send a timeout NAK after a handler answered', async () => {
      const s2 = HL7Server.createServer(undefined, { responseTimeout: 100 });
      await s2.listen(0);
      s2.use(async (req, res) => {
        req.socket.sendMessage(res.message);
        await sleep(300);
      });
      const received: string[] = [];
      client = Hl7Client.createClient({
        host: 'localhost',
        port: (s2.address() as AddressInfo).port,
      });
      client.on('message', m =>
        received.push(
          m.getSegment('MSA')!.field(MSASegment.AcknowledgmentCode).getValue(),
        ),
      );
      await client.sendMessageWaitAck(newMessage());
      await sleep(400);
      await client.close();
      await s2.close();
      expect(received).toEqual(['AA']);
    });

    it('should close a connection whose frame exceeds maxBufferPerSocket', async () => {
      const s2 = HL7Server.createServer(undefined, { maxBufferPerSocket: 100 });
      await s2.listen(0);
      const errors: string[] = [];
      s2.on('error', e => errors.push(e.message));
      const socket = net.connect(
        (s2.address() as AddressInfo).port,
        'localhost',
      );
      await new Promise(resolve => socket.once('connect', resolve));
      const closed = new Promise(resolve => socket.once('close', resolve));
      socket.write(VT + 'MSH|^~\\&|' + 'x'.repeat(200));
      await sleep(50);
      socket.write('y'.repeat(200));
      await closed;
      await s2.close();
      expect(errors).toContain('Max buffer size exceeded');
    });

    it('should not keep error listeners after listen()', async () => {
      const s2 = HL7Server.createServer();
      const before = (s2 as any)._server.listenerCount('error');
      await s2.listen(0);
      expect((s2 as any)._server.listenerCount('error')).toEqual(before);
      await s2.close();
    });
  });

  describe('unknown character sets', () => {
    it('should warn and still answer, on both sides', async () => {
      const warnings: string[] = [];
      server.on('warning', w =>
        warnings.push(`server ${w.direction} ${w.charset} ${w.encoding}`),
      );
      let received: HL7Message | undefined;
      server.use(req => {
        received = req.message;
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      client.on('warning', w =>
        warnings.push(`client ${w.direction} ${w.charset} ${w.encoding}`),
      );
      const msg = newMessage();
      msg.header.field(MSHSegment.CharacterSet).setValue('ANSI');
      const ack = await client.sendMessageWaitAck(msg);
      expect(ack.messageType).toEqual('ACK^R01');
      expect(received).toBeDefined();
      /* the ACK carries the request's MSH-18, so it warns on the way back too */
      expect(warnings).toEqual([
        'client send ANSI utf-8',
        'server receive ANSI utf-8',
        'server send ANSI utf-8',
        'client receive ANSI utf-8',
      ]);
    });

    it('should use the configured default character set', async () => {
      const s2 = HL7Server.createServer(undefined, {
        defaultCharset: '8859/9',
      });
      await s2.listen(0);
      const warnings: string[] = [];
      s2.on('warning', w => warnings.push(w.encoding));
      let name: string | undefined;
      s2.use(req => {
        name = req.message.getSegment('PID')!.field(5).toHL7String();
      });
      client = Hl7Client.createClient({
        host: 'localhost',
        port: (s2.address() as AddressInfo).port,
        defaultCharset: '8859/9',
      });
      const msg = newMessage();
      msg.header.field(MSHSegment.CharacterSet).setValue('ANSI');
      msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
      await client.sendMessageWaitAck(msg);
      await client.close();
      client = undefined;
      await s2.close();
      expect(name).toEqual('Şahin^Gül');
      expect(warnings[0]).toEqual('latin5');
    });

    it('should not warn for an empty or standard character set', async () => {
      const warnings: unknown[] = [];
      server.on('warning', w => warnings.push(w));
      client = Hl7Client.createClient({ host: 'localhost', port });
      client.on('warning', w => warnings.push(w));
      for (const charset of ['', 'UNICODE UTF-8', '8859/9']) {
        const msg = newMessage();
        msg.header.field(MSHSegment.CharacterSet).setValue(charset);
        await client.sendMessageWaitAck(msg);
      }
      expect(warnings).toEqual([]);
    });
  });

  describe('validation', () => {
    it('should answer an invalid message with a NAK, not route it', async () => {
      const s2 = HL7Server.createServer(undefined, { validate: true });
      await s2.listen(0);
      try {
        const routed: string[] = [];
        s2.use(req => {
          routed.push(req.message.messageType);
        });
        client = Hl7Client.createClient({
          host: 'localhost',
          port: (s2.address() as AddressInfo).port,
        });
        /* ADT_A01 without PID-3, PID-5 and PV1 */
        const invalid = newMessage('ADT^A01^ADT_A01');
        invalid.addSegment('EVN').field(2).setValue('20250101');
        invalid.addSegment('PID').field(1).setValue(1);
        const nak = await client.sendMessageWaitAck(invalid);
        const ackCode = (m: HL7Message) =>
          m
            .getSegment('MSA')!
            .field(MSASegment.AcknowledgmentCode)
            .toHL7String();
        expect(ackCode(nak)).toEqual('AE');
        expect(
          nak.segments.filter(x => x.segmentType === 'ERR').length,
        ).toEqual(3);
        expect(routed).toEqual([]);

        /* a valid one is routed */
        const valid = newMessage('ADT^A01^ADT_A01');
        valid.addSegment('EVN').field(2).setValue('20250101');
        const pid = valid.addSegment('PID');
        pid.field(3).fromHL7String('123^^^HOSP^MR');
        pid.field(5).setValue('Doe');
        valid.addSegment('PV1').field(2).setValue('I');
        expect(valid.validate()).toEqual([]);
        expect(ackCode(await client.sendMessageWaitAck(valid))).toEqual('AA');
        expect(routed).toEqual(['ADT^A01']);
      } finally {
        await client?.close();
        client = undefined;
        await s2.close();
      }
    });
  });

  describe('router', () => {
    it('should run handlers in numeric priority order', async () => {
      const router = new HL7Router();
      const order: number[] = [];
      for (const p of [10, 2, -1, 0]) {
        router.use(() => {
          order.push(p);
        }, p);
      }
      server.use(router);
      client = Hl7Client.createClient({ host: 'localhost', port });
      await client.sendMessageWaitAck(newMessage());
      expect(order).toEqual([-1, 0, 2, 10]);
    });
  });

  describe('client', () => {
    it('should give up connecting after connectTimeout', async () => {
      /* A non-routable address: the SYN goes unanswered */
      client = Hl7Client.createClient({
        host: '10.255.255.1',
        port: 2575,
        connectTimeout: 300,
      });
      client.on('error', () => undefined);
      const started = Date.now();
      await expect(client.connect()).rejects.toThrow();
      expect(Date.now() - started).toBeLessThan(3000);
    });

    it('should apply keepAlive without a connect timeout', async () => {
      const calls: any[] = [];
      const original = net.Socket.prototype.setKeepAlive;
      net.Socket.prototype.setKeepAlive = function (...args: any[]) {
        calls.push(args);
        return original.apply(this, args as any);
      };
      try {
        client = Hl7Client.createClient({
          host: 'localhost',
          port,
          keepAlive: true,
          keepAliveInitialDelay: 1234,
        });
        await client.connect();
      } finally {
        net.Socket.prototype.setKeepAlive = original;
      }
      expect(calls).toContainEqual([true, 1234]);
    });

    it('should connect on the first send', async () => {
      client = Hl7Client.createClient({ host: 'localhost', port });
      expect(client.connected).toBe(false);
      const resp = await client.sendMessageWaitAck(newMessage());
      expect(resp.messageType).toEqual('ACK^R01');
      expect(client.connected).toBe(true);
      expect(client.uri).toEqual('localhost:' + port);
    });

    it('should apply a response timeout set after connecting', async () => {
      server.use(async () => {
        await sleep(1000);
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      await client.connect();
      client.setResponseTimeout(100);
      expect(client.responseTimeout).toEqual(100);
      await expect(client.sendMessageWaitAck(newMessage())).rejects.toThrow(
        'Response timeout',
      );
    });

    it('should answer messages the server sends', async () => {
      let received: HL7Message | undefined;
      server.on('connection', async socket => {
        await sleep(20);
        received = await socket.sendMessageWaitAck(newMessage('ADT^A08'));
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      const handled: string[] = [];
      client.use(req => {
        handled.push(req.message.messageType);
      });
      await client.connect();
      await sleep(200);
      expect(handled).toEqual(['ADT^A08']);
      expect(received?.messageType).toEqual('ACK^A08');
    });
  });

  describe('routing by message', () => {
    const sendAll = async (types: string[]) => {
      client = Hl7Client.createClient({ host: 'localhost', port });
      for (const type of types)
        await client.sendMessageWaitAck(newMessage(type));
    };

    it('should route by type and event, with wildcards', async () => {
      const seen: string[] = [];
      server.use('ADT^A01', req => {
        seen.push('A01 ' + req.message.messageType);
      });
      server.use('ADT^*', req => {
        seen.push('ADT ' + req.message.messageType);
      });
      server.use('ORU', req => {
        seen.push('ORU ' + req.message.messageType);
      });
      server.use('*', req => {
        seen.push('all ' + req.message.messageType);
      });
      await sendAll(['ADT^A01', 'ADT^A08', 'ORU^R01', 'SIU^S12']);
      expect(seen).toEqual([
        'A01 ADT^A01',
        'ADT ADT^A01',
        'all ADT^A01',
        'ADT ADT^A08',
        'all ADT^A08',
        'ORU ORU^R01',
        'all ORU^R01',
        'all SIU^S12',
      ]);
    });

    it('should route by message structure', async () => {
      /* A01, A04 and A08 all use the ADT_A01 structure; A02 does not */
      const seen: string[] = [];
      server.use('ADT_A01', req => {
        seen.push(req.message.messageType);
      });
      await sendAll(['ADT^A01', 'ADT^A04', 'ADT^A08', 'ADT^A02']);
      expect(seen).toEqual(['ADT^A01', 'ADT^A04', 'ADT^A08']);
    });

    it('should take a list, or a function', async () => {
      const seen: string[] = [];
      server.use(['ADT^A01', 'ORU^R01'], req => {
        seen.push('list ' + req.message.messageType);
      });
      server.use(
        req => req.message.messageType.endsWith('S12'),
        req => {
          seen.push('fn ' + req.message.messageType);
        },
      );
      await sendAll(['ADT^A01', 'SIU^S12', 'ADT^A08']);
      expect(seen).toEqual(['list ADT^A01', 'fn SIU^S12']);
    });

    it('should filter a whole router, and keep next() working', async () => {
      const seen: string[] = [];
      const adt = new HL7Router();
      adt.use((req, res, next) => {
        seen.push('first ' + req.message.messageType);
        next();
      });
      adt.use(req => {
        seen.push('second ' + req.message.messageType);
      });
      server.use('ADT', adt);
      server.use(req => {
        seen.push('after ' + req.message.messageType);
      });
      await sendAll(['ADT^A01', 'ORU^R01']);
      expect(seen).toEqual([
        'first ADT^A01',
        'second ADT^A01',
        'after ADT^A01',
        'after ORU^R01',
      ]);
    });

    it('should answer a message no filtered handler took', async () => {
      server.use('ADT', () => {
        throw new Error('not for ORU');
      });
      client = Hl7Client.createClient({ host: 'localhost', port });
      const ack = await client.sendMessageWaitAck(newMessage('ORU^R01'));
      expect(
        ack
          .getSegment('MSA')!
          .field(MSASegment.AcknowledgmentCode)
          .toHL7String(),
      ).toEqual('AA');
    });
  });
});
