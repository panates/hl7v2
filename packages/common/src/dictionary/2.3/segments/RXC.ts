import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy component order segment',
  fields: {
    '4': {
      len: 60,
    },
    '5': {
      type: 'NM',
      desc: 'Component Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '6': {
      type: 'CE',
      desc: 'Component Strength Units',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
