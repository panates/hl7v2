import prevDict from '../2.3.1/index.js';
import { HL7Version } from '../version.enum.js';
import * as segments from './segments/index.js';
import * as types from './types/index.js';

const dict = prevDict.extend({
  version: HL7Version.v2_4,
  segments,
  types,
});

export default dict;
