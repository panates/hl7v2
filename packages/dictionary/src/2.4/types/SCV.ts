import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const SCV: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Scheduling Class Value Pair',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Parameter Class',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Parameter Value',
      opt: 'O',
      rep: 1,
    },
  },
};
