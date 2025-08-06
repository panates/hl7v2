import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 999,
    },
    '2': {
      len: 1027,
    },
    '3': {
      desc: 'Type of Data',
      len: 11,
      table: 834,
    },
    '4': {
      len: 32,
      table: 291,
    },
  },
};
