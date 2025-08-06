import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Original-Style Query Definition',
  fields: {
    '1': {
      desc: 'Query Date/Time',
      rep: 1,
    },
    '2': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      table: 106,
    },
    '3': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      table: 91,
    },
    '4': {
      type: 'ST',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 107,
    },
    '6': {
      desc: 'Deferred Response Date/Time',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CQ',
      opt: 'R',
      rep: 1,
      table: 126,
    },
    '8': {
      type: 'XCN',
      opt: 'R',
      rep: 'infinite',
    },
    '9': {
      opt: 'R',
      rep: 'infinite',
      table: 48,
    },
    '10': {
      opt: 'R',
      rep: 'infinite',
    },
    '11': {
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 108,
    },
  },
};
