import { Buffer } from 'node:buffer';
import tls from 'node:tls';
import type { HL7Version } from 'hl7v2';
import {
  CR,
  DEFAULT_HL7_CHARSET,
  findHL7Encoding,
  FS,
  HL7Message,
  MSASegment,
  MSHSegment,
  resolveHL7Encoding,
  VT,
} from 'hl7v2';
import type { Socket } from 'net';
import { AsyncEventEmitter } from 'node-events-async';
import { ackModeOf } from './helpers/acknowledgment.js';
import { FrameStream } from './helpers/frame-stream.js';

export class HL7Socket extends AsyncEventEmitter<HL7Socket.Events> {
  declare protected _socket: Socket;
  protected _messageHooks = new Set<(resp: HL7Message) => boolean>();
  /** Received messages that answered one of ours (see sendMessageWaitAck) */
  protected _responses = new WeakSet<HL7Message>();
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
    this.responseTimeout = options?.responseTimeout;
    const frameStream = new FrameStream({
      frameStart: VT,
      frameEnd: FS + CR,
      maxBufferSize: options?.maxBufferSize,
    });
    frameStream.on('data', data => {
      this.emit('data', data);
      this._onData(data);
    });
    /**
     * A framing error (such as "Max buffer size exceeded") leaves the stream
     * unable to find the next frame, so the connection is closed, as HAPI
     * closes it. Unhandled, it stopped the stream and left the socket open
     * and deaf.
     */
    frameStream.on('error', error => {
      this.emit('error', error);
      this.socket?.destroy();
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

  get localAddress() {
    return this.socket?.localAddress;
  }

  get localPort() {
    return this.socket?.localPort;
  }

  get localFamily() {
    return this.socket?.localFamily;
  }

  get remoteAddress() {
    const addr = this.socket?.remoteAddress;
    return addr?.startsWith('::ffff:') ? addr.slice(7) : addr;
  }

  get remotePort() {
    return this.socket?.remotePort;
  }

  get remoteFamily() {
    return this.socket?.remoteFamily;
  }

  get writable() {
    return this.connected && this.socket?.writable;
  }

  address() {
    return this.socket?.address() || {};
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
      /** Fill MSH-18 only when every repetition is empty - never rewrite what the message carries */
      if (!message.charset) {
        message.header
          .field(MSHSegment.CharacterSet)
          .setValue(DEFAULT_HL7_CHARSET);
      }
      this._warnUnknownCharset(message, 'send');
      const buf = message.toBuffer({
        defaultCharset: this._options?.defaultCharset,
      });
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

  /**
   * Sends a message and waits for its response: the first received message
   * whose MSA-2 is this message's control ID, whatever its type - an ACK, or an
   * application response such as ADR^A19 for QRY^A19 - as HAPI's Initiator
   * matches it. Rejects on response timeout, socket error or close.
   */
  async sendMessageWaitAck(
    message: HL7Message,
    options?: HL7Socket.WaitAckOptions,
  ): Promise<HL7Message> {
    const responseTimeout = this.responseTimeout;
    const controlId = message.header
      .field(MSHSegment.MessageControlID)
      .getValue();
    /*
     * Enhanced mode: the accept acknowledgment (CA/CE/CR) comes first, the
     * application one after it. By default the first one asked for resolves.
     */
    const mode = ackModeOf(message);
    if (mode.accept === 'NE' && mode.application === 'NE') {
      throw new Error(
        'No acknowledgment to wait for: MSH-15 and MSH-16 are both NE',
      );
    }
    const waitFor =
      options?.acknowledgment ??
      (mode.accept && mode.accept !== 'NE' ? 'accept' : 'application');

    const waitPromise = new Promise<HL7Message>((resolve, reject) => {
      let responseTimer: NodeJS.Timeout | undefined;
      const messageHook = (resp: HL7Message): boolean => {
        const msa = resp.getSegment('MSA');
        if (!msa) return false;
        if (msa.field(MSASegment.MessageControlID).getValue() !== controlId)
          return false;
        /*
         * Waiting for the application acknowledgment, a CA is passed over; a
         * CE or CR resolves, since no application acknowledgment will follow
         */
        if (
          waitFor === 'application' &&
          msa.field(MSASegment.AcknowledgmentCode).getValue() === 'CA'
        ) {
          return true;
        }
        cleanup();
        resolve(resp);
        return true;
      };

      const onError = (error: any) => {
        cleanup();
        reject(error);
      };

      const onClose = () => onError(new Error('Socket closed before response'));

      const cleanup = () => {
        clearTimeout(responseTimer);
        this._messageHooks.delete(messageHook);
        this.socket.removeListener('error', onError);
        this.socket.removeListener('close', onClose);
      };

      /** Listening before sending, so no response can arrive unseen */
      this._messageHooks.add(messageHook);
      this.socket.once('error', onError);
      this.socket.once('close', onClose);
      if (responseTimeout) {
        responseTimer = setTimeout(() => {
          onError(new Error('Response timeout'));
        }, responseTimeout).unref();
      }
      try {
        this.sendMessage(message);
      } catch (e) {
        onError(e);
      }
    });
    this._waitPromises.add(waitPromise);
    waitPromise
      .finally(() => {
        this._waitPromises.delete(waitPromise);
      })
      .catch(() => undefined);
    return waitPromise;
  }

  /**
   * Whether a received message was the response to one sent with
   * sendMessageWaitAck. A response is not routed to handlers and not acknowledged.
   */
  isResponse(message: HL7Message): boolean {
    return this._responses.has(message);
  }

  setKeepAlive(enable?: boolean, initialDelay?: number) {
    this._options.keepAlive = enable;
    this._options.keepAliveInitialDelay = initialDelay;
    this.socket.setKeepAlive(enable, initialDelay);
  }

  setMaxBufferSize(value: number) {
    this._frameStream.maxBufferSize = value;
  }

  /**
   * Reports an MSH-18 value naming a character set this library does not
   * know - the message is still read and sent, with the default character
   * set - as HAPI logs "Invalid or unsupported charset in MSH-18"
   */
  protected _warnUnknownCharset(
    message: HL7Message,
    direction: 'receive' | 'send',
  ) {
    const charset = message.charset;
    if (!charset || findHL7Encoding(charset)) return;
    const encoding = resolveHL7Encoding(
      undefined,
      this._options?.defaultCharset,
    );
    this.emit('warning', {
      code: 'UNKNOWN_CHARSET',
      message:
        `Unknown character set "${charset}" in MSH-18 of a message to ${direction}; ` +
        `${direction === 'receive' ? 'decoded' : 'encoded'} as ${encoding}`,
      charset,
      encoding,
      direction,
      hl7Message: message,
    });
  }

  protected _onData(data: Buffer) {
    try {
      const message = new HL7Message();
      message.parse(data, {
        strict: this._options?.parseStrict,
        defaultCharset: this._options?.defaultCharset,
      });
      this._warnUnknownCharset(message, 'receive');
      for (const hook of this._messageHooks) {
        if (hook(message)) {
          this._responses.add(message);
          break;
        }
      }
      this.emit('message', message);
    } catch (err: any) {
      this.emit('error', err);
      if (!this.connected) return;
      /** A frame whose header cannot be read gets no NAK - there is nothing to address it to */
      let raw: ReturnType<typeof HL7Message.parseRaw>;
      try {
        raw = HL7Message.parseRaw(data);
      } catch {
        return;
      }
      const nak = new HL7Message(raw.version as HL7Version).createNak([err]);
      nak.header
        .field(MSHSegment.MessageType)
        .fromHL7String('ACK^' + (raw.messageType?.split('^')[1] || ''));
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
    /**
     * A TLS client is ready once the handshake is done and the server
     * verified - before it, a certificate the client refuses would only
     * surface as an error after a message was sent
     */
    hl7EventListeners.readyEvent =
      socket instanceof tls.TLSSocket ? 'secureConnect' : 'ready';
    socket.on(hl7EventListeners.readyEvent, hl7EventListeners.onReady);
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
      this.socket.removeListener(
        hl7EventListeners.readyEvent,
        hl7EventListeners.onReady,
      );
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
    warning: [warning: Warning];
  }

  /** Something the socket worked around rather than failed on */
  export interface Warning {
    code: 'UNKNOWN_CHARSET';
    message: string;
    /** The MSH-18 value */
    charset: string;
    /** The encoding used instead */
    encoding: string;
    direction: 'receive' | 'send';
    hl7Message: HL7Message;
  }

  export interface WaitAckOptions {
    /**
     * In enhanced mode (MSH-15/16 valued), which acknowledgment resolves:
     * the accept one (CA/CE/CR) or the application one (AA/AE/AR; a CE or CR
     * resolves it too, as no application acknowledgment follows them).
     * Default: the accept one when MSH-15 asks for it, otherwise the
     * application one.
     */
    acknowledgment?: 'accept' | 'application';
  }

  export interface Options {
    responseTimeout?: number;
    keepAlive?: boolean | undefined;
    keepAliveInitialDelay?: number | undefined;
    maxBufferSize?: number;
    parseStrict?: boolean;
    /**
     * The character set used when MSH-18 is empty on a received message, or
     * names one this library does not know: an HL7 table 0211 value or an
     * iconv-lite encoding name. Default: UTF-8, which reads ASCII as well.
     */
    defaultCharset?: string;
  }
}
