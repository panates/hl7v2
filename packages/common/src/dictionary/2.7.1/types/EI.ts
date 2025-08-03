import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

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
