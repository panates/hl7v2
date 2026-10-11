import type { Buffer } from 'node:buffer';
import net from 'node:net';
import tls from 'node:tls';
import type { HL7BatchFile, HL7Message, HL7ValidateOptions } from 'hl7v2';
import { MSHSegment } from 'hl7v2';
import type { AddressInfo, ListenOptions, Socket } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { uid } from 'uid';
import {
  acceptMessage,
  ackModeOf,
  type HL7AcceptAcknowledgment,
} from './helpers/acknowledgment.js';
import {
  type HL7BatchAcknowledgment,
  HL7BatchReplies,
  replyBatchFile,
} from './helpers/batch.js';
import { HL7ExchangeError } from './helpers/hl7-exchange-error.js';
import { isRoutable } from './helpers/is-routable.js';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import type {
  HL7ErrorMiddleware,
  HL7MessageFilter,
  HL7Middleware,
  HL7ResponseHook,
} from './types.js';

export class HL7Server extends AsyncEventEmitter<HL7Server.Events> {
  protected _server: net.Server | tls.Server;
  protected _sockets = new Set<HL7Socket>();
  protected _router = new HL7Router();
  protected _runningHandlers = new Set<Promise<void>>();
  protected _closing?: boolean;
  parseStrict?: boolean;
  defaultCharset?: string;
  validate?: boolean | HL7ValidateOptions;
  acceptAcknowledgment?: HL7AcceptAcknowledgment;
  batchAcknowledgment?: HL7BatchAcknowledgment;
  applicationName?: string;
  facilityName?: string;
  maxBufferPerSocket?: number;
  responseTimeout?: number;

  /**
   * Creates a HL7 TCP server
   * @static
   */
  static createServer(
    listenerOptions?: net.ServerOpts,
    options?: HL7Server.Options,
  ): HL7Server {
    return new HL7Server(net.createServer(listenerOptions), options);
  }

  /**
   * Creates a secure HL7 TCP server
   * @static
   */
  static createTlsServer(
    listenerOptions: tls.TlsOptions,
    options?: HL7Server.Options,
  ): HL7Server {
    return new HL7Server(tls.createServer(listenerOptions), options);
  }

  /**
   *
   * @constructor
   * @protected
   */
  protected constructor(
    server: net.Server | tls.Server,
    options?: HL7Server.Options,
  ) {
    super();
    this.maxBufferPerSocket = options?.maxBufferPerSocket;
    this.responseTimeout = options?.responseTimeout;
    this.parseStrict = options?.parseStrict;
    this.defaultCharset = options?.defaultCharset;
    this.validate = options?.validate;
    this.acceptAcknowledgment = options?.acceptAcknowledgment;
    this.batchAcknowledgment = options?.batchAcknowledgment;
    this.applicationName = options?.applicationName;
    this.facilityName = options?.facilityName;
    this._server = server;
    /**
     * A TLS server's 'connection' is the raw TCP socket, still encrypted; the
     * decrypted one comes with 'secureConnection', after the handshake
     */
    if (server instanceof tls.Server) {
      server.on('secureConnection', socket => this._connectionListener(socket));
      server.on('tlsClientError', error =>
        this.emit('error', error, undefined),
      );
    } else {
      server.on('connection', socket => this._connectionListener(socket));
    }
    this._server.on('listening', () => this.emit('listening'));
    this._server.on('close', () => this.emit('close'));
    this._server.on('drop', data => this.emit('drop', data));
    this._server.on('error', error => this.emit('error', error, undefined));
  }

  /**
   *
   */
  get listening(): boolean {
    return this._server.listening;
  }

  /**
   *
   */
  /** The connections open now */
  get connections(): number {
    return this._sockets.size;
  }

  /**
   * Set this property to reject connections when the server's connection count gets high.
   * It is not recommended to use this option once a socket has been sent to a child with child_process.fork().
   */
  get maxConnections(): number {
    return this._server.maxConnections;
  }

  set maxConnections(value: number) {
    this._server.maxConnections = value;
  }

  /**
   * Set this property to true to begin closing connections once the number of
   * connections reaches the maxConnections threshold.
   * This setting is only effective in cluster mode.
   */
  get dropMaxConnection(): boolean {
    // Added in: NodeJS v23.1.0, v22.12.0
    return (this._server as any).dropMaxConnection;
  }

  set dropMaxConnection(value: boolean) {
    // Added in: NodeJS v23.1.0, v22.12.0
    (this._server as any).dropMaxConnection = value;
  }

