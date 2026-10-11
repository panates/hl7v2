/**
 * Compares the dictionaries with HL7's own v2 XML schemas - the source they
 * are generated from (support/build-dictionary.mts) - and notes beside every
 * difference what HAPI HL7v2 says, a second reading of the same HL7 database.
 *
 *   npm run build                      # the dictionaries are read from the build
 *   node support/compare-dictionary.mts [report.md]
 *
 * See support/hl7-sources.mts for where the schemas go. Nothing from either
 * reference is copied by this script.
 *
 * Compared: segments (field types, required, repetition, length, table), data
 * types (component types, tables) and message structures (segment order,
 * required, repeating). Group names are not: before 2.5 the standard leaves
 * groups unnamed, and generators name them as they like.
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  eventsFor,
  HAPI_VERSION,
  hapiSourceDir,
  normalizeType,
  readSchemas,
  root,
  type SchemaField,
  type SchemaNode,
  SOURCES,
  versionsWithSchemas,
} from './hl7-sources.mts';

interface Field {
  type: string;
  required: boolean;
  /** 0: unbounded */
  rep: number;
  len?: number;
  table?: number;
}

interface StructureItem {
  segment?: string;
  group?: StructureItem[];
  /** One of these */
  choice?: string[];
  required: boolean;
  repeating: boolean;
}

interface Definitions {
  /** By field number; a withdrawn field is absent */
  segments: Record<string, (Field | undefined)[]>;
  types: Record<string, (Field | undefined)[] | null>;
  messages: Record<string, StructureItem[]>;
}

/* ------------------------------------------------------- HL7 XML schemas */

function schemaDefinitions(version: string): Definitions {
  const s = readSchemas(version);
  const fields = (list: SchemaField[]) =>
    Array.from(list, f =>
      f
        ? {
            type: f.type,
            required: f.min >= 1,
            rep: f.max,
            len: f.len,
            table: f.table,
          }
        : undefined,
    );
  const items = (nodes: SchemaNode[]): StructureItem[] =>
    nodes.map(n => {
      const item: StructureItem = {
        required: n.min >= 1,
        repeating: n.max !== 1,
      };
      if (n.choice) item.choice = n.items!.map(i => i.name);
      else if (n.items) item.group = items(n.items);
      else item.segment = n.name;
      return item;
    });
  return {
    segments: Object.fromEntries(
      Object.entries(s.segments).map(([k, v]) => [k, fields(v)]),
    ),
    types: Object.fromEntries(
      Object.entries(s.types).map(([k, v]) => [k, v && fields(v)]),
    ),
    messages: Object.fromEntries(
      Object.entries(s.structures).map(([k, v]) => [k, items(v)]),
    ),
  };
}

/* ---------------------------------------------------------------- HAPI */

const SEGMENT_FIELD =
  /this\.add\((\w+)\.class,\s*(true|false),\s*(-?\d+),\s*(-?\d+),\s*new Object\[\]\{\s*getMessage\(\)(?:,\s*(?:new Integer\()?(\d+)\)?)?\s*\}/g;
const COMPONENT =
  /data\[(\d+)\]\s*=\s*new (\w+)\(getMessage\(\)(?:,\s*(\d+))?\)/g;
/* The fourth argument marks a choice element: one of consecutive segments */
const STRUCTURE_ITEM =
  /this\.add\((\w+)\.class,\s*(true|false),\s*(true|false)(?:,\s*(true|false))?\)/g;

function readJava(dir: string): Record<string, string> {
  if (!fs.existsSync(dir)) return {};
  const out: Record<string, string> = {};
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.java')) {
      out[f.slice(0, -5)] = fs.readFileSync(path.join(dir, f), 'utf8');
    }
  }
  return out;
}

function hapiDefinitions(version: string): Definitions | undefined {
  const dir = hapiSourceDir(version);
  if (!dir) return;
  const base = path.join(dir, 'ca/uhn/hl7v2/model', SOURCES[version][2]!);
  const segments: Definitions['segments'] = {};
  for (const [name, src] of Object.entries(
    readJava(path.join(base, 'segment')),
  )) {
    segments[name] = [...src.matchAll(SEGMENT_FIELD)].map(m => ({
      type: m[1],
      required: m[2] === 'true',
      rep: Number(m[3]),
      len: Number(m[4]) > 0 ? Number(m[4]) : undefined,
      table: Number(m[5]) > 0 ? Number(m[5]) : undefined,
    }));
  }
  const types: Definitions['types'] = {};
  for (const [name, src] of Object.entries(
    readJava(path.join(base, 'datatype')),
  )) {
    const comps = [...src.matchAll(COMPONENT)];
    types[name] = comps.length
      ? comps
          .sort((a, b) => Number(a[1]) - Number(b[1]))
          .map(m => ({
            type: m[2],
            required: false,
            rep: 1,
            table: Number(m[3]) > 0 ? Number(m[3]) : undefined,
          }))
      : null;
  }
  const groups = readJava(path.join(base, 'group'));
  const structure = (src: string): StructureItem[] => {
    const items: StructureItem[] = [];
    for (const m of src.matchAll(STRUCTURE_ITEM)) {
      const required = m[2] === 'true';
      const repeating = m[3] === 'true';
      if (m[4] === 'true') {
        const last = items[items.length - 1];
        if (last?.choice) last.choice.push(m[1]);
        else items.push({ choice: [m[1]], required, repeating });
        continue;
      }
      const item: StructureItem = { required, repeating };
      if (groups[m[1]]) item.group = structure(groups[m[1]]);
      else item.segment = m[1];
      items.push(item);
    }
    return items;
  };
  const messages: Definitions['messages'] = {};
  for (const [name, src] of Object.entries(
    readJava(path.join(base, 'message')),
  )) {
    messages[name] = structure(src);
  }
  return { segments, types, messages };
}

