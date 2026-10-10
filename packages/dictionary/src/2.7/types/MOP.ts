import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const MOP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '3': {
      desc: 'Monetary  Denomination',
      table: 913,
    },
  },
};
