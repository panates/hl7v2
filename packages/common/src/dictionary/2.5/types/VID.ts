import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const VID: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Version Identifier',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Version ID',
      opt: 'O',
      rep: 1,
      len: 5,
      table: 104,
    },
    '2': {
      type: 'CE',
      desc: 'Internationalization Code',
      opt: 'O',
      rep: 1,
      len: 483,
      table: 399,
    },
    '3': {
      type: 'CE',
      desc: 'International Version ID',
      opt: 'O',
      rep: 1,
      len: 483,
    },
  },
};
