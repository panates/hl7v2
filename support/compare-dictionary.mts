/**
 * Compares the dictionaries with HL7's own v2 XML schemas, and shows beside
 * every difference what HAPI HL7v2 says - a second, independent reading of
 * the same HL7 v2 database.
 *
 *   npm run build                      # the dictionaries are read from the build
 *   node support/compare-dictionary.mts [report.md]
 *
 * Sources, both references only - nothing from them is copied into the dictionary:
 * - HL7 v2 XML schemas, licensed by HL7 and not in the repository: put the
 *   downloaded zips in support/hl7-schemas/ (git-ignored). From
 *   https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185:
 *   "HL7 Version 2.x Messaging Schemas" (HL7-xml v2.6.zip ... v2.9.zip) and
 *   "Version 2 v2.xml XML Schemas for HL7 Version 2.5 and earlier"
 *   (Sun_HL7v2xsd.zip). Sun's set is used up to 2.5.1: it was regenerated from
 *   the HL7 database because HL7's own early schemas had errors, and it is the
 *   only one with 2.1-2.3.
 * - HAPI HL7v2 structures (MPL 1.1 / GPL), downloaded from Maven Central;
 *   HAPI has no 2.7.1. Its event map (ADT_A04 -> ADT_A01) also matches our
 *   per-event message copies to the structure they use.
 *
 * Compared: segments (field types, required, repetition, length, table), data
 * types (component types, tables) and message structures (segment order,
 * required, repeating). Group names are not: before 2.5 the standard leaves
 * groups unnamed, and generators name them as they like.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const schemasDir = path.join(__dirname, 'hl7-schemas');
const cacheDir = path.join(root, 'node_modules/.cache');
const HAPI_VERSION = '2.6.0';

/** version: [schema zip, directory inside it, HAPI package] */
const VERSIONS: Record<string, [string, string, string | null]> = {
  '2.1': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.1', 'v21'],
  '2.2': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.2', 'v22'],
  '2.3': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.3', 'v23'],
  '2.3.1': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.3.1', 'v231'],
  '2.4': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.4', 'v24'],
  '2.5': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.5', 'v25'],
  '2.5.1': ['Sun_HL7v2xsd.zip', 'hl7v2xsd/2.5.1', 'v251'],
  '2.6': ['HL7-xml v2.6.zip', '', 'v26'],
  '2.7': ['HL7-xml v2.7.zip', '', 'v27'],
  '2.7.1': ['HL7-xml v2.7.1.zip', '', null],
  '2.8': ['HL7-xml v2.8.zip', '', 'v28'],
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

function unzipOnce(zip: string, into: string) {
  if (!fs.existsSync(into)) {
    fs.mkdirSync(into, { recursive: true });
    execFileSync('unzip', ['-q', '-o', zip, '-d', into]);
  }
}

/* ------------------------------------------------------- HL7 XML schemas */

const ATTRIBUTE_GROUP =
  /<xsd:attributeGroup name="([^"]+)\.ATTRIBUTES">([\s\S]*?)<\/xsd:attributeGroup>/g;
const FIXED = /<xsd:attribute name="(\w+)"[^>]*fixed="([^"]*)"/g;
const COMPLEX_TYPE =
  /<xsd:complexType name="([^"]+)">([\s\S]*?)<\/xsd:complexType>/g;
const ELEMENT_REF = /<xsd:element ref="([^"]+)"([^>]*)\/>/g;

interface Ref {
  name: string;
  min: number;
  /** 0: unbounded */
  max: number;
}

function refsOf(body: string): Ref[] {
  return [...body.matchAll(ELEMENT_REF)].map(m => {
    const min = /minOccurs="(\d+)"/.exec(m[2])?.[1] ?? '1';
    const max = /maxOccurs="(\w+)"/.exec(m[2])?.[1] ?? '1';
    return {
      name: m[1],
      min: Number(min),
      max: max === 'unbounded' ? 0 : Number(max),
    };
  });
}

/**
 * Fields by their own number (PID.3 -> index 2): the schemas leave a
 * withdrawn field out, so counting would shift every field after it
 */
