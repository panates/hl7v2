/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

const {EventEmitter} = require('events');
const {VT, FS, CR} = require('../types');

class HL7ProtocolBuffer extends EventEmitter {

  /**
   *
   */
  constructor() {
    super();
    this._buffers = [];
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  /**
   *
   * @param {Buffer|Array|Uint8Array|string} bufs...
   */
  write(...bufs) {
    for (let buf of bufs) {
      buf = buf instanceof Buffer ? buf : Buffer.from(buf);
      if (buf.includes(FS)) {
        let all;
        if (this._buffers.length) {
          this._buffers.push(buf);
          all = Buffer.concat(this._buffers);
          this._buffers = [];
          this._length = 0;
        } else
          all = buf;

        do {
          const m = all.indexOf(VT);
          /* if no VT found, we must clear cache */
          if (m < 0) {
            this._buffers = [];
            this._length = 0;
            return;
          }

          let n = all.indexOf(FS, m + 1);
          /* if no FS found, we can not continue */
          /* istanbul ignore next */
          if (n < 0) return;

          if (all[n + 1] === CR.charCodeAt(0))
            n++;

          if (m > 0 || n < all.length - 1) {
            const b1 = Buffer.allocUnsafe(n - m + 1);
            all.copy(b1, 0, m, n + 1);
            if (all.length - n - 1 > 0) {
              const b2 = Buffer.allocUnsafe(all.length - n - 1);
              all.copy(b2, 0, n + 1);
              all = b2;
            } else all = null;
            this.emit('block', b1);
          } else {
            this.emit('block', all);
            all = null;
          }
        } while (all && all.includes(FS));
        if (all) {
          this._buffers.push(all);
          this._length = all.length;
        }

      } else {
        this._buffers.push(buf);
        this._length += buf.length;
      }
    }
  }

}

module.exports = HL7ProtocolBuffer;
