import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const LRL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LRL',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      rep: 'infinite',
    },
  },
};
