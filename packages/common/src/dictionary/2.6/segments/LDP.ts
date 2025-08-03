import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LDP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LDP',
      len: 200,
    },
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
      desc: 'Specialty Type',
    },
    '5': {
      type: 'IS',
    },
    '7': {
      type: 'DTM',
      desc: 'Activation Date  LDP',
      len: 24,
    },
    '8': {
      type: 'DTM',
      len: 24,
    },
    '12': {
      type: 'CWE',
    },
  },
};
