const baseConfig = require('../../.mocharc.cjs');
/** @type {import('mocha').MochaOptions} */
module.exports = {
  ...baseConfig,
  spec: 'test/**/*.*spec.ts',
};
