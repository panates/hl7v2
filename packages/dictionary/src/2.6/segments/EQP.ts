import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      len: 24,
    },
    '4': {
      len: 24,
    },
  },
};
