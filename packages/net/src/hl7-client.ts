import net from 'node:net';
import tls from 'node:tls';
import type { Backoff } from 'backoff';
import type {
  HL7Batch,
  HL7BatchFile,
  HL7Message,
  HL7ValidateOptions,
} from 'hl7v2';
import { MSHSegment } from 'hl7v2';
import { AsyncEventEmitter } from 'node-events-async';
import reconnectCore from 'reconnect-core';
import type { StrictOmit } from 'ts-gems';
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
import { isRoutable } from './helpers/is-routable.js';
import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';
import { HL7Router } from './hl7-router.js';
import { HL7Socket } from './hl7-socket.js';
import type {
  HL7ErrorMiddleware,
  HL7MessageFilter,
  HL7Middleware,
} from './types.js';

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
          socket.on('warning', warning => this.emit('warning', warning));
          socket.on('message', message => {
            this.emit('message', message);
            this._onMessage(message);
          });
          socket.on('batch', file => {
            this.emit('batch', file);
            this._onBatch(file);
          });
          socket.on('send', message => this.emit('send', message));
          socket.on('sendBatch', file => this.emit('sendBatch', file));
          socket.on('data', data => this.emit('data', data));
          socket.on('write', data => this.emit('write', data));
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

  get localAddress() {
    return this._socket?.localAddress;
  }

  get localPort() {
    return this._socket?.localPort;
  }

  get localFamily() {
    return this._socket?.localFamily;
  }

  get remoteAddress() {
    return this._socket?.remoteAddress || this._options.host;
  }

  get remotePort() {
    return this._socket?.remotePort || this._options.port;
  }

  get remoteFamily() {
    return this._socket?.remoteFamily;
  }

  get connectTimeout(): number | undefined {
    return this._options.connectTimeout;
  }

  get responseTimeout(): number | undefined {
    return this._options.responseTimeout;
  }

  get maxBufferSize(): number {
    return this._options.maxBufferSize || 0;
  }

  address() {
    return this._socket?.address();
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

  async sendMessageWaitAck(
    request: HL7Message,
    options?: HL7Socket.WaitAckOptions,
  ): Promise<HL7Message> {
    if (!this.connected) await this.connect();
    return this._socket!.sendMessageWaitAck(request, options);
  }

  /** Sends a batch file or batch in one block (see HL7Socket.sendBatch()) */
  async sendBatch(batch: HL7BatchFile | HL7Batch): Promise<HL7BatchFile> {
    if (!this.connected) await this.connect();
    return this._socket!.sendBatch(batch);
  }

  /** Sends a batch file or batch and waits for its reply batch */
  async sendBatchWaitAck(
    batch: HL7BatchFile | HL7Batch,
  ): Promise<HL7BatchFile> {
    if (!this.connected) await this.connect();
    return this._socket!.sendBatchWaitAck(batch);
  }

  setConnectTimeout(value: number | null) {
    this._options.connectTimeout = value ?? undefined;
  }

  setResponseTimeout(value: number | null) {
    this._options.responseTimeout = value ?? undefined;
    if (this._socket) this._socket.responseTimeout = value ?? undefined;
  }

  setMaxBufferSize(value: number) {
    this._options.maxBufferSize = value;
    if (this._socket) this._socket.setMaxBufferSize(value);
  }

  setKeepAlive(enable?: boolean, initialDelay?: number) {
    this._options.keepAlive = enable;
    this._options.keepAliveInitialDelay = initialDelay;
    this._socket?.setKeepAlive(enable, initialDelay);
  }

  /** See HL7Router.use(): `client.use('ADT^A08', handler)` */
  use(handler: HL7Router | HL7Middleware, priority?: number): void;
  use(
    filter: HL7MessageFilter,
    handler: HL7Router | HL7Middleware,
    priority?: number,
  ): void;
  use(...args: any[]): void {
    (this._router.use as any)(...args);
  }

  protected _onMessage(message: HL7Message) {
    this._process(message).catch(() => undefined);
  }

  /** Answers a received batch with a batch, as HL7Server does */
  protected _onBatch(file: HL7BatchFile) {
    const socket = this._socket!;
    (async () => {
      const replies: HL7Message[][] = [];
      for (const batch of file.batches) {
        const gathered = new HL7BatchReplies();
        for (const message of batch.messages) {
          await this._process(message, gathered);
        }
        replies.push(gathered.messages);
      }
      const policy = this._options.batchAcknowledgment ?? 'all';
      if (policy === 'none' || !socket.writable) return;
      socket.sendBatch(replyBatchFile(file, replies, policy));
    })().catch(e => {
      this.emit('error', e);
    });
  }

  /** See HL7Router.onError() */
  onError(handler: HL7Router | HL7ErrorMiddleware, priority = 0) {
    this._router.onError(handler, priority);
  }

  protected _process(
    message: HL7Message,
    batch?: HL7BatchReplies,
  ): Promise<void> {
    const socket = this._socket!;
    /** A response to our own request, or any acknowledgment, is not answered */
    if (!isRoutable(message, socket)) return Promise.resolve();
    const send = (m: HL7Message) =>
      batch ? batch.send(m) : socket.sendMessage(m);
    const when = this._options.acceptAcknowledgment ?? 'receipt';
    if (!acceptMessage(message, send, this._options.validate, when)) {
      return Promise.resolve();
    }
    /* Answered by its control ID: one it lacks is given, as the server does */
    if (!message.header.field(MSHSegment.MessageControlID).getValue())
      message.header.field(MSHSegment.MessageControlID).setValue(uid(8));
    const req = new HL7Request(
      socket,
      message,
      batch,
      undefined,
      when === 'processed' && !!ackModeOf(message).accept,
    );
    const res = new HL7Response(req);
    return new Promise<void>(resolve => {
      this._router.handle(req, res, () => {
        if (res.error) this.emit('error', res.error);
        resolve();
      });
    });
  }
}

