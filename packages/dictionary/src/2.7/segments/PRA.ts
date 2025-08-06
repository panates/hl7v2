import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Practitioner Detail',
  fields: {
    '1': {
      opt: 'C',
    },
    '2': {
      table: 358,
    },
    '3': {
      type: 'CWE',
    },
    '5': {
      table: 337,
    },
    '6': {
      table: 338,
    },
    '9': {
      desc: 'Institution ',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'DT',
      desc: 'Date Left Practice',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Government Reimbursement Billing Eligibility',
      opt: 'O',
      rep: 'infinite',
      table: 401,
    },
    '12': {
      type: 'SI',
      desc: 'Set ID - PRA',
      opt: 'C',
      rep: 1,
      len: 4,
    },
  },
};
