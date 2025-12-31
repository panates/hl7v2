import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import type { HL7Middleware, NextFunction } from './types.js';

export class HL7Router {
  protected _handlerStack = new Map<number, (HL7Middleware | HL7Router)[]>();
  protected _needPrepare = true;
  protected _handlers: HL7Middleware[] = [];

  use(handler: HL7Middleware | HL7Router, priority = 0) {
    let list = this._handlerStack[priority];
    if (!list) {
      list = [];
      this._handlerStack.set(priority, list);
    }
    list.push(handler);
    this._needPrepare = true;
  }

  handle(req: HL7Request, res: HL7Response, callback: () => void) {
    this._prepareStack(true);
    let handlerIdx = -1;
    let callbackCalled = false;
    const doCallback = () => {
      if (callbackCalled) return;
      callbackCalled = true;
      callback();
    };
    const next: NextFunction = async () => {
      try {
        handlerIdx++;
        const handler = this._handlers[handlerIdx];
        if (handler) {
          if (handler.length < 3) {
            await (handler as any)(req, res);
            next();
            return;
          }
          handler(req, res, next);
          return;
        }
        doCallback();
        return;
      } catch (e: any) {
        res.failed(e);
        return next();
      }
    };
    return next();
  }

  protected _prepareStack(root?: boolean) {
    if (!this._needPrepare) return;
    this._needPrepare = false;
    Array.from(this._handlerStack.keys())
      .sort()
      .forEach(p => {
        const list = this._handlerStack.get(p);
        for (const h of list!) {
          if (h instanceof HL7Router) {
            h._prepareStack(false);
            this._handlers.push(...h._handlers);
          } else this._handlers.push(h);
        }
      });

    if (root) {
      const finalHandler: HL7Middleware = (req, res) => {
        if (res.finished || req.message.messageType.startsWith('ACK^')) return;
        req.socket.sendMessage(res.message);
      };
      this._handlers.push(finalHandler);
    }
  }
}
