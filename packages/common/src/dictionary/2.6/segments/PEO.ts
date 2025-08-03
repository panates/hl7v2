import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PEO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '2': {
      type: 'CWE',
      len: 705,
    },
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
      type: 'DTM',
      len: 24,
    },
    '7': {
      rep: 'infinite',
      len: 2915,
    },
    '18': {
      type: 'CWE',
      len: 705,
    },
    '19': {
      rep: 'infinite',
      len: 1317,
    },
    '20': {
      len: 2915,
    },
    '21': {
      len: 2743,
    },
    '24': {
      type: 'DTM',
      len: 24,
    },
  },
};
