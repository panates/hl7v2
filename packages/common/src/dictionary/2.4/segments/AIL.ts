import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Information - Location Resource',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - AIL',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action Code',
      opt: 'O',
      rep: 1,
      table: 206,
    },
    '3': {
      type: 'PL',
      desc: 'Location Resource ID',
      rep: 1,
      len: 80,
    },
    '4': {
      type: 'CE',
      rep: 1,
      len: 250,
    },
    '5': {
      type: 'CE',
      desc: 'Location Group',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'TS',
      desc: 'Start Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '7': {
      type: 'NM',
      desc: 'Start Date/Time Offset',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '8': {
      type: 'CE',
      desc: 'Start Date/Time Offset Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '9': {
      type: 'NM',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '10': {
      type: 'CE',
      desc: 'Duration Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '11': {
      type: 'IS',
      desc: 'Allow Substitution Code',
      opt: 'O',
      rep: 1,
      len: 10,
      table: 279,
    },
    '12': {
      type: 'CE',
      desc: 'Filler Status Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 278,
    },
  },
};
