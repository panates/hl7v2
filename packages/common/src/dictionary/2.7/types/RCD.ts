import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const RCD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Row Column Definition',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Maximum Column Width',
      opt: 'O',
      rep: 1,
      len: 5,
    },
  },
};
