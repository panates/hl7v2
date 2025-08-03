import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const HD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      table: 300,
    },
    '3': {
      table: 301,
    },
  },
};
