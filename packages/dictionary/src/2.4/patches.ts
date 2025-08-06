import { decodeHL7DateTime, encodeHL7DateTime } from '../hl7-date.util.js';
import dict from './dictionary.js';

dict.overwriteTypes({
  DTM: {
    decode: decodeHL7DateTime,
    encode: encodeHL7DateTime,
  },
});
