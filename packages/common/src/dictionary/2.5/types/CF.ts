import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CF: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded Element with Formatted Values',
  fields: {
    '1': {
      type: 'ST',
      len: 20,
    },
    '2': {
      len: 65536,
    },
    '3': {
      type: 'ID',
      desc: 'Name of Coding System',
      len: 20,
      table: 396,
    },
    '4': {
      type: 'ST',
      len: 20,
    },
    '5': {
      len: 65536,
    },
    '6': {
      type: 'ID',
      desc: 'Name of Alternate Coding System',
      len: 20,
      table: 396,
    },
  },
};
