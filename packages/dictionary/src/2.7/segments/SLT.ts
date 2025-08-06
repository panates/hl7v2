import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SLT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Lot',
  fields: {
    '3': {
      desc: 'Lot Number ',
    },
  },
};
