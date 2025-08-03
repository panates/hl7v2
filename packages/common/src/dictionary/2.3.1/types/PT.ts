import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PT: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ID',
    },
    '2': {
      type: 'ID',
    },
  },
};
