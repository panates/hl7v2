import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ORG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID _ ORG',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
      desc: 'Organization Unit Type Code',
    },
    '6': {
      type: 'CWE',
    },
    '7': {
      type: 'CWE',
    },
    '8': {
      type: 'CWE',
    },
    '10': {
      type: 'CWE',
      len: 250,
    },
  },
};
