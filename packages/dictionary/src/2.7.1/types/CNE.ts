import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CNE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded with No Exceptions',
  fields: {
    '1': {
      opt: 'R',
    },
    '3': {
      type: 'ID',
      desc: 'Name of Coding System',
      table: 396,
    },
    '6': {
      type: 'ID',
      desc: 'Name of Alternate Coding System',
      table: 396,
    },
    '7': {
      opt: 'C',
    },
  },
};
