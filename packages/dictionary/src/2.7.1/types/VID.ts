import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const VID: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Version Identifier',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Version ID',
      rep: 1,
      len: 5,
      table: 104,
    },
    '2': {
      type: 'CWE',
      desc: 'Internationalization Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      desc: 'International Version ID',
      opt: 'O',
      rep: 1,
    },
  },
};
