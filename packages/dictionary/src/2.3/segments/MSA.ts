import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Message acknowledgement segment',
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 8,
    },
    '2': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '4': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '5': {
      type: 'ID',
      desc: 'Delayed Acknowledgement Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 102,
    },
  },
};
