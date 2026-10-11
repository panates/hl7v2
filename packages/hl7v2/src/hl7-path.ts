import type { HL7SegmentField, HL7VersionPathTypes } from 'hl7v2-dictionary';
import type { HL7Message } from './hl7-message.js';
import { HL7MessageNode } from './hl7-message-node.js';
import { HL7Segment } from './hl7-segment.js';

/**
 * A location in a message, written as HAPI HL7v2's Terser writes it:
 *
 *   PID-5-1                 the first PID, field 5, component 1
 *   OBX(2)-5                the third OBX of the message, field 5
 *   PID-3(1)-1              PID-3's second repetition, component 1
 *   PID-5-1-2               component 1, sub-component 2
 *   /PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX(0)-5
 *                           through the message structure's groups
 *
 * Numbers in parentheses (group, segment and field repetitions) count from
 * 0; field, component and sub-component numbers from 1. A path with groups
 * starts with "/"; without them a segment is searched in the whole message,
 * as Terser's "/." does. A group is found by its name in any version (see
 * HL7MessageNode.getNode()).
 */
export interface HL7Path {
  groups: { name: string; index: number }[];
  segment: string;
  segmentIndex: number;
  field?: number;
  repetition: number;
  component?: number;
  subComponent?: number;
}

/* The segment of a path's last step, without its repetition */
type PathSegment<S extends string> = S extends `.${infer T}`
  ? PathSegment<T>
  : S extends `${infer N}(${string}`
    ? N
    : S;

/* A field step without its repetition: "5(2)" -> "5" */
type PathField<F extends string> = F extends `${infer N}(${string}` ? N : F;

/* [field, component, sub-component] of what follows the segment */
type PathParts<R extends string> =
  R extends `${infer F}-${infer C}-${infer Sub}`
    ? [PathField<F>, C, Sub]
    : R extends `${infer F}-${infer C}`
      ? [PathField<F>, C, undefined]
      : [PathField<R>, undefined, undefined];

/* [segment, field, component, sub-component] of a path:
 * "/PATIENT/PID(1)-5(2)-1-2" -> ["PID", "5", "1", "2"] */
type PathTarget<P extends string> = P extends `${string}/${infer Rest}`
  ? PathTarget<Rest>
  : P extends `${infer S}-${infer Rest}`
    ? [PathSegment<S>, ...PathParts<Rest>]
    : [PathSegment<P>, undefined, undefined, undefined];

type Types<V extends keyof HL7VersionPathTypes> =
  HL7VersionPathTypes[V]['types'];

/* The type of component C of data type T, or unknown where not defined */
type ComponentType<
  V extends keyof HL7VersionPathTypes,
  T,
  C,
> = T extends keyof Types<V>
  ? C extends keyof Types<V>[T]
    ? Types<V>[T][C]
    : unknown
  : unknown;

/* OK when data type T of version V has component C (a primitive has one,
 * itself); a type the version does not define takes any */
type CheckComponent<
  V extends keyof HL7VersionPathTypes,
  T,
  C extends string | undefined,
  OK,
  Where extends string,
> = C extends string
  ? T extends keyof Types<V>
    ? C extends Exclude<keyof Types<V>[T], '0'>
      ? OK
      : `${Where}: ${T & string} has no component ${C} in ${V & string}`
    : OK
  : OK;

/* A path's component and sub-component checked against its field's type */
type CheckParts<
  V extends keyof HL7VersionPathTypes,
  P extends string,
  S extends string,
  F extends string,
  C extends string | undefined,
  Sub extends string | undefined,
> = S extends keyof HL7VersionPathTypes[V]['segments']
  ? F extends keyof HL7VersionPathTypes[V]['segments'][S]
    ? CheckComponent<
        V,
        HL7VersionPathTypes[V]['segments'][S][F],
        C,
        CheckComponent<
          V,
          ComponentType<V, HL7VersionPathTypes[V]['segments'][S][F], C>,
          Sub,
          P,
          `${S}-${F}-${C}`
        >,
        `${S}-${F}`
      >
    : P
  : P;

