/**
 * Generates packages/dictionary/data/hl7-data.js from HL7's own v2 XML
 * schemas (see support/hl7-sources.mts for where to put them):
 *
 *   node support/build-dictionary.mts
 *
 * The schemas are the source of every segment, field, data type and message
 * structure. What they do not carry comes from elsewhere:
 * - trigger events (ADT_A04 is an ADT_A01): HAPI HL7v2's event map. An event
 *   is the same definition object as its structure, so it cannot go stale;
 * - descriptions of segments, data types, messages and groups, lengths before
 *   2.6, the conditional/backward-compatible optionalities (C, B) and the
 *   tables of data type components: the `hl7-dictionary` package, the
 *   dictionary's previous source, for the same version, or for descriptions
 *   the nearest one.
 *
 * Definitions identical across versions are written once and referenced by
 * index (layout: packages/dictionary/data/hl7-data.d.ts).
 */
import fs from 'node:fs';
import path from 'node:path';
import dictionary from 'hl7-dictionary';
import {
  eventsFor,
  readSchemas,
  root,
  type SchemaField,
  type SchemaNode,
  versionsWithSchemas,
} from './hl7-sources.mts';

const outDir = path.join(root, 'packages/dictionary/data');
const legacy: Record<string, any> = dictionary.definitions;
const OPTIONALITY: Record<number, string> = { 1: 'O', 2: 'R', 3: 'C', 4: 'B' };

class Pool<T> {
  readonly items: T[] = [];
  private readonly _index = new Map<string, number>();

  add(item: T, key = JSON.stringify(item)): number {
    let i = this._index.get(key);
    if (i === undefined) {
      i = this.items.push(item) - 1;
      this._index.set(key, i);
    }
    return i;
  }
}

const fields = new Pool<unknown[]>();
const segments = new Pool<unknown[]>();
const types = new Pool<unknown[]>();
const messages = new Pool<unknown>();

/* ------------------------------------------------- the previous source */

/** Versions to look a description up in: this one, then the nearest */
function nearestLegacy(version: string): string[] {
  const all = versionsWithSchemas();
  const i = all.indexOf(version);
  return Object.keys(legacy)
    .map(v => [v, Math.abs(all.indexOf(v) - i)] as const)
    .sort((a, b) => a[1] - b[1])
    .map(([v]) => v);
}

function legacyDesc(
  version: string,
  kind: 'segments' | 'fields',
  name: string,
): string | undefined {
  for (const v of nearestLegacy(version)) {
    const desc = legacy[v][kind][name]?.desc;
    if (desc) return desc;
  }
}

function legacyField(
  version: string,
  kind: 'segments' | 'fields',
  name: string,
  pos: number,
): any {
  const def = legacy[version]?.[kind][name];
  return (kind === 'segments' ? def?.fields : def?.subfields)?.[pos - 1];
}

/** Descriptions of messages and of their groups, by name */
function legacyMessageDescs(version: string) {
  const out = {
    messages: {} as Record<string, string>,
    groups: {} as Record<string, string>,
  };
  const kids = (n: any): any[] => n.segments?.segments || n.children || [];
  const walk = (n: any) => {
    for (const c of kids(n)) {
      if (kids(c).length) {
        if (c.desc) out.groups[c.name] = c.desc;
        walk(c);
      }
    }
  };
  /* Farthest first, so the nearest version's descriptions win */
  for (const v of nearestLegacy(version).reverse()) {
    for (const [name, msg] of Object.entries<any>(legacy[v].messages || {})) {
      if (msg.desc) out.messages[name] = msg.desc;
      walk(msg);
    }
  }
  return out;
}

/* ---------------------------------------------------------- definitions */

function addField(
  version: string,
  kind: 'segments' | 'fields',
  owner: string,
  pos: number,
  f: SchemaField,
): number {
  const old = legacyField(version, kind, owner, pos);
  /* Sun's early schemas write every composite CM_* type as CM */
  const type =
    f.type === 'CM' && String(old?.datatype).startsWith('CM')
      ? old.datatype
      : f.type;
  const sameType = old?.datatype === type;
  const oldOpt = OPTIONALITY[old?.opt];
  return addFieldTuple([
    type,
    f.desc ?? old?.desc ?? null,
    f.min >= 1 ? 'R' : oldOpt === 'C' || oldOpt === 'B' ? oldOpt : 'O',
    f.max === 0 ? 'infinite' : f.max,
    f.len ?? (sameType ? old.len : undefined) ?? null,
    f.table ?? (sameType ? old.table : undefined) ?? null,
    f.item ?? null,
    f.minLen ?? null,
    f.confLen ?? null,
    f.truncate ?? null,
  ]);
}

