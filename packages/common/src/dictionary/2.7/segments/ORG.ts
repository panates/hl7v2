import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ORG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Practitioner Organization Unit s',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - ORG',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Organization Unit Code',
      opt: 'O',
      rep: 1,
      table: 405,
    },
    '3': {
      opt: 'O',
      rep: 1,
      table: 474,
    },
    '4': {
      type: 'ID',
      desc: 'Primary Org Unit Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      type: 'CX',
      desc: 'Practitioner Org Unit Identifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Health Care Provider Type Code',
      opt: 'O',
      rep: 1,
      table: 452,
    },
    '7': {
      desc: 'Health Care Provider Classification Code',
      opt: 'O',
      rep: 1,
      table: 453,
    },
    '8': {
      desc: 'Health Care Provider Area of Specialization Code',
      opt: 'O',
      rep: 1,
      table: 454,
    },
    '9': {
      type: 'DR',
      desc: 'Effective Date Range',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Employment Status Code',
      opt: 'O',
      rep: 1,
      table: 66,
    },
    '11': {
      type: 'ID',
      desc: 'Board Approval Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '12': {
      type: 'ID',
      desc: 'Primary Care Physician Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '13': {
      type: 'CWE',
      desc: 'Cost Center Code',
      opt: 'O',
      rep: 'infinite',
      table: 539,
    },
  },
};
