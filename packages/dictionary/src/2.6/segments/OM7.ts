import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM7: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
    },
    '2': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      type: 'CWE',
    },
    '6': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      type: 'DTM',
      len: 24,
    },
    '9': {
      type: 'CWE',
    },
    '12': {
      type: 'CWE',
    },
    '13': {
      type: 'DTM',
      len: 24,
    },
    '14': {
      type: 'DTM',
      len: 24,
    },
    '16': {
      type: 'CWE',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'DTM',
      len: 24,
    },
    '20': {
      len: 3220,
    },
    '24': {
      type: 'CWE',
    },
  },
};
