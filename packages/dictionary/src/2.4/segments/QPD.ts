import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QPD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Parameter Definition',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Message Query Name',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 471,
    },
    '2': {
      type: 'ST',
      desc: 'Query Tag',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '3': {
      type: 'VARIES',
      desc: 'User Parameters',
      opt: 'O',
      rep: 1,
      len: 256,
    },
  },
};
