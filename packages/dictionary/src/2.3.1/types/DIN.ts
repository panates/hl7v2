import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const DIN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Activation Date',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Date',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Institution Name',
      opt: 'O',
      rep: 1,
    },
  },
};
