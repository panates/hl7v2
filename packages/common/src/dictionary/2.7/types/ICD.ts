import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const ICD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
  },
};
