/* c8 ignore start */

export interface HL7SegmentDefinition {
  desc?: string;
  fields: Record<
    string, // field index
    HL7FieldDefinition
  >;
}

export interface HL7FieldDefinition {
  type: string;
  desc?: string;
  opt?: HL7DatatypeOptional;
  rep?: HL7DatatypeRepetition;
  len?: number;
  table?: number;
  encode?: (v: any) => string;
  decode?: (v: any) => any;
}

export interface HL7DataTypeDefinition {
  desc?: string;
  fields?: Record<
    string, // field index
    HL7FieldDefinition
  >;
  encode?: (v: any) => string;
  decode?: (v: any) => any;
}

export interface HL7MessageDefinition {
  desc?: string;
  segments?: Record<string, HL7MessageSegmentsDefinition>;
}

export interface HL7MessageSegmentsDefinition {
  idx: number;
  desc?: string;
  min?: number;
  max?: number;
  /**
   * The segment type, when the key is not it: a segment repeated among its
   * siblings is keyed as HAPI HL7v2 keys it (the second PID is "PID2")
   */
  segment?: string;
  /** For a group, the names the same group has in other versions of the message */
  aliases?: string[];
  segments?: Record<string, HL7MessageSegmentsDefinition>;
}

export type HL7DatatypeOptional = 'R' | 'O' | 'S' | 'C' | 'B';
export type HL7DatatypeRepetition = number | 'infinite';
/* c8 ignore stop */
