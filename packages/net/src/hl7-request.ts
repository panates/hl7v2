import { HL7Message } from 'hl7v2';
import { HL7Socket } from './hl7-socket.js';

export class HL7Request {
  readonly socket: HL7Socket;
  readonly message: HL7Message;

  constructor(socket: HL7Socket, message: HL7Message) {
    this.socket = socket;
    this.message = message;
  }
}
