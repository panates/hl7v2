import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM5: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation batteries (sets',
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
      opt: 'O',
      rep: 1,
    },
    '2': {
      desc: 'Test/Observations Included within an Ordered Test Battery',
      opt: 'O',
    },
    '3': {
      opt: 'O',
      len: 200,
    },
  },
};
