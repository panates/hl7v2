import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      type: 'CWE',
      len: 705,
    },
  },
};
