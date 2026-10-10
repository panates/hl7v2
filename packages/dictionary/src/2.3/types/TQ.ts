import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

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
