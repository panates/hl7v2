import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const RFR: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
    },
  },
};
