import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const LRL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location relationship segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - LRL',
      len: 200,
    },
    '5': {
      rep: 'infinite',
      len: 80,
    },
  },
};
