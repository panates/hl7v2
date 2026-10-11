import { HL7Error, type HL7Message } from 'hl7v2';
import {
  ackCodeOf,
  ackModeOf,
  acknowledges,
  ackWanted,
} from './helpers/acknowledgment.js';
import type { HL7BatchReplies } from './helpers/batch.js';
import type { HL7Socket } from './hl7-socket.js';

export class HL7Request {
  readonly socket: HL7Socket;
  readonly message: HL7Message;
  /** The replies of the batch the message came in, when it came in one */
  readonly batch?: HL7BatchReplies;

  /** Called on every answer before it is sent (the server's identity on it) */
  protected readonly _prepare?: (message: HL7Message) => void;
  protected _acceptPending: boolean;

  constructor(
    socket: HL7Socket,
    message: HL7Message,
    batch?: HL7BatchReplies,
    prepare?: (message: HL7Message) => void,
    /** The accept acknowledgment is held back until processed (see sendAccept()) */
    acceptPending = false,
  ) {
    this.socket = socket;
    this.message = message;
    this.batch = batch;
    this._prepare = prepare;
    this._acceptPending = acceptPending;
  }

  /**
   * Whether the accept acknowledgment MSH-15 asks for is still to be sent:
   * with acceptAcknowledgment 'processed', until the request is processed
   */
  get acceptPending(): boolean {
    return this._acceptPending;
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
      this.send(ack);
    }
  }

  /**
   * Sends an answer to this request: on the socket, or - for a message that
   * came in a batch - into the reply batch. An application acknowledgment
   * goes after the accept one still held back, which it decides: CA for AA,
   * CE or CR otherwise.
   */
  send(message: HL7Message) {
    if (this._acceptPending && acknowledges(message, this.message)) {
      const code = ackCodeOf(message);
      this.sendAccept(
        code === 'AA'
          ? undefined
          : new HL7Error(
              String(message.get('MSA-3') ?? '') || 'Application error',
              code === 'AR' ? { ackCode: 'AR' } : undefined,
            ),
      );
    }
    this._prepare?.(message);
    if (this.batch) this.batch.send(message);
    else this.socket.sendMessage(message);
  }
}
