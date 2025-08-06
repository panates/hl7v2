import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRB: DeepPartial<HL7SegmentDefinition> = {
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
    },
    '9': {
      type: 'DTM',
    },
    '10': {
      type: 'CWE',
    },
    '11': {
      type: 'CWE',
    },
    '12': {
      type: 'CWE',
    },
    '13': {
      type: 'CWE',
    },
    '14': {
      type: 'CWE',
    },
    '15': {
      type: 'DTM',
    },
    '16': {
      type: 'DTM',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'CWE',
    },
    '21': {
      type: 'CWE',
    },
    '22': {
      type: 'CWE',
    },
    '23': {
      type: 'CWE',
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      type: 'CWE',
      desc: 'Problem Severity',
      opt: 'O',
      rep: 1,
      table: 836,
    },
    '27': {
      type: 'CWE',
      desc: 'Problem Perspective',
      opt: 'O',
      rep: 1,
      table: 838,
    },
    '28': {
      type: 'CNE',
      desc: 'Mood Code',
      rep: 1,
      table: 725,
    },
  },
};
