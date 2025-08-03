import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'System clock',
  fields: {
    '1': {
      type: 'TS',
      opt: 'R',
      rep: 1,
      len: 26,
    },
  },
};
