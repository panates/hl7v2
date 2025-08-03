import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FAC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Facility ID-FAC',
      rep: 1,
      len: 427,
    },
    '3': {
      rep: 'infinite',
      len: 2915,
    },
    '4': {
      len: 2743,
    },
    '5': {
      len: 3220,
    },
    '7': {
      len: 2915,
    },
    '8': {
      len: 2743,
    },
    '9': {
      rep: 'infinite',
      len: 3220,
    },
    '10': {
      len: 199,
    },
    '11': {
      rep: 'infinite',
      len: 2915,
    },
    '12': {
      len: 2743,
    },
  },
};
