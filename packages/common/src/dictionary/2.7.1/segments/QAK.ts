import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QAK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query Tag',
    },
    '2': {
      desc: 'Query Response Status',
    },
    '3': {
      type: 'CWE',
      table: 471,
    },
  },
};
