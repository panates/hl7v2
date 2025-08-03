import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const MO: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Money',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Denomination',
      opt: 'O',
      rep: 1,
    },
  },
};
