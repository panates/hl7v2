import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TXA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - TXA',
    },
    '5': {
      rep: 'infinite',
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
    '17': {
      rep: 1,
    },
  },
};
