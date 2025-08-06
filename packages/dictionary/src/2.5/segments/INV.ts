import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const INV: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '19': {
      type: 'CQ',
      desc: 'On Board Stability Time',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '20': {
      type: 'CQ',
      desc: 'Target Value',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
