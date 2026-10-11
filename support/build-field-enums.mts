/**
 * Generates the field position enums of packages/dictionary/src/segment-fields
 * and type-fields (PIDSegment.PatientName = 5, CXType.IDNumber = 1) from the
 * dictionaries, every version together:
 *
 *   npm run build                      # the dictionaries are read from the build
 *   node support/build-field-enums.mts
 *
 * HL7 never reuses a field number, so one enum serves every version. A member
 * that exists keeps its name - code refers to it - and only what is missing
 * is added: fields, segments and data types of newer versions, named from the
 * newest version that has them.
 */
import fs from 'node:fs';
import path from 'node:path';
import { root } from './hl7-sources.mts';

const srcDir = path.join(root, 'packages/dictionary/src');
const { dictionaries } = await import(
  path.join(root, 'packages/dictionary/build/index.js')
);

/** "Mother's Maiden Name" -> MotherSMaidenName; "Set ID - PID" -> SetID */
function memberName(desc: string, owner: string): string {
  const text = desc.replace(new RegExp(`\\s+-\\s+${owner}$`), '');
  let name = text
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join('');
  if (!name) name = 'Field';
  return /^\d/.test(name) ? '_' + name : name;
}

function readEnum(file: string): Map<number, string> {
  const members = new Map<number, string>();
  if (!fs.existsSync(file)) return members;
  for (const m of fs
    .readFileSync(file, 'utf8')
    .matchAll(/^\s+(\w+) = (\d+),$/gm)) {
    members.set(Number(m[2]), m[1]);
  }
  return members;
}

/** Each position's description, from the newest version that has it */
function positions(kind: 'segments' | 'types') {
  const out: Record<string, Map<number, string>> = {};
  for (const version of Object.keys(dictionaries)) {
    for (const [name, def] of Object.entries<any>(
      dictionaries[version][kind],
    )) {
      if (!def.fields) continue;
      const map = (out[name] ||= new Map());
      for (const [pos, f] of Object.entries<any>(def.fields)) {
        if (f.desc) map.set(Number(pos), f.desc);
      }
    }
  }
  return out;
}

function generate(
  kind: 'segments' | 'types',
  dir: string,
  suffix: 'Segment' | 'Type',
) {
  const fileOf = (name: string) =>
    `${name.toLowerCase()}-${suffix.toLowerCase()}.enum`;
  let added = 0;
  let created = 0;
  const all = positions(kind);
  const names = new Set([
    ...Object.keys(all),
    ...fs
      .readdirSync(path.join(srcDir, dir))
      .filter(f => f.endsWith('.enum.ts'))
      .map(f =>
        f.replace(`-${suffix.toLowerCase()}.enum.ts`, '').toUpperCase(),
      ),
  ]);
  const index: string[] = [];
  for (const name of [...names].sort()) {
    const file = path.join(srcDir, dir, fileOf(name) + '.ts');
    const members = readEnum(file);
    const descs = all[name] || new Map();
    if (!members.size && !descs.size) continue;
    if (!members.size) created++;
    const used = new Set(members.values());
    for (const [pos, desc] of [...descs].sort((a, b) => a[0] - b[0])) {
      if (members.has(pos)) continue;
      let member = memberName(desc, name);
      if (used.has(member)) member += pos;
      members.set(pos, member);
      used.add(member);
      added++;
    }
    const body = [...members]
      .sort((a, b) => a[0] - b[0])
      .map(([pos, member]) => `  ${member} = ${pos},\n`)
      .join('');
    /* The type name as written: CM_MSG keeps its case */
    const enumName = `${name}${suffix}`;
    fs.writeFileSync(file, `export enum ${enumName} {\n${body}}\n`, 'utf-8');
    index.push(`export * from './${fileOf(name)}.js';\n`);
  }
  fs.writeFileSync(path.join(srcDir, dir, 'index.ts'), index.join(''), 'utf-8');
  console.log(`${dir}: ${created} new enums, ${added} new members`);
}

generate('segments', 'segment-fields', 'Segment');
generate('types', 'type-fields', 'Type');

/*
 * Object interfaces (src/segment-objects.ts): a segment or data type as the
 * plain object HL7Segment.toObject() gives, keyed by the enums' member
 * names. Types only - nothing of it is in the bundle.
 *
 * A field's shape is the union of what every version makes it: MSH-7 is a
 * TS (an object) up to 2.5 and a DTM (a string) from 2.6, so
 * `TSObject | string`. A field any version lets repeat is an array.
 */
