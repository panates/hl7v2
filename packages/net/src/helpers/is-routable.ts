import { type HL7Message, MSHSegment } from 'hl7v2';
import type { HL7Socket } from '../hl7-socket.js';

/**
 * Whether a received message goes to the router, which answers it.
 * Not the response to a request this side sent (sendMessageWaitAck has it),
 * and not an acknowledgment: HL7 acknowledgments are never acknowledged -
 * answering one makes both sides acknowledge each other forever.
 */
export function isRoutable(message: HL7Message, socket: HL7Socket): boolean {
  if (socket.isResponse(message)) return false;
  return message.header.field(MSHSegment.MessageType).getValue(1) !== 'ACK';
}
