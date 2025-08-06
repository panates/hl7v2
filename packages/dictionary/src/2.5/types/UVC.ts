import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const UVC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'UB Value Code and Amount',
  fields: {
    '1': {
      type: 'CNE',
      desc: 'Value Code',
      opt: 'R',
      rep: 1,
      len: 20,
      table: 153,
    },
    '2': {
      type: 'MO',
      desc: 'Value Amount',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
