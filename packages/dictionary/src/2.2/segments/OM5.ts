import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM5: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation batteries',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment Type ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'CE',
      desc: 'Tests / observations included within an ordered test battery',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '4': {
      type: 'ST',
      desc: 'Observation ID Suffixes',
      opt: 'O',
      rep: 1,
      len: 200,
    },
  },
};
