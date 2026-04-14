process.env.TS_NODE_PROJECT = __dirname + '/tsconfig-test.json';

/** @type {import('mocha').MochaOptions} */
module.exports = {
  require: ['@swc-node/register/esm-register'],
  extension: ['ts'],
  spec: './packages/*/test/**/*.*spec.ts',
};
