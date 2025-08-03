import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NPU: HL7SegmentDefinition = {
  desc: 'Non-patient update',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Bed location',
      opt: 'R',
      rep: 1,
      len: 12,
      table: 79,
    },
    '2': {
      type: 'ID',
      desc: 'Bed status',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 116,
    },
  },
};
