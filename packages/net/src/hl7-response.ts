import { HL7Message } from 'hl7v2';
import { AsyncEventEmitter } from 'node-events-async';
import { HL7Request } from './hl7-request.js';
import { HL7Socket } from './hl7-socket.js';

export class HL7Response extends AsyncEventEmitter {
  protected _req: HL7Request;
  protected _finished = false;

  constructor(req: HL7Request) {
    super();
    this._req = req;
  }

  get socket(): HL7Socket {
    return this._req.socket;
  }

  get request(): HL7Request {
    return this._req;
  }

  get finished(): boolean {
    return this._finished || !this.socket.connected;
  }

  send(message: HL7Message): void {
    if (this.finished || !this.socket.connected) return;
    this.socket.sendMessage(message);
    this._finished = true;
    this.emit('finish', message);
  }
}
