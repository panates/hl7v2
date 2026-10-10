import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const IAM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Adverse Reaction Information',
  fields: {
    '7': {
      opt: 'O',
      len: 427,
    },
  },
};
