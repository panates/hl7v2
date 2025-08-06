import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DIN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Date and Institution Name',
  fields: {
    '1': {
      type: 'DTM',
      desc: 'Date',
      opt: 'R',
      rep: 1,
      len: 24,
    },
    '2': {
      type: 'CWE',
      desc: 'Institution Name',
      opt: 'R',
      rep: 1,
      len: 705,
      table: 531,
    },
  },
};
