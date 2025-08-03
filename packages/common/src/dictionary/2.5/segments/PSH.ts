import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '13': {
      rep: 'infinite',
    },
    '14': {
      rep: 'infinite',
    },
  },
};
