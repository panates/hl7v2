import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CWE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Coded with Exceptions',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Identifier',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'ST',
      desc: 'Text',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '3': {
      type: 'ID',
      desc: 'Name of Coding System',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 396,
    },
    '4': {
      type: 'ST',
      desc: 'Alternate Identifier',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'ST',
      desc: 'Alternate Text',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '6': {
      type: 'ID',
      desc: 'Name of Alternate Coding System',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 396,
    },
    '7': {
      type: 'ST',
      desc: 'Coding System Version ID',
      opt: 'C',
      rep: 1,
      len: 10,
    },
    '8': {
      type: 'ST',
      desc: 'Alternate Coding System Version ID',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '9': {
      type: 'ST',
      desc: 'Original Text',
      opt: 'O',
      rep: 1,
      len: 199,
    },
  },
};
