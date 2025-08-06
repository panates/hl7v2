import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event Replay Query Segment',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Query tag',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'CE',
      desc: 'Event identifier',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'QIP',
      desc: 'Input parameter list',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
