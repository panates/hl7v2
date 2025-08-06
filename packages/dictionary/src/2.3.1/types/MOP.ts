import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MOP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Money Or Percentage',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Money Or Percentage Indicator',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Money Or Percentage Quantity',
      opt: 'O',
      rep: 1,
    },
  },
};
