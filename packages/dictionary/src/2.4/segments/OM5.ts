import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM5: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation Batteries (Sets',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
    },
    '2': {
      type: 'CE',
      rep: 'infinite',
      len: 250,
    },
    '3': {
      type: 'ST',
      desc: 'Observation ID Suffixes',
      rep: 1,
      len: 250,
    },
  },
};
