import type { HL7Message, HL7ValidateOptions } from 'hl7v2';
import type { HL7Socket } from '../hl7-socket.js';

/**
 * With validation on, answers a received message that fails it with a NAK
 * listing every error (one ERR each) and returns true: the message is not
 * routed to the handlers. Returns false for a valid message.
 */
export function rejectInvalid(
  message: HL7Message,
  socket: HL7Socket,
  validate: boolean | HL7ValidateOptions | undefined,
): boolean {
  if (!validate) return false;
  const errors = message
    .validate(validate === true ? undefined : validate)
    .filter(e => e.severity === 'E');
  if (!errors.length) return false;
  socket.sendMessage(message.createNak(errors));
  return true;
}
