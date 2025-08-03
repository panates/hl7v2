import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Time Stamp',
  fields: {
    '1': {
      rep: 1,
    },
  },
};
