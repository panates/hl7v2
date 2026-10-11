import type { HL7SegmentField } from 'hl7v2-dictionary';
import type { HL7Message } from './hl7-message.js';
import { HL7MessageNode } from './hl7-message-node.js';
import type { HL7Segment } from './hl7-segment.js';

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

/* The field number of a path's last step, without its repetition */
type PathField<F extends string> = F extends `${infer N}-${string}`
  ? PathField<N>
  : F extends `${infer N}(${string}`
    ? N
    : F;

/* [segment, field] of a path: "/PATIENT/PID(1)-5(2)-1" -> ["PID", "5"] */
type PathTarget<P extends string> = P extends `${string}/${infer Rest}`
  ? PathTarget<Rest>
  : P extends `${infer S}-${infer Rest}`
    ? [PathSegment<S>, PathField<Rest>]
    : [PathSegment<P>, undefined];

/**
 * A path checked against version V when the compiler knows both: P itself
 * when its field is one the version defines for the segment, otherwise a
 * message saying it is not - "DG1-2 is not a field of DG1 in 2.6" - for the
 * compiler to report. A path only known at run time, an untyped message's
 * path or a Z segment's is taken as it is.
 */
export type HL7CheckedPath<
  V extends HL7Message['version'],
  P extends string,
> = string extends P
  ? string
  : PathTarget<P> extends [infer S extends string, infer F]
    ? F extends `${infer N extends number}`
      ? N extends HL7SegmentField<V, S>
        ? P
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
  let segment = findPathSegment(message, path);
  if (!segment) {
    const count = message.segments.filter(
      s => s.segmentType === path.segment,
    ).length;
    if (path.groups.length || path.segmentIndex !== count) {
      throw new Error(`No segment at "${pathText}" to set`);
    }
    segment = message.addSegment(path.segment);
  }
  if (!path.field) throw new Error(`"${pathText}" names no field to set`);
  segment
    .field(path.field)
    .repetition(path.repetition)
    .setValue(value, path.component, path.subComponent);
}
