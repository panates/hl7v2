/*
 * Runs an example's TypeScript as it is, with the repository's packages:
 * "hl7v2", "hl7v2-net" and "hl7v2-dictionary" resolve to their sources
 * (see tsconfig.json), so an example needs no build and reads as code
 * using the published packages would.
 */
import { fileURLToPath } from 'node:url';

process.env.TS_NODE_PROJECT = fileURLToPath(
  new URL('./tsconfig.json', import.meta.url),
);
await import('@swc-node/register/esm-register');
