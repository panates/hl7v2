import type { HL7Request } from './hl7-request.js';
import type { HL7Response } from './hl7-response.js';

export type NextFunction = (error?: Error) => void;

export type HL7Middleware = (
  req: HL7Request,
  res: HL7Response,
  next: NextFunction,
) => void;

export type HL7ErrorMiddleware = (
  error: Error,
  req: HL7Request,
  res: HL7Response,
  next: NextFunction,
) => void;
