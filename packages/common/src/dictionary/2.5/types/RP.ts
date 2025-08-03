import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const RP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 15,
    },
    '2': {
      len: 227,
    },
    '3': {
      desc: 'Type of Data',
      len: 9,
      table: 191,
    },
    '4': {
      len: 19,
      table: 291,
    },
  },
};
