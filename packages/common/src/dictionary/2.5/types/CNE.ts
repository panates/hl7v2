import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded with No Exceptions',
  fields: {
    '1': {
      opt: 'R',
      len: 20,
    },
    '2': {
      len: 199,
    },
    '3': {
      type: 'ID',
      desc: 'Name of Coding System',
      len: 20,
      table: 396,
    },
    '4': {
      len: 20,
    },
    '5': {
      len: 199,
    },
    '6': {
      type: 'ID',
      desc: 'Name of Alternate Coding System',
      len: 20,
      table: 396,
    },
    '7': {
      opt: 'C',
      len: 10,
    },
    '8': {
      len: 10,
    },
    '9': {
      len: 199,
    },
  },
};
