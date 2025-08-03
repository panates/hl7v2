import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM0: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Master',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'EI',
      desc: 'Sponsor Study ID',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '3': {
      desc: 'Alternate Study ID',
      opt: 'O',
      rep: 3,
      len: 60,
    },
    '4': {
      type: 'ST',
      desc: 'Title of Study',
      opt: 'R',
      rep: 1,
      len: 300,
    },
    '5': {
      type: 'XCN',
      desc: 'Chairman of Study',
      opt: 'O',
      len: 250,
    },
    '6': {
      type: 'DT',
      desc: 'Last IRB Approval Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '7': {
      type: 'NM',
      desc: 'Total Accrual to Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '8': {
      type: 'DT',
      desc: 'Last Accrual Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '9': {
      type: 'XCN',
      desc: 'Contact for Study',
      opt: 'O',
      len: 250,
    },
    '10': {
      type: 'XTN',
      desc: "Contact's Telephone Number",
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '11': {
      type: 'XAD',
      desc: "Contact's Address",
      opt: 'O',
      len: 250,
    },
  },
};
