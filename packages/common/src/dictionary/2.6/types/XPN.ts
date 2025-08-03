import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XPN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'FN',
      len: 194,
    },
    '2': {
      len: 30,
    },
    '3': {
      desc: 'Second and Further Given Names or Initials Thereof',
      len: 30,
    },
    '4': {
      len: 20,
    },
    '5': {
      len: 20,
    },
    '6': {
      type: 'IS',
      len: 6,
      table: 360,
    },
    '7': {
      len: 1,
      table: 200,
    },
    '8': {
      len: 1,
      table: 465,
    },
    '9': {
      type: 'CWE',
      len: 705,
      table: 448,
    },
    '10': {
      len: 49,
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
      len: 24,
    },
    '13': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '14': {
      type: 'ST',
      desc: 'Professional Suffix',
      opt: 'O',
      rep: 1,
      len: 199,
    },
  },
};
