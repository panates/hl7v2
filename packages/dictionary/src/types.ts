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
  /** Maximum length */
  len?: number;
  table?: number;
  /** HL7 data element number: PID-5 is item 108 */
  item?: number;
  /** Minimum length */
  minLen?: number;
  /** Conformance length (2.7+): the length a receiver must at least keep */
  confLen?: number;
  /**
   * Whether a longer value may be truncated (2.7+): true is HL7's "#", false
   * its "=" (never)
   */
  truncate?: boolean;
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

/** An HL7 table: the values a coded field takes (table 0001: F, M, ...) */
export interface HL7TableDefinition {
  desc?: string;
  /** Code: its text */
  values: Record<string, string>;
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
  /** A choice: the message carries one of its items (`segments`) */
  choice?: boolean;
  /** For a group, the names the same group has in other versions of the message */
  aliases?: string[];
  segments?: Record<string, HL7MessageSegmentsDefinition>;
}

export type HL7DatatypeOptional = 'R' | 'O' | 'S' | 'C' | 'B';
export type HL7DatatypeRepetition = number | 'infinite';
/* c8 ignore stop */
