import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical study registration segment',
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
      rep: 3,
    },
    '12': {
      desc: 'Randomized Study Arm',
      rep: 3,
    },
    '13': {
      rep: 3,
    },
  },
};
