import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PEO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '7': {
      rep: 'infinite',
    },
    '19': {
      rep: 'infinite',
    },
  },
};