/** A field as the previous source writes it */
/** Trailing nulls are left out: most fields carry no 2.7+ length details */
function addFieldTuple(tuple: unknown[]): number {
  while (tuple.length && tuple[tuple.length - 1] === null) tuple.pop();
  return fields.add(tuple);
}

function addLegacyField(f: any): number {
  return addFieldTuple([
    f.datatype,
    f.desc ?? null,
    OPTIONALITY[f.opt] ?? null,
    f.rep === 0 ? 'infinite' : (f.rep ?? null),
    f.len ?? null,
    f.table ?? null,
  ]);
}

/**
 * Data types a version's fields refer to but its schemas do not define - Sun's
 * early sets leave out CN, CQ and the CM_* composites - taken from the previous
 * source, the same version first. One found nowhere becomes a primitive, so a
 * field of that type still parses.
 */
const undefinedTypes: string[] = [];
const undefinedSegments: string[] = [];
function completeTypes(version: string, typeMap: Record<string, number>) {
  const typeOf = (i: number | null) =>
    i === null ? null : (fields.items[i][0] as string);
  for (;;) {
    const referenced = new Set<string>();
    for (const [, list] of Object.entries(typeMap)) {
      for (const i of (types.items[list][1] as (number | null)[] | null) ||
        []) {
        const t = typeOf(i);
        if (t) referenced.add(t);
      }
    }
    for (const i of currentSegmentFields) {
      const t = typeOf(i);
      if (t) referenced.add(t);
    }
    const missing = [...referenced].filter(t => !(t in typeMap));
    if (!missing.length) return;
    for (const name of missing) {
      const def = nearestLegacy(version)
        .map(v => legacy[v].fields[name])
        .find(Boolean);
      if (!def) undefinedTypes.push(`${version} ${name}`);
      const entry = [
        def?.desc ?? null,
        def?.subfields?.length ? def.subfields.map(addLegacyField) : null,
      ];
      typeMap[name] = types.add(entry, name + JSON.stringify(entry));
    }
  }
}
let currentSegmentFields: (number | null)[] = [];

/** Field indexes by position; null where the version withdrew the field */
function fieldIndexes(
  version: string,
  kind: 'segments' | 'fields',
  owner: string,
  list: SchemaField[],
): (number | null)[] {
  return Array.from(list, (f, i) =>
    f ? addField(version, kind, owner, i + 1, f) : null,
  );
}

/* ----------------------------------------------------- message structures */

/**
 * A message structure: groups, choices and segments keyed by name, in order
 * (idx). Siblings sharing a name are numbered as HAPI HL7v2 numbers them -
 * the second PID of ADT_A17 is PID2 - and a segment whose key is not its type
 * says which segment it is (`segment`). A choice holds its alternatives, of
 * which a message carries one.
 */
interface StructureNode {
  idx?: number;
  min?: number;
  max?: number;
  desc?: string;
  segment?: string;
  choice?: boolean;
  aliases?: string[];
  segments?: Record<string, StructureNode>;
}

function structureNodes(
  items: SchemaNode[],
  segmentDescs: Record<string, string | undefined>,
  groupDescs: Record<string, string>,
): Record<string, StructureNode> {
  const out: Record<string, StructureNode> = {};
  const seen: Record<string, number> = {};
  items.forEach((item, idx) => {
    const n = (seen[item.name] = (seen[item.name] || 0) + 1);
    const key = n > 1 ? item.name + n : item.name;
    const node: StructureNode = { idx };
    if (item.min >= 1) node.min = item.min;
    if (item.max !== 0) node.max = item.max;
    const desc = item.items ? groupDescs[item.name] : segmentDescs[item.name];
    if (desc && !item.choice) node.desc = desc;
    if (!item.items && key !== item.name) node.segment = item.name;
    if (item.choice) node.choice = true;
    if (item.items) {
      node.segments = structureNodes(item.items, segmentDescs, groupDescs);
    }
    out[key] = node;
  });
  return out;
}

/*
 * Group aliases. The standard renames groups between versions (ADT_A40's
 * PATIENT is PATIENT_ID in some), and early versions leave them unnamed.
 * Each version keeps its own names; a group also lists, as aliases, the names
 * the same group has in the other versions of that message, so a lookup by
 * either name finds it.
 *
 * "The same group" across two consecutive versions: under matched parents,
 * the same name, or else the only unmatched group on each side that starts
 * with the same segment. Anything ambiguous is left unmatched.
 */
