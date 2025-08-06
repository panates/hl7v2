import { HL7SegmentDefinition } from '../../types.js';

export const NTE: HL7SegmentDefinition = {
  desc: 'Notes and comments',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set id - notes and comments',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Source of comment',
      opt: 'O',
      rep: 1,
      len: 8,
      table: 105,
    },
    '3': {
      type: 'TX',
      desc: 'Comment',
      opt: 'R',
      rep: 'infinite',
      len: 120,
    },
  },
};
