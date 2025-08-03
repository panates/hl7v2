import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
      type: 'IS',
      opt: 'O',
      rep: 'infinite',
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
      desc: 'Value Amount and Code',
      opt: 'O',
      rep: 'infinite',
      len: 41,
    },
    '7': {
      type: 'OCD',
      desc: 'Occurrence Code and Date',
      opt: 'O',
      rep: 'infinite',
      len: 259,
    },
    '8': {
      type: 'OSP',
      opt: 'O',
      rep: 'infinite',
      len: 268,
    },
    '9': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 29,
    },
    '10': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
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
      rep: 'infinite',
      len: 23,
    },
    '13': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 4,
    },
    '14': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
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
      rep: 'infinite',
      len: 2,
    },
  },
};
