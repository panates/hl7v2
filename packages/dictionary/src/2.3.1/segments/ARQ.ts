import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ARQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment request segment',
  fields: {
    '4': {
      len: 22,
    },
    '12': {
      desc: 'Priority-ARQ',
    },
    '15': {
      rep: 'infinite',
    },
    '17': {
      rep: 'infinite',
    },
    '19': {
      desc: 'Entered by Person',
      rep: 'infinite',
    },
    '20': {
      desc: 'Entered by Phone Number',
    },
    '21': {
      desc: 'Entered by Location',
    },
  },
};
