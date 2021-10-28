/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

const {ArgumentError} = require('errorex');
const {Callable} = require('putil-callable');
const waterfall = require('putil-waterfall');

class HL7MessageRouter extends Callable {

  constructor(defaultHandler) {
    super();
    this._handlers = [];
    this._defaultHandler = {handler: defaultHandler};
  }

  /**
   *
   * @param{string|Object} [messageType]
   * @param{Function} handler
   */
  use(messageType, handler) {
    if (typeof messageType === 'function') {
      handler = messageType;
      messageType = null;
    }
    if (typeof messageType === 'string' || Array.isArray(messageType)) {
      messageType = {messageType};
    }
    if (typeof handler !== 'function')
      throw new ArgumentError('You must provide "handler" function as first argument');
    messageType = messageType || {};
    messageType.handler = handler;
    this._handlers.push(messageType);
  }

  /**
   *
   * @param {HL7Message} req
   * @param {...*} args
   * @return {Promise}
   * @private
   */
  __call__(req, ...args) {
    if (!req) 
      throw new Error('Request was undefined');
    return waterfall.some([...this._handlers,
      this._defaultHandler], (next, o) => {
      if (!o.handler)
        return next(null);
      const messageType = req.MSH.MessageType.toHL7();
      const versionId = req.MSH.VersionId.toHL7();

      if (o.messageType) {
        if (Array.isArray(o.messageType)) {
          if (!o.messageType.includes(messageType))
            return next();
        } else if (o.messageType !== messageType)
          return next();
      }
      if (o.versionId) {
        if (Array.isArray(o.versionId)) {
          if (!o.versionId.includes(versionId))
            return next();
        } else if (o.versionId !== versionId)
          return next();
      }
      return Promise.resolve(o.handler(req, ...args));
    });
  }

}

module.exports = HL7MessageRouter;
