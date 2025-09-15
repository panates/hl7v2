import net from 'node:net';
import tls from 'node:tls';
import { HL7Message } from 'hl7v2';
import { AddressInfo } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { StrictOmit } from 'ts-gems';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import { HL7Middleware } from './types.js';

export class Hl7Client extends AsyncEventEmitter<Hl7Client.Events> {
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

  address(): AddressInfo {
    const out = this._socket?.address();
    if (!(out as any)?.address) {
      return {
        address: this._options.host || '',
        port: this._options.port || 0,
        family: '',
      } satisfies AddressInfo;
    }
    return out as AddressInfo;
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

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.connected) {
        resolve();
        return;
      }
      let timeoutTimer: NodeJS.Timeout | undefined;
      const tcpSocket = this._tls
        ? tls.connect(this._options as any)
        : net.connect(this._options as any);
      const socket = (this._socket = new HL7Socket(tcpSocket, this._options));

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

      const onReady = () => {
        clearTimeout(timeoutTimer);
        tcpSocket.removeListener('error', onError);
        if (this._options.keepAlive) {
          tcpSocket.setKeepAlive(
            this._options.keepAlive,
            this._options.keepAliveInitialDelay,
          );
        }
        resolve();
      };
      const onError = (error: any) => {
        clearTimeout(timeoutTimer);
        tcpSocket.removeListener('ready', onReady);
        tcpSocket.destroy();
        reject(error);
      };
      tcpSocket.once('ready', onReady);
      tcpSocket.once('error', onError);

      if (this.connectTimeout) {
        timeoutTimer = setTimeout(() => {
          this.emit('error', new Error('Connection timeout'));
          tcpSocket.destroy();
        }, this._options.connectTimeout).unref();
      }
    });
  }

  async close(waitRunningHandlers?: number): Promise<void> {
    await this._socket?.close(waitRunningHandlers);
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
  interface CommonConnectOptions {
    connectTimeout?: number;
    maxBufferSize?: number;
    responseTimeout?: number;
    keepAlive?: boolean;
    keepAliveInitialDelay?: number;
    parseStrict?: boolean;
  }

  export type NetConnectOptions = StrictOmit<
    net.TcpNetConnectOpts,
    'onread' | 'readable' | 'writable'
  > &
    CommonConnectOptions;

  export type TlsConnectOptions = StrictOmit<tls.ConnectionOptions, 'socket'> &
    CommonConnectOptions;

  export interface Events extends HL7Socket.Events {}
}
