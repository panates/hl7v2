import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QAK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query Tag',
    },
    '2': {
      desc: 'Query Response Status',
    },
    '3': {
      table: 471,
    },
    '4': {
      desc: 'Hit Count',
    },
  },
};
