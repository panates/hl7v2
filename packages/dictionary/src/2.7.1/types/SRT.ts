import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SRT: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      opt: 'R',
      len: 12,
    },
    '2': {
      len: 2,
      table: 397,
    },
  },
};
