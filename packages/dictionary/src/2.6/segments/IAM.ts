import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IAM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Adverse Reaction Information',
  fields: {
    '2': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      type: 'CWE',
      len: 705,
    },
    '6': {
      table: 206,
    },
    '7': {
      opt: 'O',
      len: 427,
    },
    '9': {
      type: 'CWE',
      len: 705,
    },
    '10': {
      type: 'CWE',
      len: 705,
    },
    '13': {
      type: 'DTM',
    },
    '15': {
      type: 'CWE',
      len: 705,
    },
    '16': {
      type: 'CWE',
      len: 705,
    },
    '17': {
      type: 'CWE',
      len: 705,
    },
    '20': {
      type: 'DTM',
    },
  },
};
