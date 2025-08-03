import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      desc: 'RX Component Type',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 166,
    },
    '2': {
      type: 'CWE',
      desc: 'Component Code',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Component Amount',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Component Units',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'CWE',
    },
    '7': {
      type: 'CWE',
    },
    '8': {
      type: 'NM',
      desc: 'Component Drug Strength Volume',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Component Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
    },
  },
};
