import type { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7ErrorMiddleware, HL7Middleware, NextFunction } from './types.js';

export class HL7Router {
  protected _allHandlers: Record<
    number,
    (HL7Middleware | HL7ErrorMiddleware)[]
  > = {};
  protected _needPrepare?: boolean;
  protected _handlers: HL7Middleware[] = [];
  protected _errorHandlers: HL7ErrorMiddleware[] = [];

  use(handler: HL7Middleware | HL7ErrorMiddleware | HL7Router, priority = 0) {
    let list = this._allHandlers[priority];
    if (!list) {
      list = [];
      this._allHandlers[priority] = list;
    }
    if (typeof handler === 'function') list.push(handler);
    else {
      // noinspection SuspiciousTypeOfGuard
      if (handler instanceof HL7Router) {
        list.push((req, res, next) => {
          handler.handle(undefined, req, res, error => {
            if (!res.finished) next(error);
          });
        });
        list.push((err, req, res, next) => {
          handler.handle(err, req, res, error => {
            if (!res.finished) next(error);
          });
        });
      } /* c8 ignore else */ else {
        throw new TypeError('Router handler must be a function or HL7Router');
      }
    }
    this._needPrepare = true;
  }

  handle(
    error: Error | undefined,
    req: HL7Request,
    res: HL7Response,
    callback: (err?: Error) => void,
  ) {
    this._prepareStack();
    let errIdx = -1;
    let handlerIdx = -1;
    let lastErr: Error | undefined;
    let callbackCalled = false;
    const doCallback = (err?: any) => {
      if (callbackCalled) return;
      callbackCalled = true;
      res.removeListener('finish', onFinish);
      callback(err);
    };
    const onFinish = () => doCallback();
    res.once('finish', onFinish);
    const next: NextFunction = (err?: Error) => {
      lastErr = err || lastErr;
      if (res.finished) {
        doCallback();
        return;
      }
      try {
        if (err) {
          errIdx++;
          const handler = this._errorHandlers[errIdx];
          if (!handler) {
            doCallback(lastErr);
            return;
          }
          handler(err, req, res, next);
          return;
        } else {
          handlerIdx++;
          const handler = this._handlers[handlerIdx];
          if (!handler) {
            doCallback(lastErr);
            return;
          }
          handler(req, res, next);
          return;
        }
      } catch (e: any) {
        next(e);
      }
    };
    next(error);
  }

  protected _prepareStack() {
    if (!this._needPrepare) return;
    delete this._needPrepare;
    this._errorHandlers = [];
    this._handlers = [];
    Object.keys(this._allHandlers).forEach(p => {
      const h = this._allHandlers[p];
      if (h.length === 4) this._errorHandlers.push(...h);
      else this._handlers.push(...h);
    });
  }
}
