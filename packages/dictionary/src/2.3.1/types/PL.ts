import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const PL: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
    },
    '8': {
      type: 'IS',
    },
    '9': {
      desc: 'Location Description',
    },
  },
};