function memberNames(dir: string, file: string): Map<number, string> {
  return readEnum(path.join(srcDir, dir, file + '.ts'));
}

const NUMERIC = new Set(['NM', 'SI']);

function generateObjects() {
  /** A field's TypeScript type from the data type names it has across versions */
  const tsType = (types: Set<string>, composite: (t: string) => boolean) =>
    [...types]
      .map(t =>
        composite(t)
          ? `${safe(t)}Object`
          : NUMERIC.has(t)
            ? 'number | string'
            : 'string',
      )
      .filter((t, i, all) => all.indexOf(t) === i)
      .join(' | ');
  const composites = new Set<string>();
  for (const version of Object.keys(dictionaries)) {
    for (const [name, def] of Object.entries<any>(
      dictionaries[version].types,
    )) {
      if (def.fields) composites.add(name);
    }
  }
  const isComposite = (t: string) => composites.has(t);

  const collect = (kind: 'segments' | 'types') => {
    const out = new Map<
      string,
      Map<number, { types: Set<string>; repeats: boolean }>
    >();
    for (const version of Object.keys(dictionaries)) {
      for (const [name, def] of Object.entries<any>(
        dictionaries[version][kind],
      )) {
        if (!def.fields) continue;
        const fields = out.get(name) ?? new Map();
        out.set(name, fields);
        for (const [pos, f] of Object.entries<any>(def.fields)) {
          const entry = fields.get(Number(pos)) ?? {
            types: new Set<string>(),
            repeats: false,
          };
          entry.types.add(f.type);
          if (f.rep !== 1 && f.rep !== undefined) entry.repeats = true;
          fields.set(Number(pos), entry);
        }
      }
    }
    return out;
  };

  const lines: string[] = [
    '/* Generated by support/build-field-enums.mts - do not edit */',
  ];
  const write = (
    kind: 'segments' | 'types',
    dir: string,
    suffix: string,
    interfaceOf: (name: string) => string,
  ) => {
    for (const [name, fields] of [...collect(kind)].sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      const names = memberNames(dir, `${name.toLowerCase()}-${suffix}.enum`);
      lines.push(`export interface ${interfaceOf(name)} {`);
      for (const [pos, f] of [...fields].sort((a, b) => a[0] - b[0])) {
        const key = names.get(pos) ?? String(pos);
        /* a component of a composite component is one level only: its sub-components */
        const type =
          kind === 'types'
            ? [...f.types]
                .map(t =>
                  isComposite(t)
                    ? `${safe(t)}Components`
                    : NUMERIC.has(t)
                      ? 'number | string'
                      : 'string',
                )
                .filter((t, i, all) => all.indexOf(t) === i)
                .join(' | ')
            : tsType(f.types, isComposite);
        const value = f.repeats && kind === 'segments' ? `(${type})[]` : type;
        lines.push(
          `  ${/^\d/.test(key) ? `'${key}'` : key}?: ${value} | null;`,
        );
      }
      lines.push('}', '');
    }
  };
  write('types', 'type-fields', 'type', n => `${safe(n)}Object`);
  /* A composite as a component's sub-components: its primitives only */
  for (const [name, fields] of [...collect('types')].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const names = memberNames('type-fields', `${name.toLowerCase()}-type.enum`);
    lines.push(`export interface ${safe(name)}Components {`);
    for (const [pos, f] of [...fields].sort((a, b) => a[0] - b[0])) {
      const key = names.get(pos) ?? String(pos);
      /* A sub-component is a number only where some version makes it one */
      const type = [...f.types].some(t => NUMERIC.has(t))
        ? 'number | string'
        : 'string';
      lines.push(`  ${/^\d/.test(key) ? `'${key}'` : key}?: ${type} | null;`);
    }
    lines.push('}', '');
  }
  write('segments', 'segment-fields', 'segment', n => `${n}Object`);
  const segNames = [...collect('segments').keys()].sort();
  lines.push("/** Every segment's object interface, by segment ID */");
  lines.push('export interface HL7SegmentObjects {');
  for (const n of segNames) lines.push(`  ${n}: ${n}Object;`);
  lines.push('}', '');
  fs.writeFileSync(
    path.join(srcDir, 'segment-objects.ts'),
    lines.join('\n'),
    'utf-8',
  );
  console.log(
    `segment-objects.ts: ${segNames.length} segments, ${collect('types').size} data types`,
  );
}

