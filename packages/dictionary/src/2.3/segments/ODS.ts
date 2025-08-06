import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      rep: 1,
    },
  },
};
