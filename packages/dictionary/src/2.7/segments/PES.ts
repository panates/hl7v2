import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PES: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Product Experience Sender',
  fields: {
    '1': {
      type: 'XON',
      desc: 'Sender Organization Name',
      opt: 'O',
    },
    '2': {
      type: 'XCN',
      desc: 'Sender Individual Name',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'XAD',
      desc: 'Sender Address',
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      type: 'XTN',
      desc: 'Sender Telephone',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'EI',
      desc: 'Sender Event Identifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Sender Sequence Number',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'FT',
      desc: 'Sender Event Description',
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      type: 'FT',
      desc: 'Sender Comment',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Sender Aware Date/Time',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Event Report Date',
      opt: 'R',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Event Report Timing/Type',
      opt: 'O',
      rep: 2,
      len: 3,
      table: 234,
    },
    '12': {
      type: 'ID',
      desc: 'Event Report Source',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 235,
    },
    '13': {
      type: 'ID',
      desc: 'Event Reported To',
      opt: 'O',
      rep: 'infinite',
      len: 1,
      table: 236,
    },
  },
};
