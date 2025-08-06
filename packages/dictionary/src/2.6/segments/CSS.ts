import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      opt: 'R',
      len: 705,
    },
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
  },
};
