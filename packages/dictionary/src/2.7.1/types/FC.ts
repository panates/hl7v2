import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const FC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Financial Class Code',
      opt: 'R',
      table: 64,
    },
    '2': {
      type: 'DTM',
    },
  },
};
