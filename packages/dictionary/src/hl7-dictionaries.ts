import { toInteger, toNumber } from 'valgen';
import data from '../data/hl7-data.js';
import { toHL7Date, toHL7DateTime, toHL7Time } from './hl7-date.util.js';
import { HL7Dictionary } from './hl7-dictionary.js';
import type {
  HL7DataTypeDefinition,
  HL7DatatypeOptional,
  HL7DatatypeRepetition,
  HL7FieldDefinition,
  HL7MessageDefinition,
  HL7SegmentDefinition,
} from './types.js';
import { HL7Version } from './version.enum.js';

/**
 * Every version is complete, as the source defines it, and is built the first
 * time it is used. A definition identical in several versions is one frozen
 * object shared by all of them: changing one version goes through
 * HL7Dictionary.extend() / overwrite*(), which copy what they change.
 */

/** Value conversions, attached to a data type by its name in every version */
const TYPE_CODECS: Record<
  string,
  Pick<HL7DataTypeDefinition, 'decode' | 'encode'>
> = {
  DT: { decode: toHL7Date, encode: toHL7Date },
  DTM: { decode: toHL7DateTime, encode: toHL7DateTime },
  TM: { decode: toHL7Time, encode: toHL7Time },
  NM: { decode: toNumber },
  SI: { decode: toInteger },
};

/** Conversions on a component of a composite type: the time of a TS */
const COMPONENT_CODECS: Record<
  string,
  Record<string, Pick<HL7FieldDefinition, 'decode' | 'encode'>>
> = {
  TS: { '1': { decode: toHL7DateTime, encode: toHL7DateTime } },
};

const fieldCache: HL7FieldDefinition[] = [];
const segmentCache: HL7SegmentDefinition[] = [];
const typeCache = new Map<string, HL7DataTypeDefinition>();
const messageCache: HL7MessageDefinition[] = [];

function field(index: number): HL7FieldDefinition {
  let def = fieldCache[index];
  if (!def) {
    const [type, desc, opt, rep, len, table] = data.fields[index];
    const d: HL7FieldDefinition = { type };
    if (desc != null) d.desc = desc;
    if (opt != null) d.opt = opt as HL7DatatypeOptional;
    if (rep != null) d.rep = rep as HL7DatatypeRepetition;
    if (len != null) d.len = len;
    if (table != null) d.table = table;
    def = fieldCache[index] = Object.freeze(d);
  }
  return def;
}

function fieldMap(
  indexes: number[],
  codecs?: Record<string, Pick<HL7FieldDefinition, 'decode' | 'encode'>>,
): Record<string, HL7FieldDefinition> {
  const fields: Record<string, HL7FieldDefinition> = {};
  indexes.forEach((fieldIndex, i) => {
    const pos = String(i + 1);
    const def = field(fieldIndex);
    fields[pos] = codecs?.[pos]
      ? Object.freeze({ ...def, ...codecs[pos] })
      : def;
  });
  return Object.freeze(fields);
}

function segment(index: number): HL7SegmentDefinition {
  let def = segmentCache[index];
  if (!def) {
    const [desc, fields] = data.segments[index];
    const d: HL7SegmentDefinition = { fields: fieldMap(fields) };
    if (desc != null) d.desc = desc;
    def = segmentCache[index] = Object.freeze(d);
  }
  return def;
}

function dataType(name: string, index: number): HL7DataTypeDefinition {
  const key = name + ':' + index;
  let def = typeCache.get(key);
  if (!def) {
    const [desc, fields] = data.types[index];
    const d: HL7DataTypeDefinition = {};
    if (desc != null) d.desc = desc;
    if (fields) d.fields = fieldMap(fields, COMPONENT_CODECS[name]);
    Object.assign(d, TYPE_CODECS[name]);
    def = Object.freeze(d);
    typeCache.set(key, def);
  }
  return def;
}

function deepFreeze<T>(o: T): T {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    for (const v of Object.values(o)) deepFreeze(v);
  }
  return o;
}

function message(index: number): HL7MessageDefinition {
  let def = messageCache[index];
  if (!def) def = messageCache[index] = deepFreeze(data.messages[index]);
  return def;
}

function mapOf<T>(
  names: Record<string, number>,
  create: (name: string, index: number) => T,
): Record<string, T> {
  const out: Record<string, T> = {};
  for (const [name, index] of Object.entries(names))
    out[name] = create(name, index);
  return out;
}

/** Builds a version's dictionary from the generated data */
export function buildDictionary(version: HL7Version): HL7Dictionary {
  const entry = data.versions[version];
  if (!entry) throw new Error(`No HL7 dictionary for version ${version}`);
  const [segments, types, messages] = entry;
  return new HL7Dictionary({
    version,
    segments: mapOf(segments, (_, i) => segment(i)),
    types: mapOf(types, dataType),
    messages: mapOf(messages, (_, i) => message(i)),
  });
}

/**
 * The versions the generated data holds, plus 2.8, which has no data of its
 * own yet and is served by 2.7.1's definitions under its own version number.
 */
const ALIASES: Partial<Record<HL7Version, HL7Version>> = {
  [HL7Version.v2_8]: HL7Version.v2_7_1,
};

function build(version: HL7Version): HL7Dictionary {
  const source = ALIASES[version];
  if (!source) return buildDictionary(version);
  const dict = buildDictionary(source);
  dict.version = version;
  return dict;
}

/**
 * Each version's dictionary, built on first access. Assigning one replaces it
 * for every message parsed afterwards.
 */
export const dictionaries = {} as Record<HL7Version, HL7Dictionary>;
for (const version of [
  ...Object.keys(data.versions),
  ...Object.keys(ALIASES),
] as HL7Version[]) {
  const define = (value: HL7Dictionary) =>
    Object.defineProperty(dictionaries, version, {
      value,
      enumerable: true,
      writable: true,
      configurable: true,
    });
  Object.defineProperty(dictionaries, version, {
    enumerable: true,
    configurable: true,
    get: () => {
      const dict = build(version);
      define(dict);
      return dict;
    },
    set: define,
  });
}

/** Compares two version numbers part by part: 2.5 < 2.5.1 < 2.10 */
function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

/**
 * The newest version with a dictionary that is not newer than the given one:
 * a message of version 2.5.2 is read with 2.5.1's definitions.
 * Versions older than every dictionary get the oldest.
 */
export function findNearestHL7Version(version: HL7Version): HL7Version {
  const versions = (Object.keys(dictionaries) as HL7Version[]).sort(
    compareVersions,
  );
  let nearest = versions[0];
  for (const v of versions) {
    if (compareVersions(v, String(version)) > 0) break;
    nearest = v;
  }
  return nearest;
}
