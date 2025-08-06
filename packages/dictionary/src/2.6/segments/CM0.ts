import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CM0: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - CM0',
    },
    '2': {
      len: 427,
    },
    '3': {
      type: 'EI',
      rep: 'infinite',
      len: 427,
    },
    '5': {
      rep: 'infinite',
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
  },
};
