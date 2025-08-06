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
    '6': {
      table: 295,
    },
    '9': {
      len: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Publicity Code',
    },
    '15': {
      type: 'CWE',
    },
    '22': {
      type: 'DT',
      desc: 'Advance Directive Last Verified Date',
      opt: 'O',
      rep: 1,
    },
  },
};
