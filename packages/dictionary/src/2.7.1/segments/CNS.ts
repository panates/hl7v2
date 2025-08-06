import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CNS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'DTM',
    },
    '4': {
      type: 'DTM',
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'CWE',
    },
  },
};
