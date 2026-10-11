import type {
  HL7FieldDefinition,
  HL7MessageSegmentsDefinition,
} from 'hl7v2-dictionary';
import type { Hl7Component } from './hl7-component.js';
import { HL7Error } from './hl7-error.js';
import type { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import type { HL7Repetition } from './hl7-repetition.js';
import { type HL7Segment, isHeaderSegment } from './hl7-segment.js';
import { hl7UnEscape } from './utils/hl7-escape.js';
import { hasPlaceholder } from './utils/hl7-structure.js';

export interface HL7ValidateOptions {
  /**
   * Check the order of segments and groups, and that the required ones are
   * there, against the message structure. Default true.
   */
  structure?: boolean;
  /**
   * Check fields and components: required ones present, repetitions, data
   * types and maximum lengths. Default true.
   */
  fields?: boolean;
  /**
   * Check coded values against their HL7 table: an ID field's - an HL7
   * table's - not an IS field's, whose table is the site's own. Default false:
   * the tables are one set for every version, so a code a version added
   * later is unknown to an earlier one.
   */
  tables?: boolean;
}

/**
 * Checks a message against its version's dictionary and returns what it finds - HL7Errors carrying the HL7
 * error code (table 0357) and the location, ready for a NAK:
 *
 * - 100 segment sequence error: a required segment or group missing, or a
 *   segment the structure has no place for (Z segments are let through);
 * - 101 required field missing: a field, or a component of a field that is
 *   there, the version marks required;
 * - 102 data type error: a value its type cannot read, or more repetitions
 *   than the field allows;
 * - 104 value too long: longer than the field's maximum length.
 *
 * The structure is matched as buildStructureTree matches it: in order,
 * greedily, without backtracking.
 */
export function validateMessage(
  message: HL7Message<any>,
  options?: HL7ValidateOptions,
): HL7Error[] {
  const errors: HL7Error[] = [];
  if (options?.fields !== false) {
    message.segments.forEach((segment, i) =>
      validateSegment(segment, i, errors, options),
    );
  }
  if (options?.structure !== false) validateStructure(message, errors);
  return errors;
}

function error(
  code: number,
  text: string,
  location: Partial<HL7Error.ErrorArgs> = {},
): HL7Error {
  return new HL7Error(text, {
    hl7ErrorCode: code,
    severity: 'E',
    ...location,
  });
}

/* --------------------------------------------------------------- fields */

function validateSegment(
  segment: HL7Segment,
  index: number,
  errors: HL7Error[],
  options?: HL7ValidateOptions,
) {
  const defs = segment.definition.fields || {};
  const at = (fieldPosition: number, more?: Partial<HL7Error.ErrorArgs>) => ({
    segmentType: segment.segmentType,
    segmentSequence: segment.sequence,
    fieldPosition,
    ...more,
  });
  for (const [key, def] of Object.entries(defs)) {
    const pos = Number(key);
    /* MSH-1 and MSH-2 are the delimiters, not values */
    if (isHeaderSegment(segment.segmentType) && pos <= 2) continue;
    const field = segment.fields[pos - 1] as HL7Field | undefined;
    const name = `${segment.segmentType}-${pos}`;
    if (!field || field.isEmpty()) {
      if (def.opt === 'R') {
        errors.push(
          error(101, `${name} (${def.desc || def.type}) is required`, at(pos)),
        );
      }
      continue;
    }
    const reps = field.repetitions.filter(r => !r.isEmpty()).length;
    if (typeof def.rep === 'number' && reps > def.rep) {
      errors.push(
        error(
          102,
          `${name} repeats ${reps} times, at most ${def.rep} allowed`,
          at(pos, { repetitionIndex: def.rep }),
        ),
      );
    }
    field.repetitions.forEach((rep, r) => {
      if (rep.isEmpty()) return;
      if (def.len && rep.toHL7String().length > def.len) {
        errors.push(
          error(
            104,
            `${name} is longer than ${def.len} characters`,
            at(pos, { repetitionIndex: r }),
          ),
        );
      }
      /* OBX-5 is VARIES: read as the type OBX-2 names */
      if (segment.segmentType === 'OBX' && pos === 5) {
        checkVaries(
          segment,
          rep,
          `${name}`,
          at(pos, { repetitionIndex: r }),
          errors,
        );
        return;
      }
      const components = rep.components || [];
      if (field.isPrimitive) {
        if (components[0]) {
          checkValue(
            options,
            components[0],
            def,
            `${name}`,
            at(pos, { repetitionIndex: r }),
            errors,
          );
        }
        return;
      }
      /* Required components of a field that is there */
      for (const [ckey, cdef] of Object.entries<HL7FieldDefinition>(
        field.typeDef.fields || {},
      )) {
        const c = Number(ckey);
        const component = components[c - 1];
        const cat = at(pos, { repetitionIndex: r, componentPosition: c });
        if (!component || component.isEmpty()) {
          if (cdef.opt === 'R') {
            errors.push(
              error(
                101,
                `${name}.${c} (${cdef.desc || cdef.type}) is required`,
                cat,
              ),
            );
          }
          continue;
        }
        if (component.isPrimitive) {
          checkValue(options, component, cdef, `${name}.${c}`, cat, errors);
        }
      }
    });
  }
}

/**
 * OBX-5 (VARIES) checked as the data type OBX-2 names: a
 * primitive's value, a composite's primitive components. A type the
 * version does not define is left alone.
 */
function checkVaries(
  segment: HL7Segment,
  rep: HL7Repetition,
  name: string,
  location: Partial<HL7Error.ErrorArgs>,
  errors: HL7Error[],
) {
  const typeName = String(segment.field(2).getValue() ?? '');
  const typeDef = segment.message.dictionary.types[typeName];
  if (!typeDef) return;
  /* Read from the text: the field itself is VARIES, kept as written */
  const text = rep.toHL7String();
  const { componentSeparator } = segment.message;
  const check = (
    value: string,
    decode: ((v: any, read?: boolean) => any) | undefined,
    what: string,
    more?: Partial<HL7Error.ErrorArgs>,
  ) => {
    if (!value || !decode) return;
    try {
      decode(hl7UnEscape(value, segment.message), true);
    } catch (e: any) {
      errors.push(
        error(102, `${what} is not a valid ${typeName} (OBX-2): ${e.message}`, {
          ...location,
          ...more,
        }),
      );
    }
  };
  if (!typeDef.fields) {
    check(text.split(componentSeparator)[0], typeDef.decode, name);
    return;
  }
  text.split(componentSeparator).forEach((value, i) => {
    const cdef = typeDef.fields?.[String(i + 1)];
    if (!cdef) return;
    const ctype = segment.message.dictionary.types[cdef.type];
    if (ctype?.fields) return;
    check(value, cdef.decode || ctype?.decode, `${name}.${i + 1}`, {
      componentPosition: i + 1,
    });
  });
}

/**
 * A value kept as text because its type could not read it (parsed without
 * `strict`) - read again to report why
 */
function checkValue(
  options: HL7ValidateOptions | undefined,
  component: Hl7Component,
  def: HL7FieldDefinition,
  name: string,
  location: Partial<HL7Error.ErrorArgs>,
  errors: HL7Error[],
) {
  const value = component.getValue();
  if (
    options?.tables &&
    def.type === 'ID' &&
    def.table &&
    value != null &&
    value !== ''
  ) {
    const table = component.message.dictionary.tables[def.table];
    if (table && !(String(value) in table.values)) {
      errors.push(
        error(
          103,
          `${name} "${value}" is not in table ${String(def.table).padStart(4, '0')}` +
            (table.desc ? ` (${table.desc})` : ''),
          location,
        ),
      );
    }
  }
  if (typeof value !== 'string') return;
  const decode = def.decode || component.typeDef.decode;
  if (!decode) return;
  try {
    decode(value, true);
  } catch (e: any) {
    errors.push(
      error(102, `${name} is not a valid ${def.type}: ${e.message}`, location),
    );
  }
}

/* ------------------------------------------------------------- structure */

type Definitions = Record<string, HL7MessageSegmentsDefinition>;

function validateStructure(message: HL7Message<any>, errors: HL7Error[]) {
  const name = message.structureName;
  const definition = name && message.dictionary.messages[name];
  if (!definition || !definition.segments) return;
  /* Z segments are matched around, as the structure tree does (see HL7Message.buildStructureTree) */
  const segments = hasPlaceholder(definition.segments)
    ? message.segments
    : message.segments.filter(s => !s.segmentType.startsWith('Z'));
  const byIdx = (defs: Definitions) =>
    Object.entries(defs).sort(([, a], [, b]) => (a.idx || 0) - (b.idx || 0));

  const matches = (
    key: string,
    def: HL7MessageSegmentsDefinition,
    i: number,
  ) => {
    const type = segments[i]?.segmentType;
    if (!type) return false;
    const want = def.segment || key;
    if (want === 'anyHL7Segment') return true;
    if (want === 'anyZSegment') return type.startsWith('Z');
    return type === want;
  };

  /** Matches a group's items from segment i; returns the next segment index */
  const matchItems = (
    defs: Definitions,
    i: number,
    found: HL7Error[],
  ): number => {
    for (const [key, def] of byIdx(defs)) {
      const max = def.max || Number.MAX_SAFE_INTEGER;
      let count = 0;
      if (def.choice) {
        while (count < max) {
          const before = i;
          for (const [altKey, alt] of byIdx(def.segments!)) {
            i = matchOne(altKey, alt, i, found);
            if (i > before) break;
          }
          if (i === before) break;
          count++;
        }
      } else {
        while (count < max) {
          const before = i;
          i = matchOne(key, def, i, found);
          if (i === before) break;
          count++;
        }
      }
      if (!count && (def.min ?? 0) >= 1) {
        const what = def.segments && !def.choice ? `group ${key}` : key;
        found.push(
          error(100, `${name}: required ${what} missing`, {
            segmentType: def.segments ? undefined : def.segment || key,
          }),
        );
      }
    }
    return i;
  };

  /** One occurrence of a segment or a group; a group counts only if it matched */
  const matchOne = (
    key: string,
    def: HL7MessageSegmentsDefinition,
    i: number,
    found: HL7Error[],
  ): number => {
    if (!def.segments) return matches(key, def, i) ? i + 1 : i;
    const inner: HL7Error[] = [];
    const next = matchItems(def.segments, i, inner);
    if (next > i) found.push(...inner);
    return next;
  };

  let next = matchItems(definition.segments, 0, errors);
  /* What is left had no place in the structure: report it, skip Z segments */
  while (next < segments.length) {
    const segment = segments[next];
    if (!segment.segmentType.startsWith('Z')) {
      errors.push(
        error(100, `${name}: ${segment.segmentType} is out of place`, {
          segmentType: segment.segmentType,
          segmentSequence: segment.sequence,
        }),
      );
    }
    next++;
  }
}
