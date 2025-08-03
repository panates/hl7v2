import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

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
