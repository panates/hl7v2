import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Driver_s License Number',
  fields: {
    '1': {
      desc: 'License Number',
      opt: 'R',
      len: 20,
    },
    '2': {
      len: 20,
      table: 333,
    },
    '3': {
      len: 8,
    },
  },
};
