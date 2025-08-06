import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DDI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Daily Deductible Information',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Delay Days',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'MO',
      desc: 'Monetary Amount',
      opt: 'R',
      rep: 1,
      len: 16,
    },
    '3': {
      type: 'NM',
      desc: 'Number of Days',
      opt: 'O',
      rep: 1,
      len: 4,
    },
  },
};
