import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TQ: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Timing Quantity',
  fields: {
    '1': {
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
      len: 267,
    },
    '2': {
      type: 'RI',
      desc: 'Interval',
      opt: 'O',
      rep: 1,
      len: 206,
    },
    '3': {
      type: 'ST',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '4': {
      type: 'DTM',
      desc: 'Start Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '5': {
      type: 'DTM',
      desc: 'End Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '6': {
      desc: 'Priority',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '7': {
      type: 'ST',
      desc: 'Condition',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '8': {
      desc: 'Text',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      desc: 'Conjunction',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 472,
    },
    '10': {
      type: 'OSD',
      desc: 'Order Sequencing',
      opt: 'O',
      rep: 1,
      len: 110,
    },
    '11': {
      type: 'CWE',
      desc: 'Occurrence Duration',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '12': {
      type: 'NM',
      desc: 'Total Occurrences',
      opt: 'O',
      rep: 1,
      len: 4,
    },
  },
};
