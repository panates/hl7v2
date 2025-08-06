import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LCC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Charge Code',
  fields: {
    '1': {
      type: 'PL',
      desc: 'Primary Key Value',
      opt: 'R',
      rep: 1,
      len: 200,
    },
    '2': {
      type: 'IS',
      desc: 'Location Department',
      opt: 'R',
      rep: 1,
      len: 10,
      table: 264,
    },
    '3': {
      type: 'CE',
      desc: 'Accommodation Type',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '4': {
      type: 'CE',
      desc: 'Charge Code',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
  },
};
