import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LDP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Department',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Location Department',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 264,
    },
    '3': {
      type: 'IS',
      desc: 'Location Service',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 69,
    },
    '4': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 265,
    },
    '5': {
      desc: 'Valid Patient Classes',
      opt: 'O',
      rep: 'infinite',
      len: 1,
      table: 4,
    },
    '6': {
      type: 'ID',
      desc: 'Active/Inactive Flag',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 183,
    },
    '7': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'TS',
      desc: 'Inactivation Date - LDP',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Inactivated Reason',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '10': {
      type: 'VH',
      desc: 'Visiting Hours',
      opt: 'O',
      rep: 'infinite',
      len: 80,
      table: 267,
    },
    '11': {
      type: 'XTN',
      desc: 'Contact Phone',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '12': {
      type: 'CE',
      desc: 'Location Cost Center',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 462,
    },
  },
};
