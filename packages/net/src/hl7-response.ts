import { HL7Message, MSASegment } from 'hl7v2';
import { ackCodeOf, ackModeOf, ackWanted } from './helpers/acknowledgment.js';
import type { HL7Request } from './hl7-request.js';
import type { HL7Socket } from './hl7-socket.js';

type SendWatcher = (message: HL7Message) => void;

/**
 * The responses watching each socket's 'send' event. One listener per socket
 * tells them all, so a connection with many requests in flight does not pile
 * up one listener per request (and Node's MaxListenersExceededWarning).
 */
const sendWatchers = new WeakMap<
  HL7Socket,
  { watchers: Set<SendWatcher>; dispatch: SendWatcher }
>();

function watchSent(socket: HL7Socket, watcher: SendWatcher) {
  let entry = sendWatchers.get(socket);
  if (!entry) {
    const watchers = new Set<SendWatcher>();
    const dispatch: SendWatcher = message => {
      for (const w of watchers) w(message);
    };
    entry = { watchers, dispatch };
    sendWatchers.set(socket, entry);
    socket.on('send', dispatch);
  }
  entry.watchers.add(watcher);
}

function unwatchSent(socket: HL7Socket, watcher: SendWatcher) {
  const entry = sendWatchers.get(socket);
  if (!entry?.watchers.delete(watcher) || entry.watchers.size) return;
  socket.removeListener('send', entry.dispatch);
  sendWatchers.delete(socket);
}

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
    else watchSent(request.socket, this._onSend);
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
    unwatchSent(this.request.socket, this._onSend);
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
