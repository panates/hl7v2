import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CX: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Check Digit',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
      desc: 'Assigning Authority',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Identifier Type Code',
      opt: 'O',
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
  },
};
