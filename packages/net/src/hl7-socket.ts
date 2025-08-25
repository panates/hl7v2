import { Buffer } from 'node:buffer';
import { CR, FS, HL7Message, MSASegment, MSHSegment, VT } from 'hl7v2';
import iconv from 'iconv-lite';
import { Socket } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { FrameStream } from './helpers/frame-stream.js';

export class HL7Socket extends AsyncEventEmitter<HL7Socket.Events> {
  readonly socket: Socket;
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
    this.socket = socket;
    this._options = options;
    const frameStream = new FrameStream({
      frameStart: VT,
      frameEnd: FS + CR,
      maxBufferSize: options?.maxBufferSize,
    });
    this._frameStream = frameStream;
    socket.on('error', err => this.emit('error', err));
    socket.pipe(frameStream);
    socket.on('connect', () => this.emit('connect'));
    socket.on('ready', () => this.emit('ready'));
    socket.on('lookup', (err, address, family, host) =>
      this.emit('lookup', err, address, family, host),
    );
    socket.on('timeout', () => socket.destroy());
    socket.on('close', () => {
      this.emit('close');
    });
    frameStream.on('data', data => {
      try {
        const message = this._parseMessage(data);
        this.emit('message', message);
      } catch (err: any) {
        this.emit('error', err);
      }
    });
  }

  get connected(): boolean {
    return !this.socket.closed;
  }

  get closed(): boolean {
    return this.socket.closed;
  }

  get readyState() {
    return this.socket.readyState;
  }

  get maxBufferSize(): number {
    return this._frameStream.maxBufferSize || 0;
  }

  set maxBufferSize(value: number) {
    this._frameStream.maxBufferSize = value;
  }

  address() {
    return this.socket.address();
  }

  uri() {
    const address: any = this.socket.address();
    return address.address + ':' + address.port;
  }

  get writable() {
    return this.connected && this.socket.writable;
  }

  async close(waitRunningHandlers?: number): Promise<void> {
    if (this.closed) return;
    /** Stop receiving data */
    this.socket.unpipe(this._frameStream);
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
      let encoding = message.header.field(MSHSegment.CharacterSet).getValue();
      if (!encoding) {
        encoding = 'UTF-8';
        message.header.field(MSHSegment.CharacterSet).setValue(encoding);
      }
      const str = message.toHL7String();
      const buf = iconv.encode(str, encoding);
      this.socket.write(VT);
      this.socket.write(buf);
      this.socket.write(FS + CR);
      this.emit('send', message);
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

  protected _parseMessage(data: Buffer): HL7Message {
    const message = new HL7Message();
    message.parse(data);
    for (const hook of this._messageHooks) {
      if (hook(message)) break;
    }
    return message;
  }
}

export namespace HL7Socket {
  export interface Events {
    connect: [];
    ready: [];
    close: [];
    error: [error: Error];
    lookup: [
      err: Error,
      address: string,
      family: string | number,
      host: string,
    ];
    message: [message: HL7Message];
    send: [message: HL7Message];
  }

  export interface Options {
    responseTimeout?: number;
    keepAlive?: boolean | undefined;
    keepAliveInitialDelay?: number | undefined;
    maxBufferSize?: number;
  }
}
