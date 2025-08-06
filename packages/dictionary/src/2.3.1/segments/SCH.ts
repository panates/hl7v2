import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SCH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Schedule activity information segment',
  fields: {
    '1': {
      opt: 'O',
      len: 75,
    },
    '2': {
      len: 75,
    },
    '4': {
      len: 22,
    },
    '12': {
      rep: 'infinite',
    },
    '14': {
      rep: 'infinite',
    },
    '16': {
      rep: 'infinite',
    },
    '18': {
      rep: 'infinite',
    },
    '20': {
      desc: 'Entered by Person',
      rep: 'infinite',
    },
    '21': {
      desc: 'Entered by Phone Number',
    },
    '22': {
      desc: 'Entered by Location',
    },
  },
};
