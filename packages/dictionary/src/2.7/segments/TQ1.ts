import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TQ1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '12': {
      opt: 'C',
      len: 1,
      table: 472,
    },
    '14': {
      desc: 'Total occurrences',
    },
  },
};
