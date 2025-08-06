import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const AUI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Authorization Information',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Authorization Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      desc: 'Date',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Source',
      opt: 'O',
      rep: 1,
    },
  },
};
