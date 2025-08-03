import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_FINANCE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Finance',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Financial Class ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
  },
};
