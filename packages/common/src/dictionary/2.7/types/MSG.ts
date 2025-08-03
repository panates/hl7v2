import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const MSG: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      opt: 'R',
    },
    '3': {
      opt: 'R',
    },
  },
};
