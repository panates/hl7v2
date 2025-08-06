import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IAM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Adverse Reaction Information',
  fields: {
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
    '6': {
      table: 206,
    },
    '9': {
      type: 'CWE',
    },
    '10': {
      type: 'CWE',
    },
    '13': {
      type: 'DTM',
    },
    '15': {
      type: 'CWE',
    },
    '16': {
      type: 'CWE',
    },
    '17': {
      type: 'CWE',
    },
    '20': {
      type: 'DTM',
    },
  },
};
