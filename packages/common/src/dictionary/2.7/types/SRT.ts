import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const SRT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Sort Order',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Sort-by Field',
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
