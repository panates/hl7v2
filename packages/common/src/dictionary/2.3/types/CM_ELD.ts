import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_ELD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Segment ID',
    },
    '3': {
      desc: 'Field Position',
    },
  },
};
