import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PDC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      rep: 'infinite',
      len: 570,
    },
    '2': {
      type: 'CWE',
      len: 705,
    },
    '5': {
      type: 'CWE',
      len: 705,
    },
    '9': {
      type: 'CWE',
      len: 705,
    },
    '11': {
      desc: 'Marketing Approval ID',
    },
    '12': {
      len: 722,
    },
    '13': {
      len: 722,
    },
    '14': {
      type: 'DTM',
      desc: 'Date First Marketed',
      len: 24,
    },
    '15': {
      type: 'DTM',
      desc: 'Date Last Marketed',
      len: 24,
    },
  },
};
