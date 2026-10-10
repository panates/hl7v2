/**
 * Compares the dictionaries with HAPI HL7v2's structures, which HAPI generates
 * from HL7's own v2 database - an independent second source for every
 * version from 2.1 to 2.8 except 2.7.1, which HAPI does not publish.
 *
 *   npm run build                      # the dictionaries are read from the build
 *   node support/compare-dictionary.mts [report.md]
 *
 * HAPI is a reference only (MPL 1.1 / GPL): nothing it defines is copied into
 * the dictionary. Its source jars are downloaded from Maven Central into
 * node_modules/.cache/hapi-structures.
 *
 * Compared: segments (field types, required, repetition, length, table), data
 * types (component types, tables) and message structures (segment order,
 * required, repeating). Not compared, because the two sources only differ in
 * how they write it:
 * - group names: before 2.5 the standard leaves groups unnamed, HAPI names them;
 * - message names: ours are keyed by trigger event too (ADT_A04), HAPI's by
 *   structure (ADT_A01) - ours are matched through HAPI's event map;
 * - tables HAPI does not record: it keeps one only for ID and IS fields;
 * - primitive data types, which HAPI keeps outside the version packages, and
 *   HAPI's own classes (CON_, Hxx, Z segments).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const cacheDir = path.join(root, 'node_modules/.cache/hapi-structures');
const HAPI_VERSION = '2.6.0';

const VERSIONS: Record<string, string> = {
  '2.1': 'v21',
  '2.2': 'v22',
  '2.3': 'v23',
  '2.3.1': 'v231',
  '2.4': 'v24',
  '2.5': 'v25',
  '2.5.1': 'v251',
  '2.6': 'v26',
  '2.7': 'v27',
  /* HAPI publishes no 2.7.1 structures; 2.7.1 has no reference here */
  '2.8': 'v28',
};

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
  /** One of these segments */
  choice?: string[];
  required: boolean;
  repeating: boolean;
}

interface Definitions {
  segments: Record<string, Field[]>;
  types: Record<string, Field[] | null>;
  messages: Record<string, StructureItem[]>;
  /** Trigger event to message structure (ADT_A04 -> ADT_A01) */
  events?: Record<string, string>;
}

/* ---------------------------------------------------------------- HAPI */

function hapiSources(v: string): string {
  const dir = path.join(cacheDir, v);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
    const jar = path.join(cacheDir, `${v}.jar`);
    const url =
      `https://repo1.maven.org/maven2/ca/uhn/hapi/hapi-structures-${v}/` +
      `${HAPI_VERSION}/hapi-structures-${v}-${HAPI_VERSION}-sources.jar`;
    execFileSync('curl', ['-sfL', '--retry', '3', '-o', jar, url]);
    execFileSync('unzip', ['-q', '-o', jar, '-d', dir]);
  }
  return dir;
}

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

