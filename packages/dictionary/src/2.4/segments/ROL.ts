import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Role',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Role Instance ID',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'ID',
      desc: 'Action Code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 287,
    },
    '3': {
      type: 'CE',
      rep: 1,
      len: 250,
      table: 443,
    },
    '4': {
      type: 'XCN',
      desc: 'Role Person',
      opt: 'R',
      len: 250,
    },
    '5': {
      type: 'TS',
      desc: 'Role Begin Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '6': {
      type: 'TS',
      desc: 'Role End Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '7': {
      type: 'CE',
      desc: 'Role Duration',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '8': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '9': {
      type: 'CE',
      desc: 'Provider Type',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '10': {
      type: 'CE',
      desc: 'Organization Unit Type - ROL',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 406,
    },
    '11': {
      type: 'XAD',
      desc: 'Office/Home Address',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '12': {
      type: 'XTN',
      desc: 'Phone',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
  },
};
