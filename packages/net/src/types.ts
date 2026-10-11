import type { HL7Message } from 'hl7v2';
import type { HL7Request } from './hl7-request.js';
import type { HL7Response } from './hl7-response.js';
import type { HL7Socket } from './hl7-socket.js';

export type NextFunction = (err?: Error) => void | Promise<void>;

export type HL7Middleware =
  | ((req: HL7Request, res: HL7Response) => void)
  | ((req: HL7Request, res: HL7Response) => Promise<void>)
  | ((req: HL7Request, res: HL7Response, next: NextFunction) => void);

export type HL7ErrorMiddleware =
  | ((error: Error, req: HL7Request, res: HL7Response) => void)
  | ((error: Error, req: HL7Request, res: HL7Response) => Promise<void>)
  | ((
      error: Error,
      req: HL7Request,
      res: HL7Response,
      next: NextFunction,
    ) => void);

/**
 * Which messages a handler takes:
 * - 'ADT^A01': message type and trigger event; '*' matches any part, so
 *   'ADT^*' (or just 'ADT') is every ADT message and '*' every message;
 * - 'ADT_A01': a message structure, so every event using it - A01, A04,
 *   A08 ... (see HL7Message.structureName);
 * - a list of these, any of which may match;
 * - a function deciding for itself.
 */
export type HL7MessageFilter =
  string | string[] | ((req: HL7Request) => boolean);

/**
 * What an answer to a request is, as a beforeResponse hook is told:
 * - 'accept': an accept acknowledgment - CA, or CE/CR when processing failed;
 * - 'application': the application acknowledgment the router sends when the
 *   handlers are done - res.message, AA or a NAK;
 * - 'reply': an answer a handler sends itself with req.send() (an ADR^A19
 *   for a QRY^A19, say);
 * - 'reject': a message refused before processing (validation: CE/CR or
 *   AE/AR) or not processed in time (the response timeout's NAK).
 */
export type HL7ResponseKind = 'accept' | 'application' | 'reply' | 'reject';

export interface HL7ResponseContext {
  kind: HL7ResponseKind;
  /** The request answered: its message, socket, batch */
  request: HL7Request;
  /** The connection the answer goes out on */
  socket: HL7Socket;
  /** The error the answer reports, when it reports one */
  error?: Error;
}

/**
 * Called with an answer to a request before it is sent. Returns nothing to
 * send it (changed in place, or not), another message to send instead, or
 * null to send nothing.
 */
export type HL7ResponseHook = (
  response: HL7Message,
  context: HL7ResponseContext,
) =>
  | HL7Message
  | null
  | undefined
  | void
  | Promise<HL7Message | null | undefined | void>;
