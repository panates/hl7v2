import type { HL7Message } from './hl7-message.js';
import { HL7MessageNode } from './hl7-message-node.js';
import { assignSegment, segmentToObject } from './hl7-object.js';
import { HL7Segment } from './hl7-segment.js';

/*
 * A message as a plain object, shaped as its structure is: segments by
 * their IDs, groups by their names, each an array where the structure lets
 * it repeat -
 *
 *   { MSH: {...}, PATIENT_RESULT: [{ PATIENT: { PID: {...} },
 *     ORDER_OBSERVATION: [{ OBR: {...}, OBSERVATION: [{ OBX: {...} }] }] }] }
 *
 * A segment is its object (see hl7-object.ts). What is not there is left
 * out. Segments the structure has no place for (Z segments, ones out of
 * place) are kept at the top level, by their IDs, as arrays. A message whose
 * structure the dictionary does not know is its segments, by their IDs.
 *
 * The object interfaces (HL7MessageObject<'2.5', 'ORU_R01'>) are generated in
 * hl7v2-dictionary's versioned-messages.ts.
 */

type Definitions = Record<string, any>;

const byIdx = (defs: Definitions) =>
  Object.entries<any>(defs).sort(([, a], [, b]) => (a.idx || 0) - (b.idx || 0));

const repeats = (def: any) => def.max !== 1;

const segmentTypeOf = (key: string, def: any) => def.segment || key;

function definitionOf(message: HL7Message<any>): Definitions | undefined {
  const name = message.structureName ?? message.messageType.replace('^', '_');
  return message.dictionary.messages?.[name]?.segments;
}

function put(out: Record<string, any>, key: string, value: any, many: boolean) {
  if (!many) {
    out[key] = value;
    return;
  }
  (out[key] ||= []).push(value);
}

/** A node of the structure tree as an object, its definition alongside */
function nodeToObject(
  node: HL7MessageNode,
  defs: Definitions,
): Record<string, any> {
  const out: Record<string, any> = {};
  const items = node.items;
  let at = 0;
  const take = (key: string, def: any): boolean => {
    const item = items[at];
    if (!item) return false;
    if (def.segments && !def.choice) {
      if (!(item instanceof HL7MessageNode) || !item.is(key)) return false;
      put(out, key, nodeToObject(item, def.segments), repeats(def));
    } else {
      const type = segmentTypeOf(key, def);
      if (!(item instanceof HL7Segment)) return false;
      const ok =
        type === 'anyHL7Segment' ||
        (type === 'anyZSegment'
          ? item.segmentType.startsWith('Z')
          : item.segmentType === type);
      if (!ok) return false;
      /* A placeholder's segment goes by its own ID */
      if (/^any(HL7|Z)Segment$/.test(type)) {
        put(out, item.segmentType, segmentToObject(item), true);
      } else put(out, key, segmentToObject(item), repeats(def));
    }
    at++;
    return true;
  };
  for (const [key, def] of byIdx(defs)) {
    if (def.choice) {
      /* An alternative each time the choice occurs */
      let found = true;
      while (found && at < items.length) {
        found = false;
        for (const [altKey, alt] of byIdx(def.segments)) {
          if (take(altKey, alt)) {
            found = true;
            break;
          }
        }
      }
      continue;
    }
    while (at < items.length && take(key, def)) {
      if (!repeats(def)) break;
    }
  }
  /* What the structure has no place for, by segment ID */
  for (; at < items.length; at++) {
    const item = items[at];
    if (item instanceof HL7Segment) {
      put(out, item.segmentType, segmentToObject(item), true);
    }
  }
  return out;
}

export function messageToObject(message: HL7Message<any>): Record<string, any> {
  const defs = definitionOf(message);
  if (!defs) {
    const out: Record<string, any> = {};
    for (const segment of message.segments) {
      if (segment.segmentType === 'MSH') out.MSH = segmentToObject(segment);
      else put(out, segment.segmentType, segmentToObject(segment), true);
    }
    return out;
  }
  return nodeToObject(message.buildStructureTree(), defs);
}

/**
 * Sets a message from an object shaped as messageToObject() makes it: MSH
 * is assigned (fields not given are kept), every other segment replaced by
 * the object's, in the order the structure has them. A key the structure
 * has no place for is taken as segments by that ID, added at the end.
 */
export function assignMessage(
  message: HL7Message<any>,
  object: Record<string, any>,
): void {
  if (object.MSH) assignSegment(message.header, object.MSH);
  message.segments.splice(1);
  const defs = definitionOf(message);
  const used = new Set<string>(['MSH']);
  const add = (type: string, value: any) => {
    for (const v of Array.isArray(value) ? value : [value]) {
      if (v) assignSegment(message.addSegment(type), v);
    }
  };
  const walk = (obj: Record<string, any>, level: Definitions, top: boolean) => {
    for (const [key, def] of byIdx(level)) {
      const entries: [string, any][] = def.choice
        ? byIdx(def.segments)
        : [[key, def]];
      for (const [k, d] of entries) {
        const value = obj[k];
        if (value == null || (top && k === 'MSH')) continue;
        if (top) used.add(k);
        if (d.segments && !d.choice) {
          for (const g of Array.isArray(value) ? value : [value]) {
            if (g) walk(g, d.segments, false);
          }
        } else {
          const type = segmentTypeOf(k, d);
          add(/^any(HL7|Z)Segment$/.test(type) ? k : type, value);
        }
      }
    }
  };
  if (defs) walk(object, defs, true);
  for (const [key, value] of Object.entries(object)) {
    if (!used.has(key) && value != null && /^[A-Z][A-Z0-9]{2}$/.test(key)) {
      add(key, value);
    }
  }
}
