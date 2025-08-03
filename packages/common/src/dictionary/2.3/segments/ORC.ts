import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ORC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Common order segment',
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'EI',
      opt: 'O',
      rep: 'infinite',
      len: 22,
    },
    '3': {
      type: 'EI',
      opt: 'O',
      rep: 1,
      len: 22,
    },
    '4': {
      type: 'EI',
      opt: 'O',
      rep: 1,
      len: 22,
    },
    '5': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '6': {
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '7': {
      desc: 'Quantity/Timing',
      opt: 'R',
      rep: 1,
      len: 200,
    },
    '8': {
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      type: 'TS',
      desc: 'Date/Time of Transaction',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'XCN',
      opt: 'O',
      rep: 1,
      len: 120,
    },
    '11': {
      type: 'XCN',
      opt: 'O',
      rep: 1,
      len: 120,
    },
    '12': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
      len: 120,
    },
    '13': {
      type: 'PL',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '14': {
      type: 'TN',
      opt: 'O',
      rep: 2,
      len: 40,
    },
    '15': {
      desc: 'Order Effective Date/Time',
    },
    '19': {
      type: 'XCN',
      desc: 'Action By',
      len: 120,
    },
  },
};