  listen(port?: number, hostname?: string, backlog?: number): Promise<void>;
  listen(port?: number, hostname?: string): Promise<void>;
  listen(port?: number, backlog?: number): Promise<void>;
  listen(port?: number): Promise<void>;
  listen(path: string, backlog?: number): Promise<void>;
  listen(path: string): Promise<void>;
  listen(options: ListenOptions): Promise<void>;
  listen(...args: any[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const onListening = () => {
        this._server.removeListener('error', onError);
        resolve();
      };
      const onError = (error: Error) => {
        this._server.removeListener('listening', onListening);
        reject(error);
      };
      this._server.once('listening', onListening);
      this._server.once('error', onError);
      // @ts-ignore
      this._server.listen.call(this._server, ...(args as any));
    });
  }

  /**
   * Returns the bound `address`, the address `family` name, and `port` of the server
   * as reported by the operating system if listening on an IP socket
   * (useful to find which port was assigned when getting an OS-assigned address):
   * `{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.
   *
   * For a server listening on a pipe or Unix domain socket, the name is returned
   * as a string.
   *
   * `server.address()` returns `null` before the `'listening'` event has been
   * emitted or after calling `server.close()`.
   */
  address(): AddressInfo | string | null {
    return this._server.address();
  }

  /**
   * Stops the server: no new connections; the open ones are closed - after
   * the running handlers finish, waiting up to waitRunningHandlers ms
   */
  async close(waitRunningHandlers?: number): Promise<void> {
    if (!this.listening) return;
    this._closing = true;

    /** Wait for running handlers to finish */
    if (waitRunningHandlers && this._runningHandlers.size > 0) {
      await new Promise<void>(resolve => {
        /** Timeout timer will resolve this promise to stop waiting */
        const timer = setTimeout(() => {
          resolve();
        }, waitRunningHandlers).unref();
        Promise.allSettled(Array.from(this._runningHandlers)).then(() => {
          clearTimeout(timer);
          resolve();
        });
      });
    }

    await Promise.allSettled(
      Array.from(this._sockets.values()).map(socket =>
        socket.close(waitRunningHandlers),
      ),
    );
    /* The net server's own 'close' is the server's (see the constructor) */
    return new Promise<void>(resolve => {
      this._server.close(() => resolve());
    }).then(() => {
      delete this._closing;
    });
  }

  /** See HL7Router.use(): `server.use('ADT^A01', handler)` */
  use(handler: HL7Router | HL7Middleware, priority?: number): void;
  use(
    filter: HL7MessageFilter,
    handler: HL7Router | HL7Middleware,
    priority?: number,
  ): void;
  use(...args: any[]): void {
    (this._router.use as any)(...args);
  }

  onError(handler: HL7Router | HL7ErrorMiddleware, priority = 0) {
    this._router.onError(handler, priority);
  }

  /**
   * See HL7Router.beforeResponse(): `server.beforeResponse(ack => ...)` sees
   * every answer the server sends to a request. A hook that throws is
   * reported as an `error` event, and the answer is sent without it.
   */
  beforeResponse(hook: HL7ResponseHook) {
    this._router.beforeResponse(hook);
  }

  /**
   * Asynchronously get the number of concurrent connections on the server. Works
   * when sockets were sent to forks.
   */
  async getConnections(): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        this._server.getConnections((error, count) => {
          if (error) reject(error);
          else resolve(count);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Opposite of `unref()`, calling `ref()` on a previously `unref`ed server will _not_ let
   * the program exit if it's the only server left (the default behavior).
   * If the server is `ref`ed calling `ref()` again will have no effect.
   */
  ref(): this {
    this._server.ref();
    return this;
  }

  /**
   * Calling `unref()` on a server will allow the program to exit if this is the only
   * active server in the event system. If the server is already `unref`ed calling`unref()` again will have no effect.
   */
  unref(): this {
    this._server.unref();
    return this;
  }

  protected _connectionListener(tcpSocket: Socket) {
    const socket = new HL7Socket(tcpSocket, {
      maxBufferSize: this.maxBufferPerSocket,
      parseStrict: this.parseStrict,
      defaultCharset: this.defaultCharset,
    });
    this._sockets.add(socket);
    socket.on('close', () => {
      this._sockets.delete(socket);
      this.emit('disconnect', socket);
    });
    socket.on('error', error => this.emit('error', error, socket));
    socket.on('warning', warning => this.emit('warning', warning, socket));
    socket.on('message', message => {
      this.emit('message', message, socket);
      this._onMessage(message, socket);
    });
    socket.on('batch', file => {
      this.emit('batch', file, socket);
      this._onBatch(file, socket);
    });
    socket.on('sendBatch', file => this.emit('sendBatch', file, socket));
    socket.on('send', message => this.emit('send', message, socket));
    socket.on('data', data => this.emit('data', data, socket));
    socket.on('write', data => this.emit('write', data, socket));
    this.emit('connection', socket);
  }

  protected _onMessage(message: HL7Message, socket: HL7Socket) {
    const running = this._process(message, socket);
    this._runningHandlers.add(running);
    running.finally(() => {
      this._runningHandlers.delete(running);
    });
  }

  /**
   * Answers a received batch with a batch (see helpers/batch): its messages
   * processed in turn, each as if it came alone, their acknowledgments
   * gathered into the reply - none sent on their own
   */
  protected _onBatch(file: HL7BatchFile, socket: HL7Socket) {
    const running = (async () => {
      const replies: HL7Message[][] = [];
      for (const batch of file.batches) {
        const gathered = new HL7BatchReplies();
        for (const message of batch.messages) {
          await this._process(message, socket, gathered);
        }
        replies.push(gathered.messages);
      }
      const policy = this.batchAcknowledgment ?? 'all';
      if (policy === 'none' || !socket.writable) return;
      socket.sendBatch(replyBatchFile(file, replies, policy));
    })().catch(e => {
      this.emit('error', e, socket);
    });
    this._runningHandlers.add(running);
    running.finally(() => {
      this._runningHandlers.delete(running);
    });
  }

  /**
   * The server's identity on an acknowledgment it sends: MSH-3 and MSH-4
   * from applicationName and facilityName, when given - otherwise they are
   * the received MSH-5 and MSH-6
   */
  protected _identify(message: HL7Message) {
    if (!message.messageType.startsWith('ACK')) return;
    if (this.applicationName) {
      message.header
        .field(MSHSegment.SendingApplication)
        .fromHL7String(this.applicationName);
    }
    if (this.facilityName) {
      message.header
        .field(MSHSegment.SendingFacility)
        .fromHL7String(this.facilityName);
    }
  }

  /** Processes one message: accepts it, routes it, answers it */
  protected _process(
    message: HL7Message,
    socket: HL7Socket,
    batch?: HL7BatchReplies,
  ): Promise<void> {
    /** A response to our own request, or any acknowledgment, is not answered */
    if (!isRoutable(message, socket)) return Promise.resolve();
    const when = this.acceptAcknowledgment ?? 'receipt';
    /* Every answer goes through the request: the hooks, then out */
    const req = new HL7Request(socket, message, batch, {
      prepare: m => this._identify(m),
      acceptPending: when === 'processed' && !!ackModeOf(message).accept,
      beforeResponse: this._router.responseHooks,
      onError: e => this.emit('error', e, socket),
    });
    const accepted = acceptMessage(
      message,
      (ack, error) => req.send(ack, error ? 'reject' : 'accept', error),
      this.validate,
      when,
    );
    if (!accepted) return req.flushed();
    return new Promise<void>(resolve => {
      const done = () => req.flushed().then(resolve);
      if (!message.header.field(MSHSegment.MessageControlID).getValue())
        message.header.field(MSHSegment.MessageControlID).setValue(uid(8));
      const res = new HL7Response(req);
      const timeoutTimer = setTimeout(() => {
        try {
          /** A handler that answered and is still running is not interrupted */
          if (res.finished) return;
          res.failed(new HL7ExchangeError('Response timeout'));
          req.sendAccept(res.error);
          if (res.acknowledgmentWanted)
            req.send(res.message, 'reject', res.error);
        } catch (e: any) {
          /** The socket may be gone - sendMessage reports that as an error event too */
          this.emit('error', e, socket);
        } finally {
          done();
        }
      }, this.responseTimeout || 30000).unref();

      this._router.handle(req, res, err => {
        clearTimeout(timeoutTimer);
        if (err) this.emit('error', err, socket);
        done();
      });
    });
  }
}

export namespace HL7Server {
  export interface Events {
    listening: [];
    close: [];
    connection: [socket: HL7Socket];
    disconnect: [socket: HL7Socket];
    drop: [data?: net.DropArgument];
    error: [error: Error, HL7Socket | undefined];
    message: [message: HL7Message, socket: HL7Socket];
    batch: [file: HL7BatchFile, socket: HL7Socket];
    send: [message: HL7Message, socket: HL7Socket];
    sendBatch: [file: HL7BatchFile, socket: HL7Socket];
    data: [Buffer, socket: HL7Socket];
    write: [buffer: Buffer, socket: HL7Socket];
    warning: [warning: HL7Socket.Warning, socket: HL7Socket];
  }

  export interface Options {
    /** MSH-3 of the acknowledgments the server sends (HD: `APP^1.2.3^ISO`); default the received MSH-5 */
    applicationName?: string;
    /** MSH-4 of the acknowledgments the server sends; default the received MSH-6 */
    facilityName?: string;
    maxBufferPerSocket?: number;
    responseTimeout?: number;
    parseStrict?: boolean;
    /** See HL7Socket.Options.defaultCharset */
    defaultCharset?: string;
    /**
     * Validate received messages against their version's dictionary
     * (HL7Message.validate()): one that fails is answered with a NAK listing
     * its errors and is not passed to the handlers. Default false.
     */
    validate?: boolean | HL7ValidateOptions;
    /**
     * When the accept acknowledgment MSH-15 asks for is sent: 'receipt'
     * (default), or 'processed' - after the handlers, CA when they succeed,
     * CE when they fail or time out. See HL7AcceptAcknowledgment.
     */
    acceptAcknowledgment?: HL7AcceptAcknowledgment;
    /** Which acknowledgments a received batch is answered with; default 'all' */
    batchAcknowledgment?: HL7BatchAcknowledgment;
  }
}
