import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      rep: 'infinite',
    },
  },
};
