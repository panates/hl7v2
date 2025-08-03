import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diagnosis Related Group',
  fields: {
    '1': {
      desc: 'Diagnostic Related Group ',
      opt: 'O',
      rep: 1,
      table: 55,
    },
    '2': {
      desc: 'DRG Assigned Date/Time ',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'DRG Approval Indicator ',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '4': {
      type: 'CWE',
      desc: 'DRG Grouper Review Code',
      opt: 'O',
      rep: 1,
      table: 56,
    },
    '5': {
      desc: 'Outlier Type ',
      opt: 'O',
      rep: 1,
      table: 83,
    },
    '6': {
      type: 'NM',
      desc: 'Outlier Days ',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CP',
      desc: 'Outlier Cost',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'DRG Payor',
      opt: 'O',
      rep: 1,
      table: 229,
    },
    '9': {
      type: 'CP',
      desc: 'Outlier Reimbursement',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ID',
      desc: 'Confidential Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '11': {
      type: 'CWE',
      desc: 'DRG Transfer Type',
      opt: 'O',
      rep: 1,
      table: 415,
    },
    '17': {
      type: 'CWE',
    },
    '18': {
      desc: 'Grouper Software Name ',
    },
    '20': {
      type: 'CWE',
    },
    '26': {
      type: 'CWE',
    },
    '27': {
      type: 'CWE',
    },
    '28': {
      type: 'CWE',
    },
    '29': {
      type: 'CWE',
    },
    '30': {
      type: 'CWE',
    },
    '31': {
      type: 'CWE',
    },
    '32': {
      type: 'CWE',
    },
    '33': {
      type: 'CWE',
    },
  },
};
