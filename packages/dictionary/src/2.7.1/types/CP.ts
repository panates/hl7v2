import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite Price',
  fields: {
    '1': {
      opt: 'R',
    },
    '2': {
      len: 2,
      table: 205,
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      len: 1,
      table: 298,
    },
  },
};
