import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NST: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 1,
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
      table: 332,
    },
    '4': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
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
      desc: 'Application control-level Errors',
      opt: 'O',
      rep: 1,
      len: 10,
    },
  },
};
