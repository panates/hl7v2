import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const RP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '3': {
      desc: 'Type of Data',
      len: 11,
      table: 834,
    },
    '4': {
      table: 291,
    },
  },
};
