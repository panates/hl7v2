import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ECD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '5': {
      type: 'TX',
    },
  },
};
