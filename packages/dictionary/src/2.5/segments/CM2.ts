import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      rep: 'infinite',
    },
  },
};
