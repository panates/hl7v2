import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const DLN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'License Number',
      opt: 'R',
    },
    '2': {
      table: 333,
    },
  },
};
