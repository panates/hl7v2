import type { HL7Request } from './hl7-request.js';
import type { HL7Response } from './hl7-response.js';

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
