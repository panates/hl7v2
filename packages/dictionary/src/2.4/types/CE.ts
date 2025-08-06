import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded Element',
  fields: {
    '1': {
      desc: 'Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Text',
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
      desc: 'Alternate Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Alternate Text',
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
