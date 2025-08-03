import { HL7Dictionary } from '../../hl7-dictionary.js';
import { HL7Version } from '../../interfaces/index.js';
import * as segments from './segments/index.js';
import * as types from './types/index.js';

const dict = new HL7Dictionary({
  version: HL7Version.v2_1,
  segments,
  types,
});

export default dict;
