import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PEO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'DTM',
    },
    '4': {
      type: 'DTM',
    },
    '5': {
      type: 'DTM',
    },
    '6': {
      type: 'DTM',
    },
    '7': {
      rep: 'infinite',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      rep: 'infinite',
    },
    '24': {
      type: 'DTM',
    },
  },
};
