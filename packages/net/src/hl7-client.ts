import net from 'node:net';
import tls from 'node:tls';
import { Backoff } from 'backoff';
import { HL7Message } from 'hl7v2';
import { AsyncEventEmitter } from 'node-events-async';
import reconnectCore from 'reconnect-core';
import { StrictOmit } from 'ts-gems';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import { HL7Middleware } from './types.js';

export class Hl7Client extends AsyncEventEmitter<Hl7Client.Events> {
  protected _connectionManager: ReturnType<typeof socketReconnect>;
  protected _router = new HL7Router();
  protected _socket?: HL7Socket;
  protected _tls?: boolean;
  protected _options: Hl7Client.NetConnectOptions | Hl7Client.TlsConnectOptions;

  /**
   * Creates an HL7 TCP client
   * @static
   */
  static createClient(options: Hl7Client.NetConnectOptions): Hl7Client {
    const client = new Hl7Client(options);
    client._tls = false;
    return client;
  }

  /**
   * Creates a secure HL7 TCP client
   * @static
   */
  static createTlsClient(options: Hl7Client.TlsConnectOptions): Hl7Client {
    const client = new Hl7Client(options);
    client._tls = true;
    return client;
  }

  /**
   *
   * @constructor
   * @protected
   */
  protected constructor(
    options: Hl7Client.NetConnectOptions | Hl7Client.TlsConnectOptions,
  ) {
    super();
    this._options = options;
    let reconnecting = false;
    const connectionManager = (this._connectionManager = socketReconnect({
      ...this._options.reconnect,
      timeout: this._options.connectTimeout,
    } as any)
      .on('error', err => {
        if (!connectionManager.reconnect) return;
        this.emit('error', err);
      })
      .on('connect', (tcpSocket: net.Socket) => {
        if (!this._socket) {
          const socket = (this._socket = new HL7Socket(
            tcpSocket,
            this._options,
          ));
          socket.on('connect', () => this.emit('connect'));
          socket.on('ready', () => this.emit('ready'));
          socket.on('lookup', (err, address, family, host) =>
            this.emit('lookup', err, address, family, host),
          );
          socket.on('close', () => {
            this._socket = undefined;
            this.emit('close');
          });
          socket.on('error', err => this.emit('error', err));
          socket.on('message', message => {
            this.emit('message', message);
            this._onMessage(message);
          });
          socket.on('send', message => this.emit('send', message));
          socket.on('data', data => this.emit('data', data));
        } else this._socket._bindSocket(tcpSocket);
        if (reconnecting) this.emit('reconnect', tcpSocket);
        reconnecting = false;
        this.emit('connect');
      })
      .on('reconnect', (n, delay) => {
        if (n === 0 && delay === 0) return;
        reconnecting = true;
        this.emit('reconnecting', n, delay);
      })
      .on('disconnect', err => {
        this._socket = undefined;
        if (connectionManager.reconnect) {
          if (err) err.message = `TCP socket connection lost: ${err.message}`;
          else err = new Error('TCP socket connection lost');
          this.emit('disconnect', err);
        } else this.emit('disconnect');
      }));
  }

  get connected(): boolean {
    return this._socket?.connected ?? false;
  }

  get closed(): boolean {
    return this._socket?.closed ?? true;
  }

  get readyState() {
    return this._socket?.readyState || 'closed';
  }

  get uri(): string {
    return this._options.host + ':' + this._options.port;
  }

  address(): net.AddressInfo {
    const out = this._socket?.address();
    if (!(out as any)?.address) {
      return {
        address: this._options.host || '',
        port: this._options.port || 0,
        family: '',
      } satisfies net.AddressInfo;
    }
    return out as net.AddressInfo;
  }

  get connectTimeout(): number | undefined {
    return this._options.connectTimeout;
  }

  set connectTimeout(value: number | null) {
    this._options.connectTimeout = value ?? undefined;
  }

  get responseTimeout(): number | undefined {
    return this._options.responseTimeout;
  }

  set responseTimeout(value: number | null) {
    this._options.responseTimeout = value ?? undefined;
  }

  get maxBufferSize(): number {
    return this._options.maxBufferSize || 0;
  }

