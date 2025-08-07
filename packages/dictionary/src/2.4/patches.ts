import { toHL7DateTime } from '../hl7-date.util.js';
import dict from './dictionary.js';

dict.overwriteTypes({
  DTM: {
    decode: toHL7DateTime,
    encode: toHL7DateTime,
  },
});
