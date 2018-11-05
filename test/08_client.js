/* eslint-disable */
const assert = require('assert');
const {EventEmitter} = require('events');
const fs = require('fs');
const path = require('path');
const net = require('net');
const tls = require('tls');
const {HL7Message, HL7Client} = require('../');
const {VT, FS, CR} = require('../lib/types');

const sampleMessage1 = `MSH|^~\\&|LCS|LCA|LIS|TEST9999|19980731153200||ORU^R01|1234|P|2.5
PID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924000000|M|||^^^^00000-0000|||||||86427531^^^03|SSN# HERE
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|1|8642753100012^LIS|20809880170^LCS|008342^UPPER RESPIRATORY CULTURE^L|||19980727175800||||||SS#634748641 CH14885 SRC:THROA SRC:PENI|19980727000000||||||20809880170||19980730041800||BN|F
OBX|1|ST|008342^UPPER RESPIRATORY CULTURE^L||FINALREPORT|||||N|F|||19980729160500|BN
ORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND
OBR|2|8642753100012^LIS|20809880170^LCS|997602^.^L|||19980727175800||||G|||19980727000000||||||20809880170||19980730041800|||F|997602|||008342
OBX|2|CE|997231^RESULT 1^L||M415|||||N|F|||19980729160500|BN
NTE|1|L|MORAXELLA (BRANHAMELLA) CATARRHALIS
NTE|2|L|HEAVY GROWTH
NTE|3|L|BETA LACTAMASE POSITIVE
OBX|3|CE|997232^RESULT 2^L||MR105|||||N|F|||19980729160500|BN
NTE|1|L|ROUTINE RESPIRATORY FLORA
`.replace(/\n/, '\r');
const ack1 = `MSH|^~\\&|LCA|LCS|AcmeHIS|StJohn|19980731153200||ACK^O01|1234|P|2.2
MSA|AA|3629`.replace(/\n/, '\r');

