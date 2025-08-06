import { HL7SegmentDefinition } from '../../types.js';

export const ERR: HL7SegmentDefinition = {
  desc: 'Error',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Error code and location',
      opt: 'R',
      rep: 'infinite',
      len: 80,
      table: 60,
    },
  },
};
