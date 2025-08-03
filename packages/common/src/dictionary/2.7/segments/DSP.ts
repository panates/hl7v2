import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DSP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Display Data',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'TX',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'TX',
      opt: 'O',
      rep: 1,
    },
  },
};
