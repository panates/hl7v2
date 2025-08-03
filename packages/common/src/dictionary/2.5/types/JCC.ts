import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const JCC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Job Code/Class',
  fields: {
    '1': {
      len: 20,
      table: 327,
    },
    '2': {
      len: 20,
      table: 328,
    },
    '3': {
      type: 'TX',
      desc: 'Job Description Text',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
