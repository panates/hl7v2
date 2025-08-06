import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Message Acknowledgment',
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 8,
    },
    '2': {
      type: 'ST',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '4': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '6': {
      type: 'ST',
      opt: 'B',
    },
    '7': {
      desc: 'Message Waiting Number ',
    },
    '8': {
      desc: ' Message Waiting Priority ',
    },
  },
};
