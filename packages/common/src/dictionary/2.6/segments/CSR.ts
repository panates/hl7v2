import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      len: 427,
    },
    '2': {
      len: 427,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      len: 1913,
    },
    '5': {
      desc: 'Alternate Patient ID - CSR',
      len: 1913,
    },
    '6': {
      type: 'DTM',
      desc: 'Date/Time Of Patient Study Registration',
      opt: 'R',
      len: 24,
    },
    '7': {
      rep: 'infinite',
      len: 3220,
    },
    '8': {
      rep: 'infinite',
      len: 3220,
    },
    '9': {
      type: 'DTM',
      len: 24,
    },
    '10': {
      type: 'CWE',
      len: 705,
    },
    '11': {
      type: 'DTM',
      rep: 'infinite',
      len: 24,
    },
    '12': {
      type: 'CWE',
      desc: 'Randomized Study Arm',
      rep: 'infinite',
      len: 705,
    },
    '13': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '14': {
      type: 'CWE',
      len: 705,
    },
    '15': {
      type: 'DTM',
      len: 24,
    },
    '16': {
      type: 'CWE',
      len: 705,
    },
  },
};
