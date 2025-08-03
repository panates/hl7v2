import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AUT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Authorization Information',
  fields: {
    '1': {
      opt: 'O',
      rep: 1,
      table: 72,
    },
    '2': {
      desc: 'Authorizing Payor, Company ID',
      opt: 'R',
      rep: 1,
      table: 285,
    },
    '3': {
      type: 'ST',
      desc: 'Authorizing Payor, Company Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Authorization Effective Date',
      opt: 'O',
      rep: 1,
    },
    '5': {
      desc: 'Authorization Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'EI',
      desc: 'Authorization Identifier',
      opt: 'C',
      rep: 1,
    },
    '7': {
      type: 'CP',
      desc: 'Reimbursement Limit',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CQ',
      desc: 'Requested Number of Treatments',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CQ',
      desc: 'Authorized Number of Treatments',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Process Date',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Requested Discipline(s)',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'CWE',
      desc: 'Authorized Discipline(s)',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
