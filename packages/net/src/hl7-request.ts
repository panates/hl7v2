import type { HL7Message } from 'hl7v2';
import type { HL7BatchReplies } from './helpers/batch.js';
import type { HL7Socket } from './hl7-socket.js';

export class HL7Request {
  readonly socket: HL7Socket;
  readonly message: HL7Message;
  /** The replies of the batch the message came in, when it came in one */
  readonly batch?: HL7BatchReplies;

  /** Called on every answer before it is sent (the server's identity on it) */
  protected readonly _prepare?: (message: HL7Message) => void;

  constructor(
    socket: HL7Socket,
    message: HL7Message,
    batch?: HL7BatchReplies,
    prepare?: (message: HL7Message) => void,
  ) {
    this.socket = socket;
    this.message = message;
    this.batch = batch;
    this._prepare = prepare;
  }

  /**
   * Sends an answer to this request: on the socket, or - for a message that
   * came in a batch - into the reply batch
   */
  send(message: HL7Message) {
    this._prepare?.(message);
    if (this.batch) this.batch.send(message);
    else this.socket.sendMessage(message);
  }
}
