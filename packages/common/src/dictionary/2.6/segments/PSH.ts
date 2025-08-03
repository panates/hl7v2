import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
    '5': {
      type: 'DTM',
      len: 24,
    },
    '6': {
      len: 722,
    },
    '7': {
      len: 722,
    },
    '10': {
      len: 722,
    },
    '13': {
      rep: 'infinite',
      len: 16,
    },
    '14': {
      rep: 'infinite',
      len: 16,
    },
  },
};
