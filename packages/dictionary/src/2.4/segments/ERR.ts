import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Error',
  fields: {
    '1': {
      opt: 'R',
      rep: 'infinite',
      len: 80,
    },
  },
};
