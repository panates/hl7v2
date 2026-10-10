import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PES: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Product experience sender segment',
  fields: {
    '1': {
      rep: 'infinite',
    },
    '5': {
      len: 75,
    },
  },
};
