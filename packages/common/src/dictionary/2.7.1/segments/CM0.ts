import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM0: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - CM0',
    },
    '3': {
      type: 'EI',
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
