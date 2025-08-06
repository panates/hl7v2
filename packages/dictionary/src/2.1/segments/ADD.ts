import { HL7SegmentDefinition } from '../../types.js';

export const ADD: HL7SegmentDefinition = {
  desc: 'Addendum',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Addendum continuation pointer',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
