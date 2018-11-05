/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

const net = require('net');
const {EventEmitter} = require('events');
const {ArgumentError} = require('errorex');
const iconv = require('iconv-lite');
const HL7Message = require('../HL7Message');
const HL7MessageRouter = require('./HL7MessageRouter');
const HL7ProtocolBuffer = require('./HL7ProtocolBuffer');
const {VT, FS, CR} = require('../types');

class HL7Server extends EventEmitter {

  /**
   *
   * @param {net.Server} [param1] net.Server
   * @param {Object} [param2]
   * @param {string} [param2.applicationName]
   * @param {string} [param2.facilityName]
   * @param {string} [param2.defaultEncoding]
   * @param {string} [param2.defaultVersion]
   * @param {number} [param2.maxBufferPerSocket]
   */
  constructor(param1, param2) {
    super();
    let options;
    if (param1 instanceof net.Server) {
      this._server = param1;
      options = param2 || {};
    } else
      options = param1 || {};

    this._server = this._server || net.createServer();
    this._sockets = new Set();
    this._router = new HL7MessageRouter((msg, socket) => {
      if (!socket.writable)
        return true;
      const ack = this._createACK(msg, 'AR', 'Server can not response this message');
      socket.send(ack);
      return true;
    });
    this.applicationName = options.applicationName;
    this.facilityName = options.facilityName;
    this.encoding = options.encoding || 'utf8';
    this.maxBufferPerSocket =
        options.maxBufferPerSocket || (1024 * 1024 * 2); // 2 MB
    this.maxErrorsPerSocket = options.maxBufferPerSocket != null ?
        options.maxBufferPerSocket : 5;
    this._controlIdSeq = 0;
  }

  /**
   *
   * @return {Boolean}
   */
  get listening() {
    return this._server.listening;
  }

  get sockets() {
    return this._sockets;
  }

  /**
   *
   * @param{string|Object} [messageType]
   * @param{Function} handler
   * @param{string} handler
   */
  use(messageType, handler) {
    this._router.use.apply(this._router, arguments);
  }

  listen(...args) {
    return new Promise((resolve, reject) => {
      if (this.listening)
        return reject(new Error('Already listening'));

      let starting = true;
      this._sockets.clear();
      this._server.on('connection', (socket) => this._clientConnected(socket));
      this._server.once('close', () => this.emitSafe('close'));
      this._server.on('error',
          /* istanbul ignore next */
          (...args) => {
            if (starting)
              reject(...args);
            this.emitSafe('error', ...args);
          });
      this._server.on('listening', () => {
        starting = false;
        resolve();
      });
      try {
        this._server.listen(...args);
      } catch (e) {
        /* istanbul ignore next */
        reject(e);
      }
    });
  }

  /**
   *
   * @return {Promise<any>}
   */
  close() {
    return new Promise(resolve => {
      if (!this.listening)
        return resolve();
      this._server.close(() => resolve());
      for (const socket of this._sockets.values())
        socket.destroy();
    });
  }

  emitSafe(event, ...args) {
    try {
      if (this.listenerCount(event) > 0)
        this.emit(event, ...args);
    } catch (ignored) {
    }
  }

  /**
   *
   * @param {Socket} socket
   * @private
   */
  _clientConnected(socket) {
    this._sockets.add(socket);
    socket._errorCount = 0;
    socket.buffer = new HL7ProtocolBuffer();
    socket.on('close', () => this._sockets.delete(socket));
    socket.on('data', data => {
      if (socket.buffer.length + data.length > this.maxBufferPerSocket) {
        this.emitSafe('error', new Error('Client ' +
            socket.remoteAddress + ' exceeded max buffer size'));
        socket.destroy();
        return;
      }
      socket.buffer.write(data);
    });
    socket.buffer.on('block', block => {
      let msg;
      // Parse message
      try {
        msg = HL7Message.parse(block, {encoding: this.defaultEncoding});
        socket._errorCount = 0;
      } catch (e) {
        const ack = this._createACK(msg, 'AR',
            'HL7 message parse error' +
            /* istanbul ignore next */
            (e.line ? ' at line' + e.line : '') + '.');
        const err = ack.add('ERR');
        err[1].add().SegmentId.value = e.segmentId || '';
        err[1][0][1].value = e.sequence || '';
        err[1][0][2].value = e.fieldPosition || '';
        err[1][0][3].value = e.sequence || '';
        err[1][0][4].Text.value = e.message;
        socket._errorCount++;
        socket.send(ack).then(
            /* istanbul ignore next: hard to evaluate */
            () => {
              if (socket._errorCount >= this.maxErrorsPerSocket)
                socket.end();
            }).catch(
            /*istanbul ignore next */
            (ignored) => socket.destroy());

        e.message = 'Invalid HL7 data received from ' +
            socket.remoteAddress + '. ' + e.message;
        e.socket = socket;
        this.emitSafe('error', e);
      }

      this._router(msg, socket)
          .catch(e => {
            if (!socket.writable)
              return;
            const ack = this._createACK(msg, 'AE', 'Internal server error');
            const err = ack.add('ERR');
            err[1].add()[4][2].value = e.message;
            socket.send(ack);
          });
    });

    socket.send = function(msg) {
      return new Promise(resolve => {
        /* istanbul ignore next: same in client */
        if (typeof msg === 'string')
          msg = HL7Message.parse(msg);

        /* istanbul ignore next */
        if (!(msg instanceof HL7Message))
          throw new ArgumentError('You must provide HL7Message or string argument');

        const str = msg.toHL7();
        let charset = 'utf8';
        /* istanbul ignore next: same in client */
        if (msg.MSH[18]) {
          if (this.encoding && !msg.MSH[18].value)
            msg.MSH[18].value = this.encoding;
          charset = msg.MSH[18].value || charset;
        }
        const data = iconv.encode(str, charset);
        socket.write(VT);
        socket.write(data);
        socket.write(FS + CR, () => resolve());
      });
    };
  }

  /**
   *
   * @param {HL7Message} req
   * @param {string} ackCode
   * @param {string} textMessage
   * @return {HL7Message}
   * @private
   */
  _createACK(req, ackCode, textMessage) {
    const ack = new HL7Message({
      version: (req && req.MSH.VersionId.value) || '2.5'
    });
    const msh = ack.add('MSH');
    msh[3].value = this.applicationName;
    msh[4].value = this.facilityName;
    msh[5].value = (req && req.MSH.SendingApplication.value) || '';
    msh[6].value = (req && req.MSH.SendingFacility.value) || '';
    msh[9].value = 'ACK';
    msh[10].value = (req && req.MSH.MessageControlId.value) ||
        (++this._controlIdSeq);

    const msa = ack.add('MSA');
    msa[1].value = ackCode;
    msa[2].value = msh[10].value;
    msa[3].value = textMessage;
    return ack;
  }

}

module.exports = HL7Server;
