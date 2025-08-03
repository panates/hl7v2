import { decodeHL7DateTime, encodeHL7DateTime } from '../../utils/hl7-date.js';
import dict from './dictionary.js';

dict.overwriteTypes({
  DTM: {
    decode: decodeHL7DateTime,
    encode: encodeHL7DateTime,
  },
});
