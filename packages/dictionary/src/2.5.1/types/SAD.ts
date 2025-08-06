import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SAD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Street Address',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Street Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Dwelling Number',
      opt: 'O',
      rep: 1,
    },
  },
};