const SEGMENT_FIELD =
  /this\.add\((\w+)\.class,\s*(true|false),\s*(-?\d+),\s*(-?\d+),\s*new Object\[\]\{\s*getMessage\(\)(?:,\s*(?:new Integer\()?(\d+)\)?)?\s*\}/g;
const COMPONENT =
  /data\[(\d+)\]\s*=\s*new (\w+)\(getMessage\(\)(?:,\s*(\d+))?\)/g;
/* The fourth argument marks a choice element: one of consecutive segments */
const STRUCTURE_ITEM =
  /this\.add\((\w+)\.class,\s*(true|false),\s*(true|false)(?:,\s*(true|false))?\)/g;

function hapiDefinitions(version: string): Definitions {
  const dir = hapiSources(VERSIONS[version]);
  const base = path.join(dir, 'ca/uhn/hl7v2/model', VERSIONS[version]);
  const segments: Definitions['segments'] = {};
  for (const [name, src] of Object.entries(
    readJava(path.join(base, 'segment')),
  )) {
    segments[name] = [...src.matchAll(SEGMENT_FIELD)].map(m => ({
      type: m[1],
      required: m[2] === 'true',
      rep: Number(m[3]),
      len: Number(m[4]) > 0 ? Number(m[4]) : undefined,
      table: m[5] && Number(m[5]) > 0 ? Number(m[5]) : undefined,
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
  const events: Record<string, string> = {};
  const eventMap = path.join(
    dir,
    'ca/uhn/hl7v2/parser/eventmap',
    `${version}.properties`,
  );
  if (fs.existsSync(eventMap)) {
    for (const line of fs.readFileSync(eventMap, 'utf8').split('\n')) {
      const [event, struct] = line.trim().split(/\s+/);
      if (event && struct && !event.startsWith('#')) events[event] = struct;
    }
  }
  return { segments, types, messages, events };
}

/* ---------------------------------------------------------------- ours */

const { dictionaries } = await import(
  path.join(root, 'packages/dictionary/build/index.js')
);

function ourDefinitions(version: string): Definitions {
  const d = dictionaries[version];
  const field = (f: any): Field => ({
    type: f.type,
    required: f.opt === 'R',
    rep: f.rep === 'infinite' ? 0 : (f.rep ?? 1),
    len: f.len,
    table: f.table,
  });
  const segments: Definitions['segments'] = {};
  for (const [name, s] of Object.entries<any>(d.segments)) {
    segments[name] = Object.values<any>(s.fields).map(field);
  }
  const types: Definitions['types'] = {};
  for (const [name, t] of Object.entries<any>(d.types)) {
    types[name] = t.fields ? Object.values<any>(t.fields).map(field) : null;
  }
  const structure = (node: any): StructureItem[] =>
    Object.entries<any>(node.segments || {})
      .sort(([, a], [, b]) => a.idx - b.idx)
      .map(([key, n]) => {
        const item: StructureItem = {
          required: (n.min ?? 0) >= 1,
          repeating: n.max !== 1,
        };
        const name: string = n.segment || key;
        if (n.segments) item.group = structure(n);
        /* The source writes a choice as one comma-joined name */
        else if (name.includes(',')) item.choice = name.split(',');
        else item.segment = name;
        return item;
      });
  const messages: Definitions['messages'] = {};
  for (const [name, m] of Object.entries<any>(d.messages)) {
    messages[name] = structure(m);
  }
  return { segments, types, messages };
}

/* ---------------------------------------------------------------- diff */

type Findings = Record<string, string[]>;

function add(findings: Findings, category: string, detail: string) {
  (findings[category] ||= []).push(detail);
}

function compareFields(
  findings: Findings,
  kind: 'segment' | 'type',
  name: string,
  ours: Field[],
  hapi: Field[],
) {
  if (ours.length !== hapi.length) {
    add(
      findings,
      `${kind} field count`,
      `${name}: ours ${ours.length}, HAPI ${hapi.length}`,
    );
  }
  for (let i = 0; i < Math.min(ours.length, hapi.length); i++) {
    const o = ours[i];
    const h = hapi[i];
    const at = `${name}.${i + 1}`;
    if (o.type.toUpperCase() !== h.type.toUpperCase()) {
      add(findings, `${kind} field type`, `${at}: ${o.type} / ${h.type}`);
    }
    if (h.table !== undefined && o.table !== h.table) {
      add(
        findings,
        `${kind} field table`,
        `${at}: ${o.table ?? '-'} / ${h.table}`,
      );
    }
    if (kind === 'type') continue;
    if (o.required !== h.required) {
      add(
        findings,
        'segment field required',
        `${at}: ${o.required ? 'R' : 'O'} / ${h.required ? 'R' : 'O'}`,
      );
    }
    if (o.rep !== h.rep) {
      const r = (x: number) => (x === 0 ? '*' : String(x));
      add(
        findings,
        'segment field repetition',
        `${at}: ${r(o.rep)} / ${r(h.rep)}`,
      );
    }
    if ((o.len ?? 0) !== (h.len ?? 0)) {
      add(
        findings,
        'segment field length',
        `${at}: ${o.len ?? '-'} / ${h.len ?? '-'}`,
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

function compare(ours: Definitions, hapi: Definitions): Findings {
  const findings: Findings = {};
  const isSegment = (n: string) => /^[A-Y][A-Z0-9]{2}$/.test(n);
  for (const name of Object.keys(hapi.segments)) {
    if (isSegment(name) && !(name in ours.segments)) {
      add(findings, 'segment only in HAPI', name);
    }
  }
  for (const name of Object.keys(ours.segments)) {
    if (!(name in hapi.segments)) add(findings, 'segment only in ours', name);
  }
  for (const [name, fields] of Object.entries(ours.segments)) {
    if (hapi.segments[name]) {
      compareFields(findings, 'segment', name, fields, hapi.segments[name]);
    }
  }

  for (const name of Object.keys(hapi.types)) {
    if (!(name in ours.types)) add(findings, 'type only in HAPI', name);
  }
  for (const [name, comps] of Object.entries(ours.types)) {
    const h = hapi.types[name];
    if (h === undefined) {
      if (comps) add(findings, 'type only in ours', name);
      continue;
    }
    if (!comps !== !h) {
      add(
        findings,
        'type kind',
        `${name}: ${comps ? 'composite' : 'primitive'} / ${h ? 'composite' : 'primitive'}`,
      );
    } else if (comps && h) {
      compareFields(findings, 'type', name, comps, h);
    }
  }

  const hapiStructureOf = (name: string) =>
    hapi.messages[name] ? name : hapi.events?.[name];
  const covered = new Set(
    Object.keys(ours.messages).map(hapiStructureOf).filter(Boolean),
  );
  for (const name of Object.keys(hapi.messages)) {
    if (!covered.has(name)) add(findings, 'message only in HAPI', name);
  }
  for (const [name, items] of Object.entries(ours.messages)) {
    if (JSON.stringify(items).includes('"choice"')) {
      add(findings, 'choice written as one segment name', name);
    }
    const struct = hapiStructureOf(name);
    if (!struct) {
      add(findings, 'message only in ours', name);
      continue;
    }
    const a = signature(items);
    const b = signature(hapi.messages[struct]);
    if (a === b) continue;
    const loose = (s: string) => s.replace(/[?*]/g, '');
    add(
      findings,
      (loose(a) === loose(b) ? 'message cardinality' : 'message structure') +
        /* An event's own copy of a structure (ADT_A04) going stale */
        (struct !== name ? ' (event copy)' : ''),
      `${name}${struct !== name ? ` (HAPI ${struct})` : ''}\n      ours: ${a}\n      HAPI: ${b}`,
    );
  }
  return findings;
}

/* ---------------------------------------------------------------- report */

const reportPath =
  process.argv[2] || path.join(root, 'dictionary-comparison.md');
const EXAMPLES = 8;
const summary: Record<string, Record<string, number>> = {};
let details = '';

for (const version of Object.keys(VERSIONS)) {
  const findings = compare(ourDefinitions(version), hapiDefinitions(version));
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

const versions = Object.keys(VERSIONS);
const categories = [
  ...new Set(Object.values(summary).flatMap(Object.keys)),
].sort();
let report =
  `# Dictionary compared with HAPI HL7v2 ${HAPI_VERSION}\n\n` +
  'Generated by `support/compare-dictionary.mts`; each line reads "ours / HAPI". ' +
  '2.7.1 is not compared: HAPI publishes no 2.7.1 structures. ' +
  '2.8 is our 2.7.1 data served as 2.8, so its column is what 2.8 changed.\n\n' +
  `| category | ${versions.join(' | ')} |\n` +
  `|---|${versions.map(() => '---:').join('|')}|\n`;
for (const c of categories) {
  report += `| ${c} | ${versions.map(v => summary[v][c] ?? '').join(' | ')} |\n`;
}
fs.writeFileSync(reportPath, report + details, 'utf-8');
console.log(report);
console.log('report:', reportPath);
