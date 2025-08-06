import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BTS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Batch Trailer',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '3': {
      type: 'NM',
      opt: 'O',
      len: 100,
    },
  },
};
