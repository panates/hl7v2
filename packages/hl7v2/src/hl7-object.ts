import * as dictionary from 'hl7v2-dictionary';
import type { Hl7Component } from './hl7-component.js';
import type { HL7Repetition } from './hl7-repetition.js';
import type { HL7Segment } from './hl7-segment.js';

/*
 * A segment as a plain object, keyed by the field enums' member names
 * (PIDSegment.PatientName -> "PatientName"); a composite value is an object
 * keyed by its type's (XPNType.FamilyName -> "FamilyName"), a composite
 * component's by its sub-components'. A field the version lets repeat is an
 * array. Empty values are left out; HL7's null ("") is null. A position no
 * enum names (a Z segment's fields) is keyed by its number.
 *
 * The object interfaces (PIDObject, XPNObject ...) are generated in
 * hl7v2-dictionary's segment-objects.ts.
 */

type Names = Record<number | string, string | number> | undefined;

const enumOf = (name: string): Names => (dictionary as any)[name];

function nameOf(names: Names, pos: number): string {
  const n = names?.[pos];
  return typeof n === 'string' ? n : String(pos);
}

function positionOf(names: Names, key: string): number {
  const n = names?.[key];
  if (typeof n === 'number') return n;
  const pos = Number(key);
  if (Number.isInteger(pos) && pos > 0) return pos;
  throw new Error(`Unknown field or component "${key}"`);
}

const isEmpty = (v: unknown) =>
  v === undefined ||
  (typeof v === 'object' && v !== null && !Object.keys(v).length);

function componentValue(component: Hl7Component): unknown {
  if (component.isPrimitive) return component.getValue();
  const names = enumOf(`${component.definition.type}Type`);
  const out: Record<string, unknown> = {};
  (component.subComponents || []).forEach((sub, i) => {
    if (sub && !sub.isEmpty()) out[nameOf(names, i + 1)] = sub.value;
  });
  return Object.keys(out).length ? out : undefined;
}

function repetitionValue(rep: HL7Repetition): unknown {
  const components = rep.components || [];
  if (rep.field.isPrimitive) return components[0]?.getValue();
  const names = enumOf(`${rep.field.definition.type}Type`);
  const out: Record<string, unknown> = {};
  components.forEach((component, i) => {
    if (!component) return;
    const value = componentValue(component);
    if (value !== undefined) out[nameOf(names, i + 1)] = value;
  });
  return Object.keys(out).length ? out : undefined;
}

export function segmentToObject(segment: HL7Segment): Record<string, any> {
  const names = enumOf(`${segment.segmentType}Segment`);
  const out: Record<string, any> = {};
  segment.fields.forEach((field, i) => {
    if (!field) return;
    /* HL7's null - "delete this value" - is a value to pass on */
    if (field.toHL7String() === '""') {
      out[nameOf(names, i + 1)] = null;
      return;
    }
    if (field.isEmpty()) return;
    const values = field.repetitions.map(repetitionValue);
    const def = field.definition;
    const repeats = def.rep !== undefined && def.rep !== 1;
    const value = repeats ? values.filter(v => !isEmpty(v)) : values[0];
    if (isEmpty(value) || (Array.isArray(value) && !value.length)) return;
    out[nameOf(names, i + 1)] = value;
  });
  return out;
}

/**
 * Sets a segment's fields from an object shaped as segmentToObject() makes
 * it. A field given is replaced; one not given is kept; null writes HL7's
 * null (""), undefined clears the field.
 */
export function assignSegment(
  segment: HL7Segment,
  object: Record<string, any>,
): void {
  const names = enumOf(`${segment.segmentType}Segment`);
  for (const [key, value] of Object.entries(object)) {
    const pos = positionOf(names, key);
    if (segment.segmentType === 'MSH' && pos <= 2) continue;
    const field = segment.field(pos);
    field.clear();
    if (value === undefined) continue;
    const reps = Array.isArray(value) ? value : [value];
    reps.forEach((repValue, r) => {
      const rep = field.repetition(r);
      if (
        repValue === null ||
        typeof repValue !== 'object' ||
        repValue instanceof Date
      ) {
        rep.setValue(repValue);
        return;
      }
      const typeNames = enumOf(`${field.definition.type}Type`);
      for (const [cKey, cValue] of Object.entries(repValue)) {
        const c = positionOf(typeNames, cKey);
        const component = rep.comp(c);
        if (
          cValue === null ||
          typeof cValue !== 'object' ||
          cValue instanceof Date
        ) {
          component.setValue(cValue);
          continue;
        }
        const subNames = enumOf(`${component.definition.type}Type`);
        for (const [sKey, sValue] of Object.entries(cValue)) {
          component.setValue(sValue, positionOf(subNames, sKey));
        }
      }
    });
  }
}
