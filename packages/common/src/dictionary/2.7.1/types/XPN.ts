import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XPN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'FN',
    },
    '3': {
      desc: 'Second and Further Given Names or Initials Thereof',
    },
    '7': {
      table: 200,
    },
    '8': {
      len: 1,
      table: 465,
    },
    '9': {
      type: 'CWE',
      table: 448,
    },
    '11': {
      len: 1,
      table: 444,
    },
    '12': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'Professional Suffix',
      opt: 'O',
      rep: 1,
    },
  },
};
