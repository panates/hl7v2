import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM5: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation Batteries (Sets)',
  fields: {
    '1': {
      type: 'NM',
    },
    '2': {
      desc: 'Test/Observations Included Within an Ordered Test Battery',
      rep: 'infinite',
    },
    '3': {
      type: 'ST',
      desc: 'Observation ID Suffixes',
      rep: 1,
    },
  },
};
