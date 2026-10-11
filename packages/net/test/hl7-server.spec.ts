import net, { type AddressInfo } from 'node:net';
import { expect } from 'expect';
import { CR, FS, HL7Message, MSASegment, MSHSegment, VT } from 'hl7v2';
import { Hl7Client, HL7Server } from '../src/index.js';

describe('net:server', () => {
  let server: HL7Server | undefined;
  let client: Hl7Client;

  afterEach(async () => {
    await client?.close();
    await server?.close();
  });

  it('should construct', async () => {
    server = HL7Server.createServer();
    expect(server).toBeDefined();
  });

  it('should listen than close', async () => {
    server = HL7Server.createServer();
    await server.listen(0);
    expect(server.address()).toBeDefined();
    expect(server.listening).toBe(true);
  });

  it('should receive hl7 messages', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let req: HL7Message | undefined;
    let res: HL7Message | undefined;
    server.use((_req, _res) => {
      req = _req.message;
      res = _res.message;
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    expect(req).toBeDefined();
    expect(res).toBeDefined();
    expect(msg.toHL7String()).toEqual(req!.toHL7String());
    expect(resp.toHL7String()).toEqual(res!.toHL7String());
    expect(msg.controlId).toEqual(
      res!.getSegment('MSA')?.field(MSASegment.MessageControlID).toHL7String(),
    );
  });

  it('should send ack if no middle-ware handles the message', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.header.field(MSHSegment.CharacterSet).fromHL7String('UNICODE UTF-8');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    const msa = resp.getSegment('MSA');
    expect(msa).toBeDefined();
    expect(
      msa?.field(MSASegment.AcknowledgmentCode).toHL7String(),
    ).toStrictEqual('AA');
  });

  it('should send nak if error in middle-wares', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    server.use(() => {
      throw new Error('test error');
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.addSegment('PID');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp).toBeDefined();
    expect(resp.messageType).toEqual('ACK^R01');
    const msa = resp.getSegment('MSA');
    expect(msa).toBeDefined();
    expect(
      msa?.field(MSASegment.AcknowledgmentCode).toHL7String(),
    ).toStrictEqual('AE');
    expect(msa?.field(MSASegment.TextMessage).toHL7String()).toStrictEqual(
      'test error',
    );
  });

  it('should send nak if message is not valid', done => {
    server = HL7Server.createServer(undefined, {
      parseStrict: true,
    });
    server.once('send', resp => {
      try {
        expect(resp).toBeDefined();
        expect(resp!.messageType).toEqual('ACK^R01');
        const msa = resp!.getSegment('MSA');
        expect(msa).toBeDefined();
        expect(
          msa?.field(MSASegment.AcknowledgmentCode).toHL7String(),
        ).toStrictEqual('AE');
        expect(msa?.field(MSASegment.TextMessage).toHL7String()).toContain(
          'wrong data type',
        );
        done();
      } catch (e) {
        done(e);
      }
    });
    server
      .listen(12345)
      .then(() => {
        const socket = net.connect({ port: 12345 });
        socket.write(
          VT + 'MSH|^~\\&|||||xyz||ORU^R01^ORU_R01|28391|P|2.6\n' + FS + CR,
        );
        socket.end();
      })
      .catch(done);
  });

  it('should wait running handlers for shutdownWait time', function (done) {
    this.slow(500);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    server = HL7Server.createServer();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    server.use((req, res, next) => {
      const t1 = Date.now();
      setTimeout(() => {
        server!.close(100).then(() => {
          try {
            expect(Date.now() - t1).toBeGreaterThan(100);
            done();
          } catch (e) {
            done(e);
          }
        });
      }, 10);
    });

    const msg = new HL7Message();
    server
      .listen(12345)
      .then(() => {
        client.connect().then(() => client.sendMessageWaitAck(msg));
      })
      .catch(e => done(e));
  });

  it('should close immediately if there is no message to response', function (done) {
    this.slow(500);
    this.timeout(10000);
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    server = HL7Server.createServer();
    client.connect().then(() => {
      const t1 = Date.now();
      server!.close(5000).then(() => {
        try {
          const n = Date.now() - t1;
          expect(n).toBeLessThan(100);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
    server.listen(12345).catch(e => done(e));
  });

  it('should listen() reject on lister error', function (done) {
    this.slow(500);
    this.timeout(10000);
    server = HL7Server.createServer();
    server.listen(12345).catch(e => done(e));
    const server2 = HL7Server.createServer();
    server2.listen(12345).catch(() => done());
  });

  it('should keep MSH-18 repetitions and encode with the first non-empty one', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let req: HL7Message | undefined;
    server.use(_req => {
      req = _req.message;
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.header.field(MSHSegment.CharacterSet).fromHL7String('~UNICODE UTF-8');
    msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
    await client.sendMessageWaitAck(msg);
    expect(
      req!.header.field(MSHSegment.CharacterSet).toHL7String(),
    ).toStrictEqual('~UNICODE UTF-8');
    expect(req!.getSegment('PID')!.field(5).toHL7String()).toStrictEqual(
      'Şahin^Gül',
    );
  });

  it('should transliterate what the charset cannot hold', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let req: HL7Message | undefined;
    server.use(_req => {
      req = _req.message;
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.header.field(MSHSegment.CharacterSet).fromHL7String('ASCII');
    msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
    await client.sendMessageWaitAck(msg);
    expect(req!.getSegment('PID')!.field(5).toHL7String()).toStrictEqual(
      'Sahin^Gul',
    );
  });

  it('should exchange UTF-16 messages, as HAPI writes them', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    let req: HL7Message | undefined;
    server.use(_req => {
      req = _req.message;
    });
    client = Hl7Client.createClient({ host: 'localhost', port: 12345 });
    const msg = new HL7Message();
    msg.header.field(MSHSegment.MessageType).fromHL7String('ORU^R01');
    msg.header.field(MSHSegment.CharacterSet).fromHL7String('UNICODE UTF-16');
    msg.addSegment('PID').field(5).fromHL7String('Şahin^Gül');
    const resp = await client.sendMessageWaitAck(msg);
    expect(resp.messageType).toEqual('ACK^R01');
    expect(req!.getSegment('PID')!.field(5).toHL7String()).toStrictEqual(
      'Şahin^Gül',
    );
  });

  it('should survive a frame whose header cannot be read', async () => {
    server = HL7Server.createServer();
    await server.listen(12345);
    const errors: Error[] = [];
    server.on('error', e => errors.push(e));
    const socket = net.connect(12345, 'localhost');
    await new Promise<void>(resolve => socket.once('connect', resolve));
    socket.write(Buffer.from(VT + 'NOT HL7' + FS + CR));
    await new Promise(resolve => setTimeout(resolve, 100));
    socket.destroy();
    expect(errors.map(e => e.message)).toEqual([
      'Message must start with (MSH) segment',
    ]);
    expect(server.listening).toBe(true);
  });
});

describe('net:server - fixes from the API review', () => {
  it('should sign its acknowledgments with applicationName and facilityName', async () => {
    const server = HL7Server.createServer(undefined, {
      applicationName: 'GATE^1.2.3^ISO',
      facilityName: 'HOSP',
    });
    await server.listen(0);
    const port = (server.address() as AddressInfo).port;
    const client = Hl7Client.createClient({ host: 'localhost', port });
    const msg = new HL7Message('2.5');
    msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A01');
    msg.header.field(MSHSegment.ReceivingApplication).setValue('OTHER');
    const ack = await client.sendMessageWaitAck(msg);
    expect(
      ack.header.field(MSHSegment.SendingApplication).toHL7String(),
    ).toEqual('GATE^1.2.3^ISO');
    expect(ack.get('MSH-4')).toEqual('HOSP');
    expect(server.connections).toEqual(1);
    await client.close();
    let closes = 0;
    server.on('close', () => closes++);
    await server.close();
    expect(closes).toEqual(1);
  });

  it('should not pass on a frame over maxBufferPerSocket', async () => {
    const server = HL7Server.createServer(undefined, {
      maxBufferPerSocket: 200,
    });
    let routed = 0;
    server.use(() => {
      routed++;
    });
    server.on('error', () => undefined);
    await server.listen(0);
    const port = (server.address() as AddressInfo).port;
    await new Promise<void>(resolve => {
      const socket = net.connect({ port }, () => {
        socket.write(
          '\x0bMSH|^~\\&|A|B|C|D|20250101||ADT^A01|1|P|2.5\rNTE|1||' +
            'x'.repeat(500) +
            '\x1c\r',
        );
      });
      socket.on('close', () => resolve());
      socket.on('error', () => undefined);
    });
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(routed).toEqual(0);
    await server.close();
  });

  it('should take error handlers on the client too', async () => {
    const server = HL7Server.createServer();
    await server.listen(0);
    const port = (server.address() as AddressInfo).port;
    const client = Hl7Client.createClient({ host: 'localhost', port });
    const errors: string[] = [];
    client.use(() => {
      throw new Error('handler failed');
    });
    client.onError(err => {
      errors.push(err.message);
    });
    await client.connect();
    await new Promise(resolve => setTimeout(resolve, 50));
    const [socket] = (server as any)._sockets as Set<any>;
    const msg = new HL7Message('2.5');
    msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08');
    const ack = await socket.sendMessageWaitAck(msg);
    expect(ack.get('MSA-1')).toEqual('AE');
    expect(errors).toEqual(['handler failed']);
    await client.close();
    await server.close();
  });
});
