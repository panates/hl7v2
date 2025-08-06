import { HL7SegmentDefinition } from '../../types.js';

export const DSC: HL7SegmentDefinition = {
  desc: 'Continuation pointer',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Continuation pointer',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
