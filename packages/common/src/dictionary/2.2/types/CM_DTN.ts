import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_DTN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Day Type And Number',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Day Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Number Of Days',
      opt: 'O',
      rep: 1,
    },
  },
};
