import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RMC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Room Coverage',
  fields: {
    '1': {
      desc: 'Room Type',
      opt: 'R',
      rep: 1,
      table: 145,
    },
    '2': {
      desc: 'Amount Type',
      opt: 'O',
      rep: 1,
      table: 146,
    },
    '3': {
      desc: 'Coverage Amount',
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
