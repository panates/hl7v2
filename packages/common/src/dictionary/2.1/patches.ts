import { toInteger, toNumber } from 'valgen';
import {
  decodeHL7Date,
  decodeHL7DateTime,
  decodeHL7Time,
  encodeHL7Date,
  encodeHL7DateTime,
  encodeHL7Time,
} from '../../utils/hl7-date.js';
import dict from './dictionary.js';

dict.overwriteTypes({
  DT: {
    decode: decodeHL7Date,
    encode: encodeHL7Date,
  },
  NM: {
    decode: toNumber,
  },
  SI: {
    decode: toInteger,
  },
  TS: {
    fields: {
      '1': {
        decode: decodeHL7DateTime,
        encode: encodeHL7DateTime,
      },
    },
  },
  TM: {
    decode: decodeHL7Time,
    encode: encodeHL7Time,
  },
});
