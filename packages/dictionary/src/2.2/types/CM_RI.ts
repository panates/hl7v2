import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_RI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Interval',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Repeat Pattern',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Explicit Time Intevall',
      opt: 'O',
      rep: 1,
    },
  },
};
