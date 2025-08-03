import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CX: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Identifier Check Digit',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Check Digit Scheme ',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
      desc: 'Assigning Authority',
      opt: 'C',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Identifier Type Code',
      opt: 'R',
      rep: 1,
      table: 203,
    },
    '6': {
      type: 'HD',
      desc: 'Assigning Facility',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DT',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      opt: 'C',
    },
    '10': {
      opt: 'C',
    },
    '11': {
      type: 'ST',
      desc: 'Security Check',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Security Check Scheme',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 904,
    },
  },
};
