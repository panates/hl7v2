import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const MA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Multiplexed Array',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sample Y From Channel 1',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Sample Y From Channel 2',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Sample Y From Channel 3',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Sample Y From Channel 4',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Sample Y From Channel 5',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Sample Y From Channel 6',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Sample Y From Channel 7',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Sample Y From Channel 8',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Sample Y From Channel 9',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      desc: 'Sample Y From Channel 10',
      opt: 'O',
      rep: 1,
    },
  },
};
