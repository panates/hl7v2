import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite Price',
  fields: {
    '2': {
      table: 205,
    },
    '6': {
      table: 298,
    },
  },
};
