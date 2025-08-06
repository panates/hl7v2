import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Repeat Interval',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Repeat Pattern',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Explicit Time Interval',
      opt: 'O',
      rep: 1,
    },
  },
};
