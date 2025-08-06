import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 2,
    },
    '3': {
      desc: 'Separator/Suffix',
      len: 1,
    },
  },
};
