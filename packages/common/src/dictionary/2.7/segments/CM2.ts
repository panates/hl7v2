import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Schedule Master',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Scheduled Time Point',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Description of Time Point',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Events Scheduled This Time Point',
      opt: 'R',
      rep: 200,
    },
  },
};
