import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MOP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Money or Percentage',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Money or Percentage Indicator',
      opt: 'R',
      rep: 1,
      table: 148,
    },
    '2': {
      type: 'NM',
      desc: 'Money or Percentage Quantity',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
  },
};
