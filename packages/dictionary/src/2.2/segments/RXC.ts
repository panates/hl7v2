import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy component order',
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
      type: 'CE',
      desc: 'Component Code',
      opt: 'R',
      rep: 1,
      len: 100,
    },
    '3': {
      type: 'NM',
      desc: 'Component Amount',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '4': {
      type: 'CE',
      desc: 'Component Units',
      opt: 'R',
      rep: 1,
      len: 20,
    },
  },
};
