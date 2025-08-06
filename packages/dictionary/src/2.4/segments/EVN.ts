import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event Type',
  fields: {
    '1': {
      type: 'ID',
      rep: 1,
      len: 3,
      table: 3,
    },
    '2': {
      type: 'TS',
      desc: 'Recorded Date/Time',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'Date/Time Planned Event',
      opt: 'O',
      rep: 1,
    },
    '4': {
      opt: 'O',
      rep: 1,
      len: 3,
      table: 62,
    },
    '5': {
      len: 250,
      table: 188,
    },
    '6': {
      type: 'TS',
      desc: 'Event Occurred',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '7': {
      type: 'HD',
      desc: 'Event Facility',
      opt: 'O',
      rep: 1,
      len: 180,
    },
  },
};
