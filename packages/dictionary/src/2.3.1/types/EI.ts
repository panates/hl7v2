import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const EI: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      table: 300,
    },
    '4': {
      table: 301,
    },
  },
};
