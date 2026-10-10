import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const RP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 15,
    },
    '2': {
      len: 227,
    },
    '3': {
      desc: 'Type of Data',
      len: 9,
      table: 191,
    },
    '4': {
      len: 19,
      table: 291,
    },
  },
};
