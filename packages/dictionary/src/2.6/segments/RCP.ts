import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RCP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CNE',
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      table: 391,
    },
  },
};
