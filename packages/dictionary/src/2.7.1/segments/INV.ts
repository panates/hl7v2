import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const INV: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'CWE',
    },
    '11': {
      type: 'CWE',
    },
    '12': {
      type: 'DTM',
    },
    '13': {
      type: 'DTM',
    },
    '15': {
      type: 'CWE',
    },
    '17': {
      type: 'CWE',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'CQ',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'CQ',
      desc: 'Target Value',
      opt: 'O',
      rep: 1,
    },
  },
};
