import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PCF: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
    },
    '2': {
      desc: 'Pre-certification Required',
    },
    '3': {
      desc: 'Pre-certification Windwow',
    },
  },
};
