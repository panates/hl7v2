import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RGS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CWE',
    },
  },
};
