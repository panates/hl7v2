import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LCC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Charge Code',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
      len: 200,
    },
    '2': {
      type: 'CE',
      desc: 'Location Department',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 264,
    },
    '3': {
      type: 'CE',
      desc: 'Accommodation Type',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 129,
    },
    '4': {
      type: 'CE',
      desc: 'Charge Code',
      opt: 'R',
      rep: 'infinite',
      len: 250,
      table: 132,
    },
  },
};
