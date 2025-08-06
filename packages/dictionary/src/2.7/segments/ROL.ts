import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Role',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Role Instance ID',
      opt: 'C',
      rep: 1,
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
      rep: 1,
      table: 443,
    },
    '4': {
      type: 'XCN',
      desc: 'Role Person',
      opt: 'R',
    },
    '5': {
      desc: 'Role Begin Date/Time',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Role End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Role Duration',
      opt: 'O',
      rep: 1,
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Provider Type',
      opt: 'O',
      rep: 'infinite',
    },
    '10': {
      opt: 'O',
      rep: 1,
      table: 406,
    },
    '11': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'XTN',
      desc: 'Phone ',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'XON',
      desc: 'Organization',
      opt: 'O',
      rep: 1,
    },
  },
};
