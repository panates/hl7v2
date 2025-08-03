import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NTE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Notes and comments segment',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 8,
      table: 105,
    },
    '3': {
      desc: 'Comment',
      rep: 'infinite',
    },
  },
};
