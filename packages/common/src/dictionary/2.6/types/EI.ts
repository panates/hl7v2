import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const EI: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 199,
    },
    '2': {
      len: 20,
      table: 363,
    },
    '3': {
      opt: 'C',
      len: 199,
    },
    '4': {
      opt: 'C',
      len: 6,
      table: 301,
    },
  },
};
