import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'DTM',
    },
    '3': {
      type: 'DTM',
    },
    '4': {
      type: 'CWE',
    },
  },
};
