import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      len: 1,
    },
  },
};
