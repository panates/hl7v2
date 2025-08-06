/* eslint-disable import-x/no-extraneous-dependencies */
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const require = createRequire(import.meta.url);

const pkgJson = require('./package.json');

const dirname = path.dirname(fileURLToPath(import.meta.url));
const targetPath = path.resolve(dirname, 'build');
const entryPoint = path.resolve(dirname, 'src/index.js');
const external = [
  ...Object.keys(pkgJson.dependencies || {}),
  ...Object.keys(pkgJson.peerDependencies || {}),
  ...Object.keys(pkgJson.devDependencies || {}),
];

/**
 * @type BuildOptions
 */
const defaultConfig = {
  entryPoints: [entryPoint],
  bundle: true,
  platform: 'node',
  target: ['es2020', 'chrome80'],
  logLevel: 'info',
  format: 'esm',
  minify: true,
  keepNames: true,
  alias: {},
  external,
};

await esbuild.build({
  ...defaultConfig,
  platform: 'node',
  format: 'esm',
  outfile: path.join(targetPath, './esm/index.mjs'),
  tsconfig: './tsconfig-build-esm.json',
});

await esbuild.build({
  ...defaultConfig,
  platform: 'node',
  format: 'cjs',
  outfile: path.join(targetPath, './cjs/index.cjs'),
  tsconfig: './tsconfig-build-cjs.json',
});
