import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const AD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '5': {
      type: 'ID',
      desc: 'Zip Or Postal Code',
    },
    '6': {
      type: 'ID',
    },
    '7': {
      type: 'ID',
      desc: 'Type',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Other Geographic Designation',
      opt: 'O',
      rep: 1,
    },
  },
};
