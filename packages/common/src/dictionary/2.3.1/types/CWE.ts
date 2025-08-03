import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CWE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded With Exceptions',
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
      type: 'ST',
      desc: 'Name Of Coding System',
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
      type: 'ST',
      desc: 'Name Of Alternate Coding System',
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
