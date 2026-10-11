/*
 * HL7 numbers. NM is an optional sign, digits and an optional decimal
 * point - "12.5", "-3", ".5" - with no exponent, no thousands separator and
 * no decimal comma; SI a non-negative integer. A value is read as written in
 * that form only: "12,5" is not twelve.
 */

const NM = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
const SI = /^\d+$/;

/**
 * The number a value holds, when a JavaScript number holds it exactly;
 * otherwise the text, as written - "12345678901234567890" is not rounded
 */
function asNumber(text: string): number | string {
  const n = Number(text);
  const digits = text.replace(/^[+-]/, '').replace('.', '').replace(/^0+/, '');
  return digits.length <= 15 ? n : text;
}

/** NM: a number, or text in NM's form; anything else is refused */
export function toHL7Number(value: unknown): number | string {
  if (typeof value === 'number') {
    if (!Number.isFinite(value))
      throw new TypeError(`Value "${value}" is not a number`);
    return value;
  }
  const text = String(value ?? '').trim();
  if (!NM.test(text)) {
    throw new TypeError(`Value "${value}" is not a valid HL7 number (NM)`);
  }
  return asNumber(text);
}

/** SI: a non-negative integer */
export function toHL7SequenceId(value: unknown): number | string {
  if (typeof value === 'number') {
    if (!Number.isInteger(value) || value < 0) {
      throw new TypeError(
        `Value "${value}" is not a valid HL7 sequence ID (SI)`,
      );
    }
    return value;
  }
  const text = String(value ?? '').trim();
  if (!SI.test(text)) {
    throw new TypeError(`Value "${value}" is not a valid HL7 sequence ID (SI)`);
  }
  return asNumber(text);
}
