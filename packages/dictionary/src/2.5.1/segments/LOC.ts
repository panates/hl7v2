import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LOC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Identification',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Location Description',
      opt: 'O',
      rep: 1,
      len: 48,
    },
    '3': {
      type: 'IS',
      opt: 'R',
      rep: 'infinite',
      len: 2,
      table: 260,
    },
    '4': {
      type: 'XON',
      opt: 'O',
      len: 250,
    },
    '5': {
      type: 'XAD',
      desc: 'Location Address',
      opt: 'O',
      len: 250,
    },
    '6': {
      type: 'XTN',
      desc: 'Location Phone',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '7': {
      type: 'CE',
      desc: 'License Number',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 461,
    },
    '8': {
      desc: 'Location Equipment',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 261,
    },
    '9': {
      type: 'IS',
      desc: 'Location Service Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 442,
    },
  },
};
