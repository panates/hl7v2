import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GOL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
    '7': {
      type: 'DTM',
      len: 24,
    },
    '8': {
      type: 'DTM',
      desc: 'Expected Goal Achieve Date/Time',
      len: 24,
    },
    '9': {
      type: 'CWE',
      len: 705,
    },
    '10': {
      type: 'CWE',
      len: 705,
    },
    '11': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'DTM',
      len: 24,
    },
    '13': {
      type: 'DTM',
      len: 24,
    },
    '14': {
      type: 'DTM',
      len: 24,
    },
    '16': {
      type: 'CWE',
      len: 705,
    },
    '18': {
      type: 'CWE',
      len: 705,
    },
    '19': {
      type: 'DTM',
      len: 24,
    },
    '20': {
      type: 'CWE',
      len: 705,
    },
    '22': {
      type: 'CNE',
      desc: 'Mood Code',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 725,
    },
  },
};
