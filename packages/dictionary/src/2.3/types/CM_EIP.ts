import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_EIP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'EI',
    },
    '2': {
      type: 'EI',
    },
  },
};
