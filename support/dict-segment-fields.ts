// import fs from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { pascalCase } from 'putil-varhelpers';
// import { dictionaries } from '../src/index.js';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const dataPath = path.resolve(__dirname, '../src/dictionary/segment-fields');
//
// console.log(dataPath);
//
// const dict = dictionaries['2.7.1'];
//
// function processSegments() {
//   let indexSrc = '';
//   Object.keys(dict.segments).forEach(name => {
//     const segment = dict.segments[name];
//     if (!(typeof segment === 'object' && segment.fields)) return;
//     let out = `export enum ${name}Segment {\n`;
//     for (const [pos, obj] of Object.entries<any>(segment.fields)) {
//       const k = pascalCase(obj.desc).trim();
//       out += `  ${k} = ${pos},\n`;
//     }
//     out += '}\n';
//     const filename = `${name.toLowerCase()}-segment.enum`;
//     indexSrc += `export * from './${filename}.js';\n`;
//     fs.writeFileSync(path.resolve(dataPath, `${filename}.ts`), out);
//     // console.log(out);
//   });
//   fs.writeFileSync(path.resolve(dataPath, `index.ts`), indexSrc);
// }
//
// fs.mkdirSync(dataPath, { recursive: true });
// processSegments();