export namespace Hl7Client {
  export interface Events extends HL7Socket.Events {
    reconnecting: [n: number, delay: number];
    reconnect: [socket: net.Socket];
    /** The connection lost; with the error, when reconnecting */
    disconnect: [error?: Error];
  }

  interface CommonConnectOptions {
    connectTimeout?: number;
    maxBufferSize?: number;
    responseTimeout?: number;
    keepAlive?: boolean;
    keepAliveInitialDelay?: number;
    parseStrict?: boolean;
    /** See HL7Socket.Options.defaultCharset */
    defaultCharset?: string;
    /**
     * Validate received messages against their version's dictionary
     * (HL7Message.validate()): one that fails is answered with a NAK listing
     * its errors and is not passed to the handlers. Default false.
     */
    validate?: boolean | HL7ValidateOptions;
    /** See HL7Server.Options.acceptAcknowledgment */
    acceptAcknowledgment?: HL7AcceptAcknowledgment;
    /** Which acknowledgments a received batch is answered with; default 'all' */
    batchAcknowledgment?: HL7BatchAcknowledgment;
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
    const { connectTimeout, keepAlive, keepAliveInitialDelay } = args.options;
    /** Applied on every connection, with or without a connect timeout */
    if (keepAlive) {
      tcpSocket.once('connect', () =>
        tcpSocket.setKeepAlive(true, keepAliveInitialDelay),
      );
    }
    if (connectTimeout) {
      const timer = setTimeout(() => {
        tcpSocket.destroy(
          new Error(`Connection timed out after ${connectTimeout} ms`),
        );
      }, connectTimeout).unref();
      const clear = () => clearTimeout(timer);
      tcpSocket.once('connect', clear);
      tcpSocket.once('error', clear);
      tcpSocket.once('close', clear);
    }
    return tcpSocket;
  },
);
