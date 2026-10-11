import { parseHL7DateTime } from 'hl7v2-dictionary';

/** A value as a Date: a Date as it is, an HL7 date/time string parsed */
export function toDate(value: unknown): Date | undefined {
  if (value == null || value === '') return;
  if (value instanceof Date) return value;
  return parseHL7DateTime(String(value));
}
