import process from 'node:process';
import { ERRSegment } from 'hl7v2-dictionary';
import type { HL7RequestContext } from './h-l7-request-context.js';
import { HL7ExchangeError } from './helpers/hl7-exchange-error.js';
import { HL7Middleware, NextFunction } from './types.js';

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

  handle(context: HL7RequestContext, callback: () => void) {
    this._prepareStack(true);
    let handlerIdx = -1;
    let callbackCalled = false;
    const doCallback = () => {
      if (callbackCalled) return;
      callbackCalled = true;
      context.removeListener('finish', onFinish);
      callback();
    };
    const onFinish = () => doCallback();
    context.once('finish', onFinish);
    const next: NextFunction = (err?: Error) => {
      if (context.finished) return;
      context.error = context.error || err;
      try {
        handlerIdx++;
        const handler = this._handlers[handlerIdx];
        if (handler) {
          handler(context, next);
          return;
        }
        doCallback();
      } catch (e: any) {
        next(e);
      }
    };
    next();
  }

  protected _prepareStack(final?: boolean) {
    if (!this._needPrepare) return;
    this._needPrepare = false;
    this._handlers = [];
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
    if (final) {
      const finalHandler: HL7Middleware = (ctx: HL7RequestContext) => {
        if (ctx.finished) return;
        const error =
          ctx.error ||
          new HL7ExchangeError('There is not handler to process this message', {
            request: ctx.request,
          });
        const ack = ctx.request.createAck('AE', error);
        if ((process?.env.NODE_ENV || '').startsWith('dev')) {
          const errSeg = ack.getSegment('ERR');
          if (errSeg)
            errSeg
              .field(ERRSegment.DiagnosticInformation)
              .setValue(error.stack);
        }
        ctx.end(ack);
      };
      this._handlers.push(finalHandler);
    }
  }
}
