import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '5': {
      type: 'DTM',
    },
    '6': {
      type: 'DTM',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
    },
    '10': {
      type: 'CWE',
    },
    '14': {
      type: 'CWE',
    },
    '15': {
      type: 'CWE',
    },
    '16': {
      type: 'CWE',
    },
    '18': {
      type: 'DTM',
    },
    '20': {
      len: 1,
    },
    '22': {
      table: 252,
    },
    '23': {
      len: 1,
    },
  },
};
