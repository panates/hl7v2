import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const JCC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
      desc: 'Job Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Job Class',
      opt: 'O',
      rep: 1,
    },
  },
};
