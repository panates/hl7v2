import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM6: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observations that are calculated from other obersvations',
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
      type: 'TX',
      desc: 'Derivation Rule',
      opt: 'O',
      rep: 1,
      len: 10240,
    },
  },
};
