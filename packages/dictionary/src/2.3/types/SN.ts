import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Structured Numeric',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Comparator',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Num1',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Separator Or Suffix',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Num2',
      opt: 'O',
      rep: 1,
    },
  },
};
