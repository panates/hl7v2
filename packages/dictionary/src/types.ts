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
  decode?: (v: string) => any;
}

export interface HL7DataTypeDefinition {
  desc?: string;
  fields?: Record<
    string, // field index
    HL7FieldDefinition
  >;
  encode?: (v: any) => string;
  decode?: (v: string) => any;
}

export type HL7DatatypeOptional = 'R' | 'O' | 'S' | 'C' | 'B';
export type HL7DatatypeRepetition = number | 'infinite';
/* c8 ignore stop */
