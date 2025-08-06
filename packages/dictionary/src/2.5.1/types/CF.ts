import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CF: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'FT',
      desc: 'Formatted Text',
      opt: 'O',
      rep: 1,
    },
    '3': {
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Alternate Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'FT',
      desc: 'Alternate Formatted Text',
      opt: 'O',
      rep: 1,
    },
    '6': {
      opt: 'O',
      rep: 1,
    },
  },
};
