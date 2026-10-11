import {
  type HL7Message,
  type HL7ValidateOptions,
  MSASegment,
  MSHSegment,
} from 'hl7v2';
import type { HL7Socket } from '../hl7-socket.js';

/*
 * HL7 acknowledgment modes (HL7 v2 chapter 2, "Acknowledgment messages").
 *
 * Original mode - MSH-15 and MSH-16 both empty: the receiver answers every
 * message with one application acknowledgment, AA, AE or AR.
 *
 * Enhanced mode - either valued, each one of AL (always), NE (never), ER
 * (on error or reject only), SU (on success only):
 * - MSH-15 asks for an accept (commit) acknowledgment: CA when the message is
 *   accepted, CE when it is not (an error in it), CR when it is rejected
 *   (unsupported type, event, processing ID or version). Empty, none is sent.
 *   It is sent on receipt, before processing - or, for a receiver whose
 *   handlers commit the message to safe storage, once they have
 *   (HL7AcceptAcknowledgment).
 * - MSH-16 asks for the application acknowledgment, sent after processing.
 *   Empty, it is sent, as in original mode.
 */

export type HL7AckCondition = 'AL' | 'NE' | 'ER' | 'SU' | '';

/**
 * When the accept acknowledgment (MSH-15) is sent:
 * - 'receipt': on receipt, before the handlers run - the default.
 * - 'processed': once the handlers finish: CA when they succeed, CE (CR for
 *   a rejection) when one throws, fails the response or times out. For a
 *   receiver whose handlers are what commits the message, so that CA means
 *   it is stored.
 */
export type HL7AcceptAcknowledgment = 'receipt' | 'processed';

export interface HL7AckMode {
  enhanced: boolean;
  /** MSH-15 */
  accept: HL7AckCondition;
  /** MSH-16 */
  application: HL7AckCondition;
}

export function ackModeOf(message: HL7Message): HL7AckMode {
  const read = (pos: number) =>
    String(message.header.field(pos).getValue() ?? '')
      .trim()
      .toUpperCase() as HL7AckCondition;
  const accept = read(MSHSegment.AcceptAcknowledgmentType);
  const application = read(MSHSegment.ApplicationAcknowledgmentType);
  return { enhanced: !!(accept || application), accept, application };
}

/** Whether an acknowledgment with this MSA-1 code is to be sent */
export function ackWanted(condition: HL7AckCondition, code: string): boolean {
  const success = code === 'AA' || code === 'CA';
  switch (condition) {
    case 'NE':
      return false;
    case 'ER':
      return !success;
    case 'SU':
      return success;
    default:
      return true;
  }
}

/** The MSA-1 code of an acknowledgment */
export function ackCodeOf(message: HL7Message): string {
  return String(
    message
      .getSegment('MSA')
      ?.field(MSASegment.AcknowledgmentCode)
      .getValue() ?? '',
  );
}

/** Whether an acknowledgment answers this message for the application (AA, AE, AR) */
export function acknowledges(ack: HL7Message, message: HL7Message): boolean {
  const controlId = message.controlId;
  const msa = ack.getSegment('MSA');
  return (
    !!controlId &&
    /^A[AER]$/.test(ackCodeOf(ack)) &&
    msa?.field(MSASegment.MessageControlID).toHL7String() === controlId
  );
}

/**
 * Takes a received message in: validates it when asked, sends the accept
 * acknowledgment its MSH-15 asks for, and answers a message that is not
 * acceptable. Returns whether the message is to be processed (routed).
 * With `when` 'processed', the accept acknowledgment of a message to be
 * processed is left to the request (HL7Request.sendAccept()).
 */
export function acceptMessage(
  message: HL7Message,
  /**
   * Where an acknowledgment goes: the socket, or a function sending it - with
   * the first error, for a message not accepted
   */
  socket: HL7Socket | ((ack: HL7Message, error?: Error) => void),
  validate: boolean | HL7ValidateOptions | undefined,
  when: HL7AcceptAcknowledgment = 'receipt',
): boolean {
  const send =
    typeof socket === 'function'
      ? socket
      : (m: HL7Message) => socket.sendMessage(m);
  const errors = validate
    ? message
        .validate(validate === true ? undefined : validate)
        .filter(e => e.severity === 'E')
    : [];
  const mode = ackModeOf(message);
  if (mode.accept) {
    if (!errors.length && when === 'processed') return true;
    const ack = errors.length
      ? message.createNak(errors, 'accept')
      : message.createAck('CA');
    if (ackWanted(mode.accept, ackCodeOf(ack))) send(ack, errors[0]);
    return !errors.length;
  }
  if (errors.length) {
    const nak = message.createNak(errors);
    if (ackWanted(mode.application, ackCodeOf(nak))) send(nak, errors[0]);
    return false;
  }
  return true;
}
