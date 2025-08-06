import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Person Identifier',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Type Of ID Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Other Qualifying Info',
      opt: 'O',
      rep: 1,
    },
  },
};
