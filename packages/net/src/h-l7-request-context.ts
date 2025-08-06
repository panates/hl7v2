import { HL7Message, MSHSegment } from 'hl7v2';
import { AsyncEventEmitter } from 'node-events-async';
import { uid } from 'uid';
import { HL7Socket } from './hl7-socket.js';

export class HL7RequestContext extends AsyncEventEmitter {
  protected _finished = false;
  readonly socket: HL7Socket;
  readonly request: HL7Message;
  error?: Error;

  constructor(socket: HL7Socket, message: HL7Message) {
    super();
    this.socket = socket;
    this.request = message;
    if (!message.header.field(MSHSegment.MessageControlID).getValue())
      message.header.field(MSHSegment.MessageControlID).setValue(uid(8));
  }

  get finished(): boolean {
    return this._finished || !this.socket.connected;
  }

  end(message?: HL7Message): void {
    if (this.finished || !this.socket.connected) return;
    if (message) this.socket.sendMessage(message);
    this._finished = true;
    this.emit('finish', message);
  }
}
