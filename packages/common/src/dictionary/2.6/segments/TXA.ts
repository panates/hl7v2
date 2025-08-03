import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const TXA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      type: 'DTM',
      len: 24,
    },
    '5': {
      rep: 'infinite',
    },
    '6': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      type: 'DTM',
      len: 24,
    },
    '8': {
      type: 'DTM',
      len: 24,
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
    '12': {
      len: 427,
    },
    '13': {
      len: 427,
    },
    '14': {
      len: 427,
    },
    '15': {
      len: 427,
    },
    '17': {
      rep: 1,
    },
  },
};
