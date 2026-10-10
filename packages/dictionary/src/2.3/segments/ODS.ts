import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      rep: 1,
    },
  },
};
