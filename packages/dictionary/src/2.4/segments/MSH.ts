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
      len: 4,
    },
    '3': {
      type: 'HD',
      desc: 'Sending Application',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '4': {
      type: 'HD',
      desc: 'Sending Facility',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '5': {
      type: 'HD',
      desc: 'Receiving Application',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '6': {
      type: 'HD',
      desc: 'Receiving Facility',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '7': {
      type: 'TS',
      opt: 'R',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Security',
      opt: 'O',
      rep: 1,
      len: 40,
    },
    '9': {
      desc: 'Message Type',
      opt: 'R',
      rep: 1,
      len: 15,
    },
    '10': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '11': {
      type: 'PT',
      opt: 'R',
      rep: 1,
      len: 3,
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
      len: 15,
    },
    '14': {
      type: 'ST',
      desc: 'Continuation Pointer',
      opt: 'O',
      rep: 1,
      len: 180,
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
      table: 211,
    },
    '19': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '21': {
      type: 'ID',
      desc: 'Conformance Statement ID',
      opt: 'O',
      rep: 'infinite',
      len: 10,
      table: 449,
    },
  },
};
