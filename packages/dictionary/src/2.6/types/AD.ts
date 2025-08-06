import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const AD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 120,
    },
    '2': {
      len: 120,
    },
    '3': {
      len: 50,
    },
    '4': {
      desc: 'State or Province',
      len: 50,
    },
    '5': {
      desc: 'Zip or Postal Code',
      len: 12,
    },
    '6': {
      type: 'ID',
      len: 3,
      table: 399,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 190,
    },
    '8': {
      type: 'ST',
      desc: 'Other Geographic Designation',
      opt: 'O',
      rep: 1,
      len: 50,
    },
  },
};
