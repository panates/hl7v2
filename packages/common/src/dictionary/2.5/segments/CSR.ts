import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '5': {
      desc: 'Alternate Patient ID - CSR',
    },
    '6': {
      desc: 'Date/Time Of Patient Study Registration',
      opt: 'R',
    },
    '7': {
      rep: 'infinite',
    },
    '8': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
    '12': {
      desc: 'Randomized Study Arm',
      rep: 'infinite',
    },
    '13': {
      rep: 'infinite',
    },
  },
};
