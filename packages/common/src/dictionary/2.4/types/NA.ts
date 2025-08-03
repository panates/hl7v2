import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const NA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Numeric Array',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Value1',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Value2',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Value3',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Value4',
      opt: 'O',
      rep: 1,
    },
  },
};
