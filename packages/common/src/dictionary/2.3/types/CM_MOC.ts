import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_MOC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'MO',
    },
    '2': {
      type: 'CE',
    },
  },
};
