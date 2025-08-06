import prevDict from '../2.7.1/index.js';
import { HL7Version } from '../version.enum.js';

const dict = prevDict.extend({
  version: HL7Version.v2_8,
});

export default dict;