describe('HL7Client', function() {

  const ev = new EventEmitter();
  const sockets = new Set();
  const tlssockets = new Set();
  let server;
  let tlsserver;
  let client;
  let msg1;
  let receivedData = [];
  const tlsoptions = {
    key: fs.readFileSync(path.resolve(__dirname, './support/private-key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './support/public-cert.pem')),
    rejectUnauthorized: false,
    port: 8081
  };

  function listenerOnData() {
    if (receivedData.length)
      return Promise.resolve(receivedData.shift());
    return new Promise(resolve => {
      ev.once('data', () => {
        return resolve(receivedData.shift());
      });
    });
  }

  before(function(done) {
    msg1 = HL7Message.parse(sampleMessage1);

    server = net.createServer();
    server.on('connection', (socket) => {
      sockets.add(socket);
      socket.on('data', (data) => {
        receivedData.push(data);
        ev.emit('data');
        setTimeout(() => {
          if (!socket.destroyed)
            socket.write(VT + ack1 + FS + CR);
        }, 10);
      });
      socket.on('close', () => sockets.delete(socket));
    });
    server.on('listening', () => {
      try {
        tlsserver = tls.createServer({
          key: fs.readFileSync(path.resolve(__dirname, './support/private-key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, './support/public-cert.pem')),
          rejectUnauthorized: false
        });
      } catch (e) {
        return done(e);
      }
      tlsserver.on('secureConnection', (socket) => {
        tlssockets.add(socket);
        socket.on('data', (data) => {
          receivedData.push(data);
          ev.emit('data');
          setTimeout(() => {
            if (!socket.destroyed)
              socket.write(VT + ack1 + FS + CR);
          }, 10);
        });
        socket.on('close', () => {
          socket.destroy();
          tlssockets.delete(socket);
        });
      });
      tlsserver.on('listening', () => done());
      tlsserver.on('error', (e) => done(e));
      tlsserver.listen(8081);
    });
    server.on('error', (e) => done(e));
    server.listen(8080);

  });

  after(function() {
    client && client.close();
    for (const socket of sockets.values()) {
      socket.destroy();
    }
    server.close();
    for (const socket of tlssockets.values()) {
      socket.destroy();
    }
    tlsserver.close();
  });

  it('should construct', function() {
    const client = new HL7Client();
    assert(client instanceof HL7Client);
    assert.equal(client.connected, false);
    assert.equal(client.connecting, false);
  });

  it('should construct with existing socket', function() {
    const socket = new net.Socket({host: 'localhost', port: 8080});
    const client = new HL7Client(socket);
    assert(client instanceof HL7Client);
    assert.equal(client._extSocket, socket);
    assert.equal(client.connected, false);
    assert.equal(client.connecting, false);
  });

  it('should construct validate argument', function() {
    try {
      client = new HL7Client(1234);
    } catch (e) {
      if (e.message.includes('You can provide'))
        return;
      throw e;
    }
    assert(0, 'Failed');
  });

  it('should set encoding', function() {
    const client = new HL7Client();
    client.setEncoding('win1254');
    assert.equal(client.encoding, 'win1254');
  });

  it('should setEncoding() validate argument', function() {
    try {
      const client = new HL7Client();
      client.setEncoding('abcde');
    } catch (e) {
      if (e.message.includes('Unsupported encoding'))
        return;
      throw e;
    }
    assert(0, 'Failed');
  });

  it('should connect() validate argument', function(done) {
    client = new HL7Client();
    client.connect('sfdasf')
        .then(() => done('Failed'))
        .catch(e => {
          if (e.message.includes('Invalid argument'))
            return done();
          done(e);
        });
  });

  it('should validate port number', function(done) {
    client = new HL7Client();
    client.connect(66000)
        .then(() => done('Failed'))
        .catch(e => {
          if (e.message.includes('You must provide a valid'))
            return done();
          done(e);
        });
  });

  it('should connect(port)', function() {
    client = new HL7Client();
    return client.connect(8080).then(() => client.close());
  });

  it('should connect(port, host)', function() {
    client = new HL7Client();
    return client.connect(8080, 'localhost').then(() => client.close());
  });

  it('should connect(port, host, options)', function() {
    client = new HL7Client();
    return client.connect(8080, 'localhost', {timeout: 1000})
        .then(() => client.close());
  });

  it('should connect(port, options)', function() {
    client = new HL7Client();
    return client.connect(8080, {host: 'localhost', timeout: 1000})
        .then(() => client.close());
  });

  it('should connect(options)', function() {
    client = new HL7Client();
    return client.connect({port: 8080, host: 'localhost'})
        .then(() => client.close());
  });

  it('should connect to secure server', function() {
    client = new HL7Client();
    return client.connect(tlsoptions)
        .then(() => client.close());
  });

  it('should connect() return resolved promise if already connected', function() {
    client = new HL7Client();
    return client.connect(8080)
        .then(() => client.connect())
        .then(() => client.close());
  });

  it('should connect(...args) return rejected promise if already connected', function(done) {
    client = new HL7Client();
    client.connect(8080)
        .then(() =>
            client.connect(8080)
                .catch(e => {
                  if (!e.message.includes('Already'))
                    return done(e);
                  client.close().then(() => done());
                }));
  });

  it('can reconnect after close', function() {
    client = new HL7Client();
    return client.connect(8080)
        .then(() => client.close())
        .then(() => client.connect(8080))
        .then(() => client.close());
  });

  it('should close() return resolved promise if already closed', function() {
    client = new HL7Client();
    return client.connect(8080).then(() =>
        client.close().then(() => client.close()));
  });

  it('should connect() rejected promise after timeout', function() {
    client = new HL7Client();
    return client.connect(8080).then(() => {
      return client.connect().then(() => client.close());
    });
  });

  it('should connect() return rejected promise after timeout', function(done) {
    client = new HL7Client();
    client.connect(8081, 'tempuri.org', {timeout: 1})
        .then(() => done('Failed'))
        .catch(e => {
          if (e.message.includes('timeout'))
            return done();
          done(e);
        });
  });

  it('should send HL7Message', function() {
    client = new HL7Client();
    return client.connect(8080).then(() => {
      return client.send(msg1).then(() => {
        return listenerOnData().then(data => {
          assert(data, VT + sampleMessage1 + FS + CR);
          return client.close();
        });
      });
    });
  });

  it('should send string hl7 message', function() {
    client = new HL7Client();
    return client.connect(8080).then(() => {
      return client.send(sampleMessage1).then(() => {
        return listenerOnData().then(data => {
          assert(data, VT + sampleMessage1 + FS + CR);
          return client.close();
        });
      });
    });
  });

  it('should send message and receive response', function() {
    client = new HL7Client();
    return client.connect(8080).then(() => {
      return client.sendReceive(msg1).then(resp => {
        assert.equal(resp.MSH.MessageControlId.value, msg1.MSH.MessageControlId.value);
        return client.close();
      });
    });
  });

  it('should send HL7Message to secure server', function() {
    client = new HL7Client();
    return client.connect(tlsoptions).then(() => {
      return client.send(msg1).then(() => {
        return listenerOnData().then(data => {
          assert(data, VT + sampleMessage1 + FS + CR);
          return client.close();
        });
      });
    });
  });

  it('should send message and receive response from secure server', function() {
    client = new HL7Client();
    return client.connect(tlsoptions).then(() => {
      return client.sendReceive(msg1).then(resp => {
        assert.equal(resp.MSH.MessageControlId.value, msg1.MSH.MessageControlId.value);
        return client.close();
      });
    });
  });

  it('should send message and wait till given time', function(done) {
    client = new HL7Client();
    client.connect(8080).then(() => {
      return client.sendReceive(msg1, 1)
          .then(() => done('Failed'))
          .catch(e => {
            if (e.message.includes('timed out'))
              return done();
            done(e);
          });
    });
  });

  it('should use external socket instance', function(done) {
    const socket = new net.Socket();
    socket.connect(8080, 'localhost');
    socket.once('connect', () => {
      client = new HL7Client(socket);
      client.close()
          .then(() => client.connect(8080))
          .then(() => client.close())
          .then(() => done());
    });

  });

  it('can reconnect after close (external socket)', function() {
    client = new HL7Client();
    return client.connect(8080)
        .then(() => client.close())
        .then(() => client.connect(8080))
        .then(() => client.close());
  });

  describe('events', function() {

    it('should emit "connect"', function(done) {
      client = new HL7Client();
      client.on('connect', () => {
        assert.equal(client.connected, true);
        client.close();
        done();
      });
      client.connect(8080);
    });

    it('should emit "close"', function(done) {
      client = new HL7Client();
      client.on('close', () => {
        assert.equal(client.connected, false);
        done();
      });
      client.connect(8080).then(() => client.close());
    });

    it('should emit "error"', function(done) {
      client = new HL7Client();
      client.on('error', (ignored) => {
        done();
      });
      client.connect(8082).catch(() => {});
    });

    it('should emit "message"', function(done) {
      client = new HL7Client();
      client.on('message', (resp) => {
        assert.equal(resp.MSH.MessageControlId.value, msg1.MSH.MessageControlId.value);
        done();
      });
      client.connect(8080).then(() =>
          client.send(msg1));
    });

  });

});
