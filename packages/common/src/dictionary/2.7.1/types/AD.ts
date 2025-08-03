import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const AD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '4': {
      desc: 'State or Province',
    },
    '5': {
      desc: 'Zip or Postal Code',
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
    },
  },
};