  set maxBufferSize(value: number) {
    this._options.maxBufferSize = value;
    if (this._socket) this._socket.maxBufferSize = value;
  }

  async connect(): Promise<void> {
    if (this.connected) return;
    return new Promise((resolve, reject) => {
      const onReady = () => {
        this.removeListener('error', onError);
        resolve();
      };
      const onError = (error: any) => {
        this.removeListener('ready', onReady);
        reject(error);
      };
      this.once('ready', onReady);
      this.once('error', onError);
      this._connectionManager.reconnect = true;
      this._connectionManager.connect({
        tls: this._tls,
        options: this._options,
      });
    });
  }

  async close(waitRunningHandlers?: number): Promise<void> {
    this._connectionManager.reconnect = false;
    await this._socket?.close(waitRunningHandlers);
    this._connectionManager.disconnect();
    this._connectionManager.reset();
  }

  async sendMessage(message: HL7Message): Promise<void> {
    if (!this.connected) await this.connect();
    this._socket!.sendMessage(message);
  }

  async sendMessageWaitAck(request: HL7Message): Promise<HL7Message> {
    if (!this.connected) await this.connect();
    return this._socket!.sendMessageWaitAck(request);
  }

  setKeepAlive(enable?: boolean, initialDelay?: number) {
    this._options.keepAlive = enable;
    this._options.keepAliveInitialDelay = initialDelay;
    this._socket?.setKeepAlive(enable, initialDelay);
  }

  use(handler: HL7Middleware, priority = 0) {
    this._router.use(handler, priority);
  }

  protected _onMessage(message: HL7Message) {
    const req = new HL7Request(this._socket!, message);
    const res = new HL7Response(req);
    this._router.handle(req, res, () => {
      if (res.errors.length) this.emit('error', res.errors[0]);
    });
  }
}

export namespace Hl7Client {
  export interface Events extends HL7Socket.Events {
    reconnecting: [n: number, delay: number];
    reconnect: [socket: net.Socket];
  }

  interface CommonConnectOptions {
    connectTimeout?: number;
    maxBufferSize?: number;
    responseTimeout?: number;
    keepAlive?: boolean;
    keepAliveInitialDelay?: number;
    parseStrict?: boolean;
    reconnect?: ReconnectOptions;
  }

  export type NetConnectOptions = StrictOmit<
    net.TcpNetConnectOpts,
    'onread' | 'readable' | 'writable'
  > &
    CommonConnectOptions;

  export type TlsConnectOptions = StrictOmit<tls.ConnectionOptions, 'socket'> &
    CommonConnectOptions;

  export interface ReconnectOptions {
    strategy?: 'fibonacci' | 'exponential' | Backoff;
    immediate?: boolean | undefined;
    failAfter?: number | undefined;
    randomisationFactor?: number | undefined;
    initialDelay?: number | undefined;
    maxDelay?: number | undefined;
  }
}

const socketReconnect = reconnectCore(
  (args: {
    tls?: boolean;
    options: Hl7Client.NetConnectOptions | Hl7Client.TlsConnectOptions;
  }) => {
    const tcpSocket = args.tls
      ? tls.connect({
          ...(args.options as Hl7Client.TlsConnectOptions),
          timeout: undefined,
        })
      : net.connect({
          ...(args.options as Hl7Client.NetConnectOptions),
          timeout: undefined,
        });
    if (args.options.timeout) {
      const timer = setTimeout(() => {
        tcpSocket.destroy(new Error('Connection timed out'));
      }, args.options.timeout).unref();
      const onConnect = () => {
        clearTimeout(timer);
        tcpSocket.removeListener('error', onError);
      };
      const onError = () => {
        clearTimeout(timer);
        tcpSocket.removeListener('connect', onConnect);
        tcpSocket.removeListener('ready', onReady);
      };
      const onReady = () => {
        if (args.options.keepAlive) {
          tcpSocket.setKeepAlive(
            args.options.keepAlive,
            args.options.keepAliveInitialDelay,
          );
        }
      };
      tcpSocket.once('connect', onConnect);
      tcpSocket.once('error', onError);
      tcpSocket.once('ready', onReady);
    }
    return tcpSocket;
  },
);
