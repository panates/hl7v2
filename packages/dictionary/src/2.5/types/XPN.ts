import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

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
      len: 483,
      table: 448,
    },
    '10': {
      len: 53,
    },
    '11': {
      len: 1,
      table: 444,
    },
    '12': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '13': {
      type: 'TS',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 26,
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
