import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LCC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Charge Code',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Location Department',
      opt: 'R',
      rep: 1,
      table: 264,
    },
    '3': {
      desc: 'Accommodation Type',
      opt: 'O',
      rep: 'infinite',
      table: 129,
    },
    '4': {
      desc: 'Charge Code',
      opt: 'R',
      rep: 'infinite',
      table: 132,
    },
  },
};
