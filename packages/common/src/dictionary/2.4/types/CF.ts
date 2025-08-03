import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CF: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded Element With Formatted Values',
  fields: {
    '1': {
      type: 'ID',
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
      type: 'IS',
      desc: 'Name Of Coding System',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
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
      type: 'IS',
      desc: 'Name Of Alternate Coding System',
      opt: 'O',
      rep: 1,
    },
  },
};
