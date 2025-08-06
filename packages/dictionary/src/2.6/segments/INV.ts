import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const INV: DeepPartial<HL7SegmentDefinition> = {
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
    '6': {
      type: 'CWE',
      len: 705,
    },
    '11': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'DTM',
    },
    '13': {
      type: 'DTM',
    },
    '15': {
      type: 'CWE',
      len: 705,
    },
    '17': {
      type: 'CWE',
      len: 705,
    },
    '18': {
      type: 'CWE',
      len: 705,
    },
    '19': {
      type: 'CQ',
      desc: 'On Board Stability Time',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '20': {
      type: 'CQ',
      desc: 'Target Value',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
