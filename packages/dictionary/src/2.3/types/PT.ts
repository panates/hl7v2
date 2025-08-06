import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Processing Type',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Processing ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Processing Mode',
      opt: 'O',
      rep: 1,
    },
  },
};
