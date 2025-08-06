import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Provider Role',
    },
    '3': {
      rep: 'infinite',
    },
    '5': {
      len: 100,
    },
    '6': {
      desc: 'Preferred Method Of Contact',
    },
    '7': {
      type: 'PI',
    },
    '8': {
      desc: 'Effective Start Date of Provider Role',
    },
    '9': {
      desc: 'Effective End Date of Provider Role',
    },
  },
};
