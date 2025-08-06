import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRB: DeepPartial<HL7SegmentDefinition> = {
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
    '11': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'CWE',
      len: 705,
    },
    '13': {
      type: 'CWE',
      len: 705,
    },
    '14': {
      type: 'CWE',
      len: 705,
    },
    '15': {
      type: 'DTM',
      len: 24,
    },
    '16': {
      type: 'DTM',
      len: 24,
    },
    '18': {
      type: 'CWE',
      len: 705,
    },
    '19': {
      type: 'CWE',
      len: 705,
    },
    '21': {
      type: 'CWE',
      len: 705,
    },
    '22': {
      type: 'CWE',
      len: 705,
    },
    '23': {
      type: 'CWE',
      len: 705,
    },
    '25': {
      type: 'CWE',
      len: 705,
    },
    '26': {
      type: 'CWE',
      desc: 'Problem Severity',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 836,
    },
    '27': {
      type: 'CWE',
      desc: 'Problem Perspective',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 838,
    },
    '28': {
      type: 'CNE',
      desc: 'Mood Code',
      opt: 'O',
      rep: 1,
      len: 60,
      table: 725,
    },
  },
};
