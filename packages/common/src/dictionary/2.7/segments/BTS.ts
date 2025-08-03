import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BTS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Batch Trailer',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      opt: 'O',
    },
  },
};
