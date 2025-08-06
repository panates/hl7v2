import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XON: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      desc: 'Organization Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Organization Name Type Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'B',
      rep: 1,
    },
    '4': {
      desc: 'Identifier Check Digit',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Check Digit Scheme ',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'HD',
      desc: 'Assigning Authority',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Identifier Type Code',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'HD',
      opt: 'O',
      rep: 1,
    },
  },
};
