import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      len: 1,
    },
  },
};
