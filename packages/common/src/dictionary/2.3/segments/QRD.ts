import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query definition segment',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Query Date/Time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 106,
    },
    '3': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 91,
    },
    '4': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 10,
    },
    '5': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 107,
    },
    '6': {
      type: 'TS',
      desc: 'Deferred Response Date/Time',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CQ',
      opt: 'R',
      rep: 1,
    },
    '8': {
      type: 'XCN',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
    '9': {
      type: 'CE',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
    '10': {
      type: 'CE',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
    '11': {
      desc: 'What Data Code Value Qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '12': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 108,
    },
  },
};
