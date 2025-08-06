import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite Price',
  fields: {
    '1': {
      opt: 'R',
      len: 20,
    },
    '2': {
      len: 2,
      table: 205,
    },
    '3': {
      len: 16,
    },
    '4': {
      len: 16,
    },
    '5': {
      len: 483,
    },
    '6': {
      len: 1,
      table: 298,
    },
  },
};
