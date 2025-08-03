import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ABS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'DTM',
    },
    '6': {
      type: 'CWE',
    },
    '7': {
      type: 'DTM',
    },
    '9': {
      type: 'CWE',
    },
    '11': {
      type: 'CWE',
    },
    '13': {
      type: 'CWE',
    },
  },
};
