import { HL7Message, MSASegment } from 'hl7v2';
import { ackCodeOf, ackModeOf, ackWanted } from './helpers/acknowledgment.js';
import type { HL7Request } from './hl7-request.js';
import type { HL7Socket } from './hl7-socket.js';

export class HL7Response {
  protected _finished = false;
  protected _onSend: (message: HL7Message) => void;
  readonly request: HL7Request;
  error?: Error;
  message: HL7Message;

  constructor(request: HL7Request) {
    this.request = request;
    this.message = request.message.createAck();
    /**
     * Finished once *this* request is answered - by this response's message, or
     * by any message acknowledging the request's control ID (MSA-2). Other
     * messages sent on the same socket, such as the answers to concurrent
     * requests, do not count.
     */
    this._onSend = (sent: HL7Message) => {
      if (sent !== this.message && !this._answers(sent)) return;
      this._finished = true;
      this.dispose();
    };
    if (request.batch) request.batch.listeners.add(this._onSend);
    else request.socket.on('send', this._onSend);
  }

  get socket(): HL7Socket {
    return this.request.socket;
  }

  get finished(): boolean {
    return this._finished || this.request.answered;
  }

  failed(error: Error) {
    this.error = error;
    const msa = this.message.getSegment('MSA');
    const code = msa?.field(MSASegment.AcknowledgmentCode).getValue();
    if (code !== 'AE' && code !== 'AR') {
      this.message = this.request.message.createNak([error]);
    }
  }

  /** Stops watching the socket; called once the request is handled */
  dispose() {
    this.request.batch?.listeners.delete(this._onSend);
    this.request.socket.removeListener('send', this._onSend);
  }

  /**
   * Whether the request wants the application acknowledgment this response
   * would send: in enhanced mode MSH-16 decides it (see helpers/acknowledgment)
   */
  get acknowledgmentWanted(): boolean {
    return ackWanted(
      ackModeOf(this.request.message).application,
      ackCodeOf(this.message),
    );
  }

  protected _answers(sent: HL7Message): boolean {
    const controlId = this.request.message.controlId;
    if (!controlId) return false;
    const msa = sent.getSegment('MSA');
    /* An accept (commit) acknowledgment does not answer for the application */
    if (
      /^C[AER]$/.test(
        String(msa?.field(MSASegment.AcknowledgmentCode).getValue()),
      )
    ) {
      return false;
    }
    return msa?.field(MSASegment.MessageControlID).toHL7String() === controlId;
  }
}
