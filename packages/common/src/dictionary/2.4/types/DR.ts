import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DR: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'TS',
      desc: 'Range Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Range End Date/time',
      opt: 'O',
      rep: 1,
    },
  },
};
