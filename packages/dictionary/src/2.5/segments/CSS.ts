import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'R',
    },
    '3': {
      rep: 'infinite',
    },
  },
};
