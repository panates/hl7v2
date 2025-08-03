import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const VTQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Virtual Table Query Request',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Query tag',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      desc: 'Query/ Response Format Code',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 106,
    },
    '3': {
      type: 'CE',
      desc: 'VT Query Name',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'CE',
      desc: 'Virtual Table Name',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'QSC',
      desc: 'Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
