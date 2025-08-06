import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'WVI',
      len: 22,
    },
    '2': {
      type: 'WVS',
      len: 17,
    },
    '3': {
      type: 'CSU',
      desc: 'Channel Sensitivity/Units',
      len: 478,
    },
    '4': {
      type: 'CCP',
      len: 20,
    },
    '5': {
      len: 6,
    },
    '6': {
      type: 'NR',
      desc: 'Minimum/Maximum Data Values',
      len: 33,
    },
  },
};
