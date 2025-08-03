import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CWE',
    },
    '5': {
      desc: 'Alternate Patient ID - CSR',
    },
    '6': {
      type: 'DTM',
      opt: 'R',
    },
    '7': {
      rep: 'infinite',
    },
    '8': {
      rep: 'infinite',
    },
    '9': {
      type: 'DTM',
    },
    '10': {
      type: 'CWE',
    },
    '11': {
      type: 'DTM',
    },
    '12': {
      type: 'CWE',
      desc: 'Randomized Study Arm',
    },
    '13': {
      type: 'CWE',
    },
    '14': {
      type: 'CWE',
    },
    '15': {
      type: 'DTM',
    },
    '16': {
      type: 'CWE',
    },
  },
};
