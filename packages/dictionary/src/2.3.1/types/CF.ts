import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CF: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
    },
    '4': {
      type: 'ST',
    },
  },
};
