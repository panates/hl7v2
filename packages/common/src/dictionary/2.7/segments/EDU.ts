import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EDU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Educational Detail',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - EDU',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      desc: 'Academic Degree',
      opt: 'O',
      rep: 1,
      table: 360,
    },
    '3': {
      type: 'DR',
      desc: 'Academic Degree Program Date Range',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DR',
      desc: 'Academic Degree Program Participation Date Range',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'DT',
      desc: 'Academic Degree Granted Date',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'XON',
      desc: 'School',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'School Type Code',
      opt: 'O',
      rep: 1,
      table: 402,
    },
    '8': {
      type: 'XAD',
      desc: 'School Address',
      opt: 'O',
      rep: 1,
    },
  },
};
