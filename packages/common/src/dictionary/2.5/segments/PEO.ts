import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PEO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '7': {
      rep: 'infinite',
    },
    '19': {
      rep: 'infinite',
    },
  },
};
