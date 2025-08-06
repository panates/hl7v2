import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GP2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Grouping/Reimbursement - Procedure Line Item',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Revenue Code',
      opt: 'O',
      rep: 1,
      table: 456,
    },
    '2': {
      type: 'NM',
      desc: 'Number of Service Units',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CP',
      desc: 'Charge',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Reimbursement Action Code',
      opt: 'O',
      rep: 1,
      table: 459,
    },
    '5': {
      type: 'CWE',
      desc: 'Denial or Rejection Code',
      opt: 'O',
      rep: 1,
      table: 460,
    },
    '6': {
      type: 'CWE',
      desc: 'OCE Edit Code',
      opt: 'O',
      rep: 'infinite',
      table: 458,
    },
    '7': {
      desc: 'Ambulatory Payment Classification Code ',
      opt: 'O',
      rep: 1,
      table: 466,
    },
    '8': {
      type: 'CWE',
      desc: 'Modifier Edit Code',
      opt: 'O',
      rep: 'infinite',
      table: 467,
    },
    '9': {
      type: 'CWE',
      desc: 'Payment Adjustment Code',
      opt: 'O',
      rep: 1,
      table: 468,
    },
    '10': {
      type: 'CWE',
      desc: 'Packaging Status Code',
      opt: 'O',
      rep: 1,
      table: 469,
    },
    '11': {
      type: 'CP',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'CWE',
      desc: 'Reimbursement Type Code',
      opt: 'O',
      rep: 1,
      table: 470,
    },
    '13': {
      type: 'CP',
      desc: 'Co-Pay Amount',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
  },
};
