import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event Type',
  fields: {
    '1': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '2': {
      desc: 'Recorded Date/Time ',
      rep: 1,
    },
    '3': {
      desc: 'Date/Time Planned Event',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 62,
    },
    '5': {
      table: 188,
    },
    '6': {
      desc: 'Event Occurred',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'HD',
      desc: 'Event Facility',
      opt: 'O',
      rep: 1,
    },
  },
};
