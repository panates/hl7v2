import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CNS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
    '5': {
      type: 'CWE',
      len: 705,
    },
    '6': {
      type: 'CWE',
      len: 705,
    },
  },
};
