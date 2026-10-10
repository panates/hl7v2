import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical study data schedule segment',
  fields: {
    '1': {
      opt: 'R',
    },
    '3': {
      rep: 3,
    },
  },
};
