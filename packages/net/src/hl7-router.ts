import { compileFilter } from './helpers/message-filter.js';
import type { HL7Request } from './hl7-request.js';
import type { HL7Response } from './hl7-response.js';
import type {
  HL7ErrorMiddleware,
  HL7MessageFilter,
  HL7Middleware,
  HL7ResponseHook,
  NextFunction,
} from './types.js';

/** A router added for some messages only: its handlers run for those */
interface FilteredRouter {
  router: HL7Router;
  test: (req: HL7Request) => boolean;
}

export class HL7Router {
  protected _handlerStack = new Map<
    number,
    (HL7Middleware | HL7Router | FilteredRouter)[]
  >();
  protected _errorHandlerStack = new Map<
    number,
    (HL7ErrorMiddleware | HL7Router)[]
  >();
  protected _responseHooks: HL7ResponseHook[] = [];
  protected _needPrepare = true;
  declare protected _handlers: HL7Middleware[];
  declare protected _errorHandlers: HL7ErrorMiddleware[];
  declare protected _hooks: HL7ResponseHook[];

  /**
   * Adds a handler, or another router, for every message - or, given a
   * filter first, for the messages it matches (see HL7MessageFilter):
   * `router.use('ADT^A01', handler)`, `router.use('ORU', ouRouter)`.
   * Handlers run in ascending priority order (default 0), then in the
   * order they were added.
   */
  use(handler: HL7Middleware | HL7Router, priority?: number): void;
  use(
    filter: HL7MessageFilter,
    handler: HL7Middleware | HL7Router,
    priority?: number,
  ): void;
  use(...args: any[]): void {
    let filter: HL7MessageFilter | undefined;
    if (
      typeof args[0] === 'string' ||
      Array.isArray(args[0]) ||
      (typeof args[0] === 'function' &&
        args[1] !== undefined &&
        typeof args[1] !== 'number')
    ) {
      filter = args.shift();
    }
    const [handler, priority = 0] = args as [
      HL7Middleware | HL7Router,
      number?,
    ];
    let entry: HL7Middleware | HL7Router | FilteredRouter = handler;
    if (filter !== undefined) {
      const test = compileFilter(filter);
      entry =
        handler instanceof HL7Router
          ? { router: handler, test }
          : filtered(handler, test);
    }
    let list = this._handlerStack.get(priority);
    if (!list) {
      list = [];
      this._handlerStack.set(priority, list);
    }
    list.push(entry);
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

  /**
   * Adds a hook called with every answer to a request before it is sent -
   * accept and application acknowledgments, NAKs, a handler's own replies -
   * to change it in place, return another message to send instead, or
   * return null to send nothing (see HL7ResponseHook). Hooks run in the
   * order added, each given what the one before returned; a router's own
   * before those of the routers added to it, which see only the messages
   * those take. For senders that read acknowledgments their own way.
   */
  beforeResponse(hook: HL7ResponseHook) {
    this._responseHooks.push(hook);
    this._needPrepare = true;
  }

  /** The beforeResponse hooks of this router and the routers added to it, in order */
  get responseHooks(): HL7ResponseHook[] {
    this._prepareStack();
    return this._hooks;
  }

  handle(req: HL7Request, res: HL7Response, callback: (err?: Error) => void) {
    this._prepareStack();
    let callbackCalled = false;
    this._handle(req, res, err => {
      if (callbackCalled) return;
      callbackCalled = true;
      try {
        if (err) res.failed(err);
        /* Held back until processed: the accept acknowledgment goes first */
        req.sendAccept(res.error);
        this._finalHandler(req, res);
        callback(err);
      } catch (e: any) {
        callback(e instanceof Error ? e : new Error(e));
      } finally {
        res.dispose();
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
    this._hooks = [...this._responseHooks];
    Array.from(this._handlerStack.keys())
      .sort((a, b) => a - b)
      .forEach(p => {
        const list = this._handlerStack.get(p);
        for (const x of list!) {
          if (x instanceof HL7Router) {
            x._prepareStack();
            this._handlers.push(...x._handlers);
            this._hooks.push(...x._hooks);
          } else if (typeof x === 'object') {
            x.router._prepareStack();
            this._handlers.push(
              ...x.router._handlers.map(h => filtered(h, x.test)),
            );
            this._hooks.push(
              ...x.router._hooks.map(
                (hook): HL7ResponseHook =>
                  (response, context) =>
                    x.test(context.request)
                      ? hook(response, context)
                      : undefined,
              ),
            );
          } else {
            this._handlers.push(x);
          }
        }
      });
    Array.from(this._errorHandlerStack.keys())
      .sort((a, b) => a - b)
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
    /** Unless the request's MSH-16 asks for no such acknowledgment */
    if (!res.finished && res.acknowledgmentWanted) {
      req.send(res.message, 'application', res.error);
    }
  }
}

/** A handler that runs for the messages the test accepts and passes the others on */
function filtered(
  handler: HL7Middleware,
  test: (req: HL7Request) => boolean,
): HL7Middleware {
  return async (req: HL7Request, res: HL7Response, next: NextFunction) => {
    if (!test(req)) return next();
    if (handler.length < 3) {
      await (handler as any)(req, res);
      return next();
    }
    return (handler as any)(req, res, next);
  };
}