/**
 * A path checked against version V when the compiler knows both: P itself
 * when its field is one the version defines for the segment, and its
 * component and sub-component ones the field's data type has; otherwise a
 * message saying what is not - "DG1-2 is not a field of DG1 in 2.6",
 * "PID-5-99: XPN has no component 99 in 2.6" - for the compiler to report.
 * A field of a type the version does not define (OBX-5's VARIES) takes any
 * component. A path only known at run time, an untyped message's path or a
 * Z segment's is taken as it is.
 */
export type HL7CheckedPath<
  V extends HL7Message['version'],
  P extends string,
> = string extends P
  ? string
  : PathTarget<P> extends [
        infer S extends string,
        infer F,
        infer C extends string | undefined,
        infer Sub extends string | undefined,
      ]
    ? F extends `${infer N extends number}`
      ? N extends HL7SegmentField<V, S>
        ? CheckParts<V, P, S, F & string, C, Sub>
        : `${S}-${N} is not a field of ${S} in ${V}`
      : P
    : P;

const ITEM = /^([A-Za-z0-9_]+)(?:\((\d+)\))?$/;
const FIELD = /^(\d+)(?:\((\d+)\))?$/;

export function parseHL7Path(path: string): HL7Path {
  const invalid = () => new Error(`Invalid HL7 path "${path}"`);
  let text = path.trim();
  const structured = text.startsWith('/');
  if (structured) text = text.substring(1);
  if (text.startsWith('.')) text = text.substring(1);
  const steps = text.split('/');
  const last = steps.pop()!;
  const groups = steps.map(step => {
    const m = ITEM.exec(step);
    if (!m) throw invalid();
    return { name: m[1], index: Number(m[2] ?? 0) };
  });
  const [segPart, fieldPart, comp, sub, ...rest] = last.split('-');
  const seg = ITEM.exec(segPart || '');
  if (!seg || rest.length || !/^[A-Z][A-Z0-9]{2}$/.test(seg[1])) {
    throw invalid();
  }
  const out: HL7Path = {
    groups,
    segment: seg[1],
    segmentIndex: Number(seg[2] ?? 0),
    repetition: 0,
  };
  if (fieldPart !== undefined) {
    const f = FIELD.exec(fieldPart);
    if (!f || !Number(f[1])) throw invalid();
    out.field = Number(f[1]);
    out.repetition = Number(f[2] ?? 0);
  }
  for (const [key, value] of [
    ['component', comp],
    ['subComponent', sub],
  ] as const) {
    if (value === undefined) continue;
    if (!/^\d+$/.test(value) || !Number(value)) throw invalid();
    out[key] = Number(value);
  }
  return out;
}

/** The segment a path names, or undefined when the message has none there */
export function findPathSegment(
  message: HL7Message<any>,
  path: HL7Path,
): HL7Segment | undefined {
  if (!path.groups.length) {
    return message.getSegment(path.segment, path.segmentIndex);
  }
  let node: HL7MessageNode | undefined = message.buildStructureTree();
  for (const group of path.groups) {
    node = node.getNode(group.name, group.index);
    if (!node) return;
  }
  return node.getSegment(path.segment, path.segmentIndex);
}

/**
 * The value at a path. Ending at a segment or field it is the field's first
 * component's, ending at a component its first sub-component's, as Terser.get
 * reads it; undefined where there is none.
 */
export function getPathValue(message: HL7Message<any>, pathText: string): any {
  const path = parseHL7Path(pathText);
  const segment = findPathSegment(message, path);
  if (!segment) return;
  const field = segment.fields[(path.field ?? 1) - 1];
  const rep = field?.repetitions[path.repetition];
  if (!rep) return;
  return rep.getValue(path.component ?? 1, path.subComponent);
}

/**
 * Sets the value at a path. A segment the message does not have is added at
 * its end - for a path without groups, and only as the next occurrence:
 * PID(1) when there is one PID. Through groups the segment must exist.
 */
export function setPathValue(
  message: HL7Message<any>,
  pathText: string,
  value: any,
): void {
  const path = parseHL7Path(pathText);
  if (!path.field) throw new Error(`"${pathText}" names no field to set`);
  const segment =
    findPathSegment(message, path) ?? addPathSegment(message, path, pathText);
  segment
    .field(path.field)
    .repetition(path.repetition)
    .setValue(value, path.component, path.subComponent);
}

