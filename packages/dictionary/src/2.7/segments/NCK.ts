import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
    },
  },
};
