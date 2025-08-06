import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RI: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 6,
      table: 335,
    },
    '2': {
      len: 199,
    },
  },
};
