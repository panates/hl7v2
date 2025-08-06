import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const ED: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      table: 191,
    },
    '3': {
      table: 291,
    },
    '4': {
      table: 299,
    },
  },
};
