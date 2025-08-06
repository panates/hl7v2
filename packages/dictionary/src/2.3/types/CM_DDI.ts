import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_DDI: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'NM',
    },
  },
};
