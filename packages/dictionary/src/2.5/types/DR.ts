import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Date/Time Range',
  fields: {
    '1': {
      desc: 'Range Start Date/Time',
      len: 26,
    },
    '2': {
      desc: 'Range End Date/Time',
      len: 26,
    },
  },
};
