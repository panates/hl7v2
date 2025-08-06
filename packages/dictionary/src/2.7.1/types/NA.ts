import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const NA: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '5': {
      type: 'NM',
      desc: 'Value5',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Value6',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Value7',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Value8',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Value9',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      desc: 'Value10',
      opt: 'O',
      rep: 1,
    },
  },
};
