import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CQ_QUANTITY: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Quantity',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
  },
};
