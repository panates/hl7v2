import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_DDI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Daily Deductible',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Delay Days',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Amount',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Number Of Days',
      opt: 'O',
      rep: 1,
    },
  },
};
