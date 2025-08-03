import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIS: DeepPartial<HL7SegmentDefinition> = {
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
      opt: 'C',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
    },
    '4': {
      desc: 'Start Date/Time',
      opt: 'C',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Start Date/Time Offset',
      opt: 'C',
      rep: 1,
    },
    '6': {
      desc: 'Start Date/Time Offset Units',
      opt: 'C',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Duration Units',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Allow Substitution Code',
      opt: 'C',
      rep: 1,
      table: 279,
    },
    '10': {
      desc: 'Filler Status Code',
      opt: 'C',
      rep: 1,
      table: 278,
    },
    '11': {
      desc: 'Placer Supplemental Service Information',
      opt: 'O',
      rep: 'infinite',
      table: 411,
    },
    '12': {
      desc: 'Filler Supplemental Service Information',
      opt: 'O',
      rep: 'infinite',
      table: 411,
    },
  },
};
