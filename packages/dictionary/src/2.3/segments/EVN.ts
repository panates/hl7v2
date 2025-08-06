import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event type',
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 3,
    },
    '2': {
      type: 'TS',
      desc: 'Recorded Date/Time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'Date/Time Planned Event',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 62,
    },
    '5': {
      type: 'CN',
      len: 60,
    },
    '6': {
      type: 'TS',
      desc: 'Event Occurred',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
