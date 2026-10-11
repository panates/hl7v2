/*
 * Runs every example, as CI does: each must exit cleanly. The MLLP client
 * runs against the MLLP server, started on a free port and stopped after.
 *
 *   node examples/run-all.mjs
 */
import { spawn } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import net from 'node:net';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const NETWORK = ['mllp-server', 'mllp-client'];

function start(name, env = {}) {
  const child = spawn(
    process.execPath,
    [
      '--no-experimental-strip-types',
      '--import',
      '../register.mjs',
      'src/index.ts',
    ],
    {
      cwd: root + name,
      env: { ...process.env, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );
  let output = '';
  child.stdout.on('data', d => (output += d));
  child.stderr.on('data', d => (output += d));
  child.output = () => output;
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

let failed = 0;
const report = (name, code, output) => {
  console.log(`${code === 0 ? 'ok  ' : 'FAIL'} ${name}`);
  if (code !== 0) {
    failed++;
    console.log(output.replace(/^/gm, '     '));
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
