import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CCD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Charge Time',
  fields: {
    '1': {
      type: 'ID',
      desc: 'When To Charge Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Date/time',
      opt: 'O',
      rep: 1,
    },
  },
};
