import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RF1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
    },
    '9': {
      type: 'DTM',
    },
    '10': {
      type: 'CWE',
    },
    '12': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 865,
    },
  },
};
