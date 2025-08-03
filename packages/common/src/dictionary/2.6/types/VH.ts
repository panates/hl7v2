import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const VH: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 3,
      table: 267,
    },
    '2': {
      len: 3,
      table: 267,
    },
    '3': {
      len: 16,
    },
    '4': {
      len: 16,
    },
  },
};
