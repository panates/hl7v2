import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const FC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Financial Class',
  fields: {
    '1': {
      type: 'CWE',
      rep: 1,
    },
    '2': {
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
  },
};
