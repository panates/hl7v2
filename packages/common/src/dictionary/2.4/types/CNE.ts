import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNE: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
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
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
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
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Coding System Version ID',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Alternate Coding System Version ID',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Original Text',
      opt: 'O',
      rep: 1,
    },
  },
};
