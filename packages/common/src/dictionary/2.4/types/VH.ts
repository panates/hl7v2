import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const VH: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Visiting Hours',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Start Day Range',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'End Day Range',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TM',
      desc: 'Start Hour Range',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'TM',
      desc: 'End Hour Range',
      opt: 'O',
      rep: 1,
    },
  },
};
