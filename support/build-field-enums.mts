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
    '',
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
    for (const [pos] of [...fields].sort((a, b) => a[0] - b[0])) {
      const key = names.get(pos) ?? String(pos);
      lines.push(
        `  ${/^\d/.test(key) ? `'${key}'` : key}?: number | string | null;`,
      );
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
  for (const version of versions) {
    const d = dictionaries[version];
    const composite = (t: string) => !!d.types[t]?.fields;
    const componentsOf = (t: string) => {
      const names = memberNames('type-fields', `${t.toLowerCase()}-type.enum`);
      const body = Object.keys(d.types[t].fields).map(
        pos =>
          `  ${key(names.get(Number(pos)) ?? pos)}?: number | string | null;`,
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
    for (const [s, def] of Object.entries<any>(d.segments)) {
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

generateVersionedObjects();
