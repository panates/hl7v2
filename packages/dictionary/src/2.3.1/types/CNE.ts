import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CNE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded With No Exceptions',
  fields: {
    '3': {
      type: 'ST',
      desc: 'Name Of Coding System',
    },
    '6': {
      type: 'ST',
      desc: 'Name Of Alternate Coding System',
    },
  },
};
