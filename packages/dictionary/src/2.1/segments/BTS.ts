import { HL7SegmentDefinition } from '../../types.js';

export const BTS: HL7SegmentDefinition = {
  desc: 'Batch trailer',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Batch message count',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'ST',
      desc: 'Batch comment',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '3': {
      type: 'CM',
      desc: 'Batch totals',
      opt: 'O',
      rep: 1,
      len: 100,
    },
  },
};
