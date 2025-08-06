import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_RMC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
      table: 145,
    },
    '2': {
      type: 'IS',
    },
  },
};
