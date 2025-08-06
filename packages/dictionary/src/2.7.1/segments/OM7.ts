import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM7: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '6': {
      type: 'DTM',
    },
    '7': {
      type: 'DTM',
    },
    '9': {
      type: 'CWE',
    },
    '12': {
      type: 'CWE',
    },
    '13': {
      type: 'DTM',
    },
    '14': {
      type: 'DTM',
    },
    '16': {
      type: 'CWE',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'DTM',
    },
    '24': {
      type: 'CWE',
    },
  },
};
