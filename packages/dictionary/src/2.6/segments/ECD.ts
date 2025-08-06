import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ECD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
    },
    '5': {
      type: 'TX',
    },
  },
};
