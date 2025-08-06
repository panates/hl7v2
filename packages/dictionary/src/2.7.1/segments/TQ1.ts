import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TQ1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Timing/Quantity',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - TQ1',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CQ',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'RPT',
      desc: 'Repeat Pattern',
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      type: 'TM',
      desc: 'Explicit Time',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'CQ',
      desc: 'Relative Time and Units',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'CQ',
      desc: 'Service Duration',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      desc: 'Start date/time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DTM',
      desc: 'End date/time',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Priority',
      opt: 'O',
      rep: 'infinite',
      table: 485,
    },
    '10': {
      type: 'TX',
      desc: 'Condition text',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'TX',
      desc: 'Text instruction',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Conjunction',
      rep: 1,
    },
    '13': {
      type: 'CQ',
      desc: 'Occurrence duration',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
  },
};
