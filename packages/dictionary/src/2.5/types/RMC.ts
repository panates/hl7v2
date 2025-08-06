import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RMC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Room Coverage',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Room Type',
      opt: 'R',
      rep: 1,
      len: 20,
      table: 145,
    },
    '2': {
      type: 'IS',
      desc: 'Amount Type',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 146,
    },
    '3': {
      type: 'NM',
      desc: 'Coverage Amount',
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
