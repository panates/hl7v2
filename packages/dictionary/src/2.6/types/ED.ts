import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const ED: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 1027,
    },
    '2': {
      desc: 'Type of Data',
      opt: 'R',
      len: 11,
      table: 834,
    },
    '3': {
      len: 32,
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
      len: 65536,
    },
  },
};
