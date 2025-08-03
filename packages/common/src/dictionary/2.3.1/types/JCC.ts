import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const JCC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Job Code/class',
  fields: {
    '1': {
      table: 327,
    },
    '2': {
      table: 328,
    },
  },
};
