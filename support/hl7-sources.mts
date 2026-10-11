/**
 * Reads the two references the dictionary is built and checked against:
 *
 * - HL7's v2 XML schemas, licensed by HL7 and not in the repository. Put the
 *   downloaded zips in support/hl7-schemas/ (git-ignored), from
 *   https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185:
 *   "HL7 Version 2.x Messaging Schemas" (HL7-xml v2.6.zip ... v2.9.zip) and
 *   "Version 2 v2.xml XML Schemas for HL7 Version 2.5 and earlier"
 *   (Sun_HL7v2xsd.zip). Sun's set is used up to 2.5.1: it was regenerated from
 *   the HL7 database because HL7's own early schemas had errors, and it is the
 *   only one with 2.1-2.3.
 * - HAPI HL7v2's structure sources (MPL 1.1 / GPL), from Maven Central: a
 *   second reading of the same HL7 database, and the event map (ADT_A04 is an
 *   ADT_A01) the schemas do not have.
 *
 * Both are unpacked into node_modules/.cache.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(__dirname, '..');
export const schemasDir = path.join(__dirname, 'hl7-schemas');
const cacheDir = path.join(root, 'node_modules/.cache');
export const HAPI_VERSION = '2.6.0';

/** version: [schema zip, directory inside it, HAPI package] */
export const SOURCES: Record<string, [string, string, string | null]> = {
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
  '2.8.1': ['HL7-xml v2.8.1.zip', '', 'v281'],
  '2.8.2': ['HL7-xml v2.8.2.zip', '', null],
  '2.9': ['HL7-xml v2.9.zip', '', null],
};

export const versionsWithSchemas = () =>
  Object.keys(SOURCES).filter(v =>
    fs.existsSync(path.join(schemasDir, SOURCES[v][0])),
  );

function unzipOnce(zip: string, into: string) {
  if (!fs.existsSync(into)) {
    fs.mkdirSync(into, { recursive: true });
    execFileSync('unzip', ['-q', '-o', zip, '-d', into]);
  }
}

/* ------------------------------------------------------- HL7 XML schemas */

export interface SchemaField {
  type: string;
  desc?: string;
  min: number;
  /** 0: unbounded */
  max: number;
  len?: number;
  table?: number;
  /** HL7 data element number (PID-5 is item 108) */
  item?: number;
  minLen?: number;
  /** Conformance length, 2.7+ */
  confLen?: number;
  /** Whether the value may be truncated (#) or not (=), 2.7+ */
  truncate?: boolean;
}

export interface SchemaNode {
  /** A segment, or the group/choice's own name (ORDER, CHOICE) */
  name: string;
  min: number;
  /** 0: unbounded */
  max: number;
  /** For a group, its items; for a choice, the alternatives */
  items?: SchemaNode[];
  choice?: boolean;
}

export interface Schemas {
  /** Fields by their own number: index 2 is field 3. A withdrawn field is absent */
  segments: Record<string, SchemaField[]>;
  /** null for a primitive type */
  types: Record<string, SchemaField[] | null>;
  structures: Record<string, SchemaNode[]>;
}

const ATTRIBUTE_GROUP =
  /<xsd:attributeGroup name="([^"]+)\.ATTRIBUTES">([\s\S]*?)<\/xsd:attributeGroup>/g;
const FIXED = /<xsd:attribute name="(\w+)"[^>]*fixed="([^"]*)"/g;
/* TX and FT are complex types with mixed content: <xsd:complexType name="TX" mixed="true"> */
const COMPLEX_TYPE =
  /<xsd:complexType name="([^"]+)"[^>]*>([\s\S]*?)<\/xsd:complexType>/g;
const ELEMENT_REF = /<xsd:element ref="([^"]+)"([^>]*)\/>/g;

