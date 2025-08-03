import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NCK: HL7SegmentDefinition = {
  desc: 'System clock',
  fields: {
    '1': {
      type: 'TS',
      desc: 'System date/time',
      opt: 'R',
      rep: 1,
      len: 19,
    },
  },
};