/* ---------------------------------------------------------------- ours */

const { dictionaries } = await import(
  path.join(root, 'packages/dictionary/build/index.js')
);

function ourDefinitions(version: string): Definitions {
  const d = dictionaries[version];
  const byNumber = (fields: Record<string, any>) => {
    const out: (Field | undefined)[] = [];
    for (const [pos, f] of Object.entries<any>(fields)) {
      out[Number(pos) - 1] = {
        type: f.type,
        required: f.opt === 'R',
        rep: f.rep === 'infinite' ? 0 : (f.rep ?? 1),
        len: f.len,
        table: f.table,
      };
    }
    return out;
  };
  const items = (node: any): StructureItem[] =>
    Object.entries<any>(node.segments || {})
      .sort(([, a], [, b]) => a.idx - b.idx)
      .map(([key, n]) => {
        const item: StructureItem = {
          required: (n.min ?? 0) >= 1,
          repeating: n.max !== 1,
        };
        if (n.choice) {
          item.choice = Object.entries<any>(n.segments)
            .sort(([, a], [, b]) => a.idx - b.idx)
            .map(([k, c]) => c.segment || k);
        } else if (n.segments) item.group = items(n);
        else item.segment = n.segment || key;
        return item;
      });
  return {
    segments: Object.fromEntries(
      Object.entries<any>(d.segments).map(([k, s]) => [k, byNumber(s.fields)]),
    ),
    types: Object.fromEntries(
      Object.entries<any>(d.types).map(([k, t]) => [
        k,
        t.fields ? byNumber(t.fields) : null,
      ]),
    ),
    messages: Object.fromEntries(
      Object.entries<any>(d.messages).map(([k, m]) => [k, items(m)]),
    ),
  };
}

/* ---------------------------------------------------------------- diff */

type Findings = Record<string, string[]>;

function add(findings: Findings, category: string, detail: string) {
  (findings[category] ||= []).push(detail);
}

const repText = (x: number) => (x === 0 ? '*' : String(x));
const reqText = (x: boolean) => (x ? 'R' : 'O');
const show = (x: unknown) => (x === undefined ? '-' : String(x));

/** What HAPI says about the same thing, and whether it sides with HL7's schema */
function hapiSays(official: unknown, ours: unknown, hapi: unknown): string {
  if (show(hapi) === show(official)) return ' (HAPI agrees with HL7)';
  if (show(hapi) === show(ours)) return ' (HAPI agrees with ours)';
  return ` (HAPI: ${show(hapi)})`;
}

const sameType = (ours: string, official: string) => {
  const a = ours.toUpperCase();
  const b = normalizeType(official).toUpperCase();
  /* Sun's early schemas write every composite CM_* type as CM */
  return a === b || (b === 'CM' && a.startsWith('CM_'));
};

function compareFields(
  findings: Findings,
  kind: 'segment' | 'type',
  name: string,
  ours: (Field | undefined)[],
  official: (Field | undefined)[],
  hapi?: (Field | undefined)[],
) {
  const n = Math.max(ours.length, official.length);
  for (let i = 0; i < n; i++) {
    const o = ours[i];
    const s = official[i];
    const h = hapi?.[i];
    const at = `${name}.${i + 1}`;
    if (!o || !s) {
      const only = o || s;
      if (only) {
        add(
          findings,
          `${kind} field only in ${o ? 'ours' : 'HL7'}`,
          `${at}: ${only.type}`,
        );
      }
      continue;
    }
    const note = (a: unknown, b: unknown, c: unknown) =>
      hapi ? hapiSays(b, a, c) : '';
    if (!sameType(o.type, s.type)) {
      add(
        findings,
        `${kind} field type`,
        `${at}: ours ${o.type} / HL7 ${s.type}` + note(o.type, s.type, h?.type),
      );
    }
    if (s.table !== undefined && o.table !== s.table) {
      add(
        findings,
        `${kind} field table`,
        `${at}: ours ${show(o.table)} / HL7 ${s.table}` +
          note(o.table, s.table, h?.table),
      );
    }
    if (kind === 'type') continue;
    if (o.required !== s.required) {
      add(
        findings,
        'segment field required',
        `${at}: ours ${reqText(o.required)} / HL7 ${reqText(s.required)}`,
      );
    }
    if (o.rep !== s.rep) {
      add(
        findings,
        'segment field repetition',
        `${at}: ours ${repText(o.rep)} / HL7 ${repText(s.rep)}`,
      );
    }
    if (s.len !== undefined && o.len !== s.len) {
      add(
        findings,
        'segment field length',
        `${at}: ours ${show(o.len)} / HL7 ${s.len}`,
      );
    }
  }
}

