import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AUT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Authorization Information',
  fields: {
    '1': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 72,
    },
    '2': {
      type: 'CE',
      desc: 'Authorizing Payor, Company ID',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 285,
    },
    '3': {
      type: 'ST',
      desc: 'Authorizing Payor, Company Name',
      opt: 'O',
      rep: 1,
      len: 45,
    },
    '4': {
      type: 'TS',
      desc: 'Authorization Effective Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'TS',
      desc: 'Authorization Expiration Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '6': {
      type: 'EI',
      desc: 'Authorization Identifier',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '7': {
      type: 'CP',
      desc: 'Reimbursement Limit',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '8': {
      type: 'NM',
      desc: 'Requested Number of Treatments',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '9': {
      type: 'NM',
      desc: 'Authorized Number of Treatments',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '10': {
      type: 'TS',
      desc: 'Process Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