interface GroupRef {
  node: StructureNode;
  name: string;
}

function groupsOf(node: StructureNode): GroupRef[] {
  return Object.entries(node.segments || {})
    .filter(([, n]) => n.segments && !n.choice)
    .map(([name, n]) => ({ node: n, name }));
}

function firstSegment(node: StructureNode): string | undefined {
  for (const [name, n] of Object.entries(node.segments || {})) {
    return n.segments ? firstSegment(n) : n.segment || name;
  }
}

class Identities {
  private readonly _parent = new Map<StructureNode, StructureNode>();

  find(n: StructureNode): StructureNode {
    let p = this._parent.get(n) || n;
    while (p !== (this._parent.get(p) || p)) p = this._parent.get(p)!;
    return p;
  }

  union(a: StructureNode, b: StructureNode) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra !== rb) this._parent.set(rb, ra);
  }
}

function matchGroups(
  a: StructureNode,
  b: StructureNode,
  identities: Identities,
) {
  const ga = groupsOf(a);
  const gb = groupsOf(b);
  const pairs: [GroupRef, GroupRef][] = [];
  const unmatchedA = ga.filter(x => {
    const y = gb.find(g => g.name === x.name);
    if (y) pairs.push([x, y]);
    return !y;
  });
  const unmatchedB = gb.filter(y => !ga.some(g => g.name === y.name));
  for (const x of unmatchedA) {
    const first = firstSegment(x.node);
    const candidates = unmatchedB.filter(y => firstSegment(y.node) === first);
    const rivals = unmatchedA.filter(z => firstSegment(z.node) === first);
    if (candidates.length === 1 && rivals.length === 1) {
      pairs.push([x, candidates[0]]);
    }
  }
  for (const [x, y] of pairs) {
    identities.union(x.node, y.node);
    matchGroups(x.node, y.node, identities);
  }
}

function assignAliases(
  structures: Record<string, Record<string, StructureNode>>,
) {
  const identities = new Identities();
  const versionList = Object.keys(structures);
  const names = new Set(versionList.flatMap(v => Object.keys(structures[v])));
  for (const msg of names) {
    let previous: StructureNode | undefined;
    for (const v of versionList) {
      const current = structures[v][msg];
      if (!current) continue;
      if (previous) matchGroups(previous, current, identities);
      previous = current;
    }
  }
  const visit = (node: StructureNode, fn: (g: GroupRef) => void) => {
    for (const g of groupsOf(node)) {
      fn(g);
      visit(g.node, fn);
    }
  };
  const groupNames = new Map<StructureNode, Set<string>>();
  for (const v of versionList) {
    for (const s of Object.values(structures[v])) {
      visit(s, g => {
        const r = identities.find(g.node);
        if (!groupNames.has(r)) groupNames.set(r, new Set());
        groupNames.get(r)!.add(g.name);
      });
    }
  }
  for (const v of versionList) {
    for (const s of Object.values(structures[v])) {
      visit(s, g => {
        const aliases = [...groupNames.get(identities.find(g.node))!]
          .filter(n => n !== g.name)
          .sort();
        if (aliases.length) g.node.aliases = aliases;
      });
    }
  }
}

/*
 * HL7 tables (the values a coded field takes), from hl7-dictionary: one set
 * for every version - the source does not tell them apart. User-defined
 * tables (an IS field's, such as 0010) carry no values the standard gives.
 */
function tableData(): Record<string, [string | null, Record<string, string>]> {
  const out: Record<string, [string | null, Record<string, string>]> = {};
  for (const [num, t] of Object.entries<any>(dictionary.tables || {})) {
    if (t?.values && Object.keys(t.values).length) {
      out[num] = [t.desc ?? null, t.values];
    }
  }
  return out;
}

/* --------------------------------------------------------------- output */

const versionList = versionsWithSchemas();
if (!versionList.length) {
  throw new Error(
    'No HL7 v2 schemas in support/hl7-schemas - see support/hl7-sources.mts',
  );
}

/**
 * Corrections to a version's schemas. 2.5.1's RSP_K21 has QUERY_RESPONSE
 * once, and its set has no RSP_K22, which the event map makes an RSP_K21:
 * a find candidates response (IHE PDQ's RSP^K22^RSP_K21) held one patient.
 * It repeats, as in 2.5's schema, as RSP_K22's in 2.4 and 2.6 and later,
 * and as HAPI reads it.
 */
