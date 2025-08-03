import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DIN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Date and Institution Name',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Date',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '2': {
      type: 'CE',
      desc: 'Institution Name',
      opt: 'R',
      rep: 1,
      len: 483,
      table: 531,
    },
  },
};
