import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PCF: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Pre-certification Required',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Pre-certification Patient Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Pre-certication Required',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'Pre-certification Window',
      opt: 'O',
      rep: 1,
    },
  },
};
