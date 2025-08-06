import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const JCC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Job Code/Class',
  fields: {
    '1': {
      table: 327,
    },
    '2': {
      table: 328,
    },
    '3': {
      type: 'TX',
      desc: 'Job Description Text',
      opt: 'O',
      rep: 1,
    },
  },
};