/**
 * Adds the segment a path names, where the message structure puts it, as
 * Terser.set() does: a missing NK1 goes before PV1 in an ADT_A01, a new
 * /ORDER_OBSERVATION(1)/OBSERVATION(1)/OBX after that order's last
 * observation. Only the next repetition can be added - a path skipping one
 * is refused - and only a segment that, added, is where the path says: one
 * that would not start the group it is to be in is refused too.
 */
function addPathSegment(
  message: HL7Message<any>,
  path: HL7Path,
  pathText: string,
): HL7Segment {
  const refuse = () => new Error(`No segment at "${pathText}" to set`);
  /* The deepest node of the path that is there, and what comes below it */
  let node: HL7MessageNode = message.buildStructureTree();
  let defs = structureOf(message);
  let depth = 0;
  for (; depth < path.groups.length; depth++) {
    const group = path.groups[depth];
    const next = node.getNode(group.name, group.index);
    if (!next) break;
    node = next;
    defs = itemOf(defs, group.name)?.segments;
  }
  /* Only the next repetition: none skipped */
  const missingGroup = path.groups[depth];
  if (missingGroup) {
    const count = node.items.filter(
      x => x instanceof HL7MessageNode && x.is(missingGroup.name),
    ).length;
    if (missingGroup.index !== count) throw refuse();
  } else {
    const count = node.items.filter(
      x => x instanceof HL7Segment && x.segmentType === path.segment,
    ).length;
    if (path.segmentIndex !== count) throw refuse();
  }

  /* After the last item the structure puts before it, in that node */
  const order = (name: string) => indexOf(defs, name);
  const target = order(missingGroup?.name ?? path.segment);
  let at: number;
  if (target < 0 || !defs) {
    /* Not in the structure - a Z segment, an unknown message: at the end */
    const last = lastSegmentOf(node);
    at = last ? message.segments.indexOf(last) + 1 : message.segments.length;
  } else {
    let before: HL7Segment | undefined;
    for (const item of node.items) {
      const name = item instanceof HL7Segment ? item.segmentType : item.name;
      const o = order(name);
      if (o >= 0 && o <= target) before = lastSegmentOf(item) ?? before;
    }
    const first = firstSegmentOf(node);
    at = before
      ? message.segments.indexOf(before) + 1
      : first
        ? message.segments.indexOf(first)
        : message.segments.length;
  }
  const segment = message.addSegment(path.segment, at);
  /* Where the path says, or not added at all */
  if (findPathSegment(message, path) !== segment) {
    message.segments.splice(message.segments.indexOf(segment), 1);
    throw refuse();
  }
  return segment;
}

type Definitions = Record<string, any> | undefined;

function structureOf(message: HL7Message<any>): Definitions {
  const name = message.structureName ?? message.messageType.replace('^', '_');
  return message.dictionary.messages?.[name]?.segments;
}

/* The item of a definition a group or segment name is - its own name, an
 * alias, a repeated segment's type - looking into choices */
function itemOf(defs: Definitions, name: string): any {
  for (const [key, def] of Object.entries<any>(defs || {})) {
    if (def.choice) {
      const inner = itemOf(def.segments, name);
      if (inner) return inner;
      continue;
    }
    if (key === name || def.segment === name || def.aliases?.includes(name))
      return def;
  }
}

/* The position of a name's first item in a definition, -1 when not there */
function indexOf(defs: Definitions, name: string): number {
  let best = -1;
  for (const [key, def] of Object.entries<any>(defs || {})) {
    const hit = def.choice
      ? itemOf(def.segments, name)
      : key === name || def.segment === name || def.aliases?.includes(name);
    const idx = def.idx ?? 0;
    if (hit && (best < 0 || idx < best)) best = idx;
  }
  return best;
}

function firstSegmentOf(
  item: HL7Segment | HL7MessageNode,
): HL7Segment | undefined {
  if (item instanceof HL7Segment) return item;
  for (const x of item.items) {
    const s = firstSegmentOf(x);
    if (s) return s;
  }
}

function lastSegmentOf(
  item: HL7Segment | HL7MessageNode,
): HL7Segment | undefined {
  if (item instanceof HL7Segment) return item;
  for (let i = item.items.length - 1; i >= 0; i--) {
    const s = lastSegmentOf(item.items[i]);
    if (s) return s;
  }
}
