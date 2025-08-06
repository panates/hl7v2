import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PTH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pathway',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Action Code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 287,
    },
    '2': {
      type: 'CE',
      desc: 'Pathway ID',
      opt: 'R',
      rep: 1,
      len: 80,
    },
    '3': {
      type: 'EI',
      desc: 'Pathway Instance ID',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'TS',
      desc: 'Pathway Established Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'CE',
      desc: 'Pathway Lifecycle Status',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '6': {
      type: 'TS',
      desc: 'Change Pathway Lifecycle Status Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
