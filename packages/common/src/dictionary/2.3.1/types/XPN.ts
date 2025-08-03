import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XPN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'FN',
      desc: 'Family+last Name',
    },
    '6': {
      type: 'IS',
    },
  },
};
