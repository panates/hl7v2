import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '12': {
      rep: 'infinite',
    },
    '20': {
      len: 1,
    },
    '21': {
      rep: 'infinite',
    },
    '22': {
      rep: 'infinite',
      table: 252,
    },
    '23': {
      rep: 'infinite',
      len: 1,
    },
  },
};
