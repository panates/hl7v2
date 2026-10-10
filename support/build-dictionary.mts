/**
 * Generates packages/dictionary/data/hl7-data.js from the `hl7-dictionary`
 * package: every HL7 version complete, exactly as the source defines it.
 *
 *   node support/build-dictionary.mts
 *
 * Definitions that are identical across versions are written once and
 * referenced by index, so the file stays small without the per-version deltas
 * it replaces - deltas could add and change but never remove, so a field,
 * segment or type withdrawn in a later version lived on in it.
 *
 * Layout (see packages/dictionary/data/hl7-data.d.ts):
 *   fields:   [type, desc, opt, rep, len, table]        unique field definitions
 *   segments: [desc, [field index, ...]]                unique segment definitions
 *   types:    [desc, [field index, ...] | null]         unique data type definitions
 *   messages: [message definition]                      unique message structures
 *   versions: { version: [{ name: segment }, { name: type }, { name: message }] }
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dictionary from 'hl7-dictionary';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../packages/dictionary/data');

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

function addField(f: any): number {
  return fields.add([
    f.datatype,
    f.desc ?? null,
    OPTIONALITY[f.opt] ?? null,
    f.rep === 0 ? 'infinite' : (f.rep ?? null),
    f.len ?? null,
    f.table ?? null,
  ]);
}

/**
 * A message structure: groups and segments keyed by name, in order (idx).
 *
 * Siblings sharing a name are numbered as HAPI HL7v2 numbers them - the
 * second PID of ADT_A17 is PID2 - so neither overwrites the other; a segment
 * whose key is not its type says which segment it is (`segment`).
 */
interface StructureNode {
  idx?: number;
  min?: number;
  max?: number;
  desc?: string;
  segment?: string;
  aliases?: string[];
  segments?: Record<string, StructureNode>;
}

function messageNode(node: any): StructureNode {
  const target: StructureNode = {};
  if (node.desc) target.desc = node.desc;
  const children = node.segments?.segments || node.children;
  if (children) {
    target.segments = {};
    const seen: Record<string, number> = {};
    let i = 0;
    for (const child of children) {
      const n = (seen[child.name] = (seen[child.name] || 0) + 1);
      const key = n > 1 ? child.name + n : child.name;
      const t: StructureNode = { idx: i++ };
      if (child.min) t.min = child.min;
      if (child.max) t.max = child.max;
      const sub = messageNode(child);
      if (sub.desc) t.desc = sub.desc;
      if (!sub.segments && key !== child.name) t.segment = child.name;
      if (sub.segments) t.segments = sub.segments;
      target.segments[key] = t;
    }
  }
  return target;
}

/*
 * Group aliases. The standard renames groups between versions (ORU_R01's
 * PATIENT_RESULT is RESPONSE in 2.3; ADT_A40's PATIENT is PATIENT_ID in
 * 2.4-2.5.1), and the source has typos (TIIMING). Each version keeps its own
 * names; a group also lists, as aliases, the names the same group has in the
 * other versions of that message, so a lookup by either name finds it.
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
    .filter(([, n]) => n.segments)
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
  const messageNames = new Set(
    versionList.flatMap(v => Object.keys(structures[v])),
  );
  for (const msg of messageNames) {
    let previous: StructureNode | undefined;
    for (const v of versionList) {
      const current = structures[v][msg];
      if (!current) continue;
      if (previous) matchGroups(previous, current, identities);
      previous = current;
    }
  }
  /* The names of every group sharing an identity */
  const names = new Map<StructureNode, Set<string>>();
  const visit = (node: StructureNode, fn: (g: GroupRef) => void) => {
    for (const g of groupsOf(node)) {
      fn(g);
      visit(g.node, fn);
    }
  };
  for (const v of versionList) {
    for (const s of Object.values(structures[v])) {
      visit(s, g => {
        const root = identities.find(g.node);
        if (!names.has(root)) names.set(root, new Set());
        names.get(root)!.add(g.name);
      });
    }
  }
  for (const v of versionList) {
    for (const s of Object.values(structures[v])) {
      visit(s, g => {
        const aliases = [...names.get(identities.find(g.node))!]
          .filter(n => n !== g.name)
          .sort();
        if (aliases.length) g.node.aliases = aliases;
      });
    }
  }
}

const sourceVersions = Object.entries<any>(dictionary.definitions);
const structures: Record<string, Record<string, StructureNode>> = {};
for (const [version, def] of sourceVersions) {
  structures[version] = {};
  for (const [name, msg] of Object.entries<any>(def.messages || {})) {
    structures[version][name] = messageNode(msg);
  }
}
assignAliases(structures);

const versions: Record<string, [object, object, object]> = {};
for (const [version, def] of sourceVersions) {
  const segmentMap: Record<string, number> = {};
  for (const [name, seg] of Object.entries<any>(def.segments)) {
    segmentMap[name] = segments.add([
      seg.desc ?? null,
      seg.fields.map(addField),
    ]);
  }
  const typeMap: Record<string, number> = {};
  for (const [name, type] of Object.entries<any>(def.fields)) {
    const subfields = type.subfields?.length
      ? type.subfields.map(addField)
      : null;
    /** Keyed by name too: a codec is attached to a data type by its name */
    const entry = [type.desc ?? null, subfields];
    typeMap[name] = types.add(entry, name + JSON.stringify(entry));
  }
  const messageMap: Record<string, number> = {};
  for (const [name, structure] of Object.entries(structures[version])) {
    messageMap[name] = messages.add(structure);
  }
  versions[version] = [segmentMap, typeMap, messageMap];
}

const data = {
  fields: fields.items,
  segments: segments.items,
  types: types.items,
  messages: messages.items,
  versions,
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'hl7-data.js'),
  '/* Generated by support/build-dictionary.mts from hl7-dictionary - do not edit */\n' +
    'export default ' +
    JSON.stringify(data) +
    ';\n',
  'utf-8',
);
console.log(
  `fields ${fields.items.length}, segments ${segments.items.length}, ` +
    `types ${types.items.length}, messages ${messages.items.length}, ` +
    `versions ${Object.keys(versions).join(' ')}`,
);
