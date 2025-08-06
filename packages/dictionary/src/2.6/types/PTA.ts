import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PTA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Policy Type and Amount',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Policy Type',
      opt: 'R',
      rep: 1,
      len: 5,
      table: 147,
    },
    '2': {
      type: 'IS',
      desc: 'Amount Class',
      opt: 'O',
      rep: 1,
      len: 9,
      table: 193,
    },
    '3': {
      type: 'NM',
      desc: 'Money or Percentage Quantity',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '4': {
      type: 'MOP',
      desc: 'Money or Percentage',
      opt: 'R',
      rep: 1,
      len: 23,
    },
  },
};
