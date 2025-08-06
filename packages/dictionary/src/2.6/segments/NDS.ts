import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NDS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      type: 'CWE',
      len: 705,
    },
  },
};
