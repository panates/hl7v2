import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FTS: HL7SegmentDefinition = {
  desc: 'File trailer',
  fields: {
    '1': {
      type: 'ST',
      desc: 'File batch count',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'ST',
      desc: 'File trailer comment',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};
