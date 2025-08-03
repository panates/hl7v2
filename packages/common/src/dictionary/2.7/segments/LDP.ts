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
      desc: 'Location Department',
      opt: 'R',
      rep: 1,
      table: 264,
    },
    '3': {
      type: 'CWE',
      desc: 'Location Service',
      opt: 'O',
      rep: 'infinite',
      table: 69,
    },
    '4': {
      opt: 'O',
      rep: 'infinite',
      table: 265,
    },
    '5': {
      type: 'CWE',
      desc: 'Valid Patient Classes',
      opt: 'O',
      rep: 'infinite',
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
      desc: 'Activation Date - LDP',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Inactivation Date - LDP',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Inactivated Reason',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'VH',
      desc: 'Visiting Hours',
      opt: 'O',
      rep: 'infinite',
      table: 267,
    },
    '11': {
      type: 'XTN',
      desc: 'Contact Phone',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Location Cost Center',
      opt: 'O',
      rep: 1,
      table: 462,
    },
  },
};
