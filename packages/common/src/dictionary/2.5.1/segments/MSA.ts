import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MSA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Message Acknowledgment',
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
      opt: 'O',
      rep: 1,
    },
    '6': {
      len: 250,
      table: 357,
    },
  },
};
