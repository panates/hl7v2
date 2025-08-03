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
    '8': {
      type: 'TX',
    },
    '9': {
      type: 'ID',
      desc: 'Conjunction Component',
    },
  },
};
