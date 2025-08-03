import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NTE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Notes and Comments',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 105,
    },
    '3': {
      desc: 'Comment',
      rep: 'infinite',
    },
    '4': {
      table: 364,
    },
  },
};
