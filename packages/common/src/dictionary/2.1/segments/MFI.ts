import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MFI: HL7SegmentDefinition = {
  desc: 'Master file identification',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Master file identifier',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'ID',
      desc: 'Master file application identifier',
      opt: 'O',
      rep: 1,
      len: 6,
      table: 176,
    },
    '3': {
      type: 'ID',
      desc: 'File-level event code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 178,
    },
    '4': {
      type: 'TS',
      desc: 'Entered date / time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'TS',
      desc: 'Effective date / time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '6': {
      type: 'ID',
      desc: 'Response level code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 179,
    },
  },
};
