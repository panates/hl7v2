import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PTA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Policy Type and Amount',
  fields: {
    '1': {
      desc: 'Policy Type',
      opt: 'R',
      rep: 1,
      table: 147,
    },
    '2': {
      desc: 'Amount Class',
      opt: 'O',
      rep: 1,
      table: 193,
    },
    '3': {
      desc: 'Money or Percentage Quantity',
      rep: 1,
    },
    '4': {
      type: 'MOP',
      desc: 'Money or Percentage',
      opt: 'R',
      rep: 1,
    },
  },
};
