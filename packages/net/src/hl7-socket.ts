import { Buffer } from 'node:buffer';
import {
  CR,
  FS,
  HL7Message,
  HL7Version,
  MSASegment,
  MSHSegment,
  VT,
} from 'hl7v2';
import iconv from 'iconv-lite';
import { Socket } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { FrameStream } from './helpers/frame-stream.js';

export class HL7Socket extends AsyncEventEmitter<HL7Socket.Events> {
  declare protected _socket: Socket;
  protected _messageHooks = new Set<(resp: HL7Message) => boolean>();
  protected _frameStream: FrameStream;
  protected _waitPromises = new Set<Promise<any>>();
  protected _options: HL7Socket.Options;
  responseTimeout?: number;
  /**
   * User defined property
   * @protected
   */
  protected user?: any;

  constructor(socket: Socket, options: HL7Socket.Options) {
    super();
    this._options = options;
    const frameStream = new FrameStream({
      frameStart: VT,
      frameEnd: FS + CR,
      maxBufferSize: options?.maxBufferSize,
    });
    frameStream.on('data', data => {
      this.emit('data', data);
      this._onData(data);
    });
    this._frameStream = frameStream;
    this._bindSocket(socket);
  }

  get socket(): Socket {
    return this._socket;
  }

  get connected(): boolean {
    return !this.socket.closed;
  }

  get closed(): boolean {
    return this.socket.closed;
  }

  get readyState() {
    return this.socket?.readyState || 'closed';
  }

  get maxBufferSize(): number {
    return this._frameStream.maxBufferSize || 0;
  }

  set maxBufferSize(value: number) {
    this._frameStream.maxBufferSize = value;
  }

  address() {
    return this.socket?.address() || {};
  }

  remoteAddress() {
    const addr = this.socket?.remoteAddress;
    return addr?.startsWith('::ffff:') ? addr.slice(7) : addr;
  }

  get writable() {
    return this.connected && this.socket?.writable;
  }

  async close(waitRunningHandlers?: number): Promise<void> {
    if (this.closed) return;
    /** Stop receiving data */
    this.socket!.unpipe(this._frameStream);
    /** Wait for running handlers to finish */
    if (waitRunningHandlers && this._waitPromises.size > 0) {
      await new Promise<void>(resolve => {
        /** Timeout timer will resolve this promise to stop waiting */
        const timer = setTimeout(() => {
          resolve();
        }, waitRunningHandlers).unref();
        Promise.allSettled(Array.from(this._waitPromises)).then(() => {
          clearTimeout(timer);
          resolve();
        });
      });
    }
    return new Promise<void>(resolve => {
      this.socket.once('close', () => resolve());
      this.socket.destroy();
    });
  }

  sendMessage(message: HL7Message) {
    try {
      if (!this.connected) throw new Error('Socket is not connected');
      if (!this.socket.writable) throw new Error('Socket is not writable');
      let charset = message.header.field(MSHSegment.CharacterSet).getValue();
      if (!charset) {
        charset = 'UNICODE UTF-8';
        message.header.field(MSHSegment.CharacterSet).setValue(charset);
      }
      let encoding = HL7Message.encodingMapping[charset] || charset || 'utf-8';
      try {
        iconv.getEncoder(charset);
      } catch {
        encoding = 'utf-8';
      }
      const str = message.toHL7String();
      const buf = iconv.encode(str, encoding);
      const outBuffer = Buffer.concat([
        Buffer.from(VT),
        buf,
        Buffer.from(FS + CR),
      ]);
      this.socket.write(outBuffer);
      this.emit('send', message);
      this.emit('write', outBuffer);
    } catch (err: any) {
      this.emit('error', err);
      throw err;
    }
  }

