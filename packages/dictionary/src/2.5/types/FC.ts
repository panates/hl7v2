import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const FC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Financial Class Code',
      opt: 'R',
      len: 20,
      table: 64,
    },
    '2': {
      len: 26,
    },
  },
};
