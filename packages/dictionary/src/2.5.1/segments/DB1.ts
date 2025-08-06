import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Disability',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - DB1',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '3': {
      type: 'CX',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '4': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '6': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '7': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '8': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
