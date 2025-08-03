import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Data Schedule Segment',
  fields: {
    '1': {
      desc: 'Study Scheduled Time Point',
      rep: 1,
    },
    '2': {
      desc: 'Study Scheduled Patient Time Point ',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'Study Quality Control Codes',
      opt: 'O',
      rep: 3,
    },
  },
};
