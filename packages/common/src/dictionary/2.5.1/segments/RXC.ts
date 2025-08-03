import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Component Order',
  fields: {
    '2': {
      len: 250,
    },
    '4': {
      len: 250,
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
      len: 250,
    },
    '7': {
      type: 'CE',
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
  },
};
