import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pascalCase } from 'putil-varhelpers';
import { default as dictionary } from 'hl7-dictionary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dataPath = path.resolve(__dirname, '../packages/dictionary/src');

function buildDictionary() {
  const newDict: any = {};
  // let indexSrc = '';
  const processNode = (node: any, target: any) => {
    if (node.desc) target.desc = node.desc;
    const children = node.segments?.segments || node.children;
    if (children) {
      target.segments = {};
      let i = 0;
      for (const segment of children) {
        const t: any = (target.segments[segment.name] = {
          idx: i++,
        });
        if (segment.min) t.min = segment.min;
        if (segment.max) t.max = segment.max;
        processNode(segment, t);
      }
    }
  };
  for (const [ver, def] of Object.entries<any>(dictionary.definitions)) {
    if (!def.messages) continue;
    newDict[ver] = {};
    for (const [key, x] of Object.entries<any>(def.messages)) {
      const msgDef = (newDict[ver][key] = {});
      processNode(x, msgDef);
      // console.log(msgDef);
    }
  }
  return newDict;
}

function writeFiles(dict: any) {
  for (const [ver, d] of Object.entries(dict)) {
    let indexSrc = '';
    const dir = path.join(__dataPath, ver, 'messages');
    fs.mkdirSync(dir, { recursive: true });
    for (const [k, v] of Object.entries(d)) {
      const out =
        `import { HL7MessageDefinition } from '../../types.js';

export const ${k}: HL7MessageDefinition = ` +
        JSON.stringify(v, null, 2) +
        `;`;
      const filename = path.join(__dataPath, ver, 'messages', k + '.ts');
      fs.writeFileSync(filename, out, 'utf-8');
      indexSrc += `export * from './${k}.js';\n`;
      // console.log(filename, '\n', out);
    }
    // console.log(path.join(dir, 'index.ts'));
    fs.writeFileSync(path.join(dir, 'index.ts'), indexSrc, 'utf-8');
  }
}

// fs.mkdirSync(dataPath, { recursive: true });
const newDict = buildDictionary();
writeFiles(newDict);
