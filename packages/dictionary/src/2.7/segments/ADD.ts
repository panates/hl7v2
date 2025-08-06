import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ADD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Addendum',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
  },
};
