import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PD1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Additional Demographic',
  fields: {
    '1': {
      rep: 'infinite',
    },
    '3': {
      table: 204,
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
      type: 'CWE',
      desc: 'Publicity Code',
      len: 705,
    },
    '15': {
      type: 'CWE',
      len: 705,
    },
    '22': {
      type: 'DT',
      desc: 'Advance Directive Last Verified Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
