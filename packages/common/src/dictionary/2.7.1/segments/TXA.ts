import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const TXA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      type: 'DTM',
    },
    '5': {
      rep: 'infinite',
    },
    '6': {
      type: 'DTM',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
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
