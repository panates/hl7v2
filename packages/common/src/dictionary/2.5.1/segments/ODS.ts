import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
