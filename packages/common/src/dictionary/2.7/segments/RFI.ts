import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RFI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      desc: 'Date Additional Information Was Submitted',
    },
  },
};
