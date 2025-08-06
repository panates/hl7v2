import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PT: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      len: 1,
      table: 103,
    },
    '2': {
      type: 'ID',
      len: 1,
      table: 207,
    },
  },
};
