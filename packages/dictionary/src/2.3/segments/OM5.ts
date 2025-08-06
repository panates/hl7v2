import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM5: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Test/Observations Included w/an Ordered Test Battery',
      rep: 'infinite',
      len: 200,
    },
    '3': {
      type: 'ST',
      desc: 'Observation ID Suffixes',
      rep: 1,
    },
  },
};
