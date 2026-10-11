import data from '../data/hl7-data.js';
import { toHL7Date, toHL7DateTime, toHL7Time } from './hl7-date.util.js';
import { HL7Dictionary } from './hl7-dictionary.js';
import { toHL7Number, toHL7SequenceId } from './hl7-number.util.js';
import type {
  HL7DataTypeDefinition,
  HL7DatatypeOptional,
  HL7DatatypeRepetition,
  HL7FieldDefinition,
  HL7MessageDefinition,
  HL7SegmentDefinition,
  HL7TableDefinition,
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
  NM: { decode: toHL7Number },
  SI: { decode: toHL7SequenceId },
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
    const [type, desc, opt, rep, len, table, item, minLen, confLen, truncate] =
      data.fields[index];
    const d: HL7FieldDefinition = { type };
    if (desc != null) d.desc = desc;
    if (opt != null) d.opt = opt as HL7DatatypeOptional;
    if (rep != null) d.rep = rep as HL7DatatypeRepetition;
    if (len != null) d.len = len;
    if (table != null) d.table = table;
    if (item != null) d.item = item;
    if (minLen != null) d.minLen = minLen;
    if (confLen != null) d.confLen = confLen;
    if (truncate != null) d.truncate = truncate;
    def = fieldCache[index] = Object.freeze(d);
  }
  return def;
}

/** Fields by position; a field the version withdrew (null) is left out */
function fieldMap(
  indexes: (number | null)[],
  codecs?: Record<string, Pick<HL7FieldDefinition, 'decode' | 'encode'>>,
): Record<string, HL7FieldDefinition> {
  const fields: Record<string, HL7FieldDefinition> = {};
  indexes.forEach((fieldIndex, i) => {
    if (fieldIndex === null) return;
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
    /* TS is a primitive in 2.1 - a date/time itself, read as DTM */
    if (name === 'TS' && !fields) Object.assign(d, TYPE_CODECS.DTM);
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

let tableCache: Record<number, HL7TableDefinition> | undefined;

/** The tables, frozen and shared by every version until one is overwritten */
function tables(): Record<number, HL7TableDefinition> {
  if (!tableCache) {
    tableCache = {};
    for (const [num, [desc, values]] of Object.entries(data.tables)) {
      const t: HL7TableDefinition = { values: Object.freeze({ ...values }) };
      if (desc != null) t.desc = desc;
      tableCache[Number(num)] = Object.freeze(t);
    }
  }
  return tableCache;
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
    tables: { ...tables() },
  });
}

/**
 * Each version's dictionary, built on first access. Assigning one replaces it
 * for every message parsed afterwards.
 */
export const dictionaries = {} as Record<HL7Version, HL7Dictionary>;
for (const version of Object.keys(data.versions) as HL7Version[]) {
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
      const dict = buildDictionary(version);
      define(dict);
      return dict;
    },
    set: define,
  });
}

/** Compares two version numbers part by part: 2.5 < 2.5.1 < 2.10 */
function compareVersions(a: string, b: string): number {
  /* Leading digits only: a version read from a message may carry debris */
  const parts = (v: string) =>
    String(v)
      .trim()
      .split('.')
      .map(p => parseInt(p, 10) || 0);
  const pa = parts(a);
  const pb = parts(b);
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
