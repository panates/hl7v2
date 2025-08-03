import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Possible causal relationship segment',
  fields: {
    '3': {
      len: 60,
    },
    '14': {
      len: 60,
    },
    '20': {
      len: 1,
    },
    '22': {
      table: 252,
    },
    '23': {
      len: 1,
    },
  },
};
