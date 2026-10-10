import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Dietary Orders, Supplements, and Preferences',
  fields: {
    '2': {
      len: 250,
    },
    '3': {
      len: 250,
    },
  },
};
