import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Date Time Range (2.8.12',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Range Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Range End Date/time',
      opt: 'O',
      rep: 1,
    },
  },
};
