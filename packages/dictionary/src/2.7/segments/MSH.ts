import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Message Header',
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Encoding Characters',
      opt: 'R',
      rep: 1,
      len: 5,
    },
    '3': {
      type: 'HD',
      desc: 'Sending Application',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
      desc: 'Sending Facility',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'HD',
      desc: 'Receiving Application',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'HD',
      desc: 'Receiving Facility',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Date/Time of Message',
      opt: 'R',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Security',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Message Type',
      opt: 'R',
      rep: 1,
    },
    '10': {
      type: 'ST',
      opt: 'R',
      rep: 1,
    },
    '11': {
      type: 'PT',
      opt: 'R',
      rep: 1,
    },
    '12': {
      opt: 'R',
      rep: 1,
    },
    '13': {
      type: 'NM',
      desc: 'Sequence Number',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'Continuation Pointer',
      opt: 'O',
      rep: 1,
    },
    '17': {
      desc: 'Country Code',
      len: 3,
      table: 399,
    },
    '18': {
      type: 'ID',
      desc: 'Character Set',
      opt: 'O',
      len: 15,
      table: 211,
    },
    '19': {
      opt: 'O',
      rep: 1,
    },
    '20': {
      len: 13,
    },
    '21': {
      opt: 'O',
      rep: 'infinite',
    },
  },
};
