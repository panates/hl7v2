import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VAR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      rep: 'infinite',
    },
    '5': {
      type: 'CWE',
      len: 705,
    },
  },
};
