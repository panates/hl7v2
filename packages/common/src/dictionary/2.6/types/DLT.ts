import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Delta',
  fields: {
    '1': {
      type: 'NR',
      desc: 'Normal Range',
      opt: 'O',
      rep: 1,
      len: 33,
    },
    '2': {
      type: 'NM',
      desc: 'Numeric Threshold',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'ID',
      desc: 'Change Computation',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 523,
    },
    '4': {
      type: 'NM',
      desc: 'Days Retained',
      opt: 'O',
      rep: 1,
      len: 4,
    },
  },
};
