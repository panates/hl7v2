import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ECR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'TX',
    },
  },
};
