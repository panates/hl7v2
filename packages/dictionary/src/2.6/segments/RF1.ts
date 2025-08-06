import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RF1: DeepPartial<HL7SegmentDefinition> = {
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
      type: 'CWE',
      len: 705,
    },
    '4': {
      type: 'CWE',
      len: 705,
    },
    '5': {
      type: 'CWE',
      len: 705,
    },
    '7': {
      type: 'DTM',
      len: 24,
    },
    '8': {
      type: 'DTM',
      len: 24,
    },
    '9': {
      type: 'DTM',
      len: 24,
    },
    '10': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'CWE',
      desc: 'Referral Documentation Completion Status',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 865,
    },
  },
};
