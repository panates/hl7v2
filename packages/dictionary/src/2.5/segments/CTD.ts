import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '7': {
      type: 'PLN',
    },
  },
};