/** A type name usable in an identifier (CM_MSG stays, "VARIES" too) */
function safe(name: string): string {
  return name.replace(/[^A-Za-z0-9_]/g, '_');
}

generateObjects();

/*
 * Version-specific object types (src/versioned-objects.ts): each version's
 * segments and data types exactly as that version defines them, where
 * segment-objects.ts unites every version.
 *
 * A shape the same in several versions is one flat interface, which the
 * versions name: PID is the same in 2.5 and 2.5.1, so both point at one.
 * A segment refers to its composite types through the version's type map
 * (T['XPN']), so a data type changing in a version does not make every
 * segment using it a new shape. Types only.
 */
function generateVersionedObjects() {
  const versions = Object.keys(dictionaries);
  const prim = (t: string) => (NUMERIC.has(t) ? 'number | string' : 'string');
  const key = (k: string) => (/^\d/.test(k) ? `'${k}'` : k);
  const shapes = new Map<string, string>();
  const counters = new Map<string, number>();
  const declarations: string[] = [];
  /** The interface for a body, declared once per distinct body */
  const shapeOf = (base: string, generic: boolean, body: string[]) => {
    const id = base + (generic ? '<T>' : '') + body.join('\n');
    let name = shapes.get(id);
    if (!name) {
      const n = (counters.get(base) ?? 0) + 1;
      counters.set(base, n);
      name = `${base}${n}`;
      shapes.set(id, name);
      declarations.push(
        `interface ${name}${generic ? '<T extends HL7TypeMap>' : ''} {`,
        ...body,
        '}',
        '',
      );
    }
    return name;
  };
  const typeMaps: string[] = [];
  const segmentMaps: string[] = [];
  const fieldMaps: string[] = [];
  const objectMaps: string[] = [];
  const componentMaps: string[] = [];
  /* Component positions as a type: 1 | 2 | 3 as Upto3, declared once */
  const uptos = new Set<number>();
  const positionsType = (list: number[]) => {
    const contiguous = list.every((p, i) => p === i + 1);
    if (!contiguous) return list.join(' | ');
    uptos.add(list.length);
    return `Upto${list.length}`;
  };
  const fieldAliases = new Map<string, string>();
  const fieldAliasCount = new Map<string, number>();
  const pathMaps: string[] = [];
  /* A type with no components is a primitive - a single component - only
   * when no version gives it components (2.1's PN has none, the standard's
   * has), and VARIES, CM and NUL are anything; those take any component */
  const compositeSomewhere = new Set(
    versions.flatMap(v =>
      Object.entries<any>(dictionaries[v].types)
        .filter(([, def]) => def.fields)
        .map(([t]) => t),
    ),
  );
  const unchecked = (t: string) =>
    compositeSomewhere.has(t) || /^(VARIES|CM.*|NUL|escapeType)$/.test(t);
  /** A tuple alias, declared once per distinct tuple: [never, 'SI', 'CWE'] */
  const tuples = new Map<string, string>();
  const tupleOf = (base: string, items: Record<string, string>) => {
    const max = Math.max(0, ...Object.keys(items).map(Number));
    const parts = ['never'];
    for (let i = 1; i <= max; i++) {
      parts.push(items[i] ? `'${items[i]}'` : 'never');
    }
    const tuple = `[${parts.join(', ')}]`;
    let name = tuples.get(`${base}:${tuple}`);
    if (!name) {
      const n = (counters.get(base) ?? 0) + 1;
      counters.set(base, n);
      name = `${base}${n}`;
      tuples.set(`${base}:${tuple}`, name);
      declarations.push(`type ${name} = ${tuple};`, '');
    }
    return name;
  };
  for (const version of versions) {
    const d = dictionaries[version];
    const composite = (t: string) => !!d.types[t]?.fields;
    const componentsOf = (t: string) => {
      const names = memberNames('type-fields', `${t.toLowerCase()}-type.enum`);
      const body = Object.entries<any>(d.types[t].fields).map(
        ([pos, f]) =>
          `  ${key(names.get(Number(pos)) ?? pos)}?: ${prim(f.type)} | null;`,
      );
      return shapeOf(`${safe(t)}Components`, false, body);
    };
    const typeLines: string[] = [];
    for (const [t, def] of Object.entries<any>(d.types)) {
      if (!def.fields) continue;
      const names = memberNames('type-fields', `${t.toLowerCase()}-type.enum`);
      const body = Object.entries<any>(def.fields).map(
        ([pos, f]) =>
          `  ${key(names.get(Number(pos)) ?? pos)}?: ${
            composite(f.type) ? componentsOf(f.type) : prim(f.type)
          } | null;`,
      );
      typeLines.push(
        `    ${key(t)}: ${shapeOf(`${safe(t)}Object`, false, body)};`,
      );
    }
    /* A named map, so an editor shows PIDObject6<HL7Types_2_5> */
    const mapName = `HL7Types_${version.replace(/\./g, '_')}`;
    /* A type, not an interface: only a type alias meets the map's index signature */
    declarations.push(
      `type ${mapName} = {`,
      ...typeLines.map(l => l.substring(2)),
      '};',
      '',
    );
    typeMaps.push(`  '${version}': ${mapName};`);
    const segLines: string[] = [];
    const fieldLines: string[] = [];
    const segTypeLines: string[] = [];
    const compLinesV: string[] = [];
    for (const [s, def] of Object.entries<any>(d.segments)) {
      const fieldPositions = Object.keys(def.fields)
        .map(Number)
        .sort((a, b) => a - b);
      if (fieldPositions.length) {
        const union = fieldPositions.join(' | ');
        let alias = fieldAliases.get(`${s}:${union}`);
        if (!alias) {
          const n = (fieldAliasCount.get(s) || 0) + 1;
          fieldAliasCount.set(s, n);
          alias = `${s}Fields${n}`;
          fieldAliases.set(`${s}:${union}`, alias);
          declarations.push(`type ${alias} = ${union};`, '');
        }
        fieldLines.push(`    ${s}: ${alias};`);
      }
      /* Each field's component positions, as field().comp() takes them */
      const compItems = Object.entries<any>(def.fields).map(([pos, f]) => {
        const t = d.types[f.type];
        let comps = 'number';
        if (t?.fields) {
          comps = positionsType(
            Object.keys(t.fields)
              .map(Number)
              .sort((a, b) => a - b),
          );
        } else if (t && !unchecked(f.type)) comps = '1';
        return `${pos}: ${comps}`;
      });
      const compBody = `{ ${[...compItems, '[field: number]: number'].join('; ')} }`;
      let compAlias = tuples.get(`${s}Comps:${compBody}`);
      if (!compAlias) {
        const n = (counters.get(`${s}Comps`) ?? 0) + 1;
        counters.set(`${s}Comps`, n);
        compAlias = `${s}FieldComps${n}`;
        tuples.set(`${s}Comps:${compBody}`, compAlias);
        declarations.push(`type ${compAlias} = ${compBody};`, '');
      }
      compLinesV.push(`    ${s}: ${compAlias};`);
      segTypeLines.push(
        `      ${s}: ${tupleOf(
          `${s}Types`,
          Object.fromEntries(
            Object.entries<any>(def.fields).map(([pos, f]) => [pos, f.type]),
          ),
        )};`,
      );
      const names = memberNames(
        'segment-fields',
        `${s.toLowerCase()}-segment.enum`,
      );
      const body = Object.entries<any>(def.fields).map(([pos, f]) => {
        const type = composite(f.type) ? `T['${f.type}']` : prim(f.type);
        const repeats = f.rep !== undefined && f.rep !== 1;
        return `  ${key(names.get(Number(pos)) ?? pos)}?: ${repeats ? `(${type})[]` : type} | null;`;
      });
      segLines.push(
        `    ${s}: ${shapeOf(`${s}Object`, true, body)}<HL7Types_${version.replace(/\./g, '_')}>;`,
      );
    }
    segmentMaps.push(`  '${version}': {`, ...segLines, '  };');
    componentMaps.push(
      `  '${version}': {`,
      ...compLinesV,
      '    [segment: string]: { [field: number]: number };',
      '  };',
    );
    objectMaps.push(
      `  '${version}': {`,
      ...segLines,
      '    [segment: string]: Record<string, any>;',
      '  };',
    );
    const compLines: string[] = [];
    for (const [t, def] of Object.entries<any>(d.types)) {
      if (!def.fields && unchecked(t)) continue;
      const items: Record<string, string> = def.fields
        ? Object.fromEntries(
            Object.entries<any>(def.fields).map(([pos, f]) => [pos, f.type]),
          )
        : { 1: t };
      compLines.push(
        `      '${t}': ${def.fields ? tupleOf(`${safe(t)}Comps`, items) : `[never, '${t}']`};`,
      );
    }
    pathMaps.push(
      `  '${version}': {`,
      '    types: {',
      ...compLines,
      '    };',
      '    segments: {',
      ...segTypeLines,
      '    };',
      '  };',
    );
    fieldMaps.push(
      `  '${version}': {`,
      ...fieldLines,
      '    [segment: string]: number;',
      '  };',
    );
  }
  const out = [
    '/* Generated by support/build-field-enums.mts - do not edit */',
    '/* eslint-disable */',
    '',
    'type HL7TypeMap = Record<string, object>;',
    '',
    ...declarations,
    "/** Each version's composite data types as objects, by type name */",
    'export interface HL7VersionTypes {',
    ...typeMaps,
    '}',
    '',
    "/** Each version's segments as objects (HL7Segment.toObject()), by segment ID */",
    'export interface HL7VersionSegments {',
    ...segmentMaps,
    '}',
    '',
    '/** The versions with version-specific object types */',
    'export type HL7TypedVersion = keyof HL7VersionSegments;',
    '',
    "/** A segment of a version as an object: HL7SegmentObject<'2.5', 'PID'> */",
    'export type HL7SegmentObject<',
    '  V extends HL7TypedVersion,',
    '  S extends keyof HL7VersionSegments[V],',
    '> = HL7VersionSegments[V][S];',
    '',
    "/** A composite data type of a version as an object: HL7DataTypeObject<'2.5', 'XPN'> */",
    'export type HL7DataTypeObject<',
    '  V extends HL7TypedVersion,',
    '  T extends keyof HL7VersionTypes[V],',
    '> = HL7VersionTypes[V][T];',
    '',
    '/**',
    " * The component positions of each version's segment fields, for",
    " * HL7Field.comp(): HL7VersionFieldComponents['2.6']['PID'][5] is 1 to 14,",
    " * XPN's. A primitive's only component is 1; a field of a type that takes",
    ' * anything (VARIES), and what is not defined here, takes any number.',
    ' */',
    'export interface HL7VersionFieldComponents {',
    ...componentMaps,
    '  [version: `${number}.${number}`]: {',
    '    [segment: string]: { [field: number]: number };',
    '  };',
    '  [version: `${number}.${number}.${number}`]: {',
    '    [segment: string]: { [field: number]: number };',
    '  };',
    '}',
    '',
    ...[...uptos]
      .sort((a, b) => a - b)
      .map(
        n =>
          `type Upto${n} = ${Array.from({ length: n }, (_, i) => i + 1).join(' | ')};`,
      ),
    '',
    '/**',
    " * Each version's segment objects as HL7Segment.toObject() and assign() take",
    ' * them; a segment or version with no definitions here, any object.',
    ' */',
    'export interface HL7VersionSegmentObjects {',
    ...objectMaps,
    '  [version: `${number}.${number}`]: { [segment: string]: Record<string, any> };',
    '  [version: `${number}.${number}.${number}`]: {',
    '    [segment: string]: Record<string, any>;',
    '  };',
    '}',
    '',
    '/**',
    " * The field positions each version's segments have, for HL7Segment.field():",
    " * DG1Segment.DiagnosisCodingMethod (2) is not one of 2.6's DG1. A segment or",
    ' * version with no definitions here takes any number.',
    ' */',
    'export interface HL7VersionSegmentFields {',
    ...fieldMaps,
    '  [version: `${number}.${number}`]: { [segment: string]: number };',
    '  [version: `${number}.${number}.${number}`]: { [segment: string]: number };',
    '}',
    '',
    '/**',
    " * Each version's segment field types and data type component types, for",
    " * checking paths (see HL7CheckedPath): segments.DG1[3] is DG1-3's type,",
    " * types.CWE[1] the type of its first component; a primitive's only",
    ' * component is itself.',
    ' */',
    'export interface HL7VersionPathTypes {',
    ...pathMaps,
    '  [version: `${number}.${number}`]: { types: {}; segments: {} };',
    '  [version: `${number}.${number}.${number}`]: { types: {}; segments: {} };',
    '}',
    '',
    "/** The field positions segment S has in version V: HL7SegmentField<'2.6', 'DG1'> */",
    'export type HL7SegmentField<',
    '  V extends keyof HL7VersionSegmentFields,',
    '  S extends string,',
    '> = HL7VersionSegmentFields[V][S];',
    '',
  ];
  fs.writeFileSync(
    path.join(srcDir, 'versioned-objects.ts'),
    out.join('\n'),
    'utf-8',
  );
  const kinds = (suffix: string) =>
    [...shapes.values()].filter(n => new RegExp(`${suffix}\\d+$`).test(n))
      .length;
  console.log(
    `versioned-objects.ts: ${shapes.size} interfaces ` +
      `(segments ${kinds('[A-Z0-9]{3}Object')}, components ${kinds('Components')})`,
  );
}