  async sendMessageWaitAck(message: HL7Message): Promise<HL7Message> {
    this.sendMessage(message);
    const responseTimeout = this.responseTimeout;

    const waitPromise = new Promise<HL7Message>((resolve, reject) => {
      let responseTimer: NodeJS.Timeout | undefined;
      const messageHook = (resp: HL7Message): boolean => {
        const msgType2 = resp.header.field(MSHSegment.MessageType).getValue();
        if (msgType2 !== 'ACK') return false;
        const msa = resp.getSegment('MSA');
        const controlId2 = msa?.field(MSASegment.MessageControlID).getValue();
        if (controlId2 !== controlId) return false;
        cleanup();
        resolve(resp);
        return true;
      };

      const onError = (error: any) => {
        cleanup();
        reject(error);
      };

      const cleanup = () => {
        clearTimeout(responseTimer);
        this._messageHooks.delete(messageHook);
        this.socket.removeListener('error', onError);
      };

      const controlId = message.header
        .field(MSHSegment.MessageControlID)
        .getValue();
      this.socket.once('error', reject);
      this._messageHooks.add(messageHook);
      // this.on('message', messageHook);
      if (responseTimeout) {
        responseTimer = setTimeout(() => {
          onError(new Error('Response timeout'));
        }, responseTimeout).unref();
      }
    });
    this._waitPromises.add(waitPromise);
    waitPromise.finally(() => {
      this._waitPromises.delete(waitPromise);
    });
    return waitPromise;
  }

  setKeepAlive(enable?: boolean, initialDelay?: number) {
    this._options.keepAlive = enable;
    this._options.keepAliveInitialDelay = initialDelay;
    this.socket.setKeepAlive(enable, initialDelay);
  }

  protected _onData(data: Buffer) {
    try {
      const message = new HL7Message();
      message.parse(data, {
        strict: this._options?.parseStrict,
      });
      for (const hook of this._messageHooks) {
        if (hook(message)) break;
      }
      this.emit('message', message);
    } catch (err: any) {
      this.emit('error', err);
      if (!this.connected) return;
      const raw = HL7Message.parseRaw(data);
      const nak = new HL7Message(raw.version as HL7Version).createNak([err]);
      nak.header
        .field(MSHSegment.MessageType)
        .fromHL7String('ACK^' + raw.messageType.split('^')[1] || '');
      this.sendMessage(nak);
    }
  }

  _bindSocket(socket: Socket) {
    if (socket === this._socket) return;
    this._unBindSocket();
    this._socket = socket;
    const hl7EventListeners: any = ((socket as any).__hl7EventListeners = {});
    hl7EventListeners.onConnect = () => this.emit('connect');
    hl7EventListeners.onReady = () => this.emit('ready');
    hl7EventListeners.onLookup = (err, address, family, host) =>
      this.emit('lookup', err, address, family, host);
    hl7EventListeners.onTimeout = () => socket.destroy();
    hl7EventListeners.onClose = () => this.emit('close');
    hl7EventListeners.onError = (err: any) => {
      if (err.code === 'ECONNRESET') {
        err.message = `Connection reset by peer`;
      }
      this.emit('error', err);
    };

    socket.on('connect', hl7EventListeners.onConnect);
    socket.on('ready', hl7EventListeners.onReady);
    socket.on('lookup', hl7EventListeners.onLookup);
    socket.on('timeout', hl7EventListeners.onTimeout);
    socket.on('close', hl7EventListeners.onClose);
    socket.on('error', hl7EventListeners.onError);
    socket.pipe(this._frameStream);
  }

  protected _unBindSocket() {
    if (!this.socket) return;
    this.socket.unpipe(this._frameStream);
    const hl7EventListeners = (this.socket as any).__hl7EventListeners;
    if (hl7EventListeners) {
      this.socket.removeListener('connect', hl7EventListeners.onConnect);
      this.socket.removeListener('ready', hl7EventListeners.onReady);
      this.socket.removeListener('lookup', hl7EventListeners.onLookup);
      this.socket.removeListener('timeout', hl7EventListeners.onTimeout);
      this.socket.removeListener('close', hl7EventListeners.onClose);
      this.socket.removeListener('error', hl7EventListeners.onError);
    }
  }
}

export namespace HL7Socket {
  export interface Events {
    connect: [];
    ready: [];
    close: [];
    error: [error: Error];
    lookup: [
      err: Error | null,
      address: string,
      family: number | null,
      host: string,
    ];
    message: [message: HL7Message];
    send: [message: HL7Message];
    data: [buffer: Buffer];
    write: [buffer: Buffer];
  }

  export interface Options {
    responseTimeout?: number;
    keepAlive?: boolean | undefined;
    keepAliveInitialDelay?: number | undefined;
    maxBufferSize?: number;
    parseStrict?: boolean;
  }
}
