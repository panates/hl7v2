import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const DSC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Continuation Pointer',
      len: 180,
    },
  },
};
