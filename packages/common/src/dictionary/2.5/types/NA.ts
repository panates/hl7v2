import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const NA: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      opt: 'R',
      len: 16,
    },
    '2': {
      len: 16,
    },
    '3': {
      len: 16,
    },
    '4': {
      len: 16,
    },
    '5': {
      type: 'NM',
      desc: 'Value5',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '6': {
      type: 'NM',
      desc: 'Value6',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '7': {
      type: 'NM',
      desc: 'Value7',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '8': {
      type: 'NM',
      desc: 'Value8',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '9': {
      type: 'NM',
      desc: 'Value9',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '10': {
      type: 'NM',
      desc: 'Value10',
      opt: 'O',
      rep: 1,
      len: 16,
    },
  },
};
