/**
 * HL7 table 0357, message error condition codes - the code ERR carries, with
 * the text older versions write beside it
 */
export const HL7_ERROR_CODES: Record<number, string> = {
  0: 'Message accepted',
  100: 'Segment sequence error',
  101: 'Required field missing',
  102: 'Data type error',
  103: 'Table value not found',
  104: 'Value too long',
  200: 'Unsupported message type',
  201: 'Unsupported event code',
  202: 'Unsupported processing id',
  203: 'Unsupported version id',
  204: 'Unknown key identifier',
  205: 'Duplicate key identifier',
  206: 'Application record locked',
  207: 'Application internal error',
};

export class HL7Error extends Error {
  hl7ErrorCode?: number;
  /** The acknowledgment a NAK for this error carries; see HL7Message.createNak() */
  ackCode?: 'AE' | 'AR';
  severity?: 'E' | 'W' | 'I' = 'E';
  appErrorCode?: string;
  line?: number;
  segmentType?: string;
  segmentSequence?: number;
  fieldPosition?: number;
  componentPosition?: number;
  subComponentPosition?: number;
  repetitionIndex?: number;

  constructor(message: string, args?: HL7Error.ErrorArgs) {
    super(message);
    if (args?.hl7ErrorCode) this.hl7ErrorCode = args?.hl7ErrorCode;
    if (args?.ackCode) this.ackCode = args.ackCode;
    if (args?.line != null) this.line = args.line;
    if (args?.severity) this.severity = args?.severity;
    if (args?.appErrorCode) this.appErrorCode = args?.appErrorCode;
    if (args?.segmentType) this.segmentType = args?.segmentType;
    if (args?.segmentSequence != null)
      this.segmentSequence = args?.segmentSequence;
    if (args?.fieldPosition != null) this.fieldPosition = args?.fieldPosition;
    if (args?.componentPosition != null)
      this.componentPosition = args?.componentPosition;
    if (args?.subComponentPosition != null)
      this.subComponentPosition = args?.subComponentPosition;
    if (args?.repetitionIndex != null)
      this.repetitionIndex = args?.repetitionIndex;
  }
}

export namespace HL7Error {
  export interface ErrorArgs {
    hl7ErrorCode?: number;
    ackCode?: 'AE' | 'AR';
    severity?: 'E' | 'W' | 'I';
    appErrorCode?: string;
    line?: number;
    segmentType?: string;
    segmentSequence?: number;
    fieldPosition?: number;
    componentPosition?: number;
    subComponentPosition?: number;
    repetitionIndex?: number;
  }
}
