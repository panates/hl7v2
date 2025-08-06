import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NST: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Statistics',
  fields: {
    '1': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 125,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '3': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '4': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '7': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '8': {
      type: 'NM',
      desc: 'Messages Received',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '9': {
      type: 'NM',
      desc: 'Messages Sent',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '10': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '11': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '12': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '13': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '14': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '15': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 10,
    },
  },
};
