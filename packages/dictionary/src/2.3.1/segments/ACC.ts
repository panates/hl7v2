import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Accident segment',
  fields: {
    '1': {
      len: 26,
    },
    '2': {
      type: 'CE',
      len: 60,
    },
    '5': {
      len: 1,
    },
    '6': {
      len: 12,
    },
  },
};
