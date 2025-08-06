import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Data Schedule',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Study Scheduled Time Point',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'TS',
      desc: 'Study Scheduled Patient Time Point',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'CE',
      desc: 'Study Quality Control Codes',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
  },
};
