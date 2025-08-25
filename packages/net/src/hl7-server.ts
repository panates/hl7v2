import net from 'node:net';
import tls from 'node:tls';
import { HL7Message, MSHSegment } from 'hl7v2';
import { AddressInfo, ListenOptions, Socket } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { uid } from 'uid';
import { HL7ExchangeError } from './helpers/hl7-exchange-error.js';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import { HL7Middleware } from './types.js';

export class HL7Server extends AsyncEventEmitter<HL7Server.Events> {
  protected _server: net.Server | tls.Server;
  protected _sockets = new Set<HL7Socket>();
  protected _router = new HL7Router();
  protected _runningHandlers = new Set<Promise<void>>();
  protected _closing?: boolean;
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
    this._server = server;
    this._server.on('connection', socket => this._connectionListener(socket));
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
  get connections(): number {
    return this._server.connections;
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
        this._server.removeListener('error', onListening);
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
   * Stops the server from accepting new connections and keeps existing
   * connections.
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
    return new Promise<void>(resolve => {
      this._server.close(() => resolve());
    }).then(() => {
      delete this._closing;
      this.emit('close');
    });
  }

  use(handler: HL7Middleware, priority = 0) {
    this._router.use(handler, priority);
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
    });
    this._sockets.add(socket);
    socket.on('close', () => {
      this._sockets.delete(socket);
      this.emit('disconnect', socket);
    });
    socket.on('error', error => this.emit('error', error, socket));
    socket.on('message', message => {
      this.emit('message', message, socket);
      this._onMessage(message, socket);
    });
    socket.on('send', message => this.emit('send', message, socket));
    this.emit('connection', socket);
  }

  protected _onMessage(message: HL7Message, socket: HL7Socket) {
    const waitPromise = new Promise<void>(resolve => {
      if (!message.header.field(MSHSegment.MessageControlID).getValue())
        message.header.field(MSHSegment.MessageControlID).setValue(uid(8));
      const req = new HL7Request(socket, message);
      const res = new HL7Response(req);
      const timeoutTimer = setTimeout(() => {
        try {
          res.failed(new HL7ExchangeError('Response timeout'));
          res.socket.sendMessage(res.message);
        } finally {
          resolve();
        }
      }, this.responseTimeout || 30000).unref();

      this._router.handle(req, res, () => {
        clearTimeout(timeoutTimer);
        if (res.errors.length) this.emit('error', res.errors[0], socket);
        resolve();
      });
    });
    this._runningHandlers.add(waitPromise);
    waitPromise.finally(() => {
      this._runningHandlers.delete(waitPromise);
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
    send: [message: HL7Message, socket: HL7Socket];
  }

  export interface Options {
    applicationName?: string;
    facilityName?: string;
    maxBufferPerSocket?: number;
    responseTimeout?: number;
  }
}
