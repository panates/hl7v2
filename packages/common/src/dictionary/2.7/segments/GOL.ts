import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GOL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Goal Detail',
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
      desc: 'Action Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Goal ID',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Goal Instance ID',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'EI',
      desc: 'Episode of Care ID',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Goal List Priority',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Goal Established Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Goal Classification',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Goal Management Discipline',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Current Goal Review Status',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Current Goal Review Date/Time',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Next Goal Review Date/Time',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Previous Goal Review Date/Time',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Goal Review Interval',
      opt: 'B',
      rep: 1,
    },
    '16': {
      desc: 'Goal Evaluation',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'ST',
      desc: 'Goal Evaluation Comment',
      opt: 'O',
      rep: 'infinite',
    },
    '18': {
      desc: 'Goal Life Cycle Status',
      opt: 'O',
      rep: 1,
    },
    '19': {
      desc: 'Goal Life Cycle Status Date/Time',
      opt: 'O',
      rep: 1,
    },
    '20': {
      desc: 'Goal Target Type',
      opt: 'O',
      rep: 'infinite',
    },
    '21': {
      type: 'XPN',
      desc: 'Goal Target Name',
      opt: 'O',
      rep: 'infinite',
    },
    '22': {
      desc: 'Mood Code  ',
      opt: 'C',
    },
  },
};
