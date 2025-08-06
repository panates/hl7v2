import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'TS',
      opt: 'R',
      rep: 1,
      len: 26,
    },
  },
};
