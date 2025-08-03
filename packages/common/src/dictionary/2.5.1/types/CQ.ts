import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CQ: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
  },
};
