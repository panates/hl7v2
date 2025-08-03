import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'WVI',
    },
    '2': {
      type: 'WVS',
    },
    '3': {
      type: 'CSU',
    },
    '4': {
      type: 'CCP',
    },
    '6': {
      type: 'NR',
    },
  },
};
