import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PMT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '11': {
      opt: 'R',
    },
  },
};
