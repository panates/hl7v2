import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DDI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Daily Deductible Information',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Delay Days',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'MO',
      desc: 'Monetary Amount',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Number of Days',
      opt: 'O',
      rep: 1,
    },
  },
};
