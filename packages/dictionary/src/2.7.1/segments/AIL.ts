import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AIL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      rep: 'infinite',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'DTM',
    },
    '8': {
      type: 'CNE',
    },
    '10': {
      type: 'CNE',
    },
    '12': {
      type: 'CWE',
    },
  },
};
