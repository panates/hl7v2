import { HL7Message, MSASegment } from 'hl7v2';
import type { HL7Request } from './hl7-request.js';
import type { HL7Socket } from './hl7-socket.js';

export class HL7Response {
  protected _finished = false;
  readonly request: HL7Request;
  errors: Error[] = [];
  message: HL7Message;

  constructor(request: HL7Request) {
    this.request = request;
    this.message = request.message.createAck();
    request.socket.once('send', () => {
      this._finished = true;
    });
  }

  get socket(): HL7Socket {
    return this.request.socket;
  }

  get finished(): boolean {
    return this._finished;
  }

  failed(error: Error) {
    const msa = this.message.getSegment('MSA');
    if (msa?.field(MSASegment.AcknowledgmentCode).getValue() !== 'AE')
      this.message = this.request.message.createNak(this.errors);
    this.errors.push(error);
    this.message.addError(error);
  }
}
