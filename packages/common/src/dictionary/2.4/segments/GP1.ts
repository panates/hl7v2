import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GP1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Grouping/Reimbursement - Visit',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Type of Bill Code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 455,
    },
    '2': {
      type: 'IS',
      desc: 'Revenue Code',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 456,
    },
    '3': {
      type: 'IS',
      desc: 'Overall Claim Disposition Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 457,
    },
    '4': {
      type: 'IS',
      desc: 'OCE Edits per Visit Code',
      opt: 'O',
      rep: 'infinite',
      len: 2,
      table: 458,
    },
    '5': {
      type: 'CP',
      desc: 'Outlier Cost',
      opt: 'O',
      rep: 1,
      len: 12,
    },
  },
};
