import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BTS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Batch trailer segment',
  fields: {
    '1': {
      desc: 'Batch Message Count',
    },
    '2': {
      desc: 'Batch Comment',
    },
    '3': {
      desc: 'Batch Totals',
      rep: 'infinite',
    },
  },
};