function correctStructures(
  version: string,
  list: Record<string, StructureNode>,
) {
  const response = list.RSP_K21?.segments?.QUERY_RESPONSE;
  if (version === '2.5.1' && response) delete response.max;
}

const structures: Record<string, Record<string, StructureNode>> = {};
const eventsByVersion: Record<string, Record<string, string>> = {};
for (const version of versionList) {
  const schemas = readSchemas(version);
  const descs = legacyMessageDescs(version);
  const segmentDescs: Record<string, string | undefined> = {};
  for (const name of Object.keys(schemas.segments)) {
    segmentDescs[name] = legacyDesc(version, 'segments', name);
  }
  structures[version] = {};
  for (const [name, items] of Object.entries(schemas.structures)) {
    const node: StructureNode = {};
    if (descs.messages[name]) node.desc = descs.messages[name];
    node.segments = structureNodes(items, segmentDescs, descs.groups);
    structures[version][name] = node;
  }
  correctStructures(version, structures[version]);
  eventsByVersion[version] = Object.fromEntries(
    Object.entries(eventsFor(version)).filter(
      ([event, struct]) =>
        structures[version][struct] && !structures[version][event],
    ),
  );
}
assignAliases(structures);

const versions: Record<string, [object, object, object]> = {};
for (const version of versionList) {
  const schemas = readSchemas(version);
  const segmentMap: Record<string, number> = {};
  for (const [name, list] of Object.entries(schemas.segments)) {
    segmentMap[name] = segments.add([
      legacyDesc(version, 'segments', name) ?? null,
      fieldIndexes(version, 'segments', name, list),
    ]);
  }
  /*
   * Segments a structure names but the schemas do not define (PD1 in 2.1's
   * ADT_A14, ED in 2.5's SUR_P09), from the previous source like missing
   * types. anyHL7Segment and anyZSegment are the standard's placeholders.
   */
  const referenced = new Set<string>();
  const collect = (nodes: Record<string, StructureNode>) => {
    for (const [key, n] of Object.entries(nodes)) {
      if (n.segments) collect(n.segments);
      else referenced.add(n.segment || key);
    }
  };
  for (const s of Object.values(structures[version])) collect(s.segments || {});
  for (const name of referenced) {
    if (name in segmentMap || /^any(HL7|Z)Segment$/.test(name)) continue;
    const def = nearestLegacy(version)
      .map(v => legacy[v].segments[name])
      .find(Boolean);
    if (!def) {
      undefinedSegments.push(`${version} ${name}`);
      continue;
    }
    segmentMap[name] = segments.add([
      def.desc ?? null,
      def.fields.map(addLegacyField),
    ]);
  }
  currentSegmentFields = Object.values(segmentMap).flatMap(
    i => segments.items[i][1] as (number | null)[],
  );
  const typeMap: Record<string, number> = {};
  for (const [name, list] of Object.entries(schemas.types)) {
    const entry = [
      legacyDesc(version, 'fields', name) ?? null,
      list ? fieldIndexes(version, 'fields', name, list) : null,
    ];
    /** Keyed by name too: a codec is attached to a data type by its name */
    typeMap[name] = types.add(entry, name + JSON.stringify(entry));
  }
  completeTypes(version, typeMap);
  const messageMap: Record<string, number> = {};
  for (const [name, node] of Object.entries(structures[version])) {
    messageMap[name] = messages.add(node);
  }
  /** An event is its structure's own definition */
  for (const [event, struct] of Object.entries(eventsByVersion[version])) {
    messageMap[event] = messageMap[struct];
  }
  versions[version] = [segmentMap, typeMap, messageMap];
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'hl7-data.js'),
  '/* Generated by support/build-dictionary.mts from the HL7 v2 XML schemas - do not edit */\n' +
    'export default ' +
    JSON.stringify({
      fields: fields.items,
      segments: segments.items,
      types: types.items,
      messages: messages.items,
      versions,
      tables: tableData(),
    }) +
    ';\n',
  'utf-8',
);
if (undefinedSegments.length) {
  console.warn(`segments defined nowhere: ${undefinedSegments.join(', ')}`);
}
if (undefinedTypes.length) {
  console.warn(
    `types defined nowhere, made primitive: ${undefinedTypes.join(', ')}`,
  );
}
console.log(
  `fields ${fields.items.length}, segments ${segments.items.length}, ` +
    `types ${types.items.length}, messages ${messages.items.length}, ` +
    `versions ${versionList.join(' ')}`,
);
