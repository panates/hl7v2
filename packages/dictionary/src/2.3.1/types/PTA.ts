import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PTA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Policy Type',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Policy Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Amount Class',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
