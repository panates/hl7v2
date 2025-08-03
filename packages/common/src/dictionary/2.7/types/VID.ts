import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const VID: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      opt: 'R',
    },
    '2': {
      table: 399,
    },
  },
};
