import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const SAD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Street or Mailing Address',
      len: 120,
    },
    '2': {
      len: 50,
    },
    '3': {
      len: 12,
    },
  },
};
