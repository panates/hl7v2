import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PTA: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
    },
    '2': {
      type: 'IS',
    },
  },
};
