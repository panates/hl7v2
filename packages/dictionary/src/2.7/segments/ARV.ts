import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ARV: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Access Restriction',
  fields: {
    '6': {
      desc: 'Access Restriction Date Range ',
    },
  },
};
