import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
    },
    '3': {
      desc: 'Alternate Study ID',
      opt: 'O',
      rep: 3,
    },
    '4': {
      type: 'ST',
      desc: 'Title of Study',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'XCN',
      desc: 'Chairman of Study',
      opt: 'O',
    },
    '6': {
      type: 'DT',
      desc: 'Last IRB Approval Date',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Total Accrual to Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DT',
      desc: 'Last Accrual Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'XCN',
      desc: 'Contact for Study',
      opt: 'O',
    },
    '10': {
      type: 'XTN',
      desc: "Contact's Telephone Number",
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'XAD',
      desc: "Contact's Address",
      opt: 'O',
    },
  },
};
