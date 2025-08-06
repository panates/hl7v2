import { HL7SegmentDefinition } from '../../types.js';

export const MRG: HL7SegmentDefinition = {
  desc: 'Merge patient information',
  fields: {
    '1': {
      type: 'CK',
      desc: 'Prior patient id - internal',
      opt: 'R',
      rep: 1,
      len: 16,
    },
    '2': {
      type: 'CK',
      desc: 'Prior alternate patient id',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '3': {
      type: 'CK',
      desc: 'Prior patient account number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
