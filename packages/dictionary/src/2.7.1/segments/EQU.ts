import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'DTM',
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
  },
};
