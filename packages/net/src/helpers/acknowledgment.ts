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
 * - MSH-15 asks for an accept (commit) acknowledgment, sent on receipt,
 *   before processing: CA when the message is accepted, CE when it is not
 *   (an error in it), CR when it is rejected (unsupported type, event,
 *   processing ID or version). Empty, none is sent.
 * - MSH-16 asks for the application acknowledgment, sent after processing.
 *   Empty, it is sent, as in original mode.
 */

export type HL7AckCondition = 'AL' | 'NE' | 'ER' | 'SU' | '';

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

/**
 * Takes a received message in: validates it when asked, sends the accept
 * acknowledgment its MSH-15 asks for, and answers a message that is not
 * acceptable. Returns whether the message is to be processed (routed).
 */
export function acceptMessage(
  message: HL7Message,
  /** Where an acknowledgment goes: the socket, or a function sending it */
  socket: HL7Socket | ((ack: HL7Message) => void),
  validate: boolean | HL7ValidateOptions | undefined,
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
    const ack = errors.length
      ? message.createNak(errors, 'accept')
      : message.createAck('CA');
    if (ackWanted(mode.accept, ackCodeOf(ack))) send(ack);
    return !errors.length;
  }
  if (errors.length) {
    const nak = message.createNak(errors);
    if (ackWanted(mode.application, ackCodeOf(nak))) send(nak);
    return false;
  }
  return true;
}
