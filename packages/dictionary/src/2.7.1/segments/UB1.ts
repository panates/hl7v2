import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const UB1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '12': {
      desc: 'Special Program Indicator',
    },
  },
};
