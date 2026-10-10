import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PTH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '5': {
      desc: 'Pathway Life Cycle Status',
    },
    '6': {
      desc: 'Change Pathway Life Cycle Status Date/Time',
    },
  },
};
