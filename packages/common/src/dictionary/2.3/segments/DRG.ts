import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diagnosis Related Group',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Diagnostic Related Group',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'TS',
      desc: 'DRG Assigned Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'ID',
      desc: 'DRG Approval Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 136,
    },
    '4': {
      type: 'IS',
      desc: 'DRG Grouper Review Code',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 56,
    },
    '5': {
      type: 'CE',
      desc: 'Outlier Type',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '6': {
      type: 'NM',
      desc: 'Outlier Days',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '7': {
      type: 'CP',
      desc: 'Outlier Cost',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '8': {
      type: 'IS',
      desc: 'DRG Payor',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 229,
    },
    '9': {
      type: 'CP',
      desc: 'Outlier Reimbursement',
      opt: 'O',
      rep: 1,
      len: 9,
    },
    '10': {
      type: 'ID',
      desc: 'Confidential Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
