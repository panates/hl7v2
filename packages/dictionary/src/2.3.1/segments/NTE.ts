import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NTE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - NTE',
    },
    '2': {
      desc: 'Source of Comment',
    },
    '3': {
      type: 'FT',
      opt: 'O',
      len: 65536,
    },
    '4': {
      type: 'CE',
      desc: 'Comment Type',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
