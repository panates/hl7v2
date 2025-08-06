import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Facility segment',
  fields: {
    '1': {
      desc: 'Facility ID-FAC',
      rep: 1,
      len: 20,
    },
    '3': {
      rep: 'infinite',
    },
    '7': {
      len: 200,
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
  },
};
