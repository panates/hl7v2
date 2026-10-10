import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const UAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'User Authentication Credential Segment',
  fields: {
    '2': {
      desc: 'User Authentication Credential  ',
    },
  },
};
