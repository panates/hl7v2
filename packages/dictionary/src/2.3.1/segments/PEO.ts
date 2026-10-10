import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PEO: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Product experience observation segment',
  fields: {
    '7': {
      rep: 'infinite',
    },
    '18': {
      len: 60,
    },
    '19': {
      rep: 'infinite',
    },
    '25': {
      desc: 'Primary Observer s identity May Be Divulged',
    },
  },
};
