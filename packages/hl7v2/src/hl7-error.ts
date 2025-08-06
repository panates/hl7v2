export class HL7Error extends Error {
  hl7ErrorCode?: number;
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
