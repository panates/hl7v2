import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const RFI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      desc: 'Date Additional Information Was Submitted',
    },
  },
};
