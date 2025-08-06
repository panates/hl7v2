import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const HD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      table: 300,
    },
    '2': {
      opt: 'C',
    },
    '3': {
      opt: 'C',
      len: 6,
      table: 301,
    },
  },
};
