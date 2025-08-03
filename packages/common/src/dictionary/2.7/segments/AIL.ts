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
      opt: 'C',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      type: 'PL',
      desc: 'Location Resource ID',
      opt: 'C',
    },
    '4': {
      desc: 'Location Type - AIL',
      opt: 'C',
      rep: 1,
      table: 305,
    },
    '5': {
      desc: 'Location Group',
      opt: 'O',
      rep: 1,
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
