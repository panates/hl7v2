import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Schedule Master',
  fields: {
    '1': {
      type: 'SI',
      desc: 'CM2 - Set ID',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Scheduled Time Point',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'ST',
      desc: 'Description of Time Point',
      opt: 'O',
      rep: 1,
      len: 300,
    },
    '4': {
      type: 'CE',
      desc: 'Events Scheduled This Time Point',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
  },
};
