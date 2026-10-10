import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const FTS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'File Batch Count',
    },
    '2': {
      desc: 'File Trailer Comment',
    },
  },
};
