import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DTN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Day Type and Number',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Day Type',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 149,
    },
    '2': {
      type: 'NM',
      desc: 'Number of Days',
      opt: 'R',
      rep: 1,
      len: 3,
    },
  },
};
