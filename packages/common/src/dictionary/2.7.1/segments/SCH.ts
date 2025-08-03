import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SCH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
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
    '25': {
      type: 'CWE',
    },
  },
};
