import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const RPT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Repeat Pattern',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Repeat Pattern Code',
      opt: 'R',
      rep: 1,
      len: 705,
      table: 335,
    },
    '2': {
      type: 'ID',
      desc: 'Calendar Alignment',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 527,
    },
    '3': {
      type: 'NM',
      desc: 'Phase Range Begin Value',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '4': {
      type: 'NM',
      desc: 'Phase Range End Value',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '5': {
      type: 'NM',
      desc: 'Period Quantity',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '6': {
      type: 'IS',
      desc: 'Period Units',
      opt: 'C',
      rep: 1,
      len: 10,
    },
    '7': {
      type: 'ID',
      desc: 'Institution Specified Time',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '8': {
      type: 'ID',
      desc: 'Event',
      opt: 'O',
      rep: 1,
      len: 6,
      table: 528,
    },
    '9': {
      type: 'NM',
      desc: 'Event Offset Quantity',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '10': {
      type: 'IS',
      desc: 'Event Offset Units',
      opt: 'C',
      rep: 1,
      len: 10,
    },
    '11': {
      type: 'GTS',
      desc: 'General Timing Specification',
      opt: 'O',
      rep: 1,
      len: 200,
    },
  },
};
