import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CX: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite ID with Check Digit',
  fields: {
    '1': {
      desc: 'ID Number',
      opt: 'R',
      len: 15,
    },
    '2': {
      len: 4,
    },
    '3': {
      desc: 'Check Digit Scheme',
      len: 3,
      table: 61,
    },
    '4': {
      len: 227,
      table: 363,
    },
    '5': {
      len: 5,
    },
    '6': {
      len: 227,
    },
    '7': {
      len: 8,
    },
    '8': {
      len: 8,
    },
    '9': {
      type: 'CWE',
      desc: 'Assigning Jurisdiction',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '10': {
      type: 'CWE',
      desc: 'Assigning Agency or Department',
      opt: 'O',
      rep: 1,
      len: 705,
    },
  },
};
