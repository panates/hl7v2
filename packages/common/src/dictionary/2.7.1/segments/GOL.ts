import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GOL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'DTM',
    },
    '3': {
      type: 'CWE',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
      desc: 'Expected Goal Achieve Date/Time',
    },
    '9': {
      type: 'CWE',
    },
    '10': {
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
    '20': {
      type: 'CWE',
    },
    '22': {
      type: 'CNE',
      rep: 1,
      table: 725,
    },
  },
};
