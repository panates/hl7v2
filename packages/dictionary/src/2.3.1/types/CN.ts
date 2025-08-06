import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'ID Number',
    },
    '5': {
      desc: 'Suffix',
    },
    '6': {
      type: 'ST',
      desc: 'Prefix',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'IS',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      opt: 'O',
      rep: 1,
    },
    '9': {
      opt: 'O',
      rep: 1,
    },
  },
};
