import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CX: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite ID with Check Digit',
  fields: {
    '1': {
      desc: 'ID Number',
      opt: 'R',
    },
    '3': {
      len: 3,
      table: 61,
    },
    '4': {
      table: 363,
    },
    '5': {
      len: 5,
    },
    '9': {
      type: 'CWE',
      desc: 'Assigning Jurisdiction',
      rep: 1,
    },
    '10': {
      type: 'CWE',
      desc: 'Assigning Agency or Department',
      rep: 1,
    },
  },
};
