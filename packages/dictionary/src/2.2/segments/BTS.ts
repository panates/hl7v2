import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const BTS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Batch Message Count',
    },
    '2': {
      desc: 'Batch Comment',
    },
    '3': {
      type: 'CM_BATCH_TOTAL',
      desc: 'Batch Totals',
      rep: 'infinite',
    },
  },
};
