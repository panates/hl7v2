/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

const net = require('net');
const {EventEmitter} = require('events');
const {ArgumentError, ErrorEx} = require('errorex');
const iconv = require('iconv-lite');
const HL7Message = require('../HL7Message');
const HL7ProtocolBuffer = require('./HL7ProtocolBuffer');
const {VT, FS, CR} = require('../types');

class HL7Client extends EventEmitter {

  /**
   *
   * @param {Socket} [socket]
   */
  constructor(socket) {
    super();
    if (socket && !(socket instanceof net.Socket))
      throw new ArgumentError('You can provide net.Socket instance as fist argument');
    this._socket = socket;
    this._waitQueue = {};
    this._encoding = 'utf8';
    this._controlIdSeq = 0;
  }

  /**
   *
   * @return {boolean}
   */
  get connected() {
    return !!(this._socket && this._socket._handle);
  }

  /**
   *
   * @return {boolean}
   */
  get connecting() {
    return !!(this._socket && this._socket.connecting);
  }

  get encoding() {
    return this._encoding;
  }

  setEncoding(encoding) {
    if (!iconv.encodingExists(encoding))
      throw new ErrorEx('Unsupported encoding "%s"', encoding);
    this._encoding = encoding;
  }

  /**
   * @param {Object} param1 Options
   * @param {string} [param1.host='localhost']
   * @param {number} [param1.port=2575]
   * @param {string} [param1.localAddress]
   * @param {number} [param1.localPort]
   * @param {number} [param1.family]
   * @param {hints} [param1.hints]
   * @param {Function} [param1.lookup]
   * @method
   * @return {Promise<any>}
   *
   * @param {number} param1 Port number
   * @param {string} [param2='localhost'] Remote address
   * @param {Object} [param3] Options
   * @method
   * @return {Promise<any>}
   */

  connect(param1, param2, param3) {
    return new Promise((resolve, reject) => {
      if (this.connected)
        return resolve();

      let opts;

      if (param1 > 0) {
        if (typeof param3 === 'object')
          opts = param3;
        else if (typeof param2 === 'object')
          opts = param2;
        opts = opts || {};
        opts.port = param1;
        if (typeof param2 === 'string')
          opts.host = param2;
      } else {
        opts = param1;
        if (opts && typeof opts !== 'object')
          throw new ArgumentError('Invalid argument');
      }

      /* istanbul ignore next */
      opts = opts || {};
      opts.host = opts.host || '127.0.0.1';
      /* istanbul ignore next */
      opts.port = opts.port || 2575;

      if (!(opts.port > 0 && opts.port <= 65565))
        throw new ArgumentError('You must provide a valid "port" property');

      const socket = this._socket = this._socket || new net.Socket();
      const buffer = new HL7ProtocolBuffer();
      let connecting = true;

      socket.removeAllListeners('connect');
      socket.removeAllListeners('ready');
      socket.removeAllListeners('data');
      socket.removeAllListeners('error');

      socket.once('connect', () => {
        socket.setTimeout(0);
        this.emitSafe('connect');
        connecting = false;
        resolve();
      });
      socket.once('close', () => this.emitSafe('close'));

      if (opts.timeout)
        socket.setTimeout(opts.timeout, () => {
          const e = new Error('Connect timeout');
          e.code = 'ECONNECTTIMEOUT';
          socket.destroy(e);
          reject(e);
        });

      socket.on('data', data => buffer.write(data));

      socket.on('error', (...args) => {
        /* istanbul ignore else */
        if (connecting)
          reject(...args);
        this.emitSafe('error', ...args);
      });

      buffer.on('block', block => {
        let msg;
        try {
          msg = HL7Message.parse(block, {encoding: opts.encoding});
        } catch (e) /* istanbul ignore next */ {
          e.message = 'Invalid HL7 data received from server. ' + e.message;
          return this.emitSafe('error', e);
        }
        this._onMessage(msg);
      });

      socket.connect(opts);
    });

  }

  close() {
    return new Promise(resolve => {
      if (!this.connected)
        return resolve();
      this._socket.once('close', () => resolve());
      this._socket.destroy();
    });
  }

  /**
   *
   * @param{HL7Message|string} [msg]
   */
  send(msg) {
    return new Promise(resolve => {
      if (typeof msg === 'string')
        msg = HL7Message.parse(msg);

      /* istanbul ignore next */
      if (!(msg instanceof HL7Message))
        throw new ArgumentError('You must provide HL7Message or string argument');
      /* istanbul ignore next */
      if (!this.connected)
        throw new ErrorEx('Not connected');

      /* istanbul ignore next: hard to test */
      if (!msg.MSH.MessageControlId.value)
        msg.MSH.MessageControlId.value = ++this._controlIdSeq;

      const str = msg.toHL7();
      let charset = 'utf8';
      if (msg.MSH[18]) {
        if (this.encoding && !msg.MSH[18].value)
          msg.MSH[18].value = this.encoding;
        charset = msg.MSH[18].value;
      }
      const data = iconv.encode(str, charset);
      this._socket.write(VT);
      this._socket.write(data);
      this._socket.write(FS + CR, () => resolve(msg));
    });
  }

  /**
   *
   * @param{HL7Message|string} message
   * @param{Number} [timeout]
   */
  sendReceive(message, timeout) {
    return this.send(message).then((message) => {
      return new Promise((resolve, reject) => {
        const contId = message.MSH.MessageControlId.value;
        this._waitQueue[contId] = (msg) => resolve(msg);
        if (timeout)
          setTimeout(() => {
            delete this._waitQueue[contId];
            reject(new ErrorEx('Request timed out'));
          }, timeout);
      });
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
   * @param {HL7Message} msg
   * @protected
   */
  _onMessage(msg) {
    const contId = msg.MSH.MessageControlId.value;
    if (this._waitQueue[contId]) {
      const fn = this._waitQueue[contId];
      delete this._waitQueue[contId];
      fn(msg);
      return;
    }
    this.emitSafe('message', msg);
  }
}

module.exports = HL7Client;