const signature = (items: StructureItem[]): string =>
  items
    .map(
      i =>
        (i.group
          ? `{${signature(i.group)}}`
          : i.choice
            ? `(${i.choice.join('|')})`
            : i.segment) +
        (i.required ? '' : '?') +
        (i.repeating ? '*' : ''),
    )
    .join(' ');

function compare(
  ours: Definitions,
  official: Definitions,
  hapi: Definitions | undefined,
  events: Record<string, string>,
): Findings {
  const findings: Findings = {};
  for (const name of Object.keys(official.segments)) {
    if (!ours.segments[name]) add(findings, 'segment only in HL7', name);
  }
  for (const name of Object.keys(ours.segments)) {
    if (!official.segments[name]) add(findings, 'segment only in ours', name);
  }
  for (const [name, fields] of Object.entries(ours.segments)) {
    if (official.segments[name]) {
      compareFields(
        findings,
        'segment',
        name,
        fields,
        official.segments[name],
        hapi?.segments[name],
      );
    }
  }
  for (const name of Object.keys(official.types)) {
    if (!(name in ours.types)) add(findings, 'type only in HL7', name);
  }
  for (const [name, comps] of Object.entries(ours.types)) {
    if (!(name in official.types)) {
      add(findings, 'type only in ours', name);
      continue;
    }
    const s = official.types[name];
    if (!comps !== !s) {
      add(
        findings,
        'type kind',
        `${name}: ours ${comps ? 'composite' : 'primitive'} / HL7 ${s ? 'composite' : 'primitive'}`,
      );
    } else if (comps && s) {
      compareFields(
        findings,
        'type',
        name,
        comps,
        s,
        hapi?.types[name] ?? undefined,
      );
    }
  }
  /* Ours is keyed by trigger event too (ADT_A04); HL7's schemas by structure */
  const structureOf = (name: string) =>
    official.messages[name] ? name : events[name];
  for (const name of Object.keys(official.messages)) {
    if (!ours.messages[name]) add(findings, 'message only in HL7', name);
  }
  for (const [name, items] of Object.entries(ours.messages)) {
    const struct = structureOf(name);
    if (!struct || !official.messages[struct]) {
      add(findings, 'message only in ours', name);
      continue;
    }
    const a = signature(items);
    const b = signature(official.messages[struct]);
    if (a === b) continue;
    const h = hapi?.messages[struct];
    const c = h && signature(h);
    add(
      findings,
      'message structure',
      `${name}${struct !== name ? ` (structure ${struct})` : ''}` +
        (c ? hapiSays(b, a, c) : '') +
        `\n      ours: ${a}\n      HL7:  ${b}`,
    );
  }
  return findings;
}

/* ---------------------------------------------------------------- report */

const reportPath =
  process.argv[2] || path.join(root, 'dictionary-comparison.md');
const EXAMPLES = 10;
const versions = versionsWithSchemas();
const summary: Record<string, Record<string, number>> = {};
let details = '';

for (const version of versions) {
  const findings = compare(
    ourDefinitions(version),
    schemaDefinitions(version),
    hapiDefinitions(version),
    eventsFor(version),
  );
  summary[version] = Object.fromEntries(
    Object.entries(findings).map(([k, v]) => [k, v.length]),
  );
  details += `\n## ${version}\n`;
  for (const [category, items] of Object.entries(findings).sort()) {
    details += `\n### ${category} (${items.length})\n\n`;
    for (const item of items.slice(0, EXAMPLES)) details += `- ${item}\n`;
    if (items.length > EXAMPLES) {
      details += `- ... ${items.length - EXAMPLES} more\n`;
    }
  }
}

const categories = [
  ...new Set(Object.values(summary).flatMap(Object.keys)),
].sort();
let report =
  '# Dictionary compared with the HL7 v2 XML schemas\n\n' +
  'Generated by `support/compare-dictionary.mts`. Each line reads "ours / HL7"; ' +
  `HAPI HL7v2 ${HAPI_VERSION}'s reading is noted where it has the version.\n\n`;
if (categories.length) {
  report +=
    `| category | ${versions.join(' | ')} |\n` +
    `|---|${versions.map(() => '---:').join('|')}|\n`;
  for (const c of categories) {
    report += `| ${c} | ${versions.map(v => summary[v][c] ?? '').join(' | ')} |\n`;
  }
} else {
  report += `No differences in ${versions.join(', ')}.\n`;
}
fs.writeFileSync(reportPath, report + details, 'utf-8');
console.log(report);
console.log('report:', reportPath);
