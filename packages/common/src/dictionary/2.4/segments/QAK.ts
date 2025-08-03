import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QAK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Acknowledgment',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 208,
    },
    '3': {
      type: 'CE',
      desc: 'Message Query Name',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '4': {
      type: 'NM',
      desc: 'Hit Count Total',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '5': {
      type: 'NM',
      desc: 'This payload',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '6': {
      type: 'NM',
      desc: 'Hits remaining',
      opt: 'O',
      rep: 1,
      len: 10,
    },
  },
};
