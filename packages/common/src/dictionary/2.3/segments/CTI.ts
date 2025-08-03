import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CTI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Trial Identification',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Sponsor Study ID',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'CE',
      desc: 'Study Phase Identifier',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Study Scheduled Time Point',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
