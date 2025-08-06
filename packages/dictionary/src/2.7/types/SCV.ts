import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SCV: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Scheduling Class Value Pair',
  fields: {
    '1': {
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
