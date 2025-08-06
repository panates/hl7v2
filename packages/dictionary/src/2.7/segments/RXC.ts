import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Component Order',
  fields: {
    '5': {
      type: 'NM',
      desc: 'Component Strength',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Component Strength Units',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
