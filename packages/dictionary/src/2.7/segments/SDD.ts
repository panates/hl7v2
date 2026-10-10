import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const SDD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
  },
};
