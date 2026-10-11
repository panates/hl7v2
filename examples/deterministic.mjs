/*
 * Loaded by run-all.mjs before an example: the clock stands still and
 * Math.random() is seeded, so the dates and control IDs an example makes
 * are the same on every run, and its output can be compared with the one
 * expected. The time zone is fixed by run-all (TZ).
 */
const NOW = Date.UTC(2025, 5, 1, 9, 0, 0, 123); // 2025-06-01 09:00:00.123 UTC
const RealDate = Date;

class FixedDate extends RealDate {
  constructor(...args) {
    if (args.length) super(...args);
    else super(NOW);
  }

  static now() {
    return NOW;
  }
}
globalThis.Date = FixedDate;

/* mulberry32 */
let seed = 20250601;
Math.random = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
