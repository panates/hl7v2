import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const AUI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Authorization Information',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Authorization Number',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '2': {
      desc: 'Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '3': {
      type: 'ST',
      desc: 'Source',
      opt: 'O',
      rep: 1,
      len: 199,
    },
  },
};
