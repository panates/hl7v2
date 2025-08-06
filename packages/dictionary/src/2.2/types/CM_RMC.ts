import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_RMC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Room Coverage',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Room Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Amount Type',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Coverage Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
