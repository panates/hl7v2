import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const ED: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      desc: 'Type of Data',
      opt: 'R',
      len: 11,
      table: 834,
    },
    '3': {
      table: 291,
    },
    '4': {
      opt: 'R',
      len: 6,
      table: 299,
    },
    '5': {
      type: 'TX',
      opt: 'R',
    },
  },
};
