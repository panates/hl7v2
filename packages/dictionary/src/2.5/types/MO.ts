import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const MO: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 16,
    },
    '2': {
      len: 3,
    },
  },
};
