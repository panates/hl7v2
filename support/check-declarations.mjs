/**
 * Type-checks the published declarations with the oldest TypeScript the
 * documentation supports (docs/typescript.md): the built packages are
 * installed into a new project outside the repository, the way a user installs
 * them, and a program using all three is compiled there.
 *
 *   pnpm build
 *   node support/check-declarations.mjs [typescript-version]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const TYPESCRIPT = process.argv[2] || '~5.7.0';
const root = path.resolve(import.meta.dirname, '..');
const builds = ['dictionary', 'hl7v2', 'net'].map(p =>
  path.join(root, 'packages', p, 'build'),
);
for (const dir of builds) {
  if (!fs.existsSync(path.join(dir, 'package.json')))
    throw new Error(`${dir} is missing: run "pnpm build" first`);
}

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hl7v2-declarations-'));
try {
  const write = (file, content) =>
    fs.writeFileSync(path.join(dir, file), content);
  write(
    'package.json',
    JSON.stringify({ name: 'consumer', private: true, type: 'module' }),
  );
  write(
    'tsconfig.json',
    JSON.stringify({
      compilerOptions: {
        target: 'es2022',
        module: 'nodenext',
        moduleResolution: 'nodenext',
        strict: true,
        noEmit: true,
        skipLibCheck: false,
        types: ['node'],
      },
      include: ['index.ts'],
    }),
  );
  write(
    'index.ts',
    `import { HL7Message } from 'hl7v2';
import { Hl7Client, HL7Server } from 'hl7v2-net';
import { HL7Version } from 'hl7v2-dictionary';

const msg = new HL7Message(HL7Version.v2_5);
msg.set('MSH-9', 'ADT').set('MSH-9-2', 'A08').set('PID-5-1', 'Doe');
const family: unknown = msg.get('PID-5-1');
const birth = msg.getSegmentObject('PID')?.DateTimeOfBirth;
const issues = msg.validate();

const server = HL7Server.createServer();
server.use('ADT^A08', req => void req.message);
server.use(async (req, res) => void [req.message, res]);
server.use((req, res, next) => void next());
server.onError((error, req) => void [error.message, req.message]);
const client = Hl7Client.createClient({ host: 'localhost', port: 2575 });
export const used = [family, birth, issues, server, client];
`,
  );

  const npm = (...args) =>
    execFileSync('npm', args, {
      cwd: dir,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
  npm(
    'install',
    '--no-audit',
    '--no-fund',
    '--install-links',
    `typescript@${TYPESCRIPT}`,
    '@types/node@22',
    ...builds,
  );
  const version = execFileSync('npx', ['tsc', '--version'], { cwd: dir })
    .toString()
    .trim();
  console.log(`Type-checking the declarations with ${version}`);
  npm('exec', '--', 'tsc', '-p', 'tsconfig.json');
  console.log('The declarations type-check');
} finally {
  fs.rmSync(dir, { recursive: true, force: true });
}
