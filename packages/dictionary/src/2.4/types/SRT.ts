import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const SRT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Sort Order',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Sort-by Field',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Sequencing',
      opt: 'O',
      rep: 1,
    },
  },
};
