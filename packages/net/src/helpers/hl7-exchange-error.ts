import { HL7Error, HL7Message } from 'hl7v2';

export class HL7ExchangeError extends HL7Error {
  request?: HL7Message;
  response?: HL7Message;

  constructor(message: string, args?: HL7ExchangeError.ErrorArgs) {
    super(message, args);
    if (args?.request) this.request = args.request;
    if (args?.response) this.response = args.response;
  }
}

export namespace HL7ExchangeError {
  export interface ErrorArgs extends HL7Error.ErrorArgs {
    request?: HL7Message;
    response?: HL7Message;
  }
}
