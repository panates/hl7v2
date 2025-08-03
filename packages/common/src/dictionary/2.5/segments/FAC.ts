import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FAC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Facility ID-FAC',
      rep: 1,
      len: 20,
    },
    '3': {
      rep: 'infinite',
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
  },
};
