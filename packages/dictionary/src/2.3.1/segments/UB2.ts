import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const UB2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'UB92 data segment',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '3': {
      type: 'IS',
      opt: 'O',
      rep: 7,
      len: 2,
      table: 43,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '6': {
      type: 'UVC',
      opt: 'O',
      rep: 12,
      len: 11,
    },
    '7': {
      type: 'OCD',
      opt: 'O',
      rep: 8,
      len: 11,
    },
    '8': {
      type: 'OSP',
      opt: 'O',
      rep: 2,
      len: 28,
    },
    '9': {
      type: 'ST',
      opt: 'O',
      rep: 2,
      len: 29,
    },
    '10': {
      type: 'ST',
      opt: 'O',
      rep: 2,
      len: 12,
    },
    '11': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '12': {
      type: 'ST',
      opt: 'O',
      rep: 3,
      len: 23,
    },
    '13': {
      type: 'ST',
      opt: 'O',
      rep: 23,
      len: 4,
    },
    '14': {
      type: 'ST',
      opt: 'O',
      rep: 5,
      len: 14,
    },
    '15': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 27,
    },
    '16': {
      type: 'ST',
      desc: 'UB92 Locator 78',
      opt: 'O',
      rep: 2,
      len: 2,
    },
  },
};
