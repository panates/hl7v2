import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Delta Check',
  fields: {
    '1': {
      type: 'NR',
      desc: 'Range',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Numeric Threshold',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Change Computation',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Length Of Time-days',
      opt: 'O',
      rep: 1,
    },
  },
};
