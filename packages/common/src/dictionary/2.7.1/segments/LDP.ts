import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LDP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LDP',
    },
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
      desc: 'Specialty Type',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
    },
    '12': {
      type: 'CWE',
    },
  },
};
