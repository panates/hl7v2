import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Trial Identification',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Sponsor Study ID',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Study Phase Identifier',
      opt: 'C',
      rep: 1,
    },
    '3': {
      desc: 'Study Scheduled Time Point',
      opt: 'O',
      rep: 1,
    },
  },
};
