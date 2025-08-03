import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const SN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 2,
    },
    '2': {
      len: 15,
    },
    '3': {
      desc: 'Separator/Suffix',
      len: 1,
    },
    '4': {
      len: 15,
    },
  },
};
