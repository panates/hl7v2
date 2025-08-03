import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CE: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
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
      type: 'ST',
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
  },
};
