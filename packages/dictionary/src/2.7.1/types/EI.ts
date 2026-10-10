import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const EI: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      table: 363,
    },
    '3': {
      opt: 'C',
    },
    '4': {
      opt: 'C',
      len: 6,
      table: 301,
    },
  },
};
