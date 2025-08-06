import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TCC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '2': {
      len: 427,
    },
    '4': {
      len: 36,
    },
    '5': {
      len: 36,
    },
    '6': {
      len: 36,
    },
    '7': {
      len: 36,
    },
    '12': {
      len: 36,
    },
    '13': {
      type: 'CWE',
      len: 705,
    },
    '14': {
      type: 'CWE',
      len: 705,
    },
  },
};
