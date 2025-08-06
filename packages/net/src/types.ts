import type { HL7RequestContext } from './h-l7-request-context.js';

export type NextFunction = (error?: Error) => void;

export type HL7Middleware = (
  context: HL7RequestContext,
  next: NextFunction,
) => void;
