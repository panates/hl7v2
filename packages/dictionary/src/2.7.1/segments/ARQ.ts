import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ARQ: DeepPartial<HL7SegmentDefinition> = {
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
      desc: 'Priority-ARQ',
    },
    '15': {
      rep: 'infinite',
    },
    '17': {
      rep: 'infinite',
    },
    '19': {
      rep: 'infinite',
    },
    '21': {
      desc: 'Entered By Location',
    },
  },
};
