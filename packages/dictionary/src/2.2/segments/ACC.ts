import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Accident date / time',
      len: 26,
    },
  },
};
