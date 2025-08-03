import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Processing Type',
  fields: {
    '1': {
      desc: 'Processing ID',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Processing Mode',
      opt: 'O',
      rep: 1,
    },
  },
};
