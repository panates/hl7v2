import { HL7Version } from '../../interfaces/index.js';
import prevDict from '../2.3/index.js';
import * as segments from './segments/index.js';
import * as types from './types/index.js';

const dict = prevDict.extend({
  version: HL7Version.v2_3_1,
  segments,
  types,
});

export default dict;
