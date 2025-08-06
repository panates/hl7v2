import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PCR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      len: 500,
    },
    '5': {
      type: 'DTM',
      len: 24,
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
    '10': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      rep: 'infinite',
      len: 199,
    },
    '14': {
      type: 'CWE',
      len: 705,
    },
    '15': {
      type: 'CWE',
      len: 705,
    },
    '16': {
      type: 'CWE',
      len: 705,
    },
    '18': {
      type: 'DTM',
      len: 24,
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
