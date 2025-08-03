import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PRA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Practitioner Detail',
  fields: {
    '1': {
      opt: 'O',
      len: 250,
    },
    '2': {
      len: 250,
      table: 358,
    },
    '5': {
      table: 337,
    },
    '6': {
      table: 338,
    },
    '9': {
      type: 'CE',
      desc: 'Institution',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '10': {
      type: 'DT',
      desc: 'Date Left Practice',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '11': {
      type: 'CE',
      desc: 'Government Reimbursement Billing Eligibility',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 401,
    },
    '12': {
      type: 'SI',
      desc: 'Set ID - PRA',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
