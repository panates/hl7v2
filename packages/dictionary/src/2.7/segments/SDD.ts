import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SDD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
  },
};
