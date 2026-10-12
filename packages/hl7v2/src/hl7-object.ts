import type { HL7DataTypeDefinition } from 'hl7v2-dictionary';
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
 * A VARIES field (OBX-5, QPD-3 ...) is text when it is one value; with
 * components, an object keyed by the names of the data type it holds - an
 * OBX-5 by the one OBX-2 gives - or by position where that is not known. A
 * component with sub-components is an object the same way.
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

/** The data type a VARIES field holds, when known: an OBX-5's is OBX-2's */
function variesType(
  segment: HL7Segment,
  pos: number,
): { name: string; def: HL7DataTypeDefinition } | undefined {
  if (segment.segmentType !== 'OBX' || pos !== 5) return;
  const name = String(segment.field(2).getValue() ?? '').trim();
  const def = name ? segment.message.dictionary.types[name] : undefined;
  return def ? { name, def } : undefined;
}

/** A component's sub-component values, as written; a primitive's by getValue(n) */
function subValues(component: Hl7Component): unknown[] {
  if (!component.isPrimitive) {
    return (component.subComponents || []).map(sub =>
      sub && !sub.isEmpty() ? sub.value : undefined,
    );
  }
  const { subComponentSeparator } = component.message;
  const count = component.toHL7String().split(subComponentSeparator).length;
  return Array.from({ length: count }, (_, i) => component.getValue(i + 1));
}

/** Values keyed by name, or by position where the names give none */
function keyed(values: unknown[], names: Names): unknown {
  const out: Record<string, unknown> = {};
  values.forEach((v, i) => {
    if (v !== undefined && v !== '') out[nameOf(names, i + 1)] = v;
  });
  return Object.keys(out).length ? out : undefined;
}

function variesValue(
  rep: HL7Repetition,
  type: ReturnType<typeof variesType>,
): unknown {
  const components = rep.components || [];
  const fields = type?.def.fields;
  const values = components.map((component, i) => {
    if (!component || component.isEmpty()) return undefined;
    const subs = subValues(component);
    if (subs.length <= 1) return subs[0];
    const subType = fields?.[i + 1]?.type;
    return keyed(subs, subType ? enumOf(`${subType}Type`) : undefined);
  });
  /* One value, of a type without components: text, as any primitive */
  if (!fields && values.length <= 1 && typeof values[0] !== 'object') {
    return values[0];
  }
  return keyed(values, fields ? enumOf(`${type!.name}Type`) : undefined);
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
    const def = field.definition;
    const values =
      def.type === 'VARIES'
        ? field.repetitions.map(rep =>
            variesValue(rep, variesType(segment, i + 1)),
          )
        : field.repetitions.map(repetitionValue);
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
  const entries = Object.entries(object).map(
    ([key, value]) => [positionOf(names, key), value] as const,
  );
  /* VARIES fields last: an OBX-5 is read as the type OBX-2 gives */
  const varies = (pos: number) =>
    segment.definition?.fields?.[pos]?.type === 'VARIES';
  entries.sort(([a], [b]) => Number(varies(a)) - Number(varies(b)));
  for (const [pos, value] of entries) {
    if (segment.segmentType === 'MSH' && pos <= 2) continue;
    const field = segment.field(pos);
    field.clear();
    if (value === undefined) continue;
    const type =
      field.definition.type === 'VARIES'
        ? variesType(segment, pos)
        : { name: field.definition.type, def: field.typeDef };
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
      const typeNames = type ? enumOf(`${type.name}Type`) : undefined;
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
        const subType =
          field.definition.type === 'VARIES'
            ? type?.def.fields?.[c]?.type
            : component.definition.type;
        const subNames = subType ? enumOf(`${subType}Type`) : undefined;
        for (const [sKey, sValue] of Object.entries(cValue)) {
          component.setValue(sValue, positionOf(subNames, sKey));
        }
      }
    });
  }
}
