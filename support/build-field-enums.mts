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
