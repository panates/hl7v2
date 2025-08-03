import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PD1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Additional Demographic',
  fields: {
    '1': {
      rep: 'infinite',
    },
    '4': {
      desc: 'Patient Primary Care Provider Name and ID No.',
    },
    '6': {
      table: 295,
    },
    '9': {
      len: 1,
    },
    '11': {
      desc: 'Publicity Code',
    },
  },
};
