import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PTA: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'ST',
      opt: 'B',
    },
  },
};
