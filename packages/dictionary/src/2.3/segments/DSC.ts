import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const DSC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Continuation pointer segment',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
  },
};