/**
 * Version-specific message objects (src/versioned-messages.ts): each
 * message structure as HL7Message.toObject() gives it - segments by ID,
 * groups by name, arrays where they repeat. A group or message is one
 * interface per distinct shape, its segments read from the version's
 * segment objects (S['PID']), so the versions defining it the same share it.
 */
function generateVersionedMessages() {
  const versions = Object.keys(dictionaries);
  const shapes = new Map<string, string>();
  const counters = new Map<string, number>();
  const declarations: string[] = [];
  const declare = (base: string, body: string[]) => {
    const id = body.join('\n');
    let name = shapes.get(id);
    if (!name) {
      const n = (counters.get(base) ?? 0) + 1;
      counters.set(base, n);
      name = `${base}${n}`;
      shapes.set(id, name);
      declarations.push(
        `interface ${name}<S extends HL7SegmentMap> {`,
        ...body,
        '}',
        '',
      );
    }
    return name;
  };
  const byIdx = (defs: Record<string, any>) =>
    Object.entries<any>(defs).sort(
      ([, a], [, b]) => (a.idx || 0) - (b.idx || 0),
    );
  const maps: string[] = [];
  const aliases: string[] = [];
  for (const version of versions) {
    const d = dictionaries[version];
    const bodyOf = (defs: Record<string, any>): string[] => {
      const lines: string[] = [];
      for (const [key, def] of byIdx(defs)) {
        if (def.choice) {
          lines.push(...bodyOf(def.segments));
          continue;
        }
        const many = def.max !== 1;
        let type: string;
        if (def.segments) {
          type = `${declare(`${key}Group`, bodyOf(def.segments))}<S>`;
        } else {
          const seg = def.segment || key;
          /* Placeholders: their segments go by their own IDs */
          if (/^any(HL7|Z)Segment$/.test(seg)) continue;
          type = d.segments[seg]?.fields
            ? `S['${seg}']`
            : 'Record<string, any>';
        }
        lines.push(`  ${key}?: ${many ? `${type}[]` : type};`);
      }
      return lines;
    };
    const alias = `Segments_${version.replace(/\./g, '_')}`;
    aliases.push(`type ${alias} = HL7VersionSegments['${version}'];`);
    const lines: string[] = [];
    for (const [name, def] of Object.entries<any>(d.messages).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      if (!def?.segments) continue;
      const base = name.replace(/[^A-Za-z0-9_]/g, '_');
      lines.push(
        `    ${name}: ${declare(`${base}Message`, bodyOf(def.segments))}<${alias}>;`,
      );
    }
    maps.push(
      `  '${version}': {`,
      ...lines,
      '    [structure: string]: Record<string, any>;',
      '  };',
    );
  }
  const out = [
    '/* Generated by support/build-field-enums.mts - do not edit */',
    '/* eslint-disable */',
    '',
    "import type { HL7VersionSegments } from './versioned-objects.js';",
    '',
    'type HL7SegmentMap = Record<string, object>;',
    '',
    ...declarations,
    ...aliases,
    '',
    "/** Each version's messages as objects (HL7Message.toObject()), by structure and event; any other, any object */",
    'export interface HL7VersionMessages {',
    ...maps,
    '  [version: `${number}.${number}`]: { [structure: string]: Record<string, any> };',
    '  [version: `${number}.${number}.${number}`]: {',
    '    [structure: string]: Record<string, any>;',
    '  };',
    '}',
    '',
  ];
  fs.writeFileSync(
    path.join(srcDir, 'versioned-messages.ts'),
    out.join('\n'),
    'utf-8',
  );
  console.log(`versioned-messages.ts: ${shapes.size} interfaces`);
}

generateVersionedObjects();
generateVersionedMessages();
