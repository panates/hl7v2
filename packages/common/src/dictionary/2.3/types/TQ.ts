import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TQ: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CQ',
    },
    '6': {
      type: 'ST',
    },
    '9': {
      type: 'ST',
    },
    '10': {
      type: 'CM_OSD',
    },
  },
};
