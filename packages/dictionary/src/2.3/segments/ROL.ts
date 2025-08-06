import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Role',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Role Instance ID',
      opt: 'R',
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
      desc: 'Role',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'XCN',
      desc: 'Role Person',
      opt: 'R',
      rep: 1,
      len: 80,
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
      len: 80,
    },
    '8': {
      type: 'CE',
      desc: 'Role Action',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};
