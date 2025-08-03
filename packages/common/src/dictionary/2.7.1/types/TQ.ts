import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TQ: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Timing Quantity',
  fields: {
    '1': {
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'RI',
      desc: 'Interval',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DTM',
      desc: 'Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'DTM',
      desc: 'End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Priority',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Condition',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Text',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Conjunction',
      opt: 'O',
      rep: 1,
      table: 472,
    },
    '10': {
      type: 'OSD',
      desc: 'Order Sequencing',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Occurrence Duration',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'NM',
      desc: 'Total Occurrences',
      opt: 'O',
      rep: 1,
    },
  },
};
