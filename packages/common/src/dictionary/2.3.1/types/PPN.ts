import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PPN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'FN',
      desc: 'Family+last Name',
    },
    '7': {
      type: 'IS',
    },
    '8': {
      type: 'IS',
    },
    '16': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
    },
  },
};
