import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EQU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      len: 427,
    },
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
    '5': {
      type: 'CWE',
      len: 705,
    },
  },
};
