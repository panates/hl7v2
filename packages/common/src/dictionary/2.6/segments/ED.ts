import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ED: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Encapsulated Data',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Data',
      opt: 'O',
      rep: 1,
      len: 10000000,
    },
  },
};
