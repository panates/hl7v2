import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ERQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event Replay Query',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'CE',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '3': {
      type: 'QIP',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
