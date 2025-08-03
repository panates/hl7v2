import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
      desc: 'Pathway ID',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'EI',
      desc: 'Pathway Instance ID',
      opt: 'R',
      rep: 1,
    },
    '4': {
      desc: 'Pathway Established Date/Time ',
      opt: 'R',
      rep: 1,
    },
    '5': {
      opt: 'O',
      rep: 1,
    },
    '6': {
      opt: 'C',
      rep: 1,
    },
    '7': {
      opt: 'C',
    },
  },
};
