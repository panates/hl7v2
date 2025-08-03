import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const FC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Financial Class Code',
      opt: 'R',
      len: 20,
      table: 64,
    },
    '2': {
      len: 26,
    },
  },
};
