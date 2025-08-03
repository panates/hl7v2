import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SCH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'O',
      len: 75,
    },
    '2': {
      len: 75,
    },
    '4': {
      len: 22,
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'CWE',
    },
    '7': {
      type: 'CWE',
    },
    '8': {
      type: 'CWE',
    },
    '10': {
      type: 'CNE',
    },
    '11': {
      opt: 'O',
    },
    '12': {
      rep: 'infinite',
    },
    '14': {
      rep: 'infinite',
    },
    '16': {
      rep: 'infinite',
    },
    '18': {
      rep: 'infinite',
    },
    '20': {
      rep: 'infinite',
    },
    '22': {
      desc: 'Entered By Location',
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      len: 427,
    },
    '27': {
      len: 427,
    },
  },
};
