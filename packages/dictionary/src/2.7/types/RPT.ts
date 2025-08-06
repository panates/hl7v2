import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RPT: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '6': {
      type: 'CWE',
    },
    '8': {
      len: 3,
    },
    '10': {
      type: 'CWE',
    },
  },
};