interface Ref {
  name: string;
  min: number;
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
 * A type name as the dictionary writes it: the schemas spell "varies" four
 * ways (var, varies, Varies, *) and 2.9's carry trailing spaces
 */
export function normalizeType(type: string): string {
  const t = type.trim();
  return /^(var(ies)?|\*)$/i.test(t) ? 'VARIES' : t;
}

/** Structures with placeholders rather than segments (QBP_Qnn, MFN_Znn) */
const isGenericStructure = (name: string) => /[a-z]/.test(name);

const cache = new Map<string, Schemas>();

export function readSchemas(version: string): Schemas {
  let schemas = cache.get(version);
  if (schemas) return schemas;
  const [zip, inner] = SOURCES[version];
  const into = path.join(cacheDir, 'hl7-schemas', zip.replace(/\W+/g, '_'));
  unzipOnce(path.join(schemasDir, zip), into);
  let dir = path.join(into, inner);
  if (!fs.existsSync(path.join(dir, 'segments.xsd'))) {
    /* Some zips hold the files one directory down */
    const sub = fs
      .readdirSync(dir)
      .find(d => fs.existsSync(path.join(dir, d, 'segments.xsd')));
    if (sub) dir = path.join(dir, sub);
  }
  const read = (f: string) =>
    fs.existsSync(path.join(dir, f))
      ? fs.readFileSync(path.join(dir, f), 'utf8')
      : '';

  /* Field and component attributes: Type, LongName, Table (HL7nnnn), maxLength */
  const attributes: Record<string, Record<string, string>> = {};
  for (const src of [read('fields.xsd'), read('datatypes.xsd')]) {
    for (const m of src.matchAll(ATTRIBUTE_GROUP)) {
      attributes[m[1]] = Object.fromEntries(
        [...m[2].matchAll(FIXED)].map(a => [a[1], a[2]]),
      );
    }
  }
  /** By the field's own number - the schemas leave a withdrawn field out */
  const fieldsOf = (refs: Ref[]): SchemaField[] => {
    const fields: SchemaField[] = [];
    for (const ref of refs) {
      const pos = Number(/\.(\d+)$/.exec(ref.name)?.[1]);
      if (!pos) continue;
      const a = attributes[ref.name] || {};
      /* HL79999 stands for "no table" */
      const table = Number(/^HL7(\d+)$/.exec(a.Table || '')?.[1]);
      fields[pos - 1] = {
        type: normalizeType(a.Type || 'ST'),
        desc: a.LongName || undefined,
        min: ref.min,
        max: ref.max,
        len: a.maxLength ? Number(a.maxLength) : undefined,
        table: table > 0 && table !== 9999 ? table : undefined,
        item: Number(a.Item) > 0 ? Number(a.Item) : undefined,
        minLen: a.minLength ? Number(a.minLength) : undefined,
        confLen: a.confLength ? Number(a.confLength) : undefined,
        truncate:
          a.truncation === '#'
            ? true
            : a.truncation === '='
              ? false
              : undefined,
      };
    }
    return fields;
  };

  const segments: Schemas['segments'] = {};
  for (const m of read('segments.xsd').matchAll(COMPLEX_TYPE)) {
    const seg = /^(\w+)\.CONTENT$/.exec(m[1])?.[1];
    if (seg) segments[seg] = fieldsOf(refsOf(m[2]));
  }

  const types: Schemas['types'] = {};
  const datatypes = read('datatypes.xsd');
  for (const m of datatypes.matchAll(COMPLEX_TYPE)) {
    if (m[1].includes('.')) continue;
    const comps = fieldsOf(refsOf(m[2]));
    /* A complex type with no components (TX, FT) is a primitive */
    types[normalizeType(m[1])] = comps.length ? comps : null;
  }
  for (const m of datatypes.matchAll(/<xsd:simpleType name="(\w+)"/g)) {
    types[normalizeType(m[1])] ??= null;
  }

  const structures: Schemas['structures'] = {};
  const skip = new Set([
    'fields.xsd',
    'segments.xsd',
    'datatypes.xsd',
    'messages.xsd',
    'batch.xsd',
  ]);
  for (const f of fs.readdirSync(dir)) {
    const struct = f.slice(0, -4);
    if (!f.endsWith('.xsd') || skip.has(f) || isGenericStructure(struct)) {
      continue;
    }
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
    const nodes = (name: string): SchemaNode[] =>
      (contents[name]?.refs || []).map(ref => {
        const sub = contents[ref.name];
        const node: SchemaNode = {
          name: ref.name.split('.').pop()!,
          min: ref.min,
          max: ref.max,
        };
        if (sub) {
          node.items = nodes(ref.name);
          if (sub.choice) node.choice = true;
        }
        return node;
      });
    if (contents[struct]) structures[struct] = nodes(struct);
  }
  schemas = { segments, types, structures };
  cache.set(version, schemas);
  return schemas;
}

/* ---------------------------------------------------------------- HAPI */

export function hapiSourceDir(version: string): string | undefined {
  const v = SOURCES[version][2];
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
  return dir;
}

function hapiEventMap(version: string): Record<string, string> {
  const dir = hapiSourceDir(version);
  const file =
    dir &&
    path.join(dir, 'ca/uhn/hl7v2/parser/eventmap', `${version}.properties`);
  const events: Record<string, string> = {};
  if (!file || !fs.existsSync(file)) return events;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const [event, struct] = line.trim().split(/\s+/);
    if (event && struct && struct !== '?' && !event.startsWith('#')) {
      events[event] = struct;
    }
  }
  return events;
}

/**
 * Trigger event to message structure (ADT_A04 -> ADT_A01), from HAPI's event
 * map, completed from the nearest versions: its 2.3 map is nearly empty, and
 * there is none for 2.7.1, 2.8.2 and 2.9. An event keeps its structure across
 * versions far more often than not; callers check that the structure exists.
 */
export function eventsFor(version: string): Record<string, string> {
  const all = Object.keys(SOURCES);
  const i = all.indexOf(version);
  const farthestFirst = all
    .map((v, j) => [v, Math.abs(j - i)] as const)
    .sort((a, b) => b[1] - a[1])
    .map(([v]) => v);
  const events: Record<string, string> = {};
  for (const v of farthestFirst) Object.assign(events, hapiEventMap(v));
  return events;
}
