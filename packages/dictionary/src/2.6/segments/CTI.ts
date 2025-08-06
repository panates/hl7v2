import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      len: 427,
    },
    '2': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
  },
};
