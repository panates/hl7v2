import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AIG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Information - General Resource',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - AIG',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action Code',
      opt: 'C',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      desc: 'Resource ID',
      opt: 'C',
      rep: 1,
    },
    '4': {
      desc: 'Resource Type',
      opt: 'R',
      rep: 1,
    },
    '5': {
      desc: 'Resource Group',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'NM',
      desc: 'Resource Quantity',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Resource Quantity Units',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Start Date/Time',
      opt: 'C',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Start Date/Time Offset',
      opt: 'C',
      rep: 1,
    },
    '10': {
      desc: 'Start Date/Time Offset Units',
      opt: 'C',
      rep: 1,
    },
    '11': {
      type: 'NM',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Duration Units',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'Allow Substitution Code',
      opt: 'C',
      rep: 1,
      table: 279,
    },
    '14': {
      desc: 'Filler Status Code',
      opt: 'C',
      rep: 1,
      table: 278,
    },
  },
};
