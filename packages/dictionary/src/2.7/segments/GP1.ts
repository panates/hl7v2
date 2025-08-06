import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GP1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Grouping/Reimbursement - Visit',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Type of Bill Code',
      opt: 'R',
      rep: 1,
      table: 455,
    },
    '2': {
      type: 'CWE',
      desc: 'Revenue Code',
      opt: 'O',
      rep: 'infinite',
      table: 456,
    },
    '3': {
      type: 'CWE',
      desc: 'Overall Claim Disposition Code',
      opt: 'O',
      rep: 1,
      table: 457,
    },
    '4': {
      type: 'CWE',
      desc: 'OCE Edits per Visit Code',
      opt: 'O',
      rep: 'infinite',
      table: 458,
    },
    '5': {
      type: 'CP',
      desc: 'Outlier Cost',
      opt: 'O',
      rep: 1,
    },
  },
};
