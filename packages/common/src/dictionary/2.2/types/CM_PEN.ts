import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PEN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Penalty',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Penalty ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Penalty Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
