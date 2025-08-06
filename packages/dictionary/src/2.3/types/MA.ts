import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Multiplexed Array',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sample 1 From Channel 1',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Sample 1 From Channel 2',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Sample 1 From Channel 3',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Sample 2 From Channel 1',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Sample 2 From Channel 2',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Sample 2 From Channel 3',
      opt: 'O',
      rep: 1,
    },
  },
};
