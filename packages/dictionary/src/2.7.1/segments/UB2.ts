import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const UB2: DeepPartial<HL7SegmentDefinition> = {
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
      opt: 'O',
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
    },
    '7': {
      type: 'OCD',
      opt: 'O',
    },
    '8': {
      type: 'OSP',
      opt: 'O',
    },
    '9': {
      type: 'ST',
      opt: 'O',
      len: 29,
    },
    '10': {
      type: 'ST',
      opt: 'O',
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
      len: 23,
    },
    '13': {
      type: 'ST',
      opt: 'O',
      len: 4,
    },
    '14': {
      type: 'ST',
      opt: 'O',
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
      opt: 'O',
      len: 2,
    },
  },
};
