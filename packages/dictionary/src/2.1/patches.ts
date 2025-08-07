import { toInteger, toNumber } from 'valgen';
import { toHL7Date, toHL7DateTime, toHL7Time } from '../hl7-date.util.js';
import dict from './dictionary.js';

dict.overwriteTypes({
  DT: {
    decode: toHL7Date,
    encode: toHL7Date,
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
        decode: toHL7DateTime,
        encode: toHL7DateTime,
      },
    },
  },
  TM: {
    decode: toHL7Time,
    encode: toHL7Time,
  },
});
