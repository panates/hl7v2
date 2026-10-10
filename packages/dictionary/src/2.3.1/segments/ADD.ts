import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ADD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Addendum segment',
  fields: {
    '1': {
      desc: 'Addendum Continuation Pointer',
      len: 65536,
    },
  },
};
