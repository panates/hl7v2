import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Dietary Orders, Supplements, and Preferences',
  fields: {
    '1': {
      desc: 'Type ',
    },
    '2': {
      rep: 10,
    },
    '3': {
      rep: 20,
    },
    '4': {
      rep: 2,
    },
  },
};
