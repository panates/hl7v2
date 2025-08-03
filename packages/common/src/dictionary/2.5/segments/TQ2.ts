import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const TQ2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Timing/Quantity Relationship',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - TQ2',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Sequence/Results Flag',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 503,
    },
    '3': {
      type: 'EI',
      desc: 'Related Placer Number',
      opt: 'O',
      rep: 'infinite',
      len: 22,
    },
    '4': {
      type: 'EI',
      desc: 'Related Filler Number',
      opt: 'O',
      rep: 'infinite',
      len: 22,
    },
    '5': {
      type: 'EI',
      desc: 'Related Placer Group Number',
      opt: 'O',
      rep: 'infinite',
      len: 22,
    },
    '6': {
      type: 'ID',
      desc: 'Sequence Condition Code',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 504,
    },
    '7': {
      type: 'ID',
      desc: 'Cyclic Entry/Exit Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 505,
    },
    '8': {
      type: 'CQ',
      desc: 'Sequence Condition Time Interval',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '9': {
      type: 'NM',
      desc: 'Cyclic Group Maximum Number of Repeats',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '10': {
      type: 'ID',
      desc: 'Special Service Request Relationship',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 506,
    },
  },
};
