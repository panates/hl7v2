import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Information - Service',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - AIS',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action Code',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 206,
    },
    '3': {
      type: 'CE',
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'TS',
      desc: 'Start Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'NM',
      desc: 'Start Date/Time Offset',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '6': {
      type: 'CE',
      desc: 'Start Date/Time Offset Units',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '7': {
      type: 'NM',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '8': {
      type: 'CE',
      desc: 'Duration Units',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      type: 'IS',
      desc: 'Allow Substitution Code',
      opt: 'O',
      rep: 1,
      len: 10,
      table: 279,
    },
    '10': {
      type: 'CE',
      desc: 'Filler Status Code',
      opt: 'O',
      rep: 1,
      len: 200,
      table: 278,
    },
  },
};
