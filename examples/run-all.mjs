/*
 * Runs every example, as CI does: each must exit cleanly and print what
 * its expected.txt holds. The MLLP client runs against the MLLP server,
 * started on a free port and stopped after.
 *
 * The examples run with a standing clock, a seeded Math.random() and a
 * fixed time zone (deterministic.mjs), so the dates and control IDs they
 * make repeat; what still differs - ports, addresses, temporary paths - is
 * replaced before comparing.
 *
 *   node examples/run-all.mjs            run and compare
 *   node examples/run-all.mjs --update   write each expected.txt anew
 */
import { spawn } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import net from 'node:net';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const NETWORK = ['mllp-server', 'mllp-client'];
const update = process.argv.includes('--update');

function start(name, env = {}) {
  const child = spawn(
    process.execPath,
    [
      '--no-experimental-strip-types',
      /* Node 26 deprecates module.register(), which the TypeScript loader still calls */
      '--disable-warning=DEP0205',
      '--import',
      '../deterministic.mjs',
      '--import',
      '../register.mjs',
      'src/index.ts',
    ],
    {
      cwd: root + name,
      env: { ...process.env, TZ: 'Europe/Istanbul', ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );
  /* Apart: how the two interleave is not the same on every run */
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', d => (stdout += d));
  child.stderr.on('data', d => (stderr += d));
  child.output = () => stdout + (stderr ? `--- stderr\n${stderr}` : '');
  child.done = new Promise(resolve => child.on('exit', code => resolve(code)));
  return child;
}

async function run(name, env) {
  const child = start(name, env);
  const timer = setTimeout(() => child.kill(), 30000);
  const code = await child.done;
  clearTimeout(timer);
  return { code, output: child.output() };
}

const freePort = () =>
  new Promise(resolve => {
    const srv = net.createServer().listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });

/* What differs from run to run, made the same */
const normalize = output =>
  output
    .replace(/Listening on \d+/g, 'Listening on <port>')
    .replace(/Connected: \S+/g, 'Connected: <address>')
    .replace(/\S*hl7-[A-Za-z0-9]+([\\/])/g, '<tmp>$1');

let failed = 0;
const report = (name, code, raw) => {
  const output = normalize(raw);
  const file = `${root}${name}/expected.txt`;
  if (update && code === 0) writeFileSync(file, output);
  const expected = existsSync(file) ? readFileSync(file, 'utf8') : undefined;
  const same = output === expected;
  console.log(
    `${code === 0 && same ? 'ok  ' : 'FAIL'} ${name}` +
      (code !== 0 ? ` (exit ${code})` : same ? '' : ' (output differs)'),
  );
  if (code !== 0 || !same) {
    failed++;
    if (expected === undefined || code !== 0) {
      console.log(output.replace(/^/gm, '     '));
    } else {
      /* The first line that differs */
      const a = expected.split('\n');
      const b = output.split('\n');
      const i = a.findIndex((line, k) => line !== b[k]);
      const at = i < 0 ? a.length : i;
      console.log(`     line ${at + 1}`);
      console.log(`     expected: ${a[at] ?? '(end)'}`);
      console.log(`     actual:   ${b[at] ?? '(end)'}`);
    }
  }
};

const names = readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(`${root}${d.name}/src/index.ts`))
  .map(d => d.name)
  .sort();

for (const name of names.filter(n => !NETWORK.includes(n))) {
  const { code, output } = await run(name);
  report(name, code, output);
}

/* The client against the server */
const port = String(await freePort());
const server = start('mllp-server', { HL7_PORT: port });
const listening = await new Promise(resolve => {
  const timer = setTimeout(() => resolve(false), 15000);
  server.stdout.on('data', () => {
    if (server.output().includes('Listening')) {
      clearTimeout(timer);
      resolve(true);
    }
  });
  server.done.then(() => resolve(false));
});
if (!listening) {
  report('mllp-server', 1, server.output());
  server.kill();
} else {
  const { code, output } = await run('mllp-client', { HL7_PORT: port });
  report('mllp-client', code, output);
  server.kill('SIGINT');
  const serverCode = await server.done;
  report('mllp-server', serverCode ?? 0, server.output());
}

process.exitCode = failed ? 1 : 0;
