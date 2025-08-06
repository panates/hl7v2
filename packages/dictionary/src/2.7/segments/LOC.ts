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
    },
    '3': {
      type: 'CWE',
      opt: 'R',
      rep: 'infinite',
      table: 260,
    },
    '4': {
      type: 'XON',
      opt: 'O',
    },
    '5': {
      type: 'XAD',
      desc: 'Location Address',
      opt: 'O',
    },
    '6': {
      type: 'XTN',
      desc: 'Location Phone',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      desc: 'License Number',
      opt: 'O',
      rep: 'infinite',
      table: 461,
    },
    '8': {
      type: 'CWE',
      desc: 'Location Equipment',
      opt: 'O',
      rep: 'infinite',
      table: 261,
    },
    '9': {
      type: 'CWE',
      desc: 'Location Service Code',
      opt: 'O',
      rep: 1,
      table: 442,
    },
  },
};
