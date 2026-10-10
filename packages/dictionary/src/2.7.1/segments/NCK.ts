import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'System Clock',
  fields: {
    '1': {
      type: 'DTM',
      desc: 'System Date/Time',
      len: 24,
    },
  },
};
