import { HL7Error, type HL7Message } from 'hl7v2';
import {
  ackCodeOf,
  ackModeOf,
  acknowledges,
  ackWanted,
} from './helpers/acknowledgment.js';
import type { HL7BatchReplies } from './helpers/batch.js';
import type { HL7Socket } from './hl7-socket.js';
import type { HL7ResponseHook, HL7ResponseKind } from './types.js';

export class HL7Request {
  readonly socket: HL7Socket;
  readonly message: HL7Message;
  /** The replies of the batch the message came in, when it came in one */
  readonly batch?: HL7BatchReplies;

  /** Called on every answer before it is sent (the server's identity on it) */
  protected readonly _prepare?: (message: HL7Message) => void;
  protected readonly _hooks: HL7ResponseHook[];
  protected readonly _onError?: (error: Error) => void;
  protected _acceptPending: boolean;
  protected _answered = false;
  /** Answers going through the hooks, sent in the order they were given */
  protected _queue?: Promise<void>;

  constructor(
    socket: HL7Socket,
    message: HL7Message,
    batch?: HL7BatchReplies,
    /** The options, or - as before them - the `prepare` function alone */
    options?: HL7Request.Options | ((message: HL7Message) => void),
  ) {
    const opts = typeof options === 'function' ? { prepare: options } : options;
    this.socket = socket;
    this.message = message;
    this.batch = batch;
    this._prepare = opts?.prepare;
    this._hooks = opts?.beforeResponse ?? [];
    this._onError = opts?.onError;
    this._acceptPending = !!opts?.acceptPending;
  }

  /**
   * Whether the accept acknowledgment MSH-15 asks for is still to be sent:
   * with acceptAcknowledgment 'processed', until the request is processed
   */
  get acceptPending(): boolean {
    return this._acceptPending;
  }

  /**
   * Whether the request is answered for the application: an AA, AE or AR
   * whose MSA-2 is its control ID was given to send() - sent, or on its way
   * through the beforeResponse hooks
   */
  get answered(): boolean {
    return this._answered;
  }

  /**
   * Sends the accept acknowledgment held back while the request is processed:
   * CA, or - given the error processing failed with - CE (CR for a
   * rejection), as MSH-15 asks. A handler may call it once the message is
   * safely stored; otherwise it is sent when the handlers finish, before
   * the application acknowledgment. Once only; nothing when none is held back.
   */
  sendAccept(error?: Error) {
    if (!this._acceptPending) return;
    this._acceptPending = false;
    const ack = error
      ? this.message.createNak([error], 'accept')
      : this.message.createAck('CA');
    if (ackWanted(ackModeOf(this.message).accept, ackCodeOf(ack))) {
      this.send(ack, 'accept', error);
    }
  }

  /**
   * Sends an answer to this request: on the socket, or - for a message that
   * came in a batch - into the reply batch. An application acknowledgment
   * goes after the accept one still held back, which it decides: CA for AA,
   * CE or CR otherwise.
   *
   * The answer passes the beforeResponse hooks first, which may change,
   * replace or drop it; `kind` and `error` are what they are told (a
   * handler's own answer is a 'reply'). Answers are sent in the order given.
   */
  send(message: HL7Message, kind: HL7ResponseKind = 'reply', error?: Error) {
    if (acknowledges(message, this.message)) {
      if (this._acceptPending) {
        const code = ackCodeOf(message);
        this.sendAccept(
          code === 'AA'
            ? undefined
            : (error ??
                new HL7Error(
                  String(message.get('MSA-3') ?? '') || 'Application error',
                  code === 'AR' ? { ackCode: 'AR' } : undefined,
                )),
        );
      }
      this._answered = true;
    }
    this._prepare?.(message);
    /* Without hooks, and nothing before it still on its way: at once */
    if (!this._hooks.length && !this._queue) {
      this._deliver(message);
      return;
    }
    const queued = (this._queue ?? Promise.resolve())
      .then(() => this._passHooks(message, kind, error))
      .then(out => {
        if (out) this._deliver(out);
      })
      .catch(e => this._onError?.(e))
      .finally(() => {
        if (this._queue === queued) this._queue = undefined;
      });
    this._queue = queued;
  }

  /** Resolves once every answer given to send() so far is sent (or dropped) */
  async flushed(): Promise<void> {
    while (this._queue) await this._queue;
  }

  /**
   * Runs the hooks in turn, each given what the one before returned: the
   * message to send, or null to send nothing. A hook that throws is reported
   * (onError) and passed over - an answer is not lost to a broken hook.
   */
  protected async _passHooks(
    message: HL7Message,
    kind: HL7ResponseKind,
    error?: Error,
  ): Promise<HL7Message | null> {
    let out = message;
    for (const hook of this._hooks) {
      try {
        const result = await hook(out, {
          kind,
          request: this,
          socket: this.socket,
          error,
        });
        if (result === null) return null;
        if (result) out = result;
      } catch (e: any) {
        this._onError?.(e instanceof Error ? e : new Error(String(e)));
      }
    }
    return out;
  }

  protected _deliver(message: HL7Message) {
    if (this.batch) this.batch.send(message);
    else this.socket.sendMessage(message);
  }
}

export namespace HL7Request {
  export interface Options {
    /** Called on every answer before the hooks (the server's identity on it) */
    prepare?: (message: HL7Message) => void;
    /** The accept acknowledgment is held back until processed (see sendAccept()) */
    acceptPending?: boolean;
    /** Run on every answer before it is sent (see HL7Router.beforeResponse()) */
    beforeResponse?: HL7ResponseHook[];
    /** A hook that threw, or an answer that could not be sent */
    onError?: (error: Error) => void;
  }
}
