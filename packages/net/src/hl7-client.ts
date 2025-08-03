import net from 'node:net';
import { HL7Message } from 'hl7v2';
import { TcpNetConnectOpts } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { StrictOmit } from 'ts-gems';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import { HL7ErrorMiddleware, HL7Middleware } from './types.js';

export class Hl7Client extends AsyncEventEmitter {
  protected _router = new HL7Router();
  protected _socket?: HL7Socket;
  protected _options: Hl7Client.ConnectOptions;

  constructor(options: Hl7Client.ConnectOptions) {
    super();
    this._options = options;
  }

  get connected(): boolean {
    return this._socket?.connected ?? false;
  }

  get readyState() {
    return this._socket?.readyState || 'closed';
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
      const tcpSocket = net.connect(this._options);
      const socket = (this._socket = new HL7Socket(tcpSocket, this._options));

      socket.on('connect', () => this.emit('connect'));
      socket.on('ready', () => this.emit('ready'));
      socket.on('lookup', listener => this.emit('lookup', listener));
      socket.on('close', () => {
        this._socket = undefined;
        this.emit('close');
      });
      socket.on('error', err => this.emit('error', err));
      socket.on('message', message => this._onMessage(message));

      const onReady = () => {
        clearTimeout(timeoutTimer);
        tcpSocket.removeListener('error', onError);
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

  use(handler: HL7Middleware | HL7ErrorMiddleware, priority = 0) {
    this._router.use(handler, priority);
  }

  protected _onMessage(message: HL7Message) {
    const req = new HL7Request(this._socket!, message);
    const res = new HL7Response(req);
    this._router.handle(undefined, req, res, error => {
      if (error) this.emit('error', error);
    });
  }
}

export namespace Hl7Client {
  export interface ConnectOptions
    extends StrictOmit<TcpNetConnectOpts, 'onread' | 'readable' | 'writable'>,
      HL7Socket.Options {
    connectTimeout?: number;
    maxBufferSize?: number;
  }

  export interface Events extends StrictOmit<HL7Socket.Events, 'message'> {}
}
