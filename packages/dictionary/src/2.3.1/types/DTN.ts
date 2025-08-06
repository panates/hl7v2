import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DTN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Day Type And Number',
  fields: {
    '1': {
      type: 'IS',
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