function byPosition(refs: Ref[], field: (r: Ref) => Field): Field[] {
  const fields: Field[] = [];
  for (const ref of refs) {
    const pos = Number(/\.(\d+)$/.exec(ref.name)?.[1]);
    if (pos) fields[pos - 1] = field(ref);
  }
  return fields;
}

function schemaDefinitions(version: string): Definitions | undefined {
  const [zip, inner] = VERSIONS[version];
  const zipPath = path.join(schemasDir, zip);
  if (!fs.existsSync(zipPath)) return;
  const into = path.join(cacheDir, 'hl7-schemas', zip.replace(/\W+/g, '_'));
  unzipOnce(zipPath, into);
  const dir = path.join(into, inner);
  const read = (f: string) =>
    fs.existsSync(path.join(dir, f))
      ? fs.readFileSync(path.join(dir, f), 'utf8')
      : '';

  /* Field and component attributes: Type, Table (HL70001), maxLength */
  const attributes: Record<string, Record<string, string>> = {};
  for (const src of [read('fields.xsd'), read('datatypes.xsd')]) {
    for (const m of src.matchAll(ATTRIBUTE_GROUP)) {
      attributes[m[1]] = Object.fromEntries(
        [...m[2].matchAll(FIXED)].map(a => [a[1], a[2]]),
      );
    }
  }
  const field = (ref: Ref): Field => {
    const a = attributes[ref.name] || {};
    /* HL79999 stands for "no table" */
    const table = /^HL7(\d+)$/.exec(a.Table || '')?.[1];
    return {
      type: a.Type || '?',
      required: ref.min >= 1,
      rep: ref.max,
      len: a.maxLength ? Number(a.maxLength) : undefined,
      table:
        table && Number(table) > 0 && Number(table) !== 9999
          ? Number(table)
          : undefined,
    };
  };

  const segments: Definitions['segments'] = {};
  for (const m of read('segments.xsd').matchAll(COMPLEX_TYPE)) {
    const seg = /^(\w+)\.CONTENT$/.exec(m[1])?.[1];
    if (seg) segments[seg] = byPosition(refsOf(m[2]), field);
  }

  const types: Definitions['types'] = {};
  const datatypes = read('datatypes.xsd');
  for (const m of datatypes.matchAll(COMPLEX_TYPE)) {
    if (m[1].includes('.')) continue;
    types[m[1]] = byPosition(refsOf(m[2]), field);
  }
  for (const m of datatypes.matchAll(/<xsd:simpleType name="(\w+)"/g)) {
    types[m[1]] ??= null;
  }

  const messages: Definitions['messages'] = {};
  const skip = new Set([
    'fields.xsd',
    'segments.xsd',
    'datatypes.xsd',
    'messages.xsd',
    'batch.xsd',
  ]);
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.xsd') || skip.has(f)) continue;
    const contents: Record<string, { refs: Ref[]; choice: boolean }> = {};
    for (const m of read(f).matchAll(COMPLEX_TYPE)) {
      const name = /^(.+)\.CONTENT$/.exec(m[1])?.[1];
      if (name) {
        contents[name] = {
          refs: refsOf(m[2]),
          choice: m[2].includes('<xsd:choice'),
        };
      }
    }
    const structure = (name: string): StructureItem[] =>
      (contents[name]?.refs || []).map(ref => {
        const item: StructureItem = {
          required: ref.min >= 1,
          repeating: ref.max !== 1,
        };
        const sub = contents[ref.name];
        if (sub?.choice) {
          item.choice = sub.refs.map(r => r.name.split('.').pop()!);
        } else if (sub) item.group = structure(ref.name);
        else item.segment = ref.name;
        return item;
      });
    const struct = f.slice(0, -4);
    if (contents[struct]) messages[struct] = structure(struct);
  }
  return { segments, types, messages };
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
  const v = VERSIONS[version][2];
  if (!v) return;
  const dir = path.join(cacheDir, 'hapi-structures', v);
  if (!fs.existsSync(dir)) {
    const jar = path.join(cacheDir, 'hapi-structures', `${v}.jar`);
    fs.mkdirSync(path.dirname(jar), { recursive: true });
    execFileSync('curl', [
      '-sfL',
      '--retry',
      '3',
      '-o',
      jar,
      `https://repo1.maven.org/maven2/ca/uhn/hapi/hapi-structures-${v}/` +
        `${HAPI_VERSION}/hapi-structures-${v}-${HAPI_VERSION}-sources.jar`,
    ]);
    unzipOnce(jar, dir);
  }
  const base = path.join(dir, 'ca/uhn/hl7v2/model', v);
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
  const events: Record<string, string> = {};
  const eventMap = path.join(
    dir,
    'ca/uhn/hl7v2/parser/eventmap',
    `${version}.properties`,
  );
  if (fs.existsSync(eventMap)) {
    for (const line of fs.readFileSync(eventMap, 'utf8').split('\n')) {
      const [event, struct] = line.trim().split(/\s+/);
      if (event && struct && struct !== '?' && !event.startsWith('#')) {
        events[event] = struct;
      }
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

const rep = (x: number) => (x === 0 ? '*' : String(x));
const req = (x: boolean) => (x ? 'R' : 'O');
const show = (x: unknown) => (x === undefined ? '-' : String(x));

/** What HAPI says about the same thing, and whether it sides with HL7's schema */
function hapiSays(
  official: unknown,
  ours: unknown,
  hapi: unknown,
  available: boolean,
): string {
  if (!available) return '';
  const tag =
    show(hapi) === show(official)
      ? ' (HAPI agrees with HL7)'
      : show(hapi) === show(ours)
        ? ' (HAPI agrees with ours)'
        : ` (HAPI: ${show(hapi)})`;
  return tag;
}

function compareFields(
  findings: Findings,
  kind: 'segment' | 'type',
  name: string,
  ours: Field[],
  official: Field[],
  hapi?: Field[],
) {
  if (ours.length !== official.length) {
    add(
      findings,
      `${kind} field count`,
      `${name}: ours ${ours.length}, HL7 ${official.length}` +
        hapiSays(official.length, ours.length, hapi?.length, !!hapi),
    );
  }
  for (let i = 0; i < Math.min(ours.length, official.length); i++) {
    const o = ours[i];
    const s = official[i];
    const h = hapi?.[i];
    const at = `${name}.${i + 1}`;
    if (!s) {
      add(
        findings,
        `${kind} field withdrawn in HL7`,
        `${at}: ours ${o.type}` + (h ? ` (HAPI: ${h.type})` : ''),
      );
      continue;
    }
    const check = (
      category: string,
      a: unknown,
      b: unknown,
      c: unknown,
      cmp = (x: unknown, y: unknown) => show(x) === show(y),
    ) => {
      if (!cmp(a, b)) {
        add(
          findings,
          category,
          `${at}: ours ${show(a)} / HL7 ${show(b)}` + hapiSays(b, a, c, !!h),
        );
      }
    };
    check(`${kind} field type`, o.type, s.type, h?.type, (x, y) => {
      const a = String(x).toUpperCase();
      const b = String(y).toUpperCase();
      /* Sun's early schemas write every composite CM_* type as CM */
      return (
        a === b ||
        (b === 'CM' && a.startsWith('CM_')) ||
        (a === 'VARIES' && b === 'VAR')
      );
    });
    /* HL7's schemas record a component's table only rarely */
    if (kind === 'segment' || s.table !== undefined) {
      check(`${kind} field table`, o.table, s.table, h?.table);
    }
    if (kind === 'type') continue;
    check(
      'segment field required',
      req(o.required),
      req(s.required),
      h && req(h.required),
    );
    const repeats = (x: number) => x !== 1;
    check(
      repeats(o.rep) !== repeats(s.rep)
        ? 'segment field repeating'
        : 'segment field repetition limit',
      rep(o.rep),
      rep(s.rep),
      h && rep(h.rep),
    );
    /* Sun's schemas carry no lengths */
    if (s.len !== undefined) {
      check('segment field length', o.len, s.len, h?.len);
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
    if (!(name in ours.segments)) add(findings, 'segment only in HL7', name);
  }
  for (const name of Object.keys(ours.segments)) {
    if (!(name in official.segments)) {
      add(findings, 'segment only in ours', name);
    }
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
  const covered = new Set(Object.keys(ours.messages).map(structureOf));
  for (const name of Object.keys(official.messages)) {
    if (!covered.has(name)) add(findings, 'message only in HL7', name);
  }
  for (const [name, items] of Object.entries(ours.messages)) {
    if (JSON.stringify(items).includes('"choice"')) {
      add(findings, 'choice written as one segment name', name);
    }
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
    const loose = (x: string) => x.replace(/[?*]/g, '');
    add(
      findings,
      (loose(a) === loose(b) ? 'message cardinality' : 'message structure') +
        /* An event's own copy of a structure (ADT_A04) going stale */
        (struct !== name ? ' (event copy)' : ''),
      `${name}${struct !== name ? ` (structure ${struct})` : ''}` +
        hapiSays(b, a, c, !!h) +
        `\n      ours: ${a}\n      HL7:  ${b}` +
        (c && c !== a && c !== b ? `\n      HAPI: ${c}` : ''),
    );
  }
  return findings;
}

/* ---------------------------------------------------------------- report */

const reportPath =
  process.argv[2] || path.join(root, 'dictionary-comparison.md');
const EXAMPLES = 10;
const summary: Record<string, Record<string, number>> = {};
const agreement: Record<string, [number, number, number]> = {};
let details = '';

/**
 * HAPI's event map for a version, completed from the nearest versions: its
 * 2.3 map is nearly empty, and it has none for 2.7.1. An event keeps its
 * structure across versions far more often than not.
 */
function eventsFor(version: string): Record<string, string> {
  const all = Object.keys(VERSIONS);
  const i = all.indexOf(version);
  const nearestFirst = all
    .map((v, j) => [v, Math.abs(j - i)] as const)
    .sort((a, b) => a[1] - b[1])
    .map(([v]) => v);
  const events: Record<string, string> = {};
  for (const v of nearestFirst.reverse()) {
    Object.assign(events, hapiDefinitions(v)?.events);
  }
  return events;
}

const versions = Object.keys(VERSIONS).filter(v => {
  const ok = fs.existsSync(path.join(schemasDir, VERSIONS[v][0]));
  if (!ok)
    console.warn(`${v}: no ${VERSIONS[v][0]} in ${schemasDir} - skipped`);
  return ok;
});

for (const version of versions) {
  const official = schemaDefinitions(version)!;
  const findings = compare(
    ourDefinitions(version),
    official,
    hapiDefinitions(version),
    eventsFor(version),
  );
  summary[version] = Object.fromEntries(
    Object.entries(findings).map(([k, v]) => [k, v.length]),
  );
  const all = Object.values(findings).flat();
  agreement[version] = [
    all.filter(x => x.includes('(HAPI agrees with HL7)')).length,
    all.filter(x => x.includes('(HAPI agrees with ours)')).length,
    all.filter(x => x.includes('(HAPI: ')).length,
  ];
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
  `HAPI HL7v2 ${HAPI_VERSION}'s reading is noted beside it (HAPI has no 2.7.1). ` +
  '2.8 is our 2.7.1 data served as 2.8, so its column is what 2.8 changed.\n\n' +
  `| category | ${versions.join(' | ')} |\n` +
  `|---|${versions.map(() => '---:').join('|')}|\n`;
for (const c of categories) {
  report += `| ${c} | ${versions.map(v => summary[v][c] ?? '').join(' | ')} |\n`;
}
report +=
  '\nWhere the two references meet - on the differences above:\n\n' +
  `| HAPI | ${versions.join(' | ')} |\n` +
  `|---|${versions.map(() => '---:').join('|')}|\n` +
  `| agrees with HL7 | ${versions.map(v => agreement[v][0]).join(' | ')} |\n` +
  `| agrees with ours | ${versions.map(v => agreement[v][1]).join(' | ')} |\n` +
  `| differs from both | ${versions.map(v => agreement[v][2]).join(' | ')} |\n`;
fs.writeFileSync(reportPath, report + details, 'utf-8');
console.log(report);
console.log('report:', reportPath);
