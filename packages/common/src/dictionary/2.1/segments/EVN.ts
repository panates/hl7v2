import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EVN: HL7SegmentDefinition = {
  desc: 'Event type',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Event type code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 3,
    },
    '2': {
      type: 'TS',
      desc: 'Date/time of event',
      opt: 'R',
      rep: 1,
      len: 19,
    },
    '3': {
      type: 'TS',
      desc: 'Date/time planned event',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '4': {
      type: 'ID',
      desc: 'Event reason code',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 62,
    },
  },
};
