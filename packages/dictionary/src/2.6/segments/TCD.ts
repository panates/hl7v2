import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TCD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '2': {
      len: 36,
    },
    '3': {
      len: 36,
    },
    '4': {
      len: 36,
    },
    '5': {
      len: 36,
    },
    '8': {
      type: 'CWE',
      len: 705,
    },
  },
};
