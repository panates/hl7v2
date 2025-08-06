import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AIP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      rep: 'infinite',
    },
    '4': {
      type: 'CWE',
      desc: 'Resource Type',
    },
    '5': {
      type: 'CWE',
      rep: 1,
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
