import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PD1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Additional Demographic',
  fields: {
    '1': {
      rep: 'infinite',
    },
    '6': {
      table: 295,
    },
    '9': {
      len: 1,
    },
    '10': {
      len: 20,
    },
    '11': {
      desc: 'Publicity Code',
      len: 80,
    },
  },
};
