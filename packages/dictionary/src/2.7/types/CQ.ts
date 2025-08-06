import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CQ: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
  },
};
