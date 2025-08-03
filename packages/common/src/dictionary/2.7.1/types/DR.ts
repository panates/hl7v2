import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Date/Time Range',
  fields: {
    '1': {
      type: 'DTM',
      desc: 'Range Start Date/Time',
    },
    '2': {
      type: 'DTM',
      desc: 'Range End Date/Time',
    },
  },
};
