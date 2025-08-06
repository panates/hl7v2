import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PES: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      rep: 'infinite',
      len: 567,
    },
    '2': {
      len: 3220,
    },
    '3': {
      len: 2915,
    },
    '4': {
      len: 2743,
    },
    '5': {
      len: 427,
    },
    '6': {
      len: 16,
    },
    '9': {
      type: 'DTM',
      len: 24,
    },
    '10': {
      type: 'DTM',
      len: 24,
    },
    '11': {
      rep: 'infinite',
    },
  },
};
