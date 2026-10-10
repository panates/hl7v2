import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '13': {
      rep: 'infinite',
    },
    '14': {
      rep: 'infinite',
    },
  },
};
