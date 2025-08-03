import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const AD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Address',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Street Address',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Other Designation',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'City',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Country',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Address Type',
    },
  },
};
