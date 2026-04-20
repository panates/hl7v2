import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import type {
  HL7ErrorMiddleware,
  HL7Middleware,
  NextFunction,
} from './types.js';

export class HL7Router {
  protected _handlerStack = new Map<number, (HL7Middleware | HL7Router)[]>();
  protected _errorHandlerStack = new Map<
    number,
    (HL7ErrorMiddleware | HL7Router)[]
  >();
  protected _needPrepare = true;
  declare protected _handlers: HL7Middleware[];
  declare protected _errorHandlers: HL7ErrorMiddleware[];

  use(handler: HL7Middleware | HL7Router, priority = 0) {
    let list = this._handlerStack.get(priority);
    if (!list) {
      list = [];
      this._handlerStack.set(priority, list);
    }
    list.push(handler);
    this._needPrepare = true;
  }

  onError(handler: HL7ErrorMiddleware | HL7Router, priority = 0) {
    let list = this._errorHandlerStack.get(priority);
    if (!list) {
      list = [];
      this._errorHandlerStack.set(priority, list);
    }
    list.push(handler);
    this._needPrepare = true;
  }

  handle(req: HL7Request, res: HL7Response, callback: (err?: Error) => void) {
    this._prepareStack();
    let callbackCalled = false;
    this._handle(req, res, err => {
      if (callbackCalled) return;
      callbackCalled = true;
      try {
        if (err) res.failed(err);
        this._finalHandler(req, res);
        callback(err);
      } catch (e: any) {
        callback(e instanceof Error ? e : new Error(e));
      }
    });
  }

  protected _handle(
    req: HL7Request,
    res: HL7Response,
    callback: (err?: Error) => void,
  ) {
    let handlerIdx = -1;
    const next: NextFunction = async (err: any) => {
      if (err) {
        this._handleError(err, req, res, callback);
        return;
      }
      try {
        handlerIdx++;
        const handler = this._handlers[handlerIdx];
        if (!handler) return callback();
        if (handler.length < 3) {
          await (handler as any)(req, res);
          next();
          return;
        }
        await (handler as Function)(req, res, next);
      } catch (e: any) {
        this._handleError(e, req, res, callback);
      }
    };
    next();
  }

  protected _handleError(
    error: any,
    req: HL7Request,
    res: HL7Response,
    callback: (err?: any) => void,
  ) {
    let handlerIdx = -1;
    const next: NextFunction = async (err: any) => {
      if (err) error = err;
      try {
        handlerIdx++;
        const handler = this._errorHandlers[handlerIdx];
        if (!handler) return callback(error);
        if (handler.length < 4) {
          await (handler as any)(error, req, res);
          next();
          return;
        }
        await (handler as Function)(error, req, res, next);
      } catch (e: any) {
        callback(e);
      }
    };
    return next(error);
  }

  protected _prepareStack() {
    if (!this._needPrepare) return;
    this._needPrepare = false;
    this._handlers = [];
    this._errorHandlers = [];
    Array.from(this._handlerStack.keys())
      .sort()
      .forEach(p => {
        const list = this._handlerStack.get(p);
        for (const x of list!) {
          if (x instanceof HL7Router) {
            x._prepareStack();
            this._handlers.push(...x._handlers);
          } else {
            this._handlers.push(x);
          }
        }
      });
    Array.from(this._errorHandlerStack.keys())
      .sort()
      .forEach(p => {
        const list = this._errorHandlerStack.get(p);
        for (const x of list!) {
          if (x instanceof HL7Router) {
            x._prepareStack();
            this._errorHandlers.push(...x._errorHandlers);
          } else {
            this._errorHandlers.push(x);
          }
        }
      });
  }

  protected _finalHandler(req: HL7Request, res: HL7Response) {
    if (!res.finished) req.socket.sendMessage(res.message);
  }
}
