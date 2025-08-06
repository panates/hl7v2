import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CF: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded Element with Formatted Values',
  fields: {
    '1': {
      type: 'ST',
    },
    '3': {
      type: 'ID',
      desc: 'Name of Coding System',
      table: 396,
    },
    '4': {
      type: 'ST',
    },
    '6': {
      type: 'ID',
      desc: 'Name of Alternate Coding System',
      table: 396,
    },
  },
};
