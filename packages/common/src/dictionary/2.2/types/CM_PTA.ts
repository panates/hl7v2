import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PTA: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Policy Type',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Policy Type',
      opt: 'O',
      rep: 1,
      table: 147,
    },
    '2': {
      type: 'ID',
      desc: 'Amount Class',
      opt: 'O',
      rep: 1,
      table: 193,
    },
    '3': {
      type: 'NM',
      desc: 'Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
