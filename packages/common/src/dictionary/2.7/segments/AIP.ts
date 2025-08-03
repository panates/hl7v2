import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Information - Personnel Resource',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - AIP',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action code',
      opt: 'C',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      type: 'XCN',
      desc: 'Personnel Resource ID',
      opt: 'C',
    },
    '4': {
      opt: 'C',
      rep: 1,
      table: 182,
    },
    '5': {
      desc: 'Resource Group',
      opt: 'O',
    },
    '6': {
      desc: 'Start Date/Time',
      opt: 'C',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Start Date/Time Offset',
      opt: 'C',
      rep: 1,
    },
    '8': {
      desc: 'Start Date/Time Offset Units',
      opt: 'C',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Duration Units',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Allow Substitution Code',
      opt: 'C',
      rep: 1,
      table: 279,
    },
    '12': {
      desc: 'Filler Status Code',
      opt: 'C',
      rep: 1,
      table: 278,
    },
  },
};
