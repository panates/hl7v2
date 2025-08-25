import { HL7Request } from './hl7-request.js';
import { HL7Response } from './hl7-response.js';

export type NextFunction = () => void | Promise<void>;

export type HL7Middleware =
  | ((req: HL7Request, res: HL7Response) => void)
  | ((req: HL7Request, res: HL7Response) => Promise<void>)
  | ((req: HL7Request, res: HL7Response, next: NextFunction) => void);
