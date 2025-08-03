import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XON: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      desc: 'Organization Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Organization Name Type Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Check Digit',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Code Identifying The Check Digit Scheme Employed',
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
      type: 'IS',
      desc: 'Identifier Type Code',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'HD',
      desc: 'Assigning Facility ID',
      opt: 'O',
      rep: 1,
    },
  },
};
