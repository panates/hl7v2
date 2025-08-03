import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Error segment',
  fields: {
    '1': {
      opt: 'R',
      rep: 'infinite',
      len: 80,
    },
  },
};
