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
    },
    '3': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 332,
    },
    '4': {
      opt: 'O',
      rep: 1,
    },
    '5': {
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Messages Received',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Messages Sent',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'NM',
      desc: 'Application control-level Errors',
      opt: 'O',
      rep: 1,
    },
  },
};
